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

export const collections = { articulos };
