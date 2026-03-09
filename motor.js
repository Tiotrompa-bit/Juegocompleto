// motor.js - Motor completo de creación de personajes D&D 5e
// Versión 2.6 - CORREGIDO: Dote Duro (1 PG por nivel), Transferencia de equipo mejorada

const MotorPersonaje = {
    /**
     * Crea un personaje completo con todas las características
     * @param {Object} opciones - Opciones de creación
     * @returns {Object} Personaje creado
     */
    crearPersonaje: function(opciones) {
        // Validación de datos críticos
        if (!opciones.nombre || !opciones.razaId || !opciones.claseId) {
            console.error("Faltan datos críticos para crear el personaje");
            return null;
        }

        // Obtener datos de las fuentes
        const datosRaza = RAZAS[opciones.razaId];
        let datosSubraza = null;
        let datosVariante = null;
        
        // Procesar subraza o variante
        if (opciones.subrazaId) {
            if (datosRaza?.subrazas && datosRaza.subrazas[opciones.subrazaId]) {
                datosSubraza = datosRaza.subrazas[opciones.subrazaId];
            } else if (datosRaza?.variantes && datosRaza.variantes[opciones.subrazaId]) {
                datosVariante = datosRaza.variantes[opciones.subrazaId];
            }
        }
        
        const datosClase = CLASES[opciones.claseId];
        const datosTrasfondo = TRASFONDOS[opciones.trasfondoId];
        const datosSegundoTrasfondo = opciones.segundoTrasfondoId ? TRASFONDOS[opciones.segundoTrasfondoId] : null;
        const nivel = opciones.nivel || 1;

        // Validar existencia de datos esenciales
        if (!datosRaza || !datosClase) {
            console.error("Raza o clase no encontrada");
            return null;
        }

        // Estructura base del personaje
        let personaje = {
            // Información básica
            nombre: opciones.nombre,
            nivel: nivel,
            nivelTotal: nivel,
            raza: datosRaza.nombre,
            razaId: opciones.razaId,
            subraza: datosSubraza ? datosSubraza.nombre : (datosVariante ? datosVariante.nombre : null),
            subrazaId: opciones.subrazaId,
            clase: datosClase.nombre,
            claseId: opciones.claseId,
            subclase: null,
            subclaseId: opciones.subclaseId,
            trasfondo: datosTrasfondo ? datosTrasfondo.nombre : null,
            trasfondoId: opciones.trasfondoId,
            segundoTrasfondo: datosSegundoTrasfondo ? datosSegundoTrasfondo.nombre : null,
            segundoTrasfondoId: opciones.segundoTrasfondoId,
            
            // Sistema de clases
            clases: [{ 
                id: opciones.claseId, 
                nivel: nivel, 
                subclase: opciones.subclaseId || null 
            }],
            
            // Estadísticas
            statsBase: { ...opciones.statsBase },
            statsActivos: {},
            
            // Puntos de golpe
            hpMax: 0,
            hpActual: 0,
            hpTemp: 0,
            
            // Movimiento
            velocidad: datosRaza.velocidad || 30,
            velocidad_especial: datosRaza.velocidad_especial || null,
            
            // Inventario y equipo (guardamos el array original para procesarlo después)
            inventarioOriginal: [],
            inventario: [],
            equipo: { 
                cabeza: null, 
                cuello: null, 
                capa: null, 
                cuerpo: null, 
                manos: null, 
                mano1: null, 
                mano2: null, 
                dedos: null,
                cinturon: null,
                botas: null
            },
            
            // Competencias
            competencias: { 
                armas: [], 
                armaduras: [], 
                herramientas: [], 
                habilidades: [], 
                salvaciones: [] 
            },
            
            // Rasgos y habilidades especiales
            rasgos: [],
            idiomas: [],
            
            // Recursos especiales
            recursos: {},
            
            // Magia
            spellcasting: null,
            hechizos_conocidos: opciones.hechizosSeleccionados || [],
            hechizos_preparados: [],
            espacios_conjuro: {},
            
            // Combate
            ca: 10,
            iniciativa: 0,
            competencia: 2,
            
            // Metadatos
            fecha_creacion: new Date().toISOString(),
            experiencia: 0,
            
            // Campos adicionales
            armorType: 'none',
            armorBase: 0,
            armorBonus: 0,
            shieldEquipped: 0,
            unarmoredType: null,
            
            // Bonificadores
            bonificadores: [],
            
            // Hechizos (formato compatible con ficha)
            hechizos: [],
            
            // Dados de golpe
            dadosGolpe: `1d${datosClase.dadoGolpe}`,
            dadosGolpeUsados: [],
            
            // Información adicional para la ficha
            monedas: {
                oro: 0,
                plata: 0,
                bronce: 0
            },
            notas: {
                accion: "",
                adicional: "",
                reaccion: ""
            },
            dotes: [],
            npcs: [],
            sesiones: [],
            historia: "",
            notasLibres: "",
            
            // Campos específicos para la ficha
            inventoryWeapons: [],
            hechizosSeleccionados: opciones.hechizosSeleccionados || [],
            stats: {},
            
            // Objetos vinculados para la ficha
            invObj1: '',
            invObj2: '',
            invObj3: ''
        };

        // Aplicar todas las capas de construcción
        this._aplicarRaza(personaje, datosRaza, datosSubraza, datosVariante, opciones);
        this._aplicarNivelClase(personaje, datosClase, nivel);
        
        // Aplicar subclase si existe y es válida
        if (opciones.subclaseId && typeof SUBCLASES !== 'undefined') {
            const datosSubclase = SUBCLASES[opciones.subclaseId];
            if (datosSubclase && datosSubclase.clase_id === opciones.claseId && nivel >= datosSubclase.nivel_acceso) {
                personaje.subclase = datosSubclase.nombre;
                this._aplicarSubclase(personaje, datosSubclase, nivel);
            }
        }
        
        // Aplicar trasfondo (y segundo trasfondo si existe)
        if (datosTrasfondo) {
            this._aplicarTrasfondo(personaje, datosTrasfondo);
        }
        if (datosSegundoTrasfondo) {
            this._aplicarTrasfondo(personaje, datosSegundoTrasfondo);
        }

        // ASIGNAR EQUIPO INICIAL DE CLASE Y TRASFONDOS
        this._asignarEquipoInicial(personaje, datosClase, datosTrasfondo, datosSegundoTrasfondo);

        // Añadir el equipo seleccionado manualmente por el usuario
        if (opciones.mainWeaponId && OBJETOS[opciones.mainWeaponId]) {
            const existente = personaje.inventario.find(i => i.id === opciones.mainWeaponId);
            if (existente) {
                existente.cantidad = (existente.cantidad || 1) + 1;
            } else {
                personaje.inventario.push({ ...OBJETOS[opciones.mainWeaponId], cantidad: 1 });
            }
            
            // Marcar como equipada en mano principal
            personaje.equipo.mano1 = opciones.mainWeaponId;
        }
        
        // Añadir arma de mano secundaria si existe
        if (opciones.offHandId && OBJETOS[opciones.offHandId]) {
            const existente = personaje.inventario.find(i => i.id === opciones.offHandId);
            if (existente) {
                existente.cantidad = (existente.cantidad || 1) + 1;
            } else {
                personaje.inventario.push({ ...OBJETOS[opciones.offHandId], cantidad: 1 });
            }
            
            // Determinar si es escudo o arma
            if (OBJETOS[opciones.offHandId].tipo === 'Escudo') {
                personaje.equipo.mano2 = opciones.offHandId;
                personaje.shieldEquipped = 2;
            } else {
                personaje.equipo.mano2 = opciones.offHandId;
            }
        }
        
        if (opciones.armorId && OBJETOS[opciones.armorId]) {
            const existente = personaje.inventario.find(i => i.id === opciones.armorId);
            if (existente) {
                existente.cantidad = (existente.cantidad || 1) + 1;
            } else {
                personaje.inventario.push({ ...OBJETOS[opciones.armorId], cantidad: 1 });
            }
            
            // Configurar tipo de armadura para cálculos
            const armor = OBJETOS[opciones.armorId];
            personaje.armorType = armor.tipo.toLowerCase();
            personaje.armorBase = armor.ca_base || 0;
            
            // CORRECCIÓN: Desventaja en sigilo para armaduras pesadas SIEMPRE
            if (armor.tipo === 'Pesada') {
                personaje.rasgos.push({
                    nombre: "Sigilo Penalizado",
                    descripcion: "Desventaja en pruebas de Destreza (Sigilo) por llevar armadura pesada.",
                    tipo: "penalizacion",
                    origen: "Equipo"
                });
            }
        }

        // Aplicar rasgos de trasfondo (incluyendo dote Duro)
        this._aplicarRasgosTrasfondo(personaje);

        // Guardar el inventario original antes de transformarlo
        personaje.inventarioOriginal = [...personaje.inventario];

        // Recalcular todo para asegurar consistencia
        this._recalcularTodo(personaje);
        
        // Establecer HP actual al máximo
        personaje.hpActual = personaje.hpMax;
        
        // Calcular espacios de conjuro si la clase lanza conjuros
        if (datosClase.magia) {
            this._calcularEspaciosConjuro(personaje, datosClase);
        }
        
        // Inicializar dados de golpe usados
        personaje.dadosGolpeUsados = new Array(nivel).fill(false);
        
        // Preparar stats para la ficha
        personaje.stats = {};
        for (let stat in personaje.statsBase) {
            personaje.stats[stat] = {
                puntos: personaje.statsBase[stat],
                mod: this._getMod(personaje.statsBase[stat]),
                habilidades: []
            };
        }
        
        return personaje;
    },

    /**
     * ASIGNAR EQUIPO INICIAL
     */
    _asignarEquipoInicial: function(pj, clase, trasfondo1, trasfondo2) {
        // Verificar que OBJETOS esté disponible
        if (typeof OBJETOS === 'undefined') {
            console.warn("OBJETOS no está definido, no se puede asignar equipo");
            return;
        }

        // Función auxiliar para añadir items
        const añadirItem = (item) => {
            if (item.id_objeto && OBJETOS[item.id_objeto]) {
                const existente = pj.inventario.find(i => i.id === item.id_objeto);
                
                if (existente) {
                    existente.cantidad += item.cantidad || 1;
                } else {
                    pj.inventario.push({
                        ...OBJETOS[item.id_objeto],
                        cantidad: item.cantidad || 1
                    });
                }
            }
        };

        // Asignar equipo de la clase si existe
        if (clase && clase.equipo_inicial && Array.isArray(clase.equipo_inicial)) {
            clase.equipo_inicial.forEach(añadirItem);
        }

        // Asignar equipo del primer trasfondo
        if (trasfondo1 && trasfondo1.equipo && Array.isArray(trasfondo1.equipo)) {
            trasfondo1.equipo.forEach(añadirItem);
        }

        // Asignar equipo del segundo trasfondo
        if (trasfondo2 && trasfondo2.equipo && Array.isArray(trasfondo2.equipo)) {
            trasfondo2.equipo.forEach(añadirItem);
        }
    },

    /**
     * Aplica los beneficios de la raza al personaje
     */
    _aplicarRaza: function(pj, raza, subraza, variante, opciones) {
        // Aplicar bonificadores de raza base
        if (raza.bonificadores) {
            if (variante && variante.nombre === "Humano (Dote Extra)") {
                // No hacer nada aquí, los bonos se aplican en _aplicarVariante
            } else {
                for (let stat in raza.bonificadores) {
                    if (typeof raza.bonificadores[stat] === 'number') {
                        pj.statsBase[stat] = (pj.statsBase[stat] || 10) + raza.bonificadores[stat];
                    }
                }
            }
        }

        // Aplicar bonificadores de subraza
        if (subraza && subraza.bonificadores) {
            for (let stat in subraza.bonificadores) {
                if (typeof subraza.bonificadores[stat] === 'number') {
                    pj.statsBase[stat] = (pj.statsBase[stat] || 10) + subraza.bonificadores[stat];
                }
            }
        }

        // Aplicar variante
        if (variante) {
            this._aplicarVariante(pj, variante, opciones);
        }

        // Aplicar rasgos comunes de raza
        if (raza.rasgos_comunes) {
            raza.rasgos_comunes.forEach(r => {
                pj.rasgos.push({...r, origen: "Raza"});
            });
        }
        
        // Aplicar rasgos de subraza
        if (subraza && subraza.rasgos) {
            subraza.rasgos.forEach(r => {
                pj.rasgos.push({...r, origen: "Subraza"});
            });
        }

        // Aplicar idiomas
        if (raza.idiomas) {
            if (Array.isArray(raza.idiomas)) {
                raza.idiomas.forEach(idioma => {
                    if (!pj.idiomas.includes(idioma)) {
                        pj.idiomas.push(idioma);
                    }
                });
            }
        }
    },

    /**
     * Aplica variantes especiales
     */
    _aplicarVariante: function(pj, variante, opciones) {
        if (variante.bonificadores) {
            if (variante.bonificadores.tipo === "eleccion_dos_atributos") {
                const statsAAumentar = opciones.statsVariante || ["fuerza", "destreza"];
                statsAAumentar.forEach(stat => {
                    pj.statsBase[stat] = (pj.statsBase[stat] || 10) + 1;
                });
            } else {
                for (let stat in variante.bonificadores) {
                    if (typeof variante.bonificadores[stat] === 'number') {
                        pj.statsBase[stat] = (pj.statsBase[stat] || 10) + variante.bonificadores[stat];
                    }
                }
            }
        }
        
        if (variante.rasgos) {
            variante.rasgos.forEach(r => {
                pj.rasgos.push({...r, origen: "Variante"});
                
                if (r.tipo === "dote_origen" && r.mecanica) {
                    pj.rasgos.push({
                        nombre: "Dote de Origen",
                        descripcion: "Disponible para elegir una dote de origen",
                        tipo: "dote_pendiente",
                        origen: "Humano Variante"
                    });
                } else if (r.tipo === "habilidad" && r.mecanica) {
                    if (r.mecanica.fuente === "habilidades_todas") {
                        if (!pj.competencias.habilidades.includes("Percepción")) {
                            pj.competencias.habilidades.push("Percepción");
                        }
                    }
                }
            });
        }
    },

    /**
     * Aplica todos los niveles de una clase al personaje
     * CORREGIDO: Cálculo de HP usando fórmula correcta
     */
    _aplicarNivelClase: function(pj, clase, nivelFinal) {
        const modCon = this._getMod(pj.statsBase.constitucion || 10);
        
        // Reiniciar HP para recalcular desde 0
        pj.hpMax = 0;
        
        // Aplicar cada nivel secuencialmente
        for (let nivel = 1; nivel <= nivelFinal; nivel++) {
            // CORRECCIÓN: Fórmula de HP correcta
            if (nivel === 1) {
                // Nivel 1: dado completo (máximo) + mod Con
                pj.hpMax = clase.dadoGolpe + modCon;
            } else {
                // Niveles superiores: media del dado redondeada hacia arriba + mod Con
                // La media estándar es (mitad del dado) + 1. Ej: d10 -> 5+1=6, d8 -> 4+1=5
                const mediaDado = Math.floor(clase.dadoGolpe / 2) + 1;
                pj.hpMax += mediaDado + modCon;
            }

            // Aplicar competencias (solo en nivel 1)
            if (nivel === 1 && clase.competencias) {
                this._aplicarCompetenciasClase(pj, clase);
            }

            // Aplicar rasgos específicos de este nivel
            if (clase.niveles && clase.niveles[nivel]) {
                clase.niveles[nivel].forEach(rasgo => {
                    const existe = pj.rasgos.some(r => 
                        r.nombre === rasgo.nombre && 
                        r.origen === `${clase.nombre} Nv${nivel}`
                    );
                    
                    if (!existe) {
                        pj.rasgos.push({
                            ...rasgo, 
                            origen: `${clase.nombre} Nv${nivel}`
                        });
                    }
                });
            }
        }
        
        // Manejar fórmula especial de CA (bárbaro, monje)
        if (nivelFinal >= 1 && clase.formula_ca_especial && !pj.formula_ca_especial) {
            pj.formula_ca_especial = clase.formula_ca_especial;
        }
    },

    /**
     * Aplica las competencias de una clase
     */
    _aplicarCompetenciasClase: function(pj, clase) {
        const comp = clase.competencias;
        
        if (comp.armas) {
            comp.armas.forEach(a => {
                if (!pj.competencias.armas.includes(a)) {
                    pj.competencias.armas.push(a);
                }
            });
        }
        
        if (comp.armaduras) {
            comp.armaduras.forEach(a => {
                if (!pj.competencias.armaduras.includes(a)) {
                    pj.competencias.armaduras.push(a);
                }
            });
        }
        
        if (comp.salvaciones) {
            comp.salvaciones.forEach(s => {
                if (!pj.competencias.salvaciones.includes(s)) {
                    pj.competencias.salvaciones.push(s);
                }
            });
        }
        
        if (comp.habilidades) {
            if (Array.isArray(comp.habilidades) && comp.habilidades.length > 0) {
                if (typeof comp.habilidades[0] === 'string') {
                    const habilidadesIniciales = comp.habilidades.slice(0, 2);
                    habilidadesIniciales.forEach(h => {
                        if (!pj.competencias.habilidades.includes(h)) {
                            pj.competencias.habilidades.push(h);
                        }
                    });
                }
            }
        }
        
        if (comp.herramientas) {
            comp.herramientas.forEach(h => {
                if (!pj.competencias.herramientas.includes(h)) {
                    pj.competencias.herramientas.push(h);
                }
            });
        }
    },

    /**
     * Aplica las características de la subclase
     */
    _aplicarSubclase: function(pj, subclase, nivelFinal) {
        for (let nivel in subclase.rasgos) {
            if (parseInt(nivel) <= nivelFinal) {
                subclase.rasgos[nivel].forEach(rasgo => {
                    const existe = pj.rasgos.some(r => 
                        r.nombre === rasgo.nombre && 
                        r.origen === `${subclase.nombre} Nv${nivel}`
                    );
                    
                    if (!existe) {
                        pj.rasgos.push({
                            ...rasgo,
                            origen: `${subclase.nombre} Nv${nivel}`
                        });
                    }
                });
            }
        }
    },

    /**
     * Aplica el trasfondo al personaje
     */
    _aplicarTrasfondo: function(pj, trasfondo) {
        // Aplicar competencias del trasfondo
        if (trasfondo.competencias) {
            if (trasfondo.competencias.habilidades) {
                trasfondo.competencias.habilidades.forEach(h => {
                    if (!pj.competencias.habilidades.includes(h)) {
                        pj.competencias.habilidades.push(h);
                    }
                });
            }
            if (trasfondo.competencias.herramientas) {
                trasfondo.competencias.herramientas.forEach(h => {
                    if (!pj.competencias.herramientas.includes(h)) {
                        pj.competencias.herramientas.push(h);
                    }
                });
            }
        }
        
        // Añadir rasgos del trasfondo
        if (trasfondo.rasgos) {
            trasfondo.rasgos.forEach(r => {
                pj.rasgos.push({
                    ...r,
                    origen: "Trasfondo"
                });
            });
        }
    },

    /**
     * Aplica rasgos especiales de trasfondo (como Duro)
     * CORREGIDO: Duro añade 1 PG por nivel
     */
    _aplicarRasgosTrasfondo: function(pj) {
        const rasgosDuros = pj.rasgos.filter(r => r.nombre === "Duro" && r.origen === "Trasfondo");
        if (rasgosDuros.length > 0) {
            // CORRECCIÓN: La dote Duro añade 1 PG por nivel, no 2
            pj.hpMax += pj.nivelTotal * 1;
        }
    },

    /**
     * Recalcula todas las estadísticas derivadas
     */
    _recalcularTodo: function(pj) {
        this._syncStats(pj);
        pj.competencia = CONSTANTES.COMPETENCIA[Math.min(pj.nivelTotal, 20)] || 2;
        this._calcularCA(pj);
        pj.iniciativa = this._getMod(pj.statsActivos.destreza);
        this._actualizarRecursos(pj);
        this._calcularStatsMagicos(pj);
    },

    /**
     * Sincroniza stats activos con base
     */
    _syncStats: function(pj) {
        pj.statsActivos = {};
        for (let s in pj.statsBase) {
            pj.statsActivos[s] = pj.statsBase[s];
        }
    },

    /**
     * Calcula la Clase de Armadura
     */
    _calcularCA: function(pj) {
        let modDes = this._getMod(pj.statsActivos.destreza);

        // Buscar si tiene armadura equipada en el inventario
        const armaduraEquipada = pj.inventario.find(item =>
            item.tipo === "Ligera" || item.tipo === "Media" || item.tipo === "Pesada"
        );
        
        // Buscar escudo equipado
        const escudoEquipado = pj.inventario.find(item => item.tipo === "Escudo");
        const tieneEscudo = escudoEquipado !== undefined || pj.shieldEquipped > 0;

        if (armaduraEquipada) {
            pj.armorType = armaduraEquipada.tipo.toLowerCase();
            pj.armorBase = armaduraEquipada.ca_base || 0;
            
            if (armaduraEquipada.tipo === "Ligera") {
                pj.ca = (armaduraEquipada.ca_base || 11) + modDes;
            } else if (armaduraEquipada.tipo === "Media") {
                pj.ca = (armaduraEquipada.ca_base || 12) + Math.min(modDes, 2);
            } else if (armaduraEquipada.tipo === "Pesada") {
                pj.ca = armaduraEquipada.ca_base || 16;
            }
        } else if (pj.formula_ca_especial) {
            pj.armorType = 'unarmored_defense';
            
            if (pj.formula_ca_especial === "10 + des + con") {
                let modCon = this._getMod(pj.statsActivos.constitucion);
                pj.ca = 10 + modDes + modCon;
                pj.unarmoredType = 'barbarian';
            } else if (pj.formula_ca_especial === "10 + des + sab") {
                let modSab = this._getMod(pj.statsActivos.sabiduria);
                pj.ca = 10 + modDes + modSab;
                pj.unarmoredType = 'monk';
            } else {
                pj.ca = 10 + modDes;
            }
        } else {
            pj.armorType = 'none';
            pj.ca = 10 + modDes;
        }
        
        // Añadir bonus de escudo
        if (tieneEscudo) {
            pj.ca += 2;
            pj.shieldEquipped = 2;
        }
        
        pj.ca = Math.max(pj.ca, 10);
    },

    /**
     * Actualiza todos los recursos especiales
     */
    _actualizarRecursos: function(pj) {
        pj.recursos = {};
        
        pj.clases.forEach(c => {
            const data = CLASES[c.id];
            if (!data || !data.recursos) return;

            data.recursos.forEach(r => {
                if (c.nivel >= (r.desbloqueo_nivel || 1)) {
                    let val = this._calcularValorRecurso(r, c.nivel);
                    
                    pj.recursos[r.id] = { 
                        actual: val === 999 ? Infinity : val,
                        max: val === 999 ? Infinity : val,
                        nombre: r.nombre,
                        descripcion: r.descripcion || '',
                        recarga: r.recarga || "descanso_largo"
                    };
                }
            });
        });
    },

    /**
     * Calcula el valor de un recurso según su escala
     */
    _calcularValorRecurso: function(recurso, nivel) {
        let val = recurso.base || 0;
        
        if (recurso.escala_nivel === 1) {
            val = nivel;
        } else if (recurso.escala_nivel === "dado_cada_2_niveles") {
            val = Math.floor(nivel / 2) + 1;
        } else if (typeof recurso.escala_nivel === 'number') {
            val = recurso.escala_nivel * nivel;
        } else if (CONSTANTES.ESCALAS_RECURSOS && CONSTANTES.ESCALAS_RECURSOS[recurso.escala_nivel]) {
            const tabla = CONSTANTES.ESCALAS_RECURSOS[recurso.escala_nivel];
            const niveles = Object.keys(tabla).map(Number).sort((a, b) => b - a);
            
            for (let lvl of niveles) {
                if (nivel >= lvl) {
                    val = tabla[lvl];
                    break;
                }
            }
        }
        
        return val;
    },

    /**
     * Calcula las estadísticas mágicas
     */
    _calcularStatsMagicos: function(pj) {
        let attr = "inteligencia";
        let atributoMagico = null;
        
        pj.clases.forEach(c => {
            const data = CLASES[c.id];
            if (data && data.magia && data.magia.atributo) {
                atributoMagico = data.magia.atributo;
                attr = data.magia.atributo.toLowerCase();
            }
        });

        const mod = this._getMod(pj.statsActivos[attr] || 10);
        
        pj.spellcasting = {
            atributo: atributoMagico,
            valor_atributo: pj.statsActivos[attr] || 10,
            modificador: mod,
            competencia: pj.competencia,
            cd: 8 + pj.competencia + mod,
            bonus_ataque: pj.competencia + mod
        };
    },

    /**
     * Calcula los espacios de conjuro según la progresión de la clase
     */
    _calcularEspaciosConjuro: function(pj, clase) {
        if (!clase.magia || !clase.magia.tipo) return;
        
        pj.espacios_conjuro = {};
        const nivel = pj.nivelTotal;
        
        if (clase.magia.tipo === "completo") {
            const progresion = CONSTANTES.PROGRESION_CONJURADOR_COMPLETO[nivel];
            if (progresion) {
                for (let nivelConjuro = 1; nivelConjuro <= 9; nivelConjuro++) {
                    const slots = progresion[nivelConjuro] || 0;
                    if (slots > 0) {
                        pj.espacios_conjuro[nivelConjuro] = {
                            max: slots,
                            actual: slots
                        };
                    }
                }
            }
        }
        else if (clase.magia.tipo === "medio") {
            const nivelMitad = Math.ceil(nivel / 2);
            const progresion = CONSTANTES.PROGRESION_CONJURADOR_COMPLETO[nivelMitad];
            if (progresion) {
                for (let nivelConjuro = 1; nivelConjuro <= 5; nivelConjuro++) {
                    const slots = progresion[nivelConjuro] || 0;
                    if (slots > 0) {
                        pj.espacios_conjuro[nivelConjuro] = {
                            max: slots,
                            actual: slots
                        };
                    }
                }
            }
        }
        else if (clase.magia.tipo === "tercio") {
            const nivelTercio = Math.ceil(nivel / 3);
            const progresion = CONSTANTES.PROGRESION_CONJURADOR_COMPLETO[nivelTercio];
            if (progresion) {
                for (let nivelConjuro = 1; nivelConjuro <= 4; nivelConjuro++) {
                    const slots = progresion[nivelConjuro] || 0;
                    if (slots > 0) {
                        pj.espacios_conjuro[nivelConjuro] = {
                            max: slots,
                            actual: slots
                        };
                    }
                }
            }
        }
    },

    /**
     * Obtiene el modificador de una estadística
     */
    _getMod: function(val) {
        return CONSTANTES.MODIFICADORES_STATS[Math.min(val || 10, 30)] || 0;
    },

    // ========================================================================
    // FUNCIONES DE UTILIDAD
    // ========================================================================

    /**
     * Añade experiencia al personaje y sube de nivel si corresponde
     */
    añadirExperiencia: function(pj, exp) {
        pj.experiencia += exp;
        
        let nivelAnterior = pj.nivelTotal;
        for (let nivel = nivelAnterior + 1; nivel <= 20; nivel++) {
            if (pj.experiencia >= (CONSTANTES.EXPERIENCIA_NIVEL[nivel] || Infinity)) {
                pj.nivelTotal = nivel;
                pj.clases[0].nivel = nivel;
            } else {
                break;
            }
        }
        
        if (pj.nivelTotal > nivelAnterior) {
            this._recalcularTodo(pj);
            return true;
        }
        
        return false;
    },

    /**
     * Equipa un objeto en una ranura
     */
    equiparObjeto: function(pj, idObjeto, ranura) {
        if (!OBJETOS[idObjeto]) return false;
        
        const ranurasValidas = ["cabeza", "cuello", "capa", "cuerpo", "manos", "mano1", "mano2", "dedos", "cinturon", "botas"];
        if (!ranurasValidas.includes(ranura)) return false;
        
        const itemInventario = pj.inventario.find(i => i.id === idObjeto);
        if (!itemInventario || itemInventario.cantidad < 1) return false;
        
        if (pj.equipo[ranura]) {
            const objetoActual = pj.inventario.find(i => i.id === pj.equipo[ranura]);
            if (objetoActual) {
                objetoActual.cantidad++;
            } else {
                pj.inventario.push({...OBJETOS[pj.equipo[ranura]], cantidad: 1});
            }
        }
        
        pj.equipo[ranura] = idObjeto;
        itemInventario.cantidad--;
        
        if (itemInventario.cantidad <= 0) {
            pj.inventario = pj.inventario.filter(i => i.id !== idObjeto);
        }
        
        this._calcularCA(pj);
        return true;
    },

    /**
     * Quita un objeto equipado
     */
    quitarObjeto: function(pj, ranura) {
        if (!pj.equipo[ranura]) return false;
        
        const idObjeto = pj.equipo[ranura];
        
        const existente = pj.inventario.find(i => i.id === idObjeto);
        if (existente) {
            existente.cantidad++;
        } else {
            pj.inventario.push({...OBJETOS[idObjeto], cantidad: 1});
        }
        
        pj.equipo[ranura] = null;
        this._calcularCA(pj);
        return true;
    },

    /**
     * Usa un recurso
     */
    usarRecurso: function(pj, idRecurso) {
        if (pj.recursos[idRecurso] && pj.recursos[idRecurso].actual > 0) {
            pj.recursos[idRecurso].actual--;
            return true;
        }
        return false;
    },

    /**
     * Recarga recursos según el tipo de descanso
     */
    descansar: function(pj, tipoDescanso) {
        if (tipoDescanso === "descanso_corto") {
            for (let id in pj.recursos) {
                if (pj.recursos[id].recarga === "descanso_corto") {
                    pj.recursos[id].actual = pj.recursos[id].max;
                }
            }
        } else if (tipoDescanso === "descanso_largo") {
            for (let id in pj.recursos) {
                pj.recursos[id].actual = pj.recursos[id].max;
            }
            pj.hpActual = pj.hpMax;
            for (let nivel in pj.espacios_conjuro) {
                pj.espacios_conjuro[nivel].actual = pj.espacios_conjuro[nivel].max;
            }
        }
    },

    /**
     * Recibe daño
     */
    recibirDaño: function(pj, cantidad) {
        if (pj.hpTemp > 0) {
            const dañoATemp = Math.min(pj.hpTemp, cantidad);
            pj.hpTemp -= dañoATemp;
            cantidad -= dañoATemp;
        }
        
        if (cantidad > 0) {
            pj.hpActual = Math.max(0, pj.hpActual - cantidad);
        }
        
        return pj.hpActual <= 0;
    },

    /**
     * Cura al personaje
     */
    curar: function(pj, cantidad) {
        pj.hpActual = Math.min(pj.hpMax, pj.hpActual + cantidad);
    },

    /**
     * Calcula el bonificador a una habilidad específica
     */
    getBonificadorHabilidad: function(pj, habilidad, statAsociado) {
        const modStat = this._getMod(pj.statsActivos[statAsociado]);
        let total = modStat;
        
        if (pj.competencias.habilidades.includes(habilidad)) {
            total += pj.competencia;
        }
        
        return total;
    },

    /**
     * Genera una tirada de salvación
     */
    getSalvacion: function(pj, stat) {
        const mod = this._getMod(pj.statsActivos[stat.toLowerCase()]);
        
        if (pj.competencias.salvaciones.includes(stat)) {
            return mod + pj.competencia;
        }
        
        return mod;
    },

    /**
     * Obtiene el personaje en formato JSON
     */
    toJSON: function(pj) {
        return JSON.stringify(pj, null, 2);
    },

    /**
     * Carga un personaje desde JSON
     */
    fromJSON: function(json) {
        try {
            return JSON.parse(json);
        } catch (e) {
            console.error("Error al cargar personaje:", e);
            return null;
        }
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = MotorPersonaje;
}