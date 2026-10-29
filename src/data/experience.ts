import type { Lang } from '../i18n/ui';

export interface Experience {
	id: string;
	company: string;
	location: string;
	badges: string[];
	/** Chemins sans préfixe de langue (ajouté au rendu). */
	links: { label: Record<Lang, string>; href: string }[];
	role: Record<Lang, string>;
	dates: Record<Lang, string>;
	description: Record<Lang, string>;
}

/** Ajouter une expérience = ajouter un objet à ce tableau (la plus récente en premier). */
export const experiences: Experience[] = [
	{
		id: 'vandb',
		company: 'Groupe V and B',
		location: 'Château-Gontier',
		role: {
			fr: 'Stagiaire IT - Supervision et support',
			en: 'IT Intern - Monitoring and Support',
		},
		dates: { fr: 'sept. 2025 - janv. 2026', en: 'Sept. 2025 - Jan. 2026' },
		description: {
			fr: 'Déploiement d’une plateforme de supervision (Zabbix, Prometheus, Grafana) sur plus de 1 600 équipements répartis sur 300+ sites, automatisation du suivi des sauvegardes Veeam, et restructuration du support IT sous Jira Service Management en 3 niveaux d’escalade (70 à 80 % des incidents résolus dès le niveau 1).',
			en: 'Deployment of a monitoring platform (Zabbix, Prometheus, Grafana) covering more than 1,600 devices across 300+ sites, automation of Veeam backup monitoring, and restructuring of IT support under Jira Service Management with 3 escalation levels (70 to 80% of incidents resolved at level 1).',
		},
		badges: [
			'Grafana',
			'Prometheus',
			'Zabbix',
			'Cisco Meraki',
			'Docker',
			'Python',
			'PowerShell',
			'Jira Service Management',
		],
		links: [
			{
				label: { fr: 'Voir le projet supervision', en: 'View the monitoring project' },
				href: '/work/vandb-supervision',
			},
			{
				label: { fr: 'Voir le projet support', en: 'View the support project' },
				href: '/work/vandb-support-jsm',
			},
		],
	},
];
