---
lang: en
featured: true
order: 2
title: IT Support Overhaul - Jira Service Management
publishDate: 2026-01-10 00:00:00
img: /assets/vandb-support.png
img_alt: Unified IT support portal in Jira Service Management
description: |
  Merging the headquarters and store support portals into Jira Service Management, with escalation levels, automations and a KPI dashboard.
tags:
  - ITSM
  - ITIL
  - Jira Service Management
  - Automation
---

## Context

Second assignment of my internship at the IT department of Groupe V and B. IT support relied on **two separate portals** (headquarters and stores), which made requests harder to track and slowed down incident handling.

**The goal:** a single, ITIL-inspired portal for all users.

## What I built

- **Two ticket types**: Incident and Service Request.
- **3-level escalation**: L1 handles 70 to 80% of common incidents. L2/L3 are specialized (Infrastructure, Data, Applications, Logistics).
- **Custom workflows and fields**: root cause, categorization, etc.
- **Queues** by level and by team (L1-New, L1-In progress, L2-INFRA, L2-DATA…).
- **Automations**:
  - automatic ticket creation from emails (subject → title, body and attachments included)
  - acknowledgment and resolution notifications
- **KPI dashboard** with Rich Filters: SLA, response rate, open/closed incidents, recurring root causes.

![Unified support portal: access for headquarters and stores](/assets/vandb-portail.png)

## Results

- **Tracking dashboard** over 211 incidents: 89% of resolution deadlines met (SLA), average resolution time of 7 h 44.
- A **single portal** for headquarters and all stores.
- Better workload distribution thanks to the escalation levels.
- Faster handling thanks to email → ticket conversion.
- Real-time activity tracking for the IT department.

## Challenges and lessons learned

I had to reconcile the different needs of stores and headquarters, and adjust workflows and automations after several test phases. An overly strict restriction on a form prevented some employees from reporting incidents. My takeaway: every technical choice has a direct impact on users.

**Stack:** Jira Service Management · Rich Filters · Zapier · Confluence · ITIL
