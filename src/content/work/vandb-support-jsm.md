---
lang: fr
featured: true
order: 2
title: Refonte du support IT - Jira Service Management
publishDate: 2026-01-10 00:00:00
img: /assets/vandb-support.png
img_alt: Portail de support informatique unifié sous Jira Service Management
description: |
  Unification des portails de support siège et magasins dans Jira Service Management, avec niveaux d'escalade, automatisations et tableau de bord KPI.
tags:
  - ITSM
  - ITIL
  - Jira Service Management
  - Automatisation
---

## Contexte

Deuxième mission de mon stage à la DSI du Groupe V and B. Le support informatique reposait sur **deux portails séparés** (siège et magasins), ce qui compliquait le suivi des demandes et ralentissait le traitement des incidents.

**L'objectif :** un portail unique, inspiré ITIL, pour tous les utilisateurs.

## Ce que j'ai réalisé

- **Deux types de tickets** : Incident et Demande de service.
- **Escalade à 3 niveaux** : le N1 traite 70 à 80 % des incidents courants. Les N2/N3 sont spécialisés (Infra, Data, Applicatif, Logistique).
- **Workflows et champs sur mesure** : root cause, catégorisation, etc.
- **Files d'attente** par niveau et par pôle (N1-Nouveau, N1-En cours, N2-INFRA, N2-DATA…).
- **Automatisations** :
  - création automatique de tickets à partir des mails (objet → titre, corps et pièces jointes intégrés)
  - notifications de prise en charge et de résolution
- **Tableau de bord KPI** avec Rich Filters : SLA, taux de réponse, incidents ouverts/fermés, root causes récurrentes.

![Portail de support unifié : accès siège et magasins](/assets/vandb-portail.png)

## Résultats

- **Dashboard de suivi** sur 211 incidents : 89 % des délais de résolution respectés (SLA), temps moyen de résolution de 7 h 44.
- Un **portail unique** pour le siège et l'ensemble des magasins.
- Une meilleure répartition de la charge grâce aux niveaux d'escalade.
- Un traitement accéléré grâce à la conversion mail → ticket.
- Un suivi de l'activité en temps réel pour la DSI.

## Difficultés et apprentissages

Il a fallu concilier les besoins différents des magasins et du siège, et ajuster workflows et automatisations après plusieurs phases de test. Une restriction trop stricte sur un formulaire a empêché certains collaborateurs de déclarer des incidents. J'en retiens que chaque choix technique a un impact direct sur les utilisateurs.

**Stack :** Jira Service Management · Rich Filters · Zapier · Confluence · ITIL
