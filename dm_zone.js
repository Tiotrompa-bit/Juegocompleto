// dm_zone.js - DM Zone optimizada para móvil
// Versión 3.5 - Con modal de monstruos completamente funcional

// ==================== ESTADO GLOBAL ====================
const dmState = {
    currentTab: 'combat',
    selectedMonsterId: null,
    filters: { cr: 'all', type: 'all', search: '' },
    selectedItemId: null,
    itemFilters: { category: 'all', rarity: 'all', search: '' },
    notes: ''
};

// ==================== MAESTRÍAS ====================
const maestrias = [
    { id: 'cleave', nombre: 'Hendidura', desc: 'Ataque extra a otro enemigo.' },
    { id: 'nick', nombre: 'Muesca', desc: 'Segundo ataque con arma ligera.' },
    { id: 'push', nombre: 'Empujón', desc: 'Empuja 10 pies al golpear.' },
    { id: 'sap', nombre: 'Debilitar', desc: 'Desventaja en próximo ataque.' },
    { id: 'slow', nombre: 'Ralentizar', desc: 'Reduce velocidad.' },
    { id: 'topple', nombre: 'Derribo', desc: 'Salvación CON o cae.' },
    { id: 'graze', nombre: 'Rasguño', desc: 'Daño mínimo si fallas.' },
    { id: 'vex', nombre: 'Vejar', desc: 'Ventaja en siguiente ataque.' },
    { id: 'flex', nombre: 'Flexibilidad', desc: 'Daño versátil con una mano.' },
    { id: 'none', nombre: 'Ninguna', desc: '' }
];

// ==================== ESTADOS / CONDICIONES ====================
const dmStates = [
    { id: "blinded", name: "Cegado", desc: "Fallas automáticamente cualquier prueba que requiera vista. Los ataques contra ti tienen ventaja y tus ataques tienen desventaja." },
    { id: "charmed", name: "Encantado", desc: "No puedes atacar a quien te encantó y esa criatura tiene ventaja en pruebas sociales contra ti." },
    { id: "deafened", name: "Sordo", desc: "Fallas automáticamente cualquier prueba que requiera oír." },
    { id: "frightened", name: "Asustado", desc: "Tienes desventaja en tiradas de ataque y pruebas de habilidad mientras la fuente del miedo esté a la vista." },
    { id: "grappled", name: "Agarrado", desc: "Tu velocidad se convierte en 0 y no puedes beneficiarte de bonos a la velocidad." },
    { id: "incapacitated", name: "Incapacitado", desc: "No puedes realizar acciones ni reacciones." },
    { id: "invisible", name: "Invisible", desc: "Los ataques contra ti tienen desventaja y tus ataques tienen ventaja. No puedes ser visto sin magia." },
    { id: "paralyzed", name: "Paralizado", desc: "Estás incapacitado y no puedes moverte ni hablar. Los ataques contra ti son críticos automáticos si están a 5 pies." },
    { id: "petrified", name: "Petrificado", desc: "Estás transformado en piedra. Estás incapacitado, no puedes moverte y tienes resistencia a todo daño." },
    { id: "poisoned", name: "Envenenado", desc: "Tienes desventaja en tiradas de ataque y pruebas de habilidad." },
    { id: "prone", name: "Tumbado", desc: "Tu única opción de movimiento es arrastrarte. Los ataques a distancia contra ti tienen desventaja, los cuerpo a cuerpo tienen ventaja." },
    { id: "restrained", name: "Restringido", desc: "Tu velocidad se convierte en 0. Los ataques contra ti tienen ventaja y tus ataques tienen desventaja." },
    { id: "stunned", name: "Aturdido", desc: "Estás incapacitado, no puedes moverte y fallas automáticamente las salvaciones de FUE y DES. Los ataques contra ti tienen ventaja." },
    { id: "unconscious", name: "Inconsciente", desc: "Estás incapacitado, no puedes moverte ni hablar. Los ataques contra ti tienen ventaja y son críticos automáticos a 5 pies." }
];

// ==================== VARIABLES GLOBALES DE COMBATE ====================
let combatants = [];
let currentTurnIndex = 0;
let dragSourceIndex = null;
let combatLog = [];

// Variables para el filtro de monstruos en modal
let modalFilteredMonsters = [];

// ==================== INICIALIZACIÓN ====================
document.addEventListener('DOMContentLoaded', function() {
    console.log('DM Zone iniciada');
    
    // Verificar que los datos están cargados
    if (typeof BESTIARIO === 'undefined') {
        console.error('Error: BESTIARIO no cargado');
        window.BESTIARIO = {};
    }
    if (typeof OBJETOS === 'undefined') {
        console.error('Error: OBJETOS no cargado');
        window.OBJETOS = {};
    }
    
    cargarNotas();
    loadCombat();
    initEventListeners();
    renderMonsterList();
    renderItemList();
    renderStateButtons();
    
    if (!combatLog || combatLog.length === 0) {
        combatLog = [{ text: 'Sistema listo', time: new Date().toLocaleTimeString() }];
    }
    renderCombatLog();
});

function initEventListeners() {
    const notesArea = document.getElementById('dmNotes');
    if (notesArea) {
        notesArea.addEventListener('input', function() {
            dmState.notes = this.value;
            guardarNotas();
        });
    }
    
    const searchInput = document.getElementById('filterSearch');
    if (searchInput) {
        searchInput.addEventListener('keyup', function(e) { 
            if (e.key === 'Enter') applyFilters(); 
        });
    }
    
    const itemSearchInput = document.getElementById('filterItemSearch');
    if (itemSearchInput) {
        itemSearchInput.addEventListener('keyup', function(e) { 
            if (e.key === 'Enter') applyItemFilters(); 
        });
    }
    
    // --- Nuevos listeners para el modal ---
    const modalSearchInput = document.getElementById('modalMonsterSearch');
    if (modalSearchInput) {
        modalSearchInput.addEventListener('keyup', updateModalMonsterFilters);
    }

    const cancelBtn = document.getElementById('cancelMonsterBtn');
    if (cancelBtn) {
        cancelBtn.addEventListener('click', closeModal);
    }

    const confirmBtn = document.getElementById('confirmMonsterBtn');
    if (confirmBtn) {
        confirmBtn.addEventListener('click', confirmAddMonster);
    }

    // Cerrar el modal si se hace clic fuera del contenido
    const modalOverlay = document.getElementById('monsterModal');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }
}

// Cambiar pestaña
window.switchTab = function(tabId, event) {
    dmState.currentTab = tabId;
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    
    document.querySelectorAll('.nav button').forEach(btn => btn.classList.remove('active'));
    if (event && event.target) {
        event.target.closest('button').classList.add('active');
    }
    
    if (tabId === 'bestiary') renderMonsterList();
    else if (tabId === 'items') renderItemList();
    else if (tabId === 'combat') renderCombatList();
};

// ==================== FUNCIONES DE ESTADOS ====================
function renderStateButtons() {
    const container = document.getElementById('stateButtonsContainer');
    if (!container) return;
    
    let html = '';
    dmStates.forEach(state => {
        html += `<button class="condition-btn" data-state="${state.id}" onclick="toggleCombatantState('${state.id}')">${state.name}</button>`;
    });
    container.innerHTML = html;
}

// Función para aplicar estado al combatiente actual o seleccionado
window.toggleCombatantState = function(stateId, combatantIndex = null) {
    const index = combatantIndex !== null ? combatantIndex : currentTurnIndex;
    if (index === undefined || !combatants[index]) {
        alert('Selecciona un combatiente primero');
        return;
    }
    
    const state = dmStates.find(s => s.id === stateId);
    if (!state) return;
    
    const combatant = combatants[index];
    const currentStates = combatant.conditions ? combatant.conditions.split(',').map(s => s.trim()) : [];
    
    if (currentStates.includes(state.name)) {
        // Quitar estado
        combatant.conditions = currentStates.filter(s => s !== state.name).join(', ');
        addLogEntry(`${combatant.name} ya no está ${state.name}`);
    } else {
        // Añadir estado
        currentStates.push(state.name);
        combatant.conditions = currentStates.join(', ');
        addLogEntry(`${combatant.name} ahora está ${state.name}`);
    }
    
    renderCombatList();
    saveCombat();
};

// ==================== FUNCIONES DEL BESTIARIO ====================
window.applyFilters = function() {
    dmState.filters.cr = document.getElementById('filterCR').value;
    dmState.filters.type = document.getElementById('filterType').value;
    dmState.filters.search = document.getElementById('filterSearch').value.toLowerCase().trim();
    renderMonsterList();
};

function renderMonsterList() {
    const listDiv = document.getElementById('monsterList');
    if (!listDiv) return;
    
    if (!BESTIARIO || Object.keys(BESTIARIO).length === 0) {
        listDiv.innerHTML = '<p style="color:#f44336; text-align:center;">Sin datos de bestiario</p>';
        return;
    }
    
    let filtered = Object.values(BESTIARIO).filter(m => {
        if (dmState.filters.cr !== 'all' && m.cr.toString() !== dmState.filters.cr) return false;
        if (dmState.filters.type !== 'all' && m.tipo && !m.tipo.toLowerCase().includes(dmState.filters.type.toLowerCase())) return false;
        if (dmState.filters.search && m.nombre && !m.nombre.toLowerCase().includes(dmState.filters.search)) return false;
        return true;
    }).sort((a, b) => (a.nombre || '').localeCompare(b.nombre || ''));
    
    if (filtered.length === 0) {
        listDiv.innerHTML = '<p style="color:#666; text-align:center;">Sin resultados</p>';
        return;
    }
    
    let html = '';
    filtered.forEach(m => {
        html += `<div class="monster-item ${dmState.selectedMonsterId === m.id ? 'selected' : ''}" 
                      onclick="selectMonster('${m.id}')">
                    <span class="monster-name">${m.nombre || 'Sin nombre'}</span>
                    <span class="monster-cr">CR ${m.cr || '?'}</span>
                </div>`;
    });
    listDiv.innerHTML = html;
}

window.selectMonster = function(id) {
    dmState.selectedMonsterId = id;
    renderMonsterList();
    renderMonsterDetail(BESTIARIO[id]);
};

function renderMonsterDetail(m) {
    const div = document.getElementById('monsterDetail');
    if (!div || !m) return;
    
    const stats = m.stats || {};
    const mod = s => Math.floor((s - 10) / 2);
    
    let habs = '';
    if (m.habilidades) {
        habs = Object.entries(m.habilidades).map(([h,v]) => `${h} +${v}`).join(', ');
    }
    
    let rasgos = '';
    if (m.rasgos && Array.isArray(m.rasgos)) {
        m.rasgos.forEach(r => {
            rasgos += `<div class="action-block">
                <div class="action-name">${r.nombre || 'Rasgo'}</div>
                <div class="action-desc">${r.descripcion || r.desc || ''}</div>
            </div>`;
        });
    }
    
    let acciones = '';
    if (m.acciones && Array.isArray(m.acciones)) {
        m.acciones.forEach(a => {
            acciones += `<div class="action-block">
                <div class="action-name">${a.nombre || 'Acción'}</div>
                <div class="action-desc">${a.descripcion || a.desc || ''}</div>
            </div>`;
        });
    }
    
    div.innerHTML = `
        <h3>${m.nombre || 'Sin nombre'}</h3>
        <div class="detail-row"><span class="detail-label">Tipo:</span><span class="detail-value">${m.tipo || 'Desconocido'}</span></div>
        <div class="detail-row"><span class="detail-label">CA:</span><span class="detail-value">${m.ca || '?'}</span></div>
        <div class="detail-row"><span class="detail-label">PG:</span><span class="detail-value">${m.pg || '?'}</span></div>
        
        <div class="stats-grid">
            <div class="stat-block"><span class="stat-name">FUE</span><span class="stat-value">${stats.fuerza||10} (${mod(stats.fuerza||10)})</span></div>
            <div class="stat-block"><span class="stat-name">DES</span><span class="stat-value">${stats.destreza||10} (${mod(stats.destreza||10)})</span></div>
            <div class="stat-block"><span class="stat-name">CON</span><span class="stat-value">${stats.constitucion||10} (${mod(stats.constitucion||10)})</span></div>
            <div class="stat-block"><span class="stat-name">INT</span><span class="stat-value">${stats.inteligencia||10} (${mod(stats.inteligencia||10)})</span></div>
            <div class="stat-block"><span class="stat-name">SAB</span><span class="stat-value">${stats.sabiduria||10} (${mod(stats.sabiduria||10)})</span></div>
            <div class="stat-block"><span class="stat-name">CAR</span><span class="stat-value">${stats.carisma||10} (${mod(stats.carisma||10)})</span></div>
        </div>
        
        ${habs ? `<div class="detail-row"><span class="detail-label">Habilidades:</span><span class="detail-value">${habs}</span></div>` : ''}
        
        ${rasgos}
        ${acciones}
        
        <button class="btn btn-sm btn-primary" style="width:100%; margin-top:10px;" 
                onclick="addMonsterToCombat('${m.id}')">➕ Añadir a Combate</button>
    `;
}

window.addMonsterToCombat = function(id) {
    const m = BESTIARIO[id];
    if (!m) return;
    
    const hpMatch = m.pg ? m.pg.match(/^(\d+)/) : null;
    const hpMax = hpMatch ? parseInt(hpMatch[1]) : 30;
    const modDES = m.stats?.destreza ? Math.floor((m.stats.destreza - 10) / 2) : 0;
    
    combatants.push({
        id: m.id + '_' + Date.now(),
        name: m.nombre || 'Monstruo',
        type: 'npc',
        initiative: Math.floor(Math.random() * 20) + 1 + modDES,
        hp: hpMax,
        hpMax: hpMax,
        ac: m.ca || 10,
        conditions: ''
    });
    
    renderCombatList();
    saveCombat();
    mostrarMensaje(`${m.nombre || 'Monstruo'} añadido`);
    
    // Cambiar a pestaña de combate
    const combatBtn = document.querySelector('.nav button:first-child');
    if (combatBtn) switchTab('combat', { target: combatBtn });
};

// ==================== FUNCIONES DE OBJETOS ====================
window.applyItemFilters = function() {
    dmState.itemFilters.category = document.getElementById('filterItemCategory').value;
    dmState.itemFilters.rarity = document.getElementById('filterItemRarity').value;
    dmState.itemFilters.search = document.getElementById('filterItemSearch').value.toLowerCase().trim();
    renderItemList();
};

function renderItemList() {
    const listDiv = document.getElementById('itemList');
    if (!listDiv) return;
    
    if (!OBJETOS || Object.keys(OBJETOS).length === 0) {
        listDiv.innerHTML = '<p style="color:#f44336; text-align:center;">Sin datos de objetos</p>';
        return;
    }
    
    let filtered = Object.values(OBJETOS).filter(i => {
        if (dmState.itemFilters.category !== 'all' && i.categoria !== dmState.itemFilters.category) return false;
        if (dmState.itemFilters.rarity !== 'all' && i.rareza !== dmState.itemFilters.rarity) return false;
        if (dmState.itemFilters.search && i.nombre && !i.nombre.toLowerCase().includes(dmState.itemFilters.search)) return false;
        return true;
    }).sort((a, b) => (a.nombre || '').localeCompare(b.nombre || ''));
    
    if (filtered.length === 0) {
        listDiv.innerHTML = '<p style="color:#666; text-align:center;">Sin resultados</p>';
        return;
    }
    
    let html = '';
    filtered.forEach(i => {
        html += `<div class="monster-item ${dmState.selectedItemId === i.id ? 'selected' : ''}" 
                      onclick="selectItem('${i.id}')">
                    <span class="monster-name">${i.nombre || 'Sin nombre'}</span>
                    <span class="monster-cr">${i.rareza || 'Común'}</span>
                </div>`;
    });
    listDiv.innerHTML = html;
}

window.selectItem = function(id) {
    dmState.selectedItemId = id;
    renderItemList();
    renderItemDetail(OBJETOS[id]);
};

function renderItemDetail(i) {
    const div = document.getElementById('itemDetail');
    if (!div || !i) return;
    
    let props = i.propiedades && Array.isArray(i.propiedades) ? i.propiedades.join(', ') : '';
    
    div.innerHTML = `
        <h3>${i.nombre || 'Sin nombre'}</h3>
        <div class="detail-row"><span class="detail-label">Categoría:</span><span class="detail-value">${i.categoria || '-'}</span></div>
        <div class="detail-row"><span class="detail-label">Rareza:</span><span class="detail-value">${i.rareza || 'Común'}</span></div>
        ${i.daño ? `<div class="detail-row"><span class="detail-label">Daño:</span><span class="detail-value">${i.daño} ${i.tipo_daño || ''}</span></div>` : ''}
        ${i.ca_base ? `<div class="detail-row"><span class="detail-label">CA:</span><span class="detail-value">${i.ca_base}</span></div>` : ''}
        ${props ? `<div class="detail-row"><span class="detail-label">Propiedades:</span><span class="detail-value">${props}</span></div>` : ''}
        <div class="detail-row"><span class="detail-label">Peso:</span><span class="detail-value">${i.peso || 0} lb</span></div>
        
        <div style="margin-top:10px; padding-top:8px; border-top:1px solid #444;">
            <p style="color:#ccc;">${i.descripcion || 'Sin descripción'}</p>
        </div>
        
        <button class="btn btn-sm btn-primary" style="width:100%; margin-top:10px;" 
                onclick="copyItem('${i.id}')">📋 Copiar</button>
    `;
}

window.copyItem = function(id) {
    const i = OBJETOS[id];
    if (!i) return;
    
    let txt = `${i.nombre || 'Objeto'} (${i.rareza || 'Común'})\n`;
    if (i.categoria) txt += `${i.categoria}\n`;
    if (i.daño) txt += `Daño: ${i.daño} ${i.tipo_daño || ''}\n`;
    if (i.ca_base) txt += `CA: ${i.ca_base}\n`;
    if (i.propiedades && Array.isArray(i.propiedades)) txt += `Propiedades: ${i.propiedades.join(', ')}\n`;
    txt += `\n${i.descripcion || ''}`;
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(txt).then(() => mostrarMensaje('Copiado!'));
    } else {
        // Fallback para móviles sin clipboard API
        const textarea = document.createElement('textarea');
        textarea.value = txt;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        mostrarMensaje('Copiado!');
    }
};

// ==================== FUNCIONES DE COMBATE ====================
function loadCombat() {
    try {
        const saved = localStorage.getItem('dm_combat');
        if (saved) {
            const data = JSON.parse(saved);
            combatants = data.combatants || [];
            currentTurnIndex = data.currentTurnIndex || 0;
            combatLog = data.combatLog || [{ text: 'Sistema listo', time: new Date().toLocaleTimeString() }];
        } else {
            combatants = [];
            currentTurnIndex = 0;
            combatLog = [{ text: 'Sistema listo', time: new Date().toLocaleTimeString() }];
        }
    } catch (e) {
        console.error('Error cargando combate:', e);
        combatants = [];
        currentTurnIndex = 0;
        combatLog = [{ text: 'Sistema listo', time: new Date().toLocaleTimeString() }];
    }
    sortByInitiative(false);
    renderCombatList();
    renderCombatLog();
}

function saveCombat() {
    try {
        localStorage.setItem('dm_combat', JSON.stringify({
            combatants, currentTurnIndex, combatLog
        }));
    } catch (e) {
        console.error('Error guardando combate:', e);
    }
}

function addLogEntry(text) {
    combatLog.unshift({ text, time: new Date().toLocaleTimeString() });
    if (combatLog.length > 15) combatLog.pop();
    renderCombatLog();
    saveCombat();
}

function renderCombatLog() {
    const logDiv = document.getElementById('logEntries');
    if (!logDiv) return;
    if (!combatLog || combatLog.length === 0) {
        logDiv.innerHTML = '<div class="log-entry">Sin eventos</div>';
        return;
    }
    let html = '';
    combatLog.forEach(e => {
        html += `<div class="log-entry"><span class="log-time">[${e.time}]</span> ${e.text}</div>`;
    });
    logDiv.innerHTML = html;
}

function renderCombatList() {
    const listDiv = document.getElementById('combatantList');
    if (!listDiv) return;
    
    if (combatants.length === 0) {
        listDiv.innerHTML = '<p style="color:#666; text-align:center; padding:20px;">Sin combatientes</p>';
        return;
    }
    
    let html = '';
    combatants.forEach((c, i) => {
        const isCurrent = i === currentTurnIndex;
        
        // Generar botones de estado para este combatiente
        let stateButtons = '';
        dmStates.forEach(state => {
            const isActive = c.conditions && c.conditions.includes(state.name);
            stateButtons += `<button class="condition-btn" style="${isActive ? 'background:var(--exito);' : 'background:#444;'}" 
                                   onclick="toggleCombatantState('${state.id}', ${i})">${state.name}</button>`;
        });
        
        html += `
            <div class="combatant-row ${isCurrent ? 'current-turn' : ''}" 
                 draggable="true"
                 ondragstart="dragStart(event, ${i})"
                 ondragover="dragOver(event, ${i})"
                 ondragend="dragEnd(event)"
                 data-index="${i}">
                
                <div class="combatant-row-top">
                    <div class="combatant-drag-handle" draggable="false">☰</div>
                    <div class="combatant-name ${c.type || 'npc'}">${c.name || 'Sin nombre'}</div>
                </div>
                
                <div class="combatant-row-fields">
                    <input type="number" class="combatant-initiative" value="${c.initiative || 0}" 
                           onchange="updateCombatant(${i}, 'initiative', this.value)" placeholder="Ini">
                    
                    <div class="combatant-hp">
                        <input type="number" value="${c.hp || 0}" onchange="updateCombatant(${i}, 'hp', this.value)">
                        <span class="hp-max">/${c.hpMax || 0}</span>
                    </div>
                    
                    <input type="number" class="combatant-ac" value="${c.ac || 10}" 
                           onchange="updateCombatant(${i}, 'ac', this.value)" placeholder="CA">
                    
                    <input type="text" class="combatant-conditions" value="${c.conditions || ''}" 
                           onchange="updateCombatant(${i}, 'conditions', this.value)" placeholder="Condiciones">
                </div>
                
                <div class="combatant-actions">
                    <button class="btn-hp-minus" onclick="adjustHP(${i}, -1)">-1</button>
                    <button class="btn-hp-minus" onclick="adjustHP(${i}, -5)">-5</button>
                    <button class="btn-hp-plus" onclick="adjustHP(${i}, 1)">+1</button>
                    <button class="btn-hp-plus" onclick="adjustHP(${i}, 5)">+5</button>
                    <button class="btn-remove" onclick="removeCombatant(${i})">✕</button>
                </div>
                
                <!-- Botones de estado rápidos -->
                <div class="combatant-states" style="grid-column: 1 / -1; display: flex; flex-wrap: wrap; gap: 2px; margin-top: 5px;">
                    ${stateButtons}
                </div>
            </div>
        `;
    });
    listDiv.innerHTML = html;
}

function adjustHP(i, delta) {
    if (!combatants[i]) return;
    const old = combatants[i].hp;
    const n = Math.max(0, Math.min(combatants[i].hpMax || 999, (combatants[i].hp || 0) + delta));
    combatants[i].hp = n;
    addLogEntry(`${combatants[i].name}: ${old}→${n} ${delta>0?'+'+delta:delta} PG`);
    renderCombatList();
    saveCombat();
}

function updateCombatant(i, prop, val) {
    if (!combatants[i]) return;
    if (prop === 'initiative' || prop === 'hp' || prop === 'ac') {
        combatants[i][prop] = parseInt(val) || 0;
    } else {
        combatants[i][prop] = val;
    }
    saveCombat();
}

function removeCombatant(i) {
    if (!confirm('¿Eliminar este combatiente?')) return;
    const name = combatants[i].name;
    combatants.splice(i, 1);
    if (currentTurnIndex >= combatants.length) currentTurnIndex = Math.max(0, combatants.length - 1);
    renderCombatList();
    saveCombat();
    addLogEntry(`${name} eliminado`);
}

window.sortByInitiative = function(save = true) {
    combatants.sort((a, b) => (b.initiative || 0) - (a.initiative || 0));
    currentTurnIndex = 0;
    renderCombatList();
    if (save) {
        saveCombat();
        addLogEntry('Reordenado por iniciativa');
    }
};

window.nextTurn = function() {
    if (combatants.length === 0) return;
    currentTurnIndex = (currentTurnIndex + 1) % combatants.length;
    renderCombatList();
    saveCombat();
    addLogEntry(`Turno: ${combatants[currentTurnIndex].name}`);
};

window.rollInitiativeForAll = function() {
    combatants.forEach(c => {
        const mod = Math.floor((c.ac ? Math.min(20, c.ac - 10) : 10) / 2 - 5);
        c.initiative = Math.floor(Math.random() * 20) + 1 + mod;
    });
    sortByInitiative(true);
    addLogEntry('🎲 Nuevas iniciativas');
};

window.resetCombat = function() {
    if (!confirm('¿Reiniciar combate? Se restablecerán los PG de todos.')) return;
    combatants.forEach(c => { c.hp = c.hpMax; c.conditions = ''; });
    currentTurnIndex = 0;
    renderCombatList();
    saveCombat();
    addLogEntry('Combate reiniciado');
};

window.addConditionToCurrent = function(cond) {
    if (combatants.length === 0) return;
    const c = combatants[currentTurnIndex];
    c.conditions = c.conditions ? `${c.conditions}, ${cond}` : cond;
    renderCombatList();
    saveCombat();
    addLogEntry(`${c.name}: +${cond}`);
};

// Drag & drop
window.dragStart = function(e, i) { 
    dragSourceIndex = i; 
    e.dataTransfer.setData('text/plain', i); 
    e.target.classList.add('dragging'); 
};

window.dragOver = function(e, i) { 
    e.preventDefault(); 
};

window.dragEnd = function(e) { 
    e.target.classList.remove('dragging'); 
    dragSourceIndex = null; 
};

document.addEventListener('drop', function(e) {
    e.preventDefault();
    const row = e.target.closest('.combatant-row');
    if (row && row.dataset.index !== undefined && dragSourceIndex !== null) {
        const target = parseInt(row.dataset.index);
        if (dragSourceIndex === target) return;
        
        const [removed] = combatants.splice(dragSourceIndex, 1);
        combatants.splice(target, 0, removed);
        
        if (dragSourceIndex === currentTurnIndex) currentTurnIndex = target;
        else if (dragSourceIndex < currentTurnIndex && target >= currentTurnIndex) currentTurnIndex--;
        else if (dragSourceIndex > currentTurnIndex && target <= currentTurnIndex) currentTurnIndex++;
        
        renderCombatList();
        saveCombat();
        addLogEntry('Orden cambiado');
    }
});

document.addEventListener('dragover', function(e) { 
    e.preventDefault(); 
});

// ==================== MODALES ====================
function openModal(title, body, cb) {
    let overlay = document.getElementById('modalOverlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'modalOverlay';
        overlay.className = 'modal-overlay';
        document.body.appendChild(overlay);
    }
    
    overlay.innerHTML = `
        <div class="modal-content">
            <h3>${title}</h3>
            ${body}
            <div class="modal-buttons">
                <button class="btn btn-sm" onclick="closeModal()">Cancelar</button>
                <button class="btn btn-sm btn-primary" id="modalConfirmBtn">OK</button>
            </div>
        </div>
    `;
    
    overlay.style.display = 'flex';
    document.getElementById('modalConfirmBtn').onclick = function() { 
        if (cb) cb(); 
        closeModal(); 
    };
}

window.closeModal = function() {
    const overlay = document.getElementById('monsterModal');
    if (overlay) overlay.style.display = 'none';
};

window.openAddPlayerModal = function() {
    openModal('Añadir PJ', `
        <div class="modal-body">
            <label>Nombre:</label><input id="modalName" placeholder="Aric" autofocus>
            <label>Iniciativa:</label><input id="modalInit" type="number" value="10">
            <label>PG Máx:</label><input id="modalHP" type="number" value="30">
            <label>CA:</label><input id="modalAC" type="number" value="12">
        </div>
    `, function() {
        const name = document.getElementById('modalName').value;
        if (!name) {
            alert('El nombre es obligatorio');
            return;
        }
        combatants.push({
            id: 'pc_' + Date.now(),
            name: name,
            type: 'pc',
            initiative: parseInt(document.getElementById('modalInit').value) || 10,
            hp: parseInt(document.getElementById('modalHP').value) || 30,
            hpMax: parseInt(document.getElementById('modalHP').value) || 30,
            ac: parseInt(document.getElementById('modalAC').value) || 12,
            conditions: ''
        });
        renderCombatList();
        saveCombat();
        addLogEntry(`${name} añadido`);
    });
};

// ==================== FUNCIONES DEL MODAL DE MONSTRUOS ====================
window.openAddMonsterModal = function() {
    const modal = document.getElementById('monsterModal');
    if (!modal) {
        console.error('Error: #monsterModal no encontrado en el DOM.');
        alert('Error: No se pudo abrir el modal.');
        return;
    }

    // Limpiar búsqueda y selección previa
    document.getElementById('modalMonsterSearch').value = '';
    document.getElementById('selectedMonsterId').value = '';
    document.getElementById('modalSelectedMessage').innerHTML = '';

    // Renderizar la lista completa de monstruos
    renderModalMonsterList();

    // Mostrar el modal
    modal.style.display = 'flex';
};

// Función para renderizar la lista de monstruos en el modal
function renderModalMonsterList() {
    const listDiv = document.getElementById('modalMonsterList');
    const searchTerm = document.getElementById('modalMonsterSearch').value.toLowerCase().trim();

    if (!BESTIARIO || Object.keys(BESTIARIO).length === 0) {
        listDiv.innerHTML = '<p style="color:#f44336; text-align:center;">Error: Datos del bestiario no cargados.</p>';
        return;
    }

    // Filtrar los monstruos por el término de búsqueda
    let monstersToShow = Object.values(BESTIARIO);
    if (searchTerm) {
        monstersToShow = monstersToShow.filter(m => 
            m.nombre && m.nombre.toLowerCase().includes(searchTerm)
        );
    }

    // Guardar la lista filtrada globalmente para usarla en la selección
    modalFilteredMonsters = monstersToShow;

    if (modalFilteredMonsters.length === 0) {
        listDiv.innerHTML = '<p style="color:#666; text-align:center;">No se encontraron monstruos.</p>';
        return;
    }

    // Ordenar alfabéticamente
    modalFilteredMonsters.sort((a, b) => (a.nombre || '').localeCompare(b.nombre || ''));

    let html = '';
    const selectedId = document.getElementById('selectedMonsterId').value;

    modalFilteredMonsters.forEach(m => {
        const isSelected = (m.id === selectedId);
        html += `<div class="modal-monster-item ${isSelected ? 'selected' : ''}" 
                      data-monster-id="${m.id}"
                      onclick="selectModalMonster('${m.id}')">
                    <span class="monster-name">${m.nombre || 'Sin nombre'}</span>
                    <span class="monster-cr">CR ${m.cr || '?'}</span>
                 </div>`;
    });
    listDiv.innerHTML = html;
}

// Función para seleccionar un monstruo del modal
window.selectModalMonster = function(id) {
    // 1. Guardar el ID en el campo oculto
    document.getElementById('selectedMonsterId').value = id;

    // 2. Actualizar la UI (quitar la clase 'selected' de todos y ponerla en el nuevo)
    document.querySelectorAll('#modalMonsterList .modal-monster-item').forEach(el => {
        el.classList.remove('selected');
    });
    const selectedElement = document.querySelector(`#modalMonsterList .modal-monster-item[data-monster-id="${id}"]`);
    if (selectedElement) {
        selectedElement.classList.add('selected');
    }

    // 3. Mostrar un mensaje de confirmación
    const monster = BESTIARIO[id];
    if (monster) {
        document.getElementById('modalSelectedMessage').innerHTML = `✓ ${monster.nombre} seleccionado`;
    }
};

// Función para filtrar la lista en tiempo real
window.updateModalMonsterFilters = function() {
    renderModalMonsterList();
};

// Función para confirmar y añadir el monstruo al combate
window.confirmAddMonster = function() {
    const selectedId = document.getElementById('selectedMonsterId').value;

    if (!selectedId) {
        alert('Por favor, selecciona un monstruo de la lista.');
        return;
    }

    const monster = BESTIARIO[selectedId];
    if (!monster) {
        alert('Error: No se encontraron los datos del monstruo seleccionado.');
        return;
    }

    // Extraer los puntos de golpe máximos
    let hpMax = 30; // Valor por defecto
    if (monster.pg) {
        const match = monster.pg.match(/^(\d+)/);
        if (match) hpMax = parseInt(match[1]);
    }

    // Calcular el modificador de iniciativa
    const modDES = monster.stats?.destreza ? Math.floor((monster.stats.destreza - 10) / 2) : 0;

    // Crear el objeto del combatiente
    combatants.push({
        id: monster.id + '_' + Date.now(),
        name: monster.nombre || 'Monstruo',
        type: 'npc',
        initiative: Math.floor(Math.random() * 20) + 1 + modDES,
        hp: hpMax,
        hpMax: hpMax,
        ac: monster.ca || 10,
        conditions: ''
    });

    // Actualizar la interfaz y guardar
    renderCombatList();
    saveCombat();
    addLogEntry(`${monster.nombre} añadido al combate.`);
    
    // Cerrar el modal
    closeModal();

    // Cambiar a la pestaña de combate para ver el resultado
    const combatBtn = document.querySelector('.nav button:first-child');
    if (combatBtn) switchTab('combat', { target: combatBtn });
};

// ==================== FUNCIONES DE NOTAS ====================
function cargarNotas() {
    try {
        const saved = localStorage.getItem('dm_notes');
        if (saved) {
            dmState.notes = saved;
            const ta = document.getElementById('dmNotes');
            if (ta) ta.value = saved;
        }
    } catch (e) {
        console.error('Error cargando notas:', e);
    }
}

function guardarNotas() {
    try { 
        localStorage.setItem('dm_notes', dmState.notes); 
    } catch (e) {
        console.error('Error guardando notas:', e);
    }
}

// ==================== UTILS ====================
function mostrarMensaje(msg) {
    const d = document.createElement('div');
    d.className = 'message-bar';
    d.textContent = msg;
    const container = document.querySelector('.container');
    if (container) {
        container.insertBefore(d, container.firstChild);
        setTimeout(() => d.remove(), 2000);
    }
}

// Asegurar que todas las funciones están en el ámbito global
window.switchTab = switchTab;
window.applyFilters = applyFilters;
window.selectMonster = selectMonster;
window.addMonsterToCombat = addMonsterToCombat;
window.applyItemFilters = applyItemFilters;
window.selectItem = selectItem;
window.copyItem = copyItem;
window.nextTurn = nextTurn;
window.sortByInitiative = sortByInitiative;
window.resetCombat = resetCombat;
window.adjustHP = adjustHP;
window.updateCombatant = updateCombatant;
window.removeCombatant = removeCombatant;
window.openAddPlayerModal = openAddPlayerModal;
window.openAddMonsterModal = openAddMonsterModal;
window.rollInitiativeForAll = rollInitiativeForAll;
window.addConditionToCurrent = addConditionToCurrent;
window.toggleCombatantState = toggleCombatantState;
window.selectModalMonster = selectModalMonster;
window.confirmAddMonster = confirmAddMonster;
window.updateModalMonsterFilters = updateModalMonsterFilters;
window.closeModal = closeModal;
window.dragStart = dragStart;
window.dragOver = dragOver;
window.dragEnd = dragEnd;