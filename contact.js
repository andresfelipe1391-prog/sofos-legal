'use strict';
(() => {
  const config = window.SOFOS_PRIVACY;
  const contactReady = config && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.email) &&
    !/@.*(?:example\.(?:com|org)|\.test|\.invalid)$/.test(config.email);
  if (!contactReady) return;
  for (const name of ['email','effectiveDate','controllerDomicile','controllerAddress','controllerPhone']) {
    if (!config[name]) continue;
    document.querySelectorAll(`[data-field="${name}"]`).forEach(e => { e.textContent = name === 'effectiveDate' && config[name] === '2026-11-07'
      ? '7 de noviembre de 2026' : String(config[name]); });
  }
  document.querySelectorAll('[data-contact]').forEach(e => {
    e.href = 'mailto:' + encodeURIComponent(config.email) +
      '?subject=' + encodeURIComponent('Solicitud de eliminación de Cuenta Sofos') +
      '&body=' + encodeURIComponent('Solicito eliminar mi Cuenta Sofos asociada a este correo. Entiendo que el libro financiero y los respaldos locales se conservan. No adjunto contraseñas ni datos financieros.');
    e.hidden = false;
  });
})();
