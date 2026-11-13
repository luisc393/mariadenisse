// Textos y rutas para la versión en inglés del sitio.
import { temas } from './sitio';

export const temasEN: Record<string, string> = Object.fromEntries(
  [
    'Our Mission Is Here',
    'The Patience and Fortitude of Venezuelans',
    'The Joy and Hope of Venezuelans',
    'The Wonders of Venezuela',
    'The Virtues of Venezuelans',
    'Venezuelan Children and Young People',
    'Venezuelan Mothers and Fathers, Grandmothers and Grandfathers',
    'The Faith of Venezuelans',
  ].map((en, i) => [temas[i], en]),
);

// Páginas equivalentes en cada idioma (español → inglés).
export const rutas: [string, string][] = [
  ['/', '/en'],
  ['/sobre-ella', '/en/about'],
  ['/articulos', '/en/articles'],
  ['/libro', '/en/book'],
  ['/fundacion-entre-lineas', '/en/foundation'],
  ['/prensa', '/en/press'],
  ['/contacto', '/en/contact'],
];

export function rutaAlterna(ruta: string, lang: string): string {
  const par = rutas.find(([es, en]) => (lang === 'en' ? en : es) === ruta);
  if (par) return lang === 'en' ? par[0] : par[1];
  return lang === 'en' ? '/' : '/en';
}

export function fechaEN(d: { date: Date; fechaAproximada?: boolean }) {
  if (d.fechaAproximada) return String(d.date.getUTCFullYear());
  return d.date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}
