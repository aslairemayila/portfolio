---
lang: en
featured: true
order: 3
title: Securing an Enterprise Infrastructure - Cisco
publishDate: 2026-03-31 00:00:00
img: /assets/placeholder.svg
img_alt: Enterprise network topology in Cisco Packet Tracer
description: |
  Design and hardening of an enterprise network in Cisco Packet Tracer: VLANs, inter-VLAN routing, ACLs, NAT, VPN, access hardening and logging.
tags:
  - Networking
  - Cisco
  - Network security
  - Packet Tracer
---

## Context

Network security project at ISEP (February - March 2026). The goal was to build and then secure a company's network infrastructure in Cisco Packet Tracer.

## What I did

**Architecture and network services**
- Segmentation with **VLANs** and **inter-VLAN routing**.
- **Security ACLs** to filter traffic between segments.
- **NAT**, **DHCP**, **DNS** and **VPN**.

**Device hardening**
- Administration access over **SSH**, with Telnet and console access disabled or controlled.
- Legal login banners.

**Logging and monitoring**
- **Syslog** to centralize the logs of Cisco devices.
- **NTP** to synchronize clocks, essential for correlating logs.
- Traffic analysis with **Wireshark** and Cisco CLI `show` commands.

**Stack:** Cisco Packet Tracer · Cisco IOS CLI · Wireshark
