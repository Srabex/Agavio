// Redirige www y *.workers.dev al dominio principal; lo demás lo sirven los archivos de public/.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const dominio = env.DOMINIO || "agavio.mx";
    if (url.hostname === `www.${dominio}`) {
      url.hostname = dominio;
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
