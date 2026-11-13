// Clave temporal para todo el sitio mientras se revisa.
// Se activa poniendo la variable CLAVE_SITIO en Cloudflare Pages (Settings > Variables).
// Para abrir el sitio al público, borra esa variable y vuelve a publicar.
export async function onRequest({ request, env, next }) {
  const clave = env.CLAVE_SITIO;
  if (!clave) return next();
  const auth = request.headers.get('Authorization') || '';
  if (auth.startsWith('Basic ')) {
    try {
      const [, pass] = atob(auth.slice(6)).split(/:(.*)/s);
      if (pass === clave) {
        const res = await next();
        const r = new Response(res.body, res);
        r.headers.set('X-Robots-Tag', 'noindex, nofollow');
        return r;
      }
    } catch {}
  }
  return new Response('Sitio en revisión. Escribe la clave para entrar.', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Sitio en revision", charset="UTF-8"', 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
