---
lang: en
featured: true
order: 1
title: Infrastructure Monitoring - Groupe V and B
publishDate: 2026-01-16 00:00:00
img: /assets/vandb-supervision.png
img_alt: Grafana dashboard monitoring the network and backups
description: |
  Setting up a centralized monitoring platform (Grafana, Prometheus, Zabbix) for more than 1,600 network devices across 300+ stores.
tags:
  - Monitoring
  - Grafana
  - Prometheus
  - Docker
  - Python
  - PowerShell
---

## Context

Second-year engineering internship (September 2025 - January 2026) at the IT department of Groupe V and B, a network of more than 290 wine shops and bars across France. I was part of the Infrastructure team.

**The problem:** more than 1,600 Cisco Meraki network devices, servers and backups generated a flood of email alerts. Critical alerts were lost in the noise.

**The goal:** cut the noise and bring the essential information onto a single screen.

## What I built

![Overall architecture: Meraki, Veeam and Zabbix feed into Grafana](/assets/vandb-architecture.png)

- **Docker foundation** on a dedicated cloud VM, hosting Grafana and Prometheus as containers.
- **Python exporter for Cisco Meraki**: collects device status through the Meraki API, deployed as a container. The API is limited to 10 requests per second per organization, so I tuned collection to run every 2 minutes.
- **Veeam backup monitoring**: Grafana has no Veeam plugin, so I wrote a PowerShell script (Windows scheduled task) that exposes job status (success / warning / failure) on an endpoint scraped by Prometheus.
- **Prometheus configuration** (`prometheus.yml`): scrape targets and collection frequencies.

![Collection flow: Prometheus queries the Meraki and Veeam exporters, Grafana displays the data](/assets/vandb-prometheus-flux.png)

- **Zabbix integration** in Grafana to display only high-severity alerts.
- **Unified Grafana dashboard** combining network, backups and critical alerts.

## Results

- From a mailbox drowning in alerts to a **single view of priority information**.
- Real-time visibility on headquarters and store equipment.
- An infrastructure team that reacts faster to incidents.

## Challenges and lessons learned

My first approach (integrating Meraki directly into Zabbix) ran into the API limit. I analyzed the problem, tested several methods and designed a dedicated exporter. My takeaway: understand the constraint before choosing the tool.

**Stack:** Docker · Grafana · Prometheus · Zabbix · Cisco Meraki API · Veeam · Python · PowerShell
