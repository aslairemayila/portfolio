---
lang: fr
featured: true
order: 1
title: Supervision d'infrastructure - Groupe V and B
publishDate: 2026-01-16 00:00:00
img: /assets/vandb-supervision.png
img_alt: Tableau de bord Grafana de supervision réseau et sauvegardes
description: |
  Mise en place d'une plateforme de supervision centralisée (Grafana, Prometheus, Zabbix) pour plus de 1 600 équipements réseau répartis sur 300+ magasins.
tags:
  - Supervision
  - Grafana
  - Prometheus
  - Docker
  - Python
  - PowerShell
---

## Contexte

Stage de 2e année du cycle ingénieur (septembre 2025 - janvier 2026) à la DSI du Groupe V and B, réseau de plus de 290 caves-bars en France. Rattaché au pôle Infrastructure.

**Le problème :** plus de 1 600 équipements réseau Cisco Meraki, des serveurs et des sauvegardes généraient un flot d'alertes par mail. Les alertes critiques se perdaient dans la masse.

**L'objectif :** réduire le bruit et réunir les informations essentielles sur un seul écran.

## Ce que j'ai réalisé

![Architecture globale : Meraki, Veeam et Zabbix remontent vers Grafana](/assets/vandb-architecture.png)

- **Socle Docker** sur une VM cloud dédiée, hébergeant Grafana et Prometheus en conteneurs.
- **Exporter Python pour Cisco Meraki** : collecte de l'état des équipements via l'API Meraki, déployée en conteneur. L'API est limitée à 10 requêtes/seconde par organisation, j'ai donc calibré la collecte toutes les 2 minutes.
- **Supervision des sauvegardes Veeam** : Grafana n'ayant pas de plugin Veeam, j'ai écrit un script PowerShell (tâche planifiée Windows) qui expose l'état des jobs (succès / avertissement / échec) sur un endpoint interrogé par Prometheus.
- **Configuration Prometheus** (`prometheus.yml`) : définition des cibles et fréquences de collecte.

![Flux de collecte : Prometheus interroge les exporters Meraki et Veeam, Grafana affiche](/assets/vandb-prometheus-flux.png)

- **Intégration Zabbix** dans Grafana pour n'afficher que les alertes de criticité élevée.
- **Tableau de bord Grafana unifié** regroupant réseau, sauvegardes et alertes critiques.

## Résultats

- Passage d'une saturation de mails à une **vue unique des informations prioritaires**.
- Visibilité en temps réel sur les équipements du siège et des magasins.
- Équipe infrastructure plus réactive face aux incidents.

## Difficultés et apprentissages

La première approche (intégrer Meraki directement dans Zabbix) se heurtait à la limite de l'API. J'ai analysé le problème, testé plusieurs méthodes et conçu un exporter dédié. J'en retiens une méthode : comprendre la contrainte avant de choisir l'outil.

**Stack :** Docker · Grafana · Prometheus · Zabbix · Cisco Meraki API · Veeam · Python · PowerShell
