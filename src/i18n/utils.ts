import { getCollection } from 'astro:content';
import { defaultLang, type Lang, ui, type UIKey } from './ui';

/** Langue déduite de l'URL (/en/... → en, sinon fr). */
export function getLang(url: URL): Lang {
	return url.pathname.split('/')[1] === 'en' ? 'en' : defaultLang;
}

export function useTranslations(lang: Lang) {
	return (key: UIKey): string => ui[lang][key] ?? ui[defaultLang][key];
}

/** Préfixe un chemin interne avec la langue (le français n'a pas de préfixe). */
export function localePath(lang: Lang, path = '/'): string {
	const clean = path.startsWith('/') ? path : `/${path}`;
	return lang === defaultLang ? clean : `/en${clean}`;
}

/** Même page dans l'autre langue (conserve le chemin courant). */
export function switchLangPath(url: URL, target: Lang): string {
	const base = url.pathname.replace(/^\/en(?=\/|$)/, '') || '/';
	return localePath(target, base);
}

/** Slug public d'une fiche (sans le préfixe de dossier de langue). */
export const workSlug = (id: string) => id.replace(/^en\//, '');

export async function getWork(lang: Lang) {
	return (await getCollection('work')).filter((e) => e.data.lang === lang);
}

export async function getFeaturedWork(lang: Lang) {
	return (await getWork(lang))
		.filter((e) => e.data.featured)
		.sort((a, b) => (a.data.order ?? 999) - (b.data.order ?? 999));
}

/** Liste complète, triée sur le champ `order` (les fiches sans `order` en dernier). */
export async function getSortedWork(lang: Lang) {
	return (await getWork(lang)).sort((a, b) => (a.data.order ?? 999) - (b.data.order ?? 999));
}

export async function workStaticPaths(lang: Lang) {
	return (await getWork(lang)).map((entry) => ({
		params: { slug: workSlug(entry.id) },
		props: { entry },
	}));
}
