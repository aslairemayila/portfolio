---
lang: fr
featured: true
order: 5
title: Analyse de risques EBIOS RM - Crédit en ligne bancaire
publishDate: 2026-06-01 00:00:00
img: /assets/ebios-rm.png
img_alt: "Cartographie EBIOS RM : risque initial et risque résiduel des 9 scénarios"
description: |
  Analyse de risques complète selon la méthode EBIOS RM d'un service fictif de crédit en ligne, au regard de 4 référentiels de conformité (RGPD, DORA, eIDAS, LCB-FT).
tags:
  - GRC
  - EBIOS RM
  - Gestion des risques
  - Conformité
---

## Contexte

Projet académique ISEP (février - juin 2026). Il s'agissait de conduire une analyse de risques complète, selon la méthode **EBIOS Risk Manager** de l'ANSSI, sur un service de crédit en ligne fictif du secteur bancaire.

## Démarche

- **Identification des actifs critiques** du service : valeurs métier et biens supports.
- **Évaluation de l'exposition réglementaire** au regard de 4 référentiels :
  - **RGPD** : protection des données personnelles
  - **DORA** : résilience opérationnelle numérique du secteur financier
  - **eIDAS** : identification électronique et signature
  - **LCB-FT** : lutte contre le blanchiment et le financement du terrorisme
- **Qualification et priorisation de 9 scénarios de risques** avec cotation DICP (Disponibilité, Intégrité, Confidentialité, Preuve).
- **Plan de traitement des risques résiduels** : MFA, WAF, tests d'intrusion, SIEM, chiffrement.

## Résultats

- **9 scénarios cotés** (gravité × vraisemblance, échelle de 1 à 16) : **1 risque critique à 16** (brute force sur les comptes clients) et **6 risques élevés à 12**, notamment l'injection SQL, la faille API, le malware, l'analyste corrompu et le contrôle ACPR/CNIL.
- **12 mesures de sécurité proposées**, dont : MFA, test d'intrusion, WAF, sécurisation de l'API, SIEM, chiffrement de la base, anti-DDoS, revue des habilitations, formation au secure coding, intégration LCB-FT et audit du prestataire de scoring.
- **Après traitement, les 9 risques résiduels passent sous le seuil d'acceptabilité (≤ 4).** Exemple : le MFA ramène le scénario brute force de 16 à 4.
- Un **plan d'action priorisé (P0 à P3)** avec responsables, délais et indicateurs de suivi.

## Ce que j'en retiens

La sécurité, ce n'est pas que de la technique : il faut savoir relier une menace à un impact métier et à une exigence réglementaire, puis justifier chaque mesure proposée.

**Compétences :** EBIOS RM · Analyse de risques · RGPD · DORA · Cotation DICP · Plan de traitement
