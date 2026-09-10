import { en } from './en';
import { zh } from './zh';

export type Lang = 'en' | 'zh';
export type { Dict } from './en';

export const dictionaries = { en, zh };

export function dict(lang: Lang) {
  return dictionaries[lang];
}

/** Maps a language to the root path prefix used by its routes. */
export function langRoot(lang: Lang): string {
  return lang === 'zh' ? 'zh/' : '';
}

/** Builds a route URL for the current language under the site base. */
export function langPath(lang: Lang, path: string): string {
  const base = import.meta.env.BASE_URL;
  const trimmed = path.replace(/^\/+/, '');
  return `${base}${langRoot(lang)}${trimmed}`;
}

export interface PageMeta {
  title: string;
  description: string;
  path: string;
}

/** Ordered route definitions used by the header, footer, and sitemap logic. */
export const PAGE_ROUTES: PageMeta[] = [
  { title: 'home', description: 'home', path: '' },
  { title: 'about', description: 'about', path: 'about/' },
  { title: 'technology', description: 'technology', path: 'technology/' },
  { title: 'pipeline', description: 'pipeline', path: 'pipeline/' },
  { title: 'clinical', description: 'clinical', path: 'clinical-data/' },
  { title: 'team', description: 'team', path: 'team/' },
  { title: 'contact', description: 'contact', path: 'contact/' },
] as const;
