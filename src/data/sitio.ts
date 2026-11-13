// Datos generales del sitio. Aquí se cambian los enlaces de compra del libro.
// Si un enlace está vacío (''), el botón no aparece en la web.

export const sitio = {
  nombre: 'María Denisse Fanianos de Capriles',
  lema: 'Periodista, escritora y columnista venezolana',
  correo: 'contacto@mariadenissefanianosdecapriles.com',
};

export const libroES = {
  titulo: '¿Se puede ser feliz en Venezuela?',
  subtitulo: 'Fe, esperanza y alegría de una madre que decidió quedarse',
  editorial: 'Luis Felipe Capriles Editor · Fundación Entre Líneas',
  paginas: 233,
  anio: 2019,
  isbn: '978-980-18-0835-0',
  compra: [
    { tienda: 'Amazon (libro impreso)', url: '' },
    { tienda: 'Amazon Kindle', url: 'https://www.amazon.com/dp/B083VRRKD1' },
    { tienda: 'Google Play Libros', url: '' },
    { tienda: 'Comprar en Venezuela', url: '' },
  ],
};

export const libroEN = {
  titulo: 'Can You Be Happy in Venezuela?',
  subtitulo: 'Faith, Hope and Joy from a Mother Who Chose to Stay',
  editorial: 'Luis Felipe Capriles Editor',
  isbn: '978-980-19-0385-7',
  compra: [
    { tienda: 'Amazon (paperback)', url: '' },
    { tienda: 'Amazon Kindle', url: '' },
    { tienda: 'Google Play Books', url: '' },
  ],
};

// Los 8 capítulos del libro sirven como temas del archivo de artículos.
export const temas = [
  'Nuestra misión está aquí',
  'Paciencia y fortaleza del venezolano',
  'Alegría y esperanza de los venezolanos',
  'Maravillas de Venezuela',
  'Virtudes del venezolano',
  'Niños y jóvenes de Venezuela',
  'Padres y madres, abuelos y abuelas de Venezuela',
  'La fe de los venezolanos',
];

export function slugTema(t: string) {
  return t
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function fechaLarga(d: Date) {
  return d.toLocaleDateString('es-VE', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}
