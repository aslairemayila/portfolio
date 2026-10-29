---
lang: fr
order: 6
title: Pipeline Big Data - Valeur des joueurs UEFA Champions League
publishDate: 2026-06-15 00:00:00
img: /assets/bigdata-ucl.png
img_alt: Dashboard Kibana comparant valeur marchande et performance des joueurs UCL
description: |
  Pipeline hybride batch + streaming (Airflow, Spark, Kafka, Elasticsearch, Kibana) analysant si les joueurs les plus chers de la Ligue des Champions sont vraiment les plus performants.
tags:
  - Big Data
  - Kafka
  - Airflow
  - Elasticsearch
  - Machine Learning
  - Docker
---

## Contexte

Projet Big Data de 4e année à l'ISEP, réalisé en binôme.

**La question :** un joueur cher marque-t-il vraiment plus de buts, ou le marché paie-t-il surtout une marque ?

## Architecture

Deux flux parallèles qui aboutissent dans Elasticsearch puis Kibana, le tout déployé avec **Docker Compose**.

**Pipeline batch** (orchestré par Airflow toutes les 20 min) :
1. **Extract** : appels aux API football-data.org (100 meilleurs buteurs UCL) et Transfermarkt (valeurs marchandes).
2. **Format** : nettoyage et conversion en Parquet dans un datalake à 3 couches (Spark, avec un fallback pandas).
3. **Combine** : jointure et KPI métier (implication offensive, score d'efficacité, niveaux de performance, corrélation de Pearson).
4. **Machine Learning** : régression linéaire (scikit-learn) qui prédit la valeur théorique de chaque joueur.
5. **Index** dans Elasticsearch avec un mapping explicite.

![DAG Airflow du pipeline batch, toutes les tâches en succès](/assets/bigdata-airflow-dag.png)

**Pipeline streaming** (temps réel) :
- Un producer Kafka interroge l'API CoinGecko toutes les 30 s pour suivre le prix des 10 fan tokens crypto des clubs UCL (PSG, Barça, Juventus…).
- Un consumer indexe chaque tick dans Elasticsearch, pour un dashboard Kibana rafraîchi automatiquement.

![Messages du topic Kafka fan_tokens_prices dans Kafka UI](/assets/bigdata-kafka.png)

## Résultats

- **2 dashboards Kibana** (10+ visualisations chacun) : carte des ligues, treemap par club, heatmap âge × performance, scatter valeur réelle vs prédite, suivi live des fan tokens.

![Valeur réelle vs valeur prédite par le modèle de régression](/assets/bigdata-ml-scatter.png)

- **Corrélation valeur / buts : +0,32**, donc positive mais modérée.
- Le modèle repère des joueurs sous-évalués et surévalués. Exemple : un attaquant star valorisé 200 M€ pour une valeur prédite de 86 M€, ce qui montre que le marché paie la marque au-delà des stats.

## Difficultés et apprentissages

- PySpark plantait sous Windows / Python 3.14 : j'ai mis en place un fallback pandas produisant les mêmes fichiers Parquet.
- Windows Defender bloquait certaines DLL de Random Forest : j'ai basculé vers une régression linéaire, plus lisible.
- Le quota de l'API Transfermarkt était limité à 50 requêtes par mois.
- **Limites assumées :** petit échantillon (45 joueurs valorisés), R² de 0,38, pas de tests automatisés.

**Stack :** Python · Apache Airflow · Spark / pandas · Kafka · Elasticsearch · Kibana · scikit-learn · Docker Compose
