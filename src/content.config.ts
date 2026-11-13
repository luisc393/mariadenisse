import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Cada artículo es un archivo .md en src/content/articulos/
// Para agregar uno nuevo: copia _plantilla.md.txt, cámbiale el nombre y llena los datos.
const articulos = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/articulos' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    medio: z.string().optional(),
    tema: z.string().optional(),
    libro: z.boolean().default(false),
    enlaceOriginal: z.string().url().optional(),
    sinTitulo: z.boolean().default(false),
    // true cuando solo conocemos el año aproximado (artículos sacados de la computadora sin fecha)
    fechaAproximada: z.boolean().default(false),
  }),
});

// Traducciones al inglés: mismo nombre de archivo que el artículo en español, en src/content/articles/.
// La fecha, el medio y el tema se toman del artículo en español.
const articles = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    // true si el texto viene de la edición en inglés del libro
    libroEN: z.boolean().default(false),
  }),
});

export const collections = { articulos, articles };
