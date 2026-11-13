// Apariciones de María Denisse en otros medios. Para añadir una, copia una línea y cambia los datos.
export interface Nota {
  fecha: string; // AAAA-MM-DD
  medio: string;
  titulo: string;
  url: string;
  resumen: string;
}

// Noticias y entrevistas sobre ella
export const sobreElla: Nota[] = [
  { fecha: '2022-08-29', medio: 'ACI Prensa', titulo: 'Presentan libro sobre cardenal que cumplió rol «insustituible» en la historia de la Iglesia', url: 'https://www.ewtnnews.com/es/mundo/america/presentan-libro-sobre-cardenal-que-cumplio-rol-insustituible-en-la-historia-de-la-iglesia', resumen: 'Explica el origen y el contenido del libro sobre el cardenal Jorge Urosa Savino, en el que participó.' },
  { fecha: '2020-12-07', medio: 'ACI Prensa', titulo: 'Ninguna elección puede ser limpia en Venezuela con el sistema actual, expresa periodista', url: 'https://www.ewtnnews.com/es/mundo/america/ninguna-eleccion-puede-ser-limpia-en-venezuela-con-el-sistema-actual-expresa-periodista', resumen: 'Entrevista tras las elecciones parlamentarias de 2020.' },
  { fecha: '2020-02-05', medio: 'ACI Prensa', titulo: '¿Se puede ser feliz en Venezuela? Periodista católica da respuesta de fe en nuevo libro', url: 'https://www.ewtnnews.com/es/mundo/america/se-puede-ser-feliz-en-venezuela-periodista-catolica-da-respuesta-de-fe-en-nuevo-libro', resumen: 'Presentación de su libro, con sus palabras y una reseña de Miguel Ángel Tabet-Balady.' },
  { fecha: '2014-08-06', medio: 'Espacio Público', titulo: '29 articulistas censurados en once días', url: 'https://espaciopublico.ong/el-universal-29-articulistas-censurados/', resumen: 'Aparece entre los columnistas de El Universal cuyas columnas fueron retiradas en 2014.' },
  { fecha: '2014-07-28', medio: 'Espacio Público', titulo: 'Censuran columna de periodista católica por criticar al Gobierno', url: 'https://espaciopublico.ong/censuran-columna-periodista-catolica/', resumen: 'Relata cómo El Universal retiró su columna semanal por defender a la Iglesia y criticar al Gobierno.' },
  { fecha: '2013-05-29', medio: 'ACI Prensa', titulo: 'La Iglesia ha sido vital para evitar más violencia en Venezuela, responde periodista a ministro', url: 'https://www.ewtnnews.com/es/mundo/america/la-iglesia-ha-sido-vital-para-evitar-mas-violencia-en-venezuela-responde-periodista-a-ministro', resumen: 'Recoge su columna en El Universal en defensa del papel de la Iglesia frente a la violencia.' },
  { fecha: '2013-03-07', medio: 'ACI Prensa', titulo: 'La fe ha mantenido unida a Venezuela, afirma columnista tras muerte de Chávez', url: 'https://www.ewtnnews.com/es/mundo/america/la-fe-ha-mantenido-unida-a-venezuela-afirma-columnista-tras-muerte-de-chavez', resumen: 'Declaraciones a ACI Prensa sobre la fe de los venezolanos en un momento de crisis.' },
  { fecha: '2012-04-11', medio: 'ACI Prensa', titulo: 'Católicos defienden a Cardenal Urosa ante amenazas de la santería en Venezuela', url: 'https://www.ewtnnews.com/es/mundo/america/catolicos-defienden-a-cardenal-urosa-ante-amenazas-de-la-santeria-en-venezuela', resumen: 'Como directora de la Fundación Entre Líneas, convoca un rosario en apoyo al cardenal.' },
];

// Sus artículos publicados en otros medios
export const susArticulos: Nota[] = [
  { fecha: '2019-03-14', medio: 'Fray Nelson Medina, blog', titulo: 'Desde Venezuela gritamos auxilio', url: 'https://fraynelson.com/blog/2019/03/14/desde-venezuela-gritamos-auxilio/', resumen: 'Su testimonio sobre el apagón y la falta de comida y medicinas.' },
  { fecha: '2014-08-07', medio: 'El Observador', titulo: 'Viejos solos', url: 'https://elobservadorenlinea.com/2014/08/5764/', resumen: 'Escrito para El Observador.' },
  { fecha: '2014-02-26', medio: 'Aleteia', titulo: 'Venezuela en la encrucijada: tenemos dos opciones', url: 'https://es.aleteia.org/2014/02/26/venezuela-en-la-encrucijada-tenemos-dos-opciones/', resumen: 'Columna de El Universal reproducida por Aleteia.' },
];
