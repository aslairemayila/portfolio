---
lang: en
order: 6
title: Big Data Pipeline - UEFA Champions League Player Value
publishDate: 2026-06-15 00:00:00
img: /assets/bigdata-ucl.png
img_alt: Kibana dashboard comparing market value and performance of UCL players
description: |
  Hybrid batch + streaming pipeline (Airflow, Spark, Kafka, Elasticsearch, Kibana) analyzing whether the most expensive Champions League players are really the best performers.
tags:
  - Big Data
  - Kafka
  - Airflow
  - Elasticsearch
  - Machine Learning
  - Docker
---

## Context

4th-year Big Data project at ISEP, carried out in pairs.

**The question:** does an expensive player really score more goals, or is the market mostly paying for a brand?

## Architecture

Two parallel flows that end up in Elasticsearch and then Kibana, all deployed with **Docker Compose**.

**Batch pipeline** (orchestrated by Airflow every 20 min):
1. **Extract**: calls to the football-data.org API (top 100 UCL scorers) and Transfermarkt (market values).
2. **Format**: cleaning and conversion to Parquet in a 3-layer data lake (Spark, with a pandas fallback).
3. **Combine**: join and business KPIs (offensive involvement, efficiency score, performance tiers, Pearson correlation).
4. **Machine Learning**: linear regression (scikit-learn) predicting each player's theoretical value.
5. **Index** into Elasticsearch with an explicit mapping.

![Airflow DAG of the batch pipeline, all tasks successful](/assets/bigdata-airflow-dag.png)

**Streaming pipeline** (real time):
- A Kafka producer queries the CoinGecko API every 30 s to track the price of the 10 crypto fan tokens of UCL clubs (PSG, Barça, Juventus…).
- A consumer indexes each tick into Elasticsearch, feeding an automatically refreshed Kibana dashboard.

![Messages of the fan_tokens_prices Kafka topic in Kafka UI](/assets/bigdata-kafka.png)

## Results

- **2 Kibana dashboards** (10+ visualizations each): league map, treemap by club, age × performance heatmap, actual vs predicted value scatter plot, live fan token tracking.

![Actual vs predicted value from the regression model](/assets/bigdata-ml-scatter.png)

- **Value / goals correlation: +0.32**, positive but moderate.
- The model spots undervalued and overvalued players. Example: a star striker valued at €200M for a predicted value of €86M, showing that the market pays for the brand beyond the stats.

## Challenges and lessons learned

- PySpark crashed on Windows / Python 3.14: I built a pandas fallback producing the same Parquet files.
- Windows Defender blocked some Random Forest DLLs: I switched to a linear regression, which is easier to interpret.
- The Transfermarkt API quota was limited to 50 requests per month.
- **Acknowledged limits:** small sample (45 valued players), R² of 0.38, no automated tests.

**Stack:** Python · Apache Airflow · Spark / pandas · Kafka · Elasticsearch · Kibana · scikit-learn · Docker Compose
