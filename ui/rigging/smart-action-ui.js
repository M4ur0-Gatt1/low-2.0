function dzSmartSeleccionada() {
  const sel = $("#rigSmartList");
  return sel && sel.value ? sel.value : null;
}
function dzSmartNueva() {
  const hueso = DZ.rigSelectedId || (DZ.sel && DZ.sel.id);
  if (!hueso || !DZ.doc) return dzSetStatus("Elegí el hueso que va a conducir la acción");
  const base = hueso + "_flex";
  let id = base, n = 2;
  while (DZ.doc.scene.rig.actions && DZ.doc.scene.rig.actions[id]) id = base + "_" + n++;
  if (!DZ.doc.createRigAction(id, { name: id, driverBone: hueso, min: 0, max: 90, length: 2 }))
    return dzSetStatus("No pude crear la acción");
  dzSmartPanelSync(id);
  dzSetStatus("Acción creada: doblá el hueso, acomodá las piezas y tocá «Grabar pose»");
}
function dzSmartGrabar() {
  const id = dzSmartSeleccionada();
  if (!id || !DZ.doc) return dzSetStatus("Elegí una acción");
  // se graban las piezas seleccionadas; si no hay, todas menos el conductor
  const accion = DZ.doc.scene.rig.actions[id];
  if (!accion?.driver) return dzSetStatus("Elegí un conductor para esta acción");
  const conductor = (accion.driver.path.match(/^bones\/([^/]+)\//) || [])[1];
  const elegidas = DZ.rigSelectedId && DZ.rigSelectedId !== decodeURIComponent(conductor || "")
    ? [DZ.rigSelectedId] : null;
  if (!DZ.doc.recordRigAction(id, elegidas, "max"))
    return dzSetStatus("No había nada distinto del reposo para grabar");
  dzSmartPanelSync(id);
  dzSetStatus("Pose grabada en el extremo del rango · movéle el ángulo al conductor para verla entrar");
}
function dzSmartQuitar() {
  const id = dzSmartSeleccionada();
  if (!id || !DZ.doc || !DZ.doc.removeRigAction(id)) return dzSetStatus("Elegí una acción");
  dzSmartPanelSync();
  dzSetStatus("Acción quitada");
}
function dzSmartRango() {
  const id = dzSmartSeleccionada();
  if (!id || !DZ.doc) return;
  const min = +$("#rigSmartMin").value, max = +$("#rigSmartMax").value;
  if (!DZ.doc.setRigActionDriver(id, { min, max }))
    return dzSetStatus("El rango tiene que ir de un ángulo a otro distinto");
  dzSmartPanelSync(id);
  dzRigApplyLive(dzRigCur());
}
function dzSmartPanelSync(seleccionar) {
  const lista = $("#rigSmartList"), estado = $("#rigSmartEstado");
  if (!lista) return;
  const acciones = (DZ.doc && DZ.doc.scene.rig.actions) || {};
  const ids = Object.keys(acciones);
  const previa = seleccionar || lista.value;
  lista.innerHTML = "";
  for (const id of ids) {
    const o = document.createElement("option");
    o.value = id; o.textContent = acciones[id].name || id;
    lista.appendChild(o);
  }
  if (ids.includes(previa)) lista.value = previa;
  const actual = acciones[lista.value];
  if (estado) estado.textContent = !ids.length ? "sin acciones"
    : `${ids.length} ${ids.length === 1 ? "acción" : "acciones"}`;
  const driver = $("#rigSmartDriver");
  if (driver) driver.textContent = actual?.driver
    ? (LOW.animation.functionEditorLabel ? LOW.animation.functionEditorLabel(actual.driver.path) : actual.driver.path)
    : "—";
  if (actual?.driver) {
    $("#rigSmartMin").value = actual.driver.min;
    $("#rigSmartMax").value = actual.driver.max;
  }
  ["rigSmartRecord", "rigSmartRemove", "rigSmartMin", "rigSmartMax"].forEach((k) => {
    const el = $("#" + k); if (el) el.disabled = k === "rigSmartRemove" ? !actual : !actual?.driver;
  });
  dzSmartLinksSync(actual);
  const nuevo = $("#rigSmartNew");
  if (nuevo) nuevo.disabled = !(DZ.rigSelectedId || (DZ.sel && DZ.sel.id));
}

function dzSmartLinksSync(action) {
  const list = document.getElementById('rigSmartList');
  if (!list) return;
  let select = document.getElementById('rigSmartConductor');
  if (!select) {
    const label = document.createElement('label'); label.textContent = 'Conductor';
    select = document.createElement('select'); select.id = 'rigSmartConductor';
    select.setAttribute('aria-label', 'Conductor de la acción'); label.appendChild(select);
    const hint = document.createElement('p'); hint.id = 'rigSmartValidation';
    hint.setAttribute('role', 'status');
    list.after(label, hint);
    select.onchange = () => {
      const id = dzSmartSeleccionada(), current = DZ.doc?.scene.rig.actions[id];
      if (!current || !select.value) return;
      const control = /^controls\/(.+)$/.exec(select.value);
      const definition = control && DZ.doc.scene.rigControl(decodeURIComponent(control[1]));
      const driver = {path: select.value, min: definition ? definition.min : 0, max: definition ? definition.max : 90};
      if (DZ.doc.setRigActionDriver(id, driver)) {
        dzRigApplyLive(dzRigCur()); dzMarkDirty();
      }
      dzSmartPanelSync(id);
    };
  }
  select.replaceChildren(new Option('Elegí un conductor…', ''));
  for (const [id, node] of Object.entries(DZ.doc?.scene.rig.nodes || {}))
    select.add(new Option('Ángulo · ' + (node.name || id), LOW.animation.rigChannelPath(id, 'r')));
  for (const [id, control] of Object.entries(DZ.doc?.scene.rig.controls || {}))
    select.add(new Option('Control · ' + (control.name || id), LOW.animation.rigControlPath(id)));
  if (action?.driver?.path && ![...select.options].some(o => o.value === action.driver.path))
    select.add(new Option('Referencia pendiente · ' + action.driver.path, action.driver.path));
  select.value = action?.driver?.path || '';
  // Mesh corrections currently use the driver's coordinate system. Rebinding
  // requires an explicit space bone, otherwise it rotates the correction.
  const mesh = Object.keys(action?.channels || {}).some(p => p.startsWith('meshes/'));
  select.disabled = !action || mesh;
  const result = DZ.doc ? LOW.animation.rigDiagnostics(DZ.doc.scene.rig) : {errors:[], warnings:[]};
  const broken = result.errors.filter(e => e.id === action?.id && e.code.startsWith('missing-action-'));
  document.getElementById('rigSmartValidation').textContent = broken.length
    ? 'Esta acción tiene referencias pendientes. Elegí un conductor o revisá las piezas vinculadas.'
    : result.warnings.some(e => e.code === 'action-cycle')
      ? 'Hay acciones que se conducen entre sí. Se leen las claves originales; sus efectos no se encadenan.'
      : mesh ? 'El correctivo conserva el hueso que orienta su deformación.' : '';
}
