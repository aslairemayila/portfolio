---
lang: en
featured: true
order: 4
title: SOC Lab - Detection and Monitoring with Wazuh
publishDate: 2026-06-01 00:00:00
img: /assets/placeholder.svg
img_alt: Wazuh dashboard showing security events from the monitored agents
description: |
  Deployment of a personal mini-SOC on VirtualBox: a Wazuh server and two monitored machines, to centralize logs and detect security events.
tags:
  - SOC
  - SIEM
  - Wazuh
  - Detection
  - Personal project
---

## Context

Personal project started in June 2026 and still ongoing. The goal is to practice the SOC analyst job hands-on: collecting, centralizing and analyzing security events from a fleet of machines.

## Architecture

- **3 virtual machines** on VirtualBox:
  - 1 Wazuh server (manager, indexer and dashboard)
  - 2 monitored machines running a Wazuh agent

## What I built

- Deployment and configuration of the Wazuh server and agents.
- **Log centralization** from the monitored machines.
- **Security event detection** and analysis through the Wazuh dashboard.
- Independent diagnosis and resolution of the infrastructure issues encountered (network, system).
- **Documentation of every procedure**, so the lab is reproducible.

## My takeaway

Building your own SOC forces you to understand the whole chain, from the agent that collects to the alert that comes up. It is also an excellent playground for learning methodical troubleshooting.

**Stack:** Wazuh · VirtualBox · Linux · SIEM
