---
lang: en
featured: true
order: 5
title: EBIOS RM Risk Analysis - Online Bank Lending
publishDate: 2026-06-01 00:00:00
img: /assets/ebios-rm-en.png
img_alt: "EBIOS RM risk maps: initial and residual risk for the 9 scenarios"
description: |
  Full risk analysis using the EBIOS RM method for a fictional online lending service, against 4 compliance frameworks (GDPR, DORA, eIDAS, AML-CFT).
tags:
  - GRC
  - EBIOS RM
  - Risk management
  - Compliance
---

## Context

ISEP academic project (February - June 2026). The task was to carry out a complete risk analysis, using ANSSI's **EBIOS Risk Manager** method, on a fictional online lending service in the banking sector.

## Approach

- **Identification of the service's critical assets**: business values and supporting assets.
- **Assessment of regulatory exposure** against 4 frameworks:
  - **GDPR**: personal data protection
  - **DORA**: digital operational resilience in the financial sector
  - **eIDAS**: electronic identification and signatures
  - **AML-CFT**: anti-money laundering and counter-terrorist financing
- **Qualification and prioritization of 9 risk scenarios** rated with DICP (Availability, Integrity, Confidentiality, Proof).
- **Residual risk treatment plan**: MFA, WAF, penetration testing, SIEM, encryption.

## Results

- **9 scenarios rated** (severity × likelihood, scale of 1 to 16): **1 critical risk at 16** (brute force on customer accounts) and **6 high risks at 12**, including SQL injection, an API flaw, malware, a corrupted analyst and the ACPR/CNIL audit.
- **12 security measures proposed**, including: MFA, penetration testing, WAF, API hardening, SIEM, database encryption, anti-DDoS, access rights review, secure coding training, AML-CFT integration and an audit of the scoring provider.
- **After treatment, all 9 residual risks fall below the acceptability threshold (≤ 4).** Example: MFA brings the brute force scenario down from 16 to 4.
- A **prioritized action plan (P0 to P3)** with owners, deadlines and tracking indicators.

## My takeaway

Security is not only technical: you have to link a threat to a business impact and to a regulatory requirement, then justify every measure you propose.

**Skills:** EBIOS RM · Risk analysis · GDPR · DORA · DICP rating · Treatment plan
