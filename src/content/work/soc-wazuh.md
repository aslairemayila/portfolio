---
lang: fr
featured: true
order: 4
title: Laboratoire SOC - Détection et surveillance avec Wazuh
publishDate: 2026-06-01 00:00:00
img: /assets/placeholder.svg
img_alt: Dashboard Wazuh affichant les événements de sécurité des agents supervisés
description: |
  Déploiement d'un mini-SOC personnel sur VirtualBox : serveur Wazuh et deux machines supervisées, pour centraliser les journaux et détecter les événements de sécurité.
tags:
  - SOC
  - SIEM
  - Wazuh
  - Détection
  - Projet personnel
---

## Contexte

Projet personnel lancé en juin 2026 et toujours en cours. Le but est de pratiquer concrètement le métier d'analyste SOC : collecter, centraliser et analyser les événements de sécurité d'un parc de machines.

## Architecture

- **3 machines virtuelles** sous VirtualBox :
  - 1 serveur Wazuh (manager, indexer et dashboard)
  - 2 machines supervisées avec un agent Wazuh

## Ce que j'ai réalisé

- Déploiement et configuration du serveur Wazuh et des agents.
- **Centralisation des journaux** des machines supervisées.
- **Détection des événements de sécurité** et analyse via le dashboard Wazuh.
- Diagnostic et résolution, en autonomie, des incidents d'infrastructure rencontrés (réseau, système).
- **Documentation de chaque procédure**, pour que le lab soit reproductible.

## Ce que j'en retiens

Monter son propre SOC oblige à comprendre toute la chaîne, de l'agent qui collecte à l'alerte qui remonte. C'est aussi un excellent terrain pour apprendre à dépanner méthodiquement.

**Stack :** Wazuh · VirtualBox · Linux · SIEM
