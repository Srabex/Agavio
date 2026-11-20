# Agavio Distributions · agavio.mx

Sitio de Agavio Distributions (distribuidora de destilados mexicanos, foco en raicilla y tequila; Ahualulco de Mercado, Jalisco). Cliente de Asesor Sebas; contacto: Víctor Hernández (director comercial).

## Cómo está hecho
- Sitio estático sin compilación: todo en `public/` (HTML, CSS, JS). `src/worker.js` solo redirige `www.agavio.mx` → `agavio.mx` (301) y sirve `public/`.
- Cloudflare Workers: Worker `agavio`, build vacío, deploy `npx wrangler deploy`, producción en `main`.
- Dominio: agavio.mx, comprado en Cloudflare Registrar (20 nov 2026). Custom domains del Worker: raíz y www.

## Datos que se cambian seguido
- WhatsApp, nombre de quien atiende y dominio: arriba de `public/app.js` (`WHATSAPP`, `DUENO`, `DOMINIO`). Hoy: 614 120 4201 (Víctor), por confirmar si queda ese o el de Guadalajara. Si cambia, cambiar también `telephone` en el JSON-LD de `public/index.html`.
- Todos los botones `.wa` arman el mensaje "Hola Víctor, vengo de agavio.mx." + su `data-msg`. Con `?utm_source=` dicen "vi tu anuncio y vengo de agavio.mx.".
- Instagram: hoy `@agaviointernational`; Víctor lo va a cambiar a Distributions. Cambiar en `index.html` (enlace del contacto y `sameAs`).

## Marca (ver manual de identidad v1.1)
- Nombre oficial: **Agavio Distributions** (nunca "International"). Logo registrado en IMPI: solo se usa el vector de `diseno/logo/` o `public/img/`, sin círculo, sin redibujar.
- Colores: negro #0B0B0B, blanco, verde agave #5E7F46, oro #C4A24A (solo detalles), gris #D9D9D9. Letra: Montserrat (servida desde `public/fonts/`).

## Reglas de publicidad de alcohol (no romper)
- Verificación de edad al entrar (30 días en localStorage) y leyenda "Evite el exceso. Venta exclusiva a mayores de 18 años." en el pie.
- Sin fotos de gente tomando, brindando o con botellas en la mano; nadie que parezca menor de 25; sin "tómate", fiesta, éxito o conquista.
- Fotos: solo reales. `public/img/destileria.webp` es la destilería aliada (de la familia de Víctor).

## Imagen para compartir
- `public/og.jpg` sale de `diseno/og.html`: `python3 herramientas/generar_og.py`. Después de publicar o cambiarla: Depurador de Facebook → Volver a extraer.

## Pendientes
- Confirmar teléfono público y usuario nuevo de Instagram.
- Correo: reenvío ventas@ / victor@agavio.mx (Cloudflare Email Routing); Google Workspace si quieren enviar desde el dominio.
- Ficha de Google (Perfil de Negocio) apuntando a agavio.mx.
- Ficha técnica y foto real de Embrujo de la Montaña (sin personas) para el portafolio.
- Píxel de Meta cuando haya pauta (`fbq` ya se llama en los clics de WhatsApp si existe).
