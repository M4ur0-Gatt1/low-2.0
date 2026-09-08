/* ══════════════════════════════════════════════════════════════════════════
   QUÉ VERSIÓN ESTÁS CORRIENDO

   Existe por un episodio concreto y evitable. Se reportó tres veces que un
   panel «no anda nada»; se midió tres veces funcionando; y las dos cosas eran
   ciertas, porque el programa que se estaba probando **no era el que se había
   arreglado**: el proceso abierto había arrancado con el build anterior, y el
   instalador nuevo se había corrido encima sin reiniciar la ventana.

   Nada en la pantalla decía qué versión estaba corriendo, y el log escribía
   «── arranque ──» sin número. Así que no había manera de darse cuenta: ni
   mirando, ni leyendo el log, ni preguntando.

   Dos cosas, entonces:

   1. LA VERSIÓN, A LA VISTA. En la barra de estado de la ventana de dibujo, al
      lado del zoom y del cuadro. Es donde uno ya mira.

   2. EL AVISO DE REINICIO. Si el ejecutable en disco es más nuevo que el
      proceso que lo está corriendo, se instaló una versión con LOW abierto y
      lo que hay en pantalla es código viejo. Eso se dice fuerte y con el
      motivo, porque es la diferencia entre «no lo arreglaron» y «no lo
      reiniciaste».

   El aviso se puede cerrar, y no vuelve en esa sesión: informa una vez, no
   molesta.

   @module core/version-badge
   ══════════════════════════════════════════════════════════════════════════ */

/** Pinta la versión en la barra de estado de dibujo. Idempotente. */
function dzVersionBadge(version) {
  const barra = document.querySelector("#dzStatusbar");
  if (!barra || !version) return null;
  let chip = barra.querySelector("#sbVersion");
  if (!chip) {
    chip = document.createElement("span");
    chip.id = "sbVersion";
    chip.className = "dz-sb-version";
    // Antes del hint, que es el que se estira y come el resto de la barra.
    barra.insertBefore(chip, barra.querySelector("#sbHint") || null);
  }
  chip.textContent = "v" + version;
  chip.title = "Versión de LOW que está corriendo ahora mismo en esta ventana";
  return chip;
}

/** El aviso de «instalaste con LOW abierto». `desfase` en segundos: cuánto más
 *  nuevo es el ejecutable en disco que este proceso. */
function dzAvisoBinarioViejo(desfase) {
  if (!Number.isFinite(desfase) || desfase <= 0) return null;
  if (document.querySelector("#dzAvisoReinicio")) return null;
  const minutos = Math.max(1, Math.round(desfase / 60));
  const aviso = document.createElement("div");
  aviso.id = "dzAvisoReinicio";
  aviso.className = "dz-aviso-reinicio";
  aviso.setAttribute("role", "status");
  aviso.innerHTML = `<strong>Se instaló una versión nueva con LOW abierto.</strong>
    <span>Esta ventana sigue corriendo el código de antes —el de hace ${minutos} minuto${minutos === 1 ? "" : "s"}—,
    así que los arreglos de la versión que instalaste no están acá. Cerrá LOW y volvé a abrirlo.</span>
    <button type="button" data-a="cerrar" title="Entendido">Entendido</button>`;
  aviso.querySelector('[data-a="cerrar"]').onclick = () => aviso.remove();
  document.body.appendChild(aviso);
  return aviso;
}

/** Se llama con el estado que devuelve el puente (get_state). */
function dzVersionSync(state) {
  if (!state) return;
  dzVersionBadge(state.version);
  dzAvisoBinarioViejo(Number(state.binario_viejo));
}

window.dzVersionBadge = dzVersionBadge;
window.dzAvisoBinarioViejo = dzAvisoBinarioViejo;
window.dzVersionSync = dzVersionSync;
