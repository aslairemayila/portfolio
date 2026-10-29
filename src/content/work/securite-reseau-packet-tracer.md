---
lang: fr
featured: true
order: 3
title: Sécurisation d'une infrastructure d'entreprise - Cisco
publishDate: 2026-03-31 00:00:00
img: /assets/placeholder.svg
img_alt: Topologie réseau d'entreprise sous Cisco Packet Tracer
description: |
  Conception et sécurisation d'un réseau d'entreprise sous Cisco Packet Tracer : VLANs, routage inter-VLAN, ACL, NAT, VPN, durcissement des accès et journalisation.
tags:
  - Réseau
  - Cisco
  - Sécurité réseau
  - Packet Tracer
---

## Contexte

Projet de sécurité réseau à l'ISEP (février - mars 2026). L'objectif était de construire puis de sécuriser l'infrastructure réseau d'une entreprise sur Cisco Packet Tracer.

## Ce que j'ai réalisé

**Architecture et services réseau**
- Segmentation avec des **VLANs** et **routage inter-VLAN**.
- **ACL de sécurité** pour filtrer les flux entre segments.
- **NAT**, **DHCP**, **DNS** et **VPN**.

**Durcissement des équipements**
- Accès d'administration en **SSH**, avec désactivation et contrôle des accès Telnet et console.
- Bannières de connexion légales.

**Journalisation et supervision**
- **Syslog** pour centraliser les journaux des équipements Cisco.
- **NTP** pour synchroniser les horloges, indispensable pour corréler les logs.
- Analyse du trafic avec **Wireshark** et les commandes `show` de Cisco CLI.

**Stack :** Cisco Packet Tracer · Cisco IOS CLI · Wireshark
