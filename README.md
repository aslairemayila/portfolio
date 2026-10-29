# Aslaire Mayila - Portfolio

Portfolio bilingue (FR / EN) d'**Aslaire Mayila**, étudiant ingénieur en **cybersécurité et réseau** à l'ISEP Paris.

🔗 **Site :** _lien Vercel à ajouter_
💼 **LinkedIn :** [linkedin.com/in/aslaire-mayila-a82388273](https://linkedin.com/in/aslaire-mayila-a82388273)
✉️ **Contact :** aslairemayila@gmail.com

---

## Projets présentés

| Projet | Domaine | Technologies |
| :--- | :--- | :--- |
| Supervision d'infrastructure - Groupe V and B | Supervision (stage) | Grafana, Prometheus, Zabbix, Docker, Python, PowerShell |
| Refonte du support IT - Groupe V and B | ITSM (stage) | Jira Service Management, ITIL, automatisations |
| Sécurisation d'une infrastructure d'entreprise | Sécurité réseau | Cisco IOS, VLAN, ACL, NAT, VPN, Syslog, Wireshark |
| Laboratoire SOC | Détection / SIEM | Wazuh, VirtualBox, Linux |
| Analyse de risques EBIOS RM | GRC | EBIOS RM, RGPD, DORA, eIDAS, LCB-FT |
| Pipeline Big Data UEFA Champions League | Data | Kafka, Airflow, Spark, Elasticsearch, Kibana |

## Le site

- Bilingue français / anglais (i18n natif d'Astro)
- Thème sombre « cyber », animations au survol et au défilement
- Sections : projets, technologies, expérience, à propos
- Captures d'entreprise anonymisées (noms d'équipements, de sites et de jobs floutés)

## Stack

[Astro](https://astro.build) · TypeScript · CSS · déployé sur Vercel

## Lancer en local

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # génère le site dans ./dist/
```

## Structure

```
src/
├── content/work/   # fiches projets (Markdown, FR et EN)
├── pages/          # pages FR (racine) et EN (/en/)
├── components/     # composants (cartes, technologies, expérience…)
└── i18n/           # textes de l'interface FR / EN
public/assets/      # captures et visuels des projets
```

---

<sub>Basé sur le template open source [Astro Portfolio](https://github.com/withastro/astro/tree/main/examples/portfolio) (licence MIT), entièrement personnalisé.</sub>
