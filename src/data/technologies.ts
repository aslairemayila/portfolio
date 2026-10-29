import type { UIKey } from '../i18n/ui';

export interface Tech {
	name: string;
	/** Fichier SVG dans public/assets/tech/ (sans extension). */
	icon: string;
	/** Logo sombre : inversé en thème sombre pour rester lisible. */
	invertOnDark?: boolean;
}

export const technologies: { title: UIKey; items: Tech[] }[] = [
	{
		title: 'tech.cat.monitoring',
		items: [
			{ name: 'Wazuh', icon: 'wazuh' },
			{ name: 'Grafana', icon: 'grafana' },
			{ name: 'Prometheus', icon: 'prometheus' },
			{ name: 'Zabbix', icon: 'zabbix' },
			{ name: 'Elasticsearch', icon: 'elasticsearch' },
			{ name: 'Kibana', icon: 'kibana' },
		],
	},
	{
		title: 'tech.cat.network',
		items: [
			{ name: 'Cisco', icon: 'cisco' },
			{ name: 'Cisco Meraki', icon: 'meraki' },
			{ name: 'Wireshark', icon: 'wireshark' },
		],
	},
	{
		title: 'tech.cat.systems',
		items: [
			{ name: 'Linux', icon: 'linux' },
			{ name: 'Docker', icon: 'docker' },
			{ name: 'VirtualBox', icon: 'virtualbox' },
		],
	},
	{
		title: 'tech.cat.scripting',
		items: [
			{ name: 'Python', icon: 'python' },
			{ name: 'PowerShell', icon: 'powershell' },
		],
	},
	{
		title: 'tech.cat.data',
		items: [
			{ name: 'Apache Kafka', icon: 'apachekafka', invertOnDark: true },
			{ name: 'Apache Airflow', icon: 'apacheairflow' },
			{ name: 'Apache Spark', icon: 'apachespark' },
		],
	},
	{
		title: 'tech.cat.itsm',
		items: [
			{ name: 'Jira', icon: 'jira' },
			{ name: 'Confluence', icon: 'confluence' },
			{ name: 'Git', icon: 'git' },
			{ name: 'GitHub', icon: 'github', invertOnDark: true },
		],
	},
];
