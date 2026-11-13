// Une cada artículo en español con su traducción al inglés (si existe).
import { getCollection, type CollectionEntry } from 'astro:content';

export interface ArticleEN {
  id: string;
  es: CollectionEntry<'articulos'>;
  en: CollectionEntry<'articles'>;
}

export async function articlesEN(): Promise<ArticleEN[]> {
  const es = await getCollection('articulos');
  const en = new Map((await getCollection('articles')).map((a) => [a.id, a]));
  return es
    .filter((a) => en.has(a.id))
    .map((a) => ({ id: a.id, es: a, en: en.get(a.id)! }))
    .sort((a, b) => b.es.data.date.valueOf() - a.es.data.date.valueOf());
}

export async function tieneTraduccion(id: string) {
  return (await getCollection('articles')).some((a) => a.id === id);
}
