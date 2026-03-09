// ui_mejorada.js - Interfaz de usuario para el constructor de personajes
// Versión 3.3 - CORREGIDA: Transferencia de inventario y objetos vinculados

document.addEventListener('DOMContentLoaded', function() {
    // --- Elementos del DOM ---
    const elements = {
        charName: document.getElementById('charName'),
        selectRace: document.getElementById('selectRace'),
        selectSubrace: document.getElementById('selectSubrace'),
        selectClass: document.getElementById('selectClass'),
        selectSubclass: document.getElementById('selectSubclass'),
        selectBackground: document.getElementById('selectBackground'),
        selectSecondBackground: document.getElementById('selectSecondBackground'),
        levelSelect: document.getElementById('levelSelect'),
        groupSubrace: document.getElementById('groupSubrace'),
        groupSubclass: document.getElementById('groupSubclass'),
        groupSkills: document.getElementById('groupSkills'),
        groupSpells: document.getElementById('groupSpells'),
        groupEquipment: document.getElementById('groupEquipment'),
        groupSecondBackground: document.getElementById('groupSecondBackground'),
        selectMainWeapon: document.getElementById('selectMainWeapon'),
        selectArmor: document.getElementById('selectArmor'),
        offHandContainer: document.getElementById('offHandContainer'),
        selectOffHand: document.getElementById('selectOffHand'),
        offHandWarning: document.getElementById('offHandWarning'),
        weaponWarning: document.getElementById('weaponWarning'),
        raceDescription: document.getElementById('raceDescription'),
        subraceDescription: document.getElementById('subraceDescription'),
        classDescription: document.getElementById('classDescription'),
        subclassDescription: document.getElementById('subclassDescription'),
        backgroundDescription: document.getElementById('backgroundDescription'),
        secondBackgroundDescription: document.getElementById('secondBackgroundDescription'),
        previewArea: document.getElementById('previewArea'),
        btnGenerate: document.getElementById('btnGenerate'),
        btnReset: document.getElementById('btnReset'),
        btnRandomExample: document.getElementById('btnRandomExample'),
        statDistribution: document.getElementById('statDistribution'),
        statProgress: document.getElementById('statProgress'),
        statWarning: document.getElementById('statWarning'),
        errorContainer: document.getElementById('errorContainer'),
        successContainer: document.getElementById('successContainer'),
        tabStats: document.getElementById('tab-stats'),
        tabSkills: document.getElementById('tab-skills'),
        tabFeatures: document.getElementById('tab-features'),
        tabSpells: document.getElementById('tab-spells'),
        skillSelector: document.getElementById('skillSelector'),
        selectedSkillsDisplay: document.getElementById('selectedSkillsDisplay'),
        spellSelector: document.getElementById('spellSelector'),
        spellInfo: document.getElementById('spellInfo')
    };

    // --- Estado de la Aplicación ---
    let state = {
        nombre: 'Aric',
        razaId: '',
        subrazaId: '',
        claseId: '',
        subclaseId: '',
        trasfondoId: '',
        segundoTrasfondoId: '',
        nivel: 1,
        statsBase: {
            fuerza: 10, destreza: 10, constitucion: 10,
            inteligencia: 10, sabiduria: 10, carisma: 10
        },
        statsVariante: ['fuerza', 'destreza'],
        habilidadesSeleccionadas: [],
        hechizosSeleccionados: [],
        mainWeaponId: '',
        armorId: '',
        offHandId: '' // Nueva propiedad para mano secundaria
    };

    // Mapa de habilidades a estadísticas
    const skillStatMap = {
        'Acrobacias': 'destreza', 'Atletismo': 'fuerza', 'Engaño': 'carisma',
        'Perspicacia': 'sabiduria', 'Intimidación': 'carisma', 'Investigación': 'inteligencia',
        'Percepción': 'sabiduria', 'Persuasión': 'carisma', 'Sigilo': 'destreza',
        'Supervivencia': 'sabiduria', 'Arcano': 'inteligencia', 'Historia': 'inteligencia',
        'Naturaleza': 'inteligencia', 'Religión': 'inteligencia', 'Juego de Manos': 'destreza',
        'Medicina': 'sabiduria', 'Trato con Animales': 'carisma', 'Actuación': 'carisma'
    };

    // --- Inicialización ---
    function init() {
        populateRazas();
        populateClases();
        populateTrasfondos();
        populateLevels();
        setupStatDistribution();
        setupEventListeners();
        updateUIDependencias();
        checkGenerateButton();
    }

    // --- Población de Selectores ---
    function populateRazas() {
        elements.selectRace.innerHTML = '<option value="">Selecciona una raza...</option>';
        for (let key in RAZAS) {
            let raza = RAZAS[key];
            let option = document.createElement('option');
            option.value = key;
            option.textContent = raza.nombre;
            elements.selectRace.appendChild(option);
        }
    }

    function populateClases() {
        elements.selectClass.innerHTML = '<option value="">Selecciona una clase...</option>';
        for (let key in CLASES) {
            let clase = CLASES[key];
            let option = document.createElement('option');
            option.value = key;
            option.textContent = clase.nombre;
            elements.selectClass.appendChild(option);
        }
    }

    function populateTrasfondos() {
        elements.selectBackground.innerHTML = '<option value="">Selecciona un trasfondo...</option>';
        elements.selectSecondBackground.innerHTML = '<option value="">Selecciona un segundo trasfondo...</option>';
        for (let key in TRASFONDOS) {
            let tf = TRASFONDOS[key];
            let option = document.createElement('option');
            option.value = key;
            option.textContent = tf.nombre;
            elements.selectBackground.appendChild(option.cloneNode(true));
            elements.selectSecondBackground.appendChild(option.cloneNode(true));
        }
    }

    function populateLevels() {
        elements.levelSelect.value = '1';
    }

    // --- Distribución de Estadísticas ---
    function setupStatDistribution() {
        renderStatDistribution();
    }

    function renderStatDistribution() {
        const stats = ['fuerza', 'destreza', 'constitucion', 'inteligencia', 'sabiduria', 'carisma'];
        let html = '';
        let totalPoints = 0;
        const MAX_POINTS = 27;

        stats.forEach(stat => {
            const value = state.statsBase[stat];
            const cost = getPointCost(value);
            totalPoints += cost;
            const mod = CONSTANTES.MODIFICADORES_STATS[value] || 0;
            const modSign = mod >= 0 ? `+${mod}` : mod;

            html += `
                <div class="stat-card">
                    <div class="stat-name">${stat.charAt(0).toUpperCase() + stat.slice(1)}</div>
                    <div class="stat-value">${value}</div>
                    <div class="stat-mod">(${modSign})</div>
                    <div class="stat-controls">
                        <button class="stat-btn minus" data-stat="${stat}" ${value <= 8 ? 'disabled' : ''}>-</button>
                        <button class="stat-btn plus" data-stat="${stat}" ${value >= 15 ? 'disabled' : ''}>+</button>
                    </div>
                </div>
            `;
        });

        elements.statDistribution.innerHTML = html;
        
        const percentage = Math.min(100, (totalPoints / MAX_POINTS) * 100);
        elements.statProgress.style.width = `${percentage}%`;
        
        if (totalPoints > MAX_POINTS) {
            elements.statWarning.classList.remove('hidden');
        } else {
            elements.statWarning.classList.add('hidden');
        }

        document.querySelectorAll('.stat-btn.plus').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const stat = e.target.dataset.stat;
                if (state.statsBase[stat] < 15) {
                    state.statsBase[stat]++;
                    renderStatDistribution();
                    updatePreview();
                }
            });
        });

        document.querySelectorAll('.stat-btn.minus').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const stat = e.target.dataset.stat;
                if (state.statsBase[stat] > 8) {
                    state.statsBase[stat]--;
                    renderStatDistribution();
                    updatePreview();
                }
            });
        });
    }

    function getPointCost(score) {
        const costMap = {8:0, 9:1, 10:2, 11:3, 12:4, 13:5, 14:7, 15:9};
        return costMap[score] || 0;
    }

    // --- SELECTOR DE HECHIZOS COMPLETO ---
    function updateSpellSelector() {
        const tieneMagia = verificarCapacidadMagica();
        
        if (!tieneMagia) {
            elements.groupSpells.classList.add('hidden');
            return;
        }

        const clase = CLASES[state.claseId];
        const nivel = state.nivel;
        
        let claseHechizos = state.claseId;
        
        if (state.subclaseId && typeof SUBCLASES !== 'undefined') {
            const subclase = SUBCLASES[state.subclaseId];
            if (subclase && subclase.lista_hechizos) {
                claseHechizos = subclase.lista_hechizos;
            }
        }
        
        const limites = obtenerLimitesHechizos(clase, nivel, claseHechizos);
        generarSelectorHechizos(claseHechizos, limites, nivel);
    }

    function verificarCapacidadMagica() {
        if (state.claseId && CLASES[state.claseId] && CLASES[state.claseId].magia) {
            return true;
        }
        
        if (state.subclaseId && typeof SUBCLASES !== 'undefined') {
            const subclase = SUBCLASES[state.subclaseId];
            if (subclase && subclase.tiene_magia === true) {
                return true;
            }
        }
        
        return false;
    }

    function obtenerLimitesHechizos(clase, nivel, claseHechizos) {
        let maxCantrips = 0;
        let maxSpells = 0;
        let maxNivelConjuro = 1;
        
        if (clase.magia) {
            if (clase.magia.tipo === "completo") {
                maxNivelConjuro = Math.min(9, Math.ceil(nivel / 2) + 1);
            } else if (clase.magia.tipo === "medio") {
                maxNivelConjuro = Math.min(5, Math.ceil(nivel / 4) + 1);
            } else if (clase.magia.tipo === "tercio") {
                maxNivelConjuro = Math.min(4, Math.ceil(nivel / 6) + 1);
            }
        } else {
            maxNivelConjuro = Math.min(4, Math.ceil(nivel / 3));
        }
        
        if (clase.id === 'mago') {
            maxCantrips = 3;
            maxSpells = 6;
        } else if (clase.id === 'hechicero') {
            maxCantrips = 4;
            maxSpells = 2;
        } else if (clase.id === 'clerigo' || clase.id === 'druida') {
            maxCantrips = 3;
            maxSpells = 0;
            elements.spellInfo.innerHTML = '<p>Los clérigos y druidas preparan conjuros, no los conocen de antemano. Esta funcionalidad está simplificada.</p>';
        } else if (clase.id === 'bardo') {
            maxCantrips = 2;
            maxSpells = 4;
        } else if (clase.id === 'explorador' || clase.id === 'artificiero') {
            maxCantrips = 0;
            maxSpells = 2;
        } else if (clase.id === 'guerrero' && claseHechizos === 'mago') {
            maxCantrips = 2;
            maxSpells = 3;
        } else if (clase.id === 'picaro' && claseHechizos === 'mago') {
            maxCantrips = 2;
            maxSpells = 3;
        }
        
        return { maxCantrips, maxSpells, maxNivelConjuro };
    }

    function generarSelectorHechizos(claseHechizos, limites, nivel) {
        let html = '<div class="spell-categories">';
        
        let cantripCount = 0;
        let spellCount = 0;
        
        state.hechizosSeleccionados.forEach(id => {
            if (HECHIZOS.trucos && HECHIZOS.trucos[id]) {
                cantripCount++;
            } else {
                spellCount++;
            }
        });
        
        if (HECHIZOS.trucos) {
            html += '<div class="spell-category">';
            html += '<h5>Trucos (Cantrips) - Nivel 0</h5>';
            
            let hasSpells = false;
            for (let key in HECHIZOS.trucos) {
                const spell = HECHIZOS.trucos[key];
                if (spell.clases_permitidas && spell.clases_permitidas.includes(claseHechizos)) {
                    hasSpells = true;
                    const checked = state.hechizosSeleccionados.includes(key) ? 'checked' : '';
                    const disabled = (!checked && cantripCount >= limites.maxCantrips) ? 'disabled' : '';
                    html += `
                        <div class="spell-item">
                            <input type="checkbox" class="spell-checkbox" data-type="truco" data-id="${key}" ${checked} ${disabled}>
                            <label><strong>${spell.nombre}</strong> - ${spell.mecanica.descripcion || ''}</label>
                        </div>
                    `;
                }
            }
            if (!hasSpells) {
                html += '<p class="no-spells">No hay trucos disponibles para esta clase.</p>';
            }
            html += '</div>';
        }

        for (let nivelConjuro = 1; nivelConjuro <= limites.maxNivelConjuro; nivelConjuro++) {
            const nivelKey = `nivel_${nivelConjuro}`;
            
            if (HECHIZOS[nivelKey]) {
                html += '<div class="spell-category">';
                html += `<h5>Nivel ${nivelConjuro}</h5>`;
                
                let hasSpells = false;
                for (let key in HECHIZOS[nivelKey]) {
                    const spell = HECHIZOS[nivelKey][key];
                    if (spell.clases_permitidas && spell.clases_permitidas.includes(claseHechizos)) {
                        hasSpells = true;
                        const checked = state.hechizosSeleccionados.includes(key) ? 'checked' : '';
                        const disabled = (nivelConjuro === 1 && !checked && spellCount >= limites.maxSpells) ? 'disabled' : '';
                        html += `
                            <div class="spell-item">
                                <input type="checkbox" class="spell-checkbox" data-type="nivel${nivelConjuro}" data-id="${key}" ${checked} ${disabled}>
                                <label><strong>${spell.nombre}</strong> - ${spell.mecanica.descripcion || ''}</label>
                            </div>
                        `;
                    }
                }
                if (!hasSpells) {
                    html += '<p class="no-spells">No hay hechizos de este nivel disponibles.</p>';
                }
                html += '</div>';
            }
        }
        
        html += '</div>';
        elements.spellSelector.innerHTML = html;
        elements.groupSpells.classList.remove('hidden');

        document.querySelectorAll('.spell-checkbox').forEach(cb => {
            cb.addEventListener('change', function(e) {
                const spellId = this.dataset.id;
                if (this.checked) {
                    if (!state.hechizosSeleccionados.includes(spellId)) {
                        state.hechizosSeleccionados.push(spellId);
                    }
                } else {
                    state.hechizosSeleccionados = state.hechizosSeleccionados.filter(id => id !== spellId);
                }
                updateSpellSelector();
            });
        });
    }

    // --- POBLAR SELECTORES DE EQUIPO MEJORADOS ---
    function populateEquipmentSelects() {
        // CORRECCIÓN: Verificar que exista claseId
        if (!state.claseId) return;
        
        const clase = CLASES[state.claseId];
        if (!clase) return;

        // Arma principal
        elements.selectMainWeapon.innerHTML = '<option value="">Selecciona un arma...</option>';
        for (let key in OBJETOS) {
            const obj = OBJETOS[key];
            if (obj.tipo === "Marcial" || obj.tipo === "Sencilla") {
                const option = document.createElement('option');
                option.value = key;
                option.textContent = obj.nombre;
                option.dataset.tipo = obj.tipo;
                option.dataset.propiedades = JSON.stringify(obj.propiedades || []);
                option.dataset.daño = obj.daño || '1d4';
                option.dataset.tipoDaño = obj.tipo_daño || 'contundente';
                option.dataset.maestria = obj.maestria || 'Ninguna';
                elements.selectMainWeapon.appendChild(option);
            }
        }

        // Armadura
        elements.selectArmor.innerHTML = '<option value="">Ninguna</option>';
        for (let key in OBJETOS) {
            const obj = OBJETOS[key];
            if (obj.tipo === "Ligera" || obj.tipo === "Media" || obj.tipo === "Pesada" || obj.tipo === "Escudo") {
                const option = document.createElement('option');
                option.value = key;
                option.textContent = obj.nombre;
                option.dataset.tipo = obj.tipo;
                option.dataset.caBase = obj.ca_base || 0;
                elements.selectArmor.appendChild(option);
            }
        }

        // Selector de mano secundaria (se poblara dinámicamente al seleccionar arma)
        elements.selectOffHand.innerHTML = '<option value="">Ninguno</option>';

        elements.selectMainWeapon.addEventListener('change', onMainWeaponChange);
        elements.selectOffHand.addEventListener('change', onOffHandChange);
        elements.selectArmor.addEventListener('change', onArmorChange);
    }

    function onMainWeaponChange() {
        const selectedOption = elements.selectMainWeapon.options[elements.selectMainWeapon.selectedIndex];
        const armaTipo = selectedOption.dataset.tipo;
        const propiedades = selectedOption.dataset.propiedades ? JSON.parse(selectedOption.dataset.propiedades) : [];
        const clase = CLASES[state.claseId];
        const competenciasArma = clase.competencias.armas || [];

        // Verificar competencia
        if (armaTipo && !competenciasArma.includes(armaTipo) && !competenciasArma.includes("Todas")) {
            elements.weaponWarning.classList.remove('hidden');
            state.mainWeaponId = '';
        } else {
            elements.weaponWarning.classList.add('hidden');
            state.mainWeaponId = elements.selectMainWeapon.value;
        }

        // Verificar si es a dos manos
        const esDosManos = propiedades.includes('A dos manos');
        
        if (esDosManos) {
            // Ocultar y resetear mano secundaria
            elements.offHandContainer.classList.add('hidden');
            state.offHandId = '';
            elements.selectOffHand.value = '';
        } else {
            // Mostrar selector de mano secundaria y poblarlo
            elements.offHandContainer.classList.remove('hidden');
            populateOffHandSelect();
        }
        
        updatePreview();
    }

    function populateOffHandSelect() {
        const clase = CLASES[state.claseId];
        const competenciasArmadura = clase.competencias.armaduras || [];
        const competenciasArma = clase.competencias.armas || [];
        
        elements.selectOffHand.innerHTML = '<option value="">Ninguno</option>';
        
        // Añadir escudos si la clase tiene competencia
        if (competenciasArmadura.includes('Escudos') || competenciasArmadura.includes('Todas')) {
            for (let key in OBJETOS) {
                const obj = OBJETOS[key];
                if (obj.tipo === "Escudo") {
                    const option = document.createElement('option');
                    option.value = key;
                    option.textContent = obj.nombre + ' (Escudo)';
                    option.dataset.tipo = 'escudo';
                    option.dataset.caBonus = obj.ca_bonus || 2;
                    elements.selectOffHand.appendChild(option);
                }
            }
        }
        
        // Añadir armas ligeras para la otra mano
        for (let key in OBJETOS) {
            const obj = OBJETOS[key];
            if ((obj.tipo === "Marcial" || obj.tipo === "Sencilla") && obj.propiedades && obj.propiedades.includes('Ligera')) {
                const option = document.createElement('option');
                option.value = key;
                option.textContent = obj.nombre + ' (Ligera)';
                option.dataset.tipo = 'arma_ligera';
                option.dataset.daño = obj.daño || '1d4';
                option.dataset.tipoDaño = obj.tipo_daño || 'contundente';
                elements.selectOffHand.appendChild(option);
            }
        }
    }

    function onOffHandChange() {
        state.offHandId = elements.selectOffHand.value;
        
        // Verificar competencia con escudos si aplica
        if (state.offHandId) {
            const clase = CLASES[state.claseId];
            const competenciasArmadura = clase.competencias.armaduras || [];
            const selectedOption = elements.selectOffHand.options[elements.selectOffHand.selectedIndex];
            
            if (selectedOption.dataset.tipo === 'escudo' && !competenciasArmadura.includes('Escudos') && !competenciasArmadura.includes('Todas')) {
                elements.offHandWarning.classList.remove('hidden');
                elements.offHandWarning.textContent = 'No tienes competencia con escudos';
            } else {
                elements.offHandWarning.classList.add('hidden');
            }
        } else {
            elements.offHandWarning.classList.add('hidden');
        }
        
        updatePreview();
    }

    function onArmorChange() {
        state.armorId = elements.selectArmor.value;
        
        // Verificar desventaja en sigilo para armaduras pesadas sin competencia
        if (state.armorId) {
            const clase = CLASES[state.claseId];
            const competenciasArmadura = clase.competencias.armaduras || [];
            const armor = OBJETOS[state.armorId];
            
            if (armor.tipo === 'Pesada' && !competenciasArmadura.includes('Pesada') && !competenciasArmadura.includes('Todas')) {
                elements.weaponWarning.textContent = '⚠️ Sin competencia: Desventaja en Sigilo';
                elements.weaponWarning.classList.remove('hidden');
            } else {
                elements.weaponWarning.classList.add('hidden');
            }
        }
        
        updatePreview();
    }

    // --- Event Listeners ---
    function setupEventListeners() {
        elements.selectRace.addEventListener('change', onRaceChange);
        elements.selectSubrace.addEventListener('change', onSubraceChange);
        elements.selectClass.addEventListener('change', onClassChange);
        elements.selectSubclass.addEventListener('change', onSubclassChange);
        elements.selectBackground.addEventListener('change', onBackgroundChange);
        elements.selectSecondBackground.addEventListener('change', onSecondBackgroundChange);
        elements.levelSelect.addEventListener('change', onLevelChange);
        elements.charName.addEventListener('input', onNameChange);
        elements.btnGenerate.addEventListener('click', generateCharacter);
        elements.btnReset.addEventListener('click', resetForm);
        elements.btnRandomExample.addEventListener('click', randomExample);

        document.querySelectorAll('.tab-button').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                e.target.classList.add('active');
                document.getElementById(`tab-${e.target.dataset.tab}`).classList.add('active');
            });
        });
    }

    function onRaceChange() {
        state.razaId = elements.selectRace.value;
        state.subrazaId = '';
        updateSubraceSelect();
        showRaceDescription();
        updatePreview();
        checkGenerateButton();
    }

    function onSubraceChange() {
        state.subrazaId = elements.selectSubrace.value;
        showSubraceDescription();

        const raza = RAZAS[state.razaId];
        const subraza = raza?.variantes?.[state.subrazaId];
        if (raza && raza.dote_extra && subraza && subraza.dote_extra) {
            elements.groupSecondBackground.classList.remove('hidden');
        } else {
            elements.groupSecondBackground.classList.add('hidden');
            state.segundoTrasfondoId = '';
        }
        updatePreview();
    }

    function onClassChange() {
        state.claseId = elements.selectClass.value;
        state.subclaseId = '';
        updateSubclassSelect();
        showClassDescription();
        updateSpellSelector();
        if (state.claseId) {
            elements.groupEquipment.classList.remove('hidden');
            populateEquipmentSelects();
        } else {
            elements.groupEquipment.classList.add('hidden');
        }
        updatePreview();
        checkGenerateButton();
    }

    function onSubclassChange() {
        state.subclaseId = elements.selectSubclass.value;
        showSubclassDescription();
        updateSpellSelector();
        updatePreview();
    }

    function onBackgroundChange() {
        state.trasfondoId = elements.selectBackground.value;
        showBackgroundDescription(elements.backgroundDescription, state.trasfondoId);
        updatePreview();
        checkGenerateButton();
    }

    function onSecondBackgroundChange() {
        state.segundoTrasfondoId = elements.selectSecondBackground.value;
        showBackgroundDescription(elements.secondBackgroundDescription, state.segundoTrasfondoId);
        updatePreview();
    }

    function onLevelChange() {
        state.nivel = parseInt(elements.levelSelect.value);
        updateSubclassSelect();
        updateSpellSelector();
        updatePreview();
    }

    function onNameChange(e) {
        state.nombre = e.target.value || 'Sin nombre';
        updatePreview();
    }

    function showBackgroundDescription(element, trasfondoId) {
        const tf = TRASFONDOS[trasfondoId];
        if (tf) {
            let compText = '';
            if (tf.competencias) {
                compText = `Habilidades: ${tf.competencias.habilidades?.join(', ') || 'Ninguna'}. `;
                compText += `Herramientas: ${tf.competencias.herramientas?.join(', ') || 'Ninguna'}.`;
            }
            let rasgosText = '';
            if (tf.rasgos) {
                rasgosText = '<br><strong>Rasgos:</strong> ';
                rasgosText += tf.rasgos.map(r => r.nombre).join(', ');
            }
            element.innerHTML = `<h4>${tf.nombre}</h4><p>${tf.descripcion || ''}</p><p>${compText}${rasgosText}</p>`;
            element.classList.remove('hidden');
        } else {
            element.classList.add('hidden');
        }
    }

    function updateSubraceSelect() {
        const raza = RAZAS[state.razaId];
        elements.groupSubrace.classList.add('hidden');
        elements.selectSubrace.innerHTML = '<option value="">Selecciona una opción...</option>';
        elements.subraceDescription.classList.add('hidden');

        if (raza) {
            let hasOptions = false;
            if (raza.subrazas) {
                for (let key in raza.subrazas) {
                    let sub = raza.subrazas[key];
                    let option = document.createElement('option');
                    option.value = key;
                    option.textContent = sub.nombre;
                    elements.selectSubrace.appendChild(option);
                    hasOptions = true;
                }
            }
            if (raza.variantes) {
                for (let key in raza.variantes) {
                    let varOp = raza.variantes[key];
                    let option = document.createElement('option');
                    option.value = key;
                    option.textContent = varOp.nombre;
                    elements.selectSubrace.appendChild(option);
                    hasOptions = true;
                }
            }
            if (hasOptions) {
                elements.groupSubrace.classList.remove('hidden');
            }
        }
    }

    function updateSubclassSelect() {
        const clase = CLASES[state.claseId];
        elements.groupSubclass.classList.add('hidden');
        elements.selectSubclass.innerHTML = '<option value="">Selecciona una subclase...</option>';
        elements.subclassDescription.classList.add('hidden');

        if (clase && typeof SUBCLASES !== 'undefined') {
            let hasOptions = false;
            for (let key in SUBCLASES) {
                let sub = SUBCLASES[key];
                if (sub.clase_id === state.claseId && state.nivel >= sub.nivel_acceso) {
                    let option = document.createElement('option');
                    option.value = key;
                    option.textContent = sub.nombre;
                    elements.selectSubclass.appendChild(option);
                    hasOptions = true;
                }
            }
            if (hasOptions) {
                elements.groupSubclass.classList.remove('hidden');
            }
        }
    }

    function showRaceDescription() {
        const raza = RAZAS[state.razaId];
        if (raza && raza.descripcion) {
            elements.raceDescription.innerHTML = `<h4>${raza.nombre}</h4><p>${raza.descripcion}</p><p><strong>Puntos fuertes:</strong> ${raza.puntos_fuertes || 'N/A'}</p>`;
            elements.raceDescription.classList.remove('hidden');
        } else {
            elements.raceDescription.classList.add('hidden');
        }
    }

    function showSubraceDescription() {
        const raza = RAZAS[state.razaId];
        let subDesc = null;
        if (raza && state.subrazaId) {
            subDesc = raza.subrazas?.[state.subrazaId] || raza.variantes?.[state.subrazaId];
        }
        if (subDesc && subDesc.descripcion) {
            elements.subraceDescription.innerHTML = `<h4>${subDesc.nombre}</h4><p>${subDesc.descripcion}</p><p><strong>Beneficios:</strong> ${subDesc.beneficios || 'N/A'}</p>`;
            elements.subraceDescription.classList.remove('hidden');
        } else {
            elements.subraceDescription.classList.add('hidden');
        }
    }

    function showClassDescription() {
        const clase = CLASES[state.claseId];
        if (clase && clase.descripcion) {
            elements.classDescription.innerHTML = `<h4>${clase.nombre}</h4><p>${clase.descripcion}</p><p><strong>Dado de Golpe:</strong> d${clase.dadoGolpe}</p>`;
            elements.classDescription.classList.remove('hidden');
        } else {
            elements.classDescription.classList.add('hidden');
        }
    }

    function showSubclassDescription() {
        if (typeof SUBCLASES !== 'undefined' && state.subclaseId) {
            const sub = SUBCLASES[state.subclaseId];
            if (sub && sub.descripcion) {
                let magiaInfo = '';
                if (sub.tiene_magia) {
                    magiaInfo = '<br><strong>📚 Capacidad mágica:</strong> Esta subclase puede lanzar conjuros.';
                    if (sub.lista_hechizos) {
                        magiaInfo += ` Lista de hechizos: ${sub.lista_hechizos === 'mago' ? 'Mago' : sub.lista_hechizos}.`;
                    }
                }
                elements.subclassDescription.innerHTML = `<h4>${sub.nombre}</h4><p>${sub.descripcion}${magiaInfo}</p>`;
                elements.subclassDescription.classList.remove('hidden');
                return;
            }
        }
        elements.subclassDescription.classList.add('hidden');
    }

    function updateUIDependencias() {
        elements.groupSkills.classList.add('hidden');
    }

    function checkGenerateButton() {
        if (state.razaId && state.claseId && state.trasfondoId) {
            elements.btnGenerate.disabled = false;
        } else {
            elements.btnGenerate.disabled = true;
        }
    }

    function updatePreview() {
        if (state.razaId && state.claseId && state.trasfondoId) {
            let html = `<h3>${state.nombre}</h3>`;
            html += `<p><span class="badge race">${RAZAS[state.razaId]?.nombre}</span>`;
            if (state.subrazaId) {
                const raza = RAZAS[state.razaId];
                const sub = raza?.subrazas?.[state.subrazaId] || raza?.variantes?.[state.subrazaId];
                if (sub) html += ` <span class="badge subclass">${sub.nombre}</span>`;
            }
            html += ` <span class="badge class">${CLASES[state.claseId]?.nombre} ${state.nivel}</span>`;
            if (state.subclaseId && SUBCLASES[state.subclaseId]) {
                html += ` <span class="badge subclass">${SUBCLASES[state.subclaseId].nombre}</span>`;
            }
            html += ` <span class="badge background">${TRASFONDOS[state.trasfondoId]?.nombre}</span>`;
            if (state.segundoTrasfondoId) {
                html += ` <span class="badge background">+ ${TRASFONDOS[state.segundoTrasfondoId]?.nombre}</span>`;
            }
            html += `</p>`;
            
            let equipoText = [];
            if (state.mainWeaponId) equipoText.push(OBJETOS[state.mainWeaponId]?.nombre);
            if (state.offHandId) equipoText.push(OBJETOS[state.offHandId]?.nombre);
            if (state.armorId) equipoText.push(OBJETOS[state.armorId]?.nombre);
            
            if (equipoText.length > 0) {
                html += `<p><strong>Equipo seleccionado:</strong> ${equipoText.join(' + ')}</p>`;
            }
            
            html += `<p><strong>Listo para generar.</strong> Haz clic en "Generar Personaje" para obtener tu código.</p>`;
            elements.previewArea.innerHTML = html;
        } else {
            elements.previewArea.innerHTML = '<h3>Vista Previa del Personaje</h3><p style="color:#aaa">Completa el formulario para ver una vista previa detallada de tu personaje.</p>';
        }
    }

    // --- FUNCIÓN PRINCIPAL: GENERAR Y MOSTRAR MODAL ---
    function generateCharacter() {
        let totalPoints = 0;
        for (let stat in state.statsBase) {
            totalPoints += getPointCost(state.statsBase[stat]);
        }
        if (totalPoints > 27) {
            showError('Has usado más de 27 puntos en las estadísticas. Ajusta los valores.');
            return;
        }

        const opciones = {
            nombre: state.nombre,
            razaId: state.razaId,
            subrazaId: state.subrazaId,
            claseId: state.claseId,
            subclaseId: state.subclaseId,
            trasfondoId: state.trasfondoId,
            segundoTrasfondoId: state.segundoTrasfondoId,
            nivel: state.nivel,
            statsBase: { ...state.statsBase },
            statsVariante: state.statsVariante,
            hechizosSeleccionados: state.hechizosSeleccionados,
            mainWeaponId: state.mainWeaponId,
            armorId: state.armorId,
            offHandId: state.offHandId
        };

        const personaje = MotorPersonaje.crearPersonaje(opciones);

        if (personaje) {
            // --- INICIO DE ADAPTACIÓN PARA LA FICHA ---
            
            // 1. Convertir el inventario de personaje.inventario (formato OBJETOS) 
            //    a inventoryWeapons (formato de ficha.html)
            const armasEnInventario = personaje.inventarioOriginal.filter(item => 
                item.tipo === 'Marcial' || item.tipo === 'Sencilla'
            );
            
            // Mapear las armas al formato que espera la ficha
            personaje.inventoryWeapons = armasEnInventario.map(item => {
                // Determinar si está equipada (simplificado: si es el arma principal o secundaria)
                const isEquipped = (item.id === state.mainWeaponId || item.id === state.offHandId);
                
                // Mapear propiedades del array al objeto props
                const props = {
                    dosManos: item.propiedades?.includes('A dos manos') || false,
                    sutil: item.propiedades?.includes('Sutil') || false,
                    arrojadiza: item.propiedades?.includes('Arrojadiza') || false,
                    distancia: item.tipo_daño === 'perforante' && (item.id.includes('arco') || item.id.includes('ballesta') || item.id.includes('honda') || item.id.includes('cerbatana')), // Heurística simple
                    carga: item.propiedades?.includes('Carga') || false,
                    versatil: item.propiedades?.includes('Versátil') || false,
                    ligera: item.propiedades?.includes('Ligera') || false,
                    pesada: item.propiedades?.includes('Pesada') || false,
                    alcance: item.propiedades?.includes('Alcance') || false,
                };
                
                // Buscar la maestría
                const maestriaObj = { nombre: item.maestria || 'Ninguna', desc: '' }; 
                
                return {
                    id: item.id || 'arma_' + Math.random().toString(36).substr(2, 9),
                    nombre: item.nombre,
                    daño: item.daño || '1d4',
                    statAsociado: 'fuerza',
                    bonus: 0,
                    maestria: maestriaObj,
                    props: props,
                    municion: props.distancia ? 20 : 0,
                    cargada: !props.carga,
                    equipped: isEquipped,
                    tipo_daño: item.tipo_daño || 'contundente'
                };
            });

            // 2. Crear una representación en texto del inventario para el campo 'inventario'
            let inventarioTexto = '';
            personaje.inventarioOriginal.forEach(item => {
                // Si es un arma, ya la hemos manejado en inventoryWeapons, así que la saltamos
                // para no duplicar la información en el campo de texto.
                if (item.tipo !== 'Marcial' && item.tipo !== 'Sencilla') {
                    inventarioTexto += `${item.cantidad}x ${item.nombre}`;
                    if (item.descripcion) {
                        inventarioTexto += ` (${item.descripcion})`;
                    }
                    inventarioTexto += '\n';
                }
            });
            personaje.inventario = inventarioTexto; // Sobrescribe el array con el string

            // 3. Mapear objetos vinculados (invObj1, invObj2, invObj3) desde el inventario original
            const objetosNoArmas = personaje.inventarioOriginal.filter(item => 
                item.tipo !== 'Marcial' && item.tipo !== 'Sencilla' && item.tipo !== 'Ligera' && item.tipo !== 'Media' && item.tipo !== 'Pesada' && item.tipo !== 'Escudo'
            );
            personaje.invObj1 = objetosNoArmas[0]?.nombre || '';
            personaje.invObj2 = objetosNoArmas[1]?.nombre || '';
            personaje.invObj3 = objetosNoArmas[2]?.nombre || '';

            // 4. Asegurar que los hechizos seleccionados se pasen como IDs
            personaje.hechizosSeleccionados = state.hechizosSeleccionados;

            // 5. Mapear la armadura
            if (state.armorId && OBJETOS[state.armorId]) {
                const armor = OBJETOS[state.armorId];
                personaje.armorType = armor.tipo?.toLowerCase() || 'none';
                personaje.armorBase = armor.ca_base || 0;
            }
            
            // 6. Añadir puntos de estadísticas base para que la ficha pueda calcular los modificadores
            personaje.stats = {};
            for (let stat in state.statsBase) {
                personaje.stats[stat] = {
                    puntos: state.statsBase[stat],
                    mod: 0,
                    habilidades: []
                };
            }
            
            // 7. Añadir información de escudo
            if (state.offHandId && OBJETOS[state.offHandId]?.tipo === 'Escudo') {
                personaje.shieldEquipped = 2;
            }
            
            // --- FIN DE ADAPTACIÓN ---

            // Guardar en localStorage para acceso directo desde ficha.html
            localStorage.setItem('dndSheet', JSON.stringify(personaje));
            
            // Mostrar modal con JSON para copiar
            const jsonString = MotorPersonaje.toJSON(personaje);
            showExportModal(jsonString);
            
            showSuccess('Personaje generado con éxito! Copia el código para usarlo en la ficha.');
        } else {
            showError('Error al generar el personaje. Revisa los datos.');
        }
    }

    // --- Funciones de UI auxiliares ---
    function showError(msg) {
        elements.errorContainer.textContent = msg;
        elements.errorContainer.classList.remove('hidden');
        setTimeout(() => elements.errorContainer.classList.add('hidden'), 3000);
    }

    function showSuccess(msg) {
        elements.successContainer.textContent = msg;
        elements.successContainer.classList.remove('hidden');
        setTimeout(() => elements.successContainer.classList.add('hidden'), 3000);
    }

    function resetForm() {
        state = {
            nombre: 'Aric',
            razaId: '',
            subrazaId: '',
            claseId: '',
            subclaseId: '',
            trasfondoId: '',
            segundoTrasfondoId: '',
            nivel: 1,
            statsBase: { fuerza: 10, destreza: 10, constitucion: 10, inteligencia: 10, sabiduria: 10, carisma: 10 },
            statsVariante: ['fuerza', 'destreza'],
            habilidadesSeleccionadas: [],
            hechizosSeleccionados: [],
            mainWeaponId: '',
            armorId: '',
            offHandId: ''
        };
        elements.charName.value = 'Aric';
        elements.selectRace.value = '';
        elements.selectClass.value = '';
        elements.selectBackground.value = '';
        elements.selectSecondBackground.value = '';
        elements.levelSelect.value = '1';
        elements.groupSubrace.classList.add('hidden');
        elements.groupSubclass.classList.add('hidden');
        elements.groupEquipment.classList.add('hidden');
        elements.offHandContainer.classList.add('hidden');
        elements.groupSecondBackground.classList.add('hidden');
        elements.groupSpells.classList.add('hidden');
        elements.raceDescription.classList.add('hidden');
        elements.subraceDescription.classList.add('hidden');
        elements.classDescription.classList.add('hidden');
        elements.subclassDescription.classList.add('hidden');
        elements.backgroundDescription.classList.add('hidden');
        elements.secondBackgroundDescription.classList.add('hidden');
        renderStatDistribution();
        updatePreview();
        checkGenerateButton();
    }

    function randomExample() {
        elements.charName.value = 'Lyra Sombrabrisa';
        elements.selectRace.value = 'semielfo';
        elements.selectClass.value = 'mago';
        elements.selectBackground.value = 'sabio';
        elements.levelSelect.value = '1';
        
        state.nombre = 'Lyra Sombrabrisa';
        state.razaId = 'semielfo';
        state.claseId = 'mago';
        state.trasfondoId = 'sabio';
        state.nivel = 1;
        state.statsBase = { fuerza: 8, destreza: 14, constitucion: 13, inteligencia: 15, sabiduria: 10, carisma: 12 };
        
        updateSubraceSelect();
        updateSubclassSelect();
        showRaceDescription();
        showClassDescription();
        showBackgroundDescription(elements.backgroundDescription, state.trasfondoId);
        if (state.claseId) {
            elements.groupEquipment.classList.remove('hidden');
            populateEquipmentSelects();
        }
        updateSpellSelector();
        renderStatDistribution();
        updatePreview();
        checkGenerateButton();
    }

    // Funciones globales para el modal (definidas en creador.html)
    window.showExportModal = function(jsonString) {
        const modal = document.getElementById('exportModal');
        const area = document.getElementById('jsonExportArea');
        if (modal && area) {
            area.textContent = jsonString;
            modal.classList.remove('hidden');
        }
    };

    window.closeExportModal = function() {
        document.getElementById('exportModal')?.classList.add('hidden');
    };

    window.copyJSONToClipboard = function() {
        const jsonText = document.getElementById('jsonExportArea')?.textContent;
        if (jsonText) {
            navigator.clipboard.writeText(jsonText).then(() => {
                alert('✅ JSON copiado al portapapeles');
            }).catch(err => {
                alert('❌ Error al copiar: ' + err);
            });
        }
    };

    // Iniciar todo
    init();
});