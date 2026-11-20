// Datos de contacto: cambiar aquí si cambia el número o el nombre de quien atiende.
const WHATSAPP = "526141204201";
const DUENO = "Víctor";
const DOMINIO = "agavio.mx";

// Mensaje con origen: "Hola Víctor, vengo de agavio.mx." (o "vi tu anuncio" si la liga trae ?utm_source=)
const params = new URLSearchParams(location.search);
const deAnuncio = params.has("utm_source");
const origen = deAnuncio ? `vi tu anuncio y vengo de ${DOMINIO}.` : `vengo de ${DOMINIO}.`;

function ligaWhatsApp(msg) {
  const texto = `Hola ${DUENO}, ${origen} ${msg || ""}`.trim();
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;
}

document.querySelectorAll(".wa").forEach((a) => {
  a.href = ligaWhatsApp(a.dataset.msg);
  a.target = "_blank";
  a.rel = "noopener";
  a.addEventListener("click", () => {
    if (typeof fbq === "function") fbq("track", "Lead");
  });
});

// Verificación de edad (se recuerda 30 días en este navegador)
const edad = document.getElementById("edad");
const CLAVE = "agavio_edad_ok";
let yaConfirmo = false;
try {
  const v = Number(localStorage.getItem(CLAVE));
  yaConfirmo = v && Date.now() - v < 30 * 24 * 3600 * 1000;
} catch (e) {}
if (!yaConfirmo) {
  edad.hidden = false;
  document.body.style.overflow = "hidden";
}
document.getElementById("edad-si").addEventListener("click", () => {
  try { localStorage.setItem(CLAVE, String(Date.now())); } catch (e) {}
  edad.hidden = true;
  document.body.style.overflow = "";
});
document.getElementById("edad-no").addEventListener("click", () => {
  document.getElementById("edad-msg").hidden = false;
  document.querySelector(".edad-b").hidden = true;
});

document.getElementById("anio").textContent = new Date().getFullYear();
