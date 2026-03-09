const HECHIZOS = {
    // =========================================================
    // NIVEL 0: TRUCOS (CANTRIPS)
    // =========================================================
    trucos: {
        // Trucos originales
        descarga_ignea: {
            id: "descarga_ignea", nombre: "Descarga Ígnea", escuela: "Evocación", nivel: 0,
            tiempo: "1 acción", alcance: "120 pies", componentes: "V, S",
            clases_permitidas: ["mago", "hechicero", "artífice"],
            mecanica: {
                tipo_ataque: "hechizo", tirada_salvacion: null,
                daño: { base: "1d10", tipo: "fuego", escalado: [{ nivel_personaje: 5, dado: "2d10" }, { nivel_personaje: 11, dado: "3d10" }, { nivel_personaje: 17, dado: "4d10" }] },
                descripcion: "Lanzas una mota de fuego contra una criatura o un objeto dentro del alcance."
            }
        },
        rayo_de_escarcha: {
            id: "rayo_de_escarcha", nombre: "Rayo de Escarcha", escuela: "Evocación", nivel: 0,
            tiempo: "1 acción", alcance: "60 pies", componentes: "V, S",
            clases_permitidas: ["mago", "hechicero", "artífice"],
            mecanica: {
                tipo_ataque: "hechizo", tirada_salvacion: null,
                daño: { base: "1d8", tipo: "frío", escalado: [{ nivel_personaje: 5, dado: "2d8" }, { nivel_personaje: 11, dado: "3d8" }, { nivel_personaje: 17, dado: "4d8" }] },
                descripcion: "Un rayo de luz azul blanquecina parte de tu dedo hacia una criatura. Reduce velocidad 10 pies."
            }
        },
        toque_del_vampiro: {
            id: "toque_del_vampiro", nombre: "Toque del Vampiro", escuela: "Nigromancia", nivel: 0,
            tiempo: "1 acción", alcance: "Toque", componentes: "V, S",
            clases_permitidas: ["brujo", "mago", "hechicero"],
            mecanica: {
                tipo_ataque: "hechizo", tirada_salvacion: null,
                daño: { base: "1d6", tipo: "necrótico", escalado: [{ nivel_personaje: 5, dado: "2d6" }, { nivel_personaje: 11, dado: "3d6" }, { nivel_personaje: 17, dado: "4d6" }] },
                descripcion: "Tu mano brilla con energía oscura. Curas la mitad del daño causado (redondeado abajo)."
            }
        },
        prestidigitacion: {
            id: "prestidigitacion", nombre: "Prestidigitación", escuela: "Transmutación", nivel: 0,
            tiempo: "1 acción", alcance: "10 pies", componentes: "V, S",
            clases_permitidas: ["mago", "hechicero", "brujo", "bardo", "artífice"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Truco mágico menor para efectos simples: crear efectos sensoriales menores, limpiar objetos, calentar/enfriar, etc." }
        },
        zancada_relampago: {
            id: "zancada_relampago", nombre: "Zancada Relámpago", escuela: "Transmutación", nivel: 0,
            tiempo: "1 acción bonus", alcance: "Personal", componentes: "V, S",
            clases_permitidas: ["hechicero", "mago", "brujo"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Te teletransportas hasta 15 pies a un espacio desocupado que puedas ver. No provoca ataques de oportunidad." }
        },
        conocimiento: {
            id: "conocimiento", nombre: "Conocimiento", escuela: "Adivinación", nivel: 0,
            tiempo: "1 acción", alcance: "Personal", componentes: "V, S",
            clases_permitidas: ["mago", "bardo", "clerigo", "druida"],
            mecanica: { tipo_ataque: "buff", descripcion: "Obtienes ventaja en la siguiente tirada de una habilidad que realices en el próximo minuto." }
        },
        luces_danzantes: {
            id: "luces_danzantes", nombre: "Luces Danzantes", escuela: "Evocación", nivel: 0,
            tiempo: "1 acción", alcance: "120 pies", componentes: "V, S, M",
            clases_permitidas: ["mago", "hechicero", "bardo", "artífice"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Creas hasta cuatro luces del tamaño de antorchas que flotan y emiten luz tenue en 10 pies." }
        },
        rociar_veneno: {
            id: "rociar_veneno", nombre: "Rociar Veneno", escuela: "Conjuración", nivel: 0,
            tiempo: "1 acción", alcance: "10 pies", componentes: "V, S",
            clases_permitidas: ["druida", "hechicero", "mago", "brujo"],
            mecanica: {
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Constitución", efecto: "Mitad" },
                daño: { base: "1d12", tipo: "veneno", escalado: [{ nivel_personaje: 5, dado: "2d12" }, { nivel_personaje: 11, dado: "3d12" }, { nivel_personaje: 17, dado: "4d12" }] },
                descripcion: "Proyectas gas de veneno desde tu palma."
            }
        },
        llamaradas: {
            id: "llamaradas", nombre: "Llamaradas", escuela: "Conjuración", nivel: 0,
            tiempo: "1 acción", alcance: "30 pies", componentes: "V, S",
            clases_permitidas: ["druida", "mago", "hechicero"],
            mecanica: {
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Destreza", efecto: "Mitad" },
                daño: { base: "1d8", tipo: "fuego", escalado: [{ nivel_personaje: 5, dado: "2d8" }, { nivel_personaje: 11, dado: "3d8" }, { nivel_personaje: 17, dado: "4d8" }] },
                descripcion: "Destello de luz. Ignora cobertura media."
            }
        },
        produce_flame: {
            id: "produce_flame", nombre: "Produce Flame", escuela: "Conjuración", nivel: 0,
            tiempo: "1 acción", alcance: "Personal", componentes: "V, S",
            clases_permitidas: ["druida"],
            mecanica: {
                tipo_ataque: "hechizo",
                daño: { base: "1d8", tipo: "fuego", escalado: [{ nivel_personaje: 5, dado: "2d8" }, { nivel_personaje: 11, dado: "3d8" }, { nivel_personaje: 17, dado: "4d8" }] },
                descripcion: "Llama en la mano que ilumina 10 pies. Puedes lanzarla como ataque a distancia hasta 30 pies."
            }
        },
        amistad_con_animales: {
            id: "amistad_con_animales", nombre: "Amistad con Animales", escuela: "Encantamiento", nivel: 0,
            tiempo: "1 acción", alcance: "30 pies", componentes: "V, S, M",
            clases_permitidas: ["druida", "explorador", "bardo"],
            mecanica: { tipo_ataque: "salvacion", tirada_salvacion: { stat: "Sabiduría", efecto: "Falla" }, descripcion: "Encantas a una bestia con Inteligencia 3 o inferior." }
        },
        
        // Nuevos trucos
        cuchillada_de_espadas: {
            id: "cuchillada_de_espadas", nombre: "Cuchillada de Espadas", escuela: "Evocación", nivel: 0,
            tiempo: "1 acción", alcance: "5 pies", componentes: "V, S, M",
            clases_permitidas: ["bardo", "mago", "hechicero"],
            mecanica: {
                tipo_ataque: "hechizo", tirada_salvacion: null,
                daño: { base: "1d6", tipo: "fuerza", escalado: [{ nivel_personaje: 5, dado: "2d6" }, { nivel_personaje: 11, dado: "3d6" }, { nivel_personaje: 17, dado: "4d6" }] },
                descripcion: "Creas una hoja de fuerza que corta a una criatura a 5 pies."
            }
        },
        explosion_de_escarcha: {
            id: "explosion_de_escarcha", nombre: "Explosión de Escarcha", escuela: "Evocación", nivel: 0,
            tiempo: "1 acción", alcance: "60 pies", componentes: "V, S",
            clases_permitidas: ["mago", "hechicero", "brujo"],
            mecanica: {
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Constitución", efecto: "Falla" },
                daño: { base: "1d6", tipo: "frío", escalado: [{ nivel_personaje: 5, dado: "2d6" }, { nivel_personaje: 11, dado: "3d6" }, { nivel_personaje: 17, dado: "4d6" }] },
                descripcion: "Explosión fría que reduce la velocidad 10 pies hasta tu próximo turno si falla la salvación."
            }
        },
        magia_astillante: {
            id: "magia_astillante", nombre: "Magia Astillante", escuela: "Evocación", nivel: 0,
            tiempo: "1 acción", alcance: "60 pies", componentes: "V, S",
            clases_permitidas: ["mago", "hechicero", "artífice"],
            mecanica: {
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Destreza", efecto: "Mitad" },
                daño: { base: "1d6", tipo: "trueno", escalado: [{ nivel_personaje: 5, dado: "2d6" }, { nivel_personaje: 11, dado: "3d6" }, { nivel_personaje: 17, dado: "4d6" }] },
                descripcion: "Onda de sonido que daña objetos y criaturas."
            }
        },
        electrocutar: {
            id: "electrocutar", nombre: "Electrocutar", escuela: "Evocación", nivel: 0,
            tiempo: "1 acción", alcance: "60 pies", componentes: "V, S",
            clases_permitidas: ["mago", "hechicero", "artífice"],
            mecanica: {
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Constitución", efecto: "Falla" },
                daño: { base: "1d8", tipo: "relámpago", escalado: [{ nivel_personaje: 5, dado: "2d8" }, { nivel_personaje: 11, dado: "3d8" }, { nivel_personaje: 17, dado: "4d8" }] },
                descripcion: "Descarga eléctrica. Ventaja contra criaturas con armadura metálica."
            }
        },
        guía_divina: {
            id: "guia_divina", nombre: "Guía Divina", escuela: "Adivinación", nivel: 0,
            tiempo: "1 acción", alcance: "Toque", componentes: "V, S",
            clases_permitidas: ["clerigo"],
            mecanica: { tipo_ataque: "buff", descripcion: "El objetivo puede añadir 1d4 a una tirada de habilidad de su elección." }
        },
        llama_sagrada: {
            id: "llama_sagrada", nombre: "Llama Sagrada", escuela: "Evocación", nivel: 0,
            tiempo: "1 acción", alcance: "60 pies", componentes: "V, S",
            clases_permitidas: ["clerigo"],
            mecanica: {
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Destreza", efecto: "Falla" },
                daño: { base: "1d8", tipo: "radiante", escalado: [{ nivel_personaje: 5, dado: "2d8" }, { nivel_personaje: 11, dado: "3d8" }, { nivel_personaje: 17, dado: "4d8" }] },
                descripcion: "Llama divina. Ignora cobertura. No beneficia a criaturas con cobertura total."
            }
        },
        taumaturgia: {
            id: "taumaturgia", nombre: "Taumaturgia", escuela: "Transmutación", nivel: 0,
            tiempo: "1 acción", alcance: "30 pies", componentes: "V",
            clases_permitidas: ["clerigo"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Manifestaciones de poder divino: voz atronadora, ventanas que vibran, etc." }
        },
        druidismo: {
            id: "druidismo", nombre: "Druidismo", escuela: "Transmutación", nivel: 0,
            tiempo: "1 acción", alcance: "30 pies", componentes: "V, S",
            clases_permitidas: ["druida"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Pequeños efectos relacionados con la naturaleza: flores, rastros, predicción del tiempo." }
        },
        reparar: {
            id: "reparar", nombre: "Reparar", escuela: "Transmutación", nivel: 0,
            tiempo: "1 minuto", alcance: "Toque", componentes: "V, S, M",
            clases_permitidas: ["mago", "hechicero", "artífice", "clerigo"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Repara una rotura o desgarro en un objeto." }
        },
        hoja_ardiente: {
            id: "hoja_ardiente", nombre: "Hoja Ardiente", escuela: "Evocación", nivel: 0,
            tiempo: "1 acción bonus", alcance: "Personal", componentes: "V, S",
            clases_permitidas: ["druida", "hechicero", "mago"],
            mecanica: {
                tipo_ataque: "hechizo",
                daño: { base: "1d8", tipo: "fuego", escalado: [{ nivel_personaje: 5, dado: "2d8" }, { nivel_personaje: 11, dado: "3d8" }, { nivel_personaje: 17, dado: "4d8" }] },
                descripcion: "Una hoja de fuego aparece en tu mano. Puedes hacer un ataque cuerpo a cuerpo con ella."
            }
        },
        latigo_espinoso: {
            id: "latigo_espinoso", nombre: "Látigo Espinoso", escuela: "Transmutación", nivel: 0,
            tiempo: "1 acción", alcance: "30 pies", componentes: "V, S, M",
            clases_permitidas: ["druida"],
            mecanica: {
                tipo_ataque: "hechizo", tirada_salvacion: null,
                daño: { base: "1d6", tipo: "perforante", escalado: [{ nivel_personaje: 5, dado: "2d6" }, { nivel_personaje: 11, dado: "3d6" }, { nivel_personaje: 17, dado: "4d6" }] },
                descripcion: "Látigo de espinas. Atrae 10 pies hacia ti."
            }
        },
        explosion_de_espadas: {
            id: "explosion_de_espadas", nombre: "Explosión de Espadas", escuela: "Conjuración", nivel: 0,
            tiempo: "1 acción", alcance: "5 pies", componentes: "V",
            clases_permitidas: ["bardo", "mago", "hechicero", "brujo"],
            mecanica: {
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Destreza", efecto: "Mitad" },
                daño: { base: "1d6", tipo: "cortante", escalado: [{ nivel_personaje: 5, dado: "2d6" }, { nivel_personaje: 11, dado: "3d6" }, { nivel_personaje: 17, dado: "4d6" }] },
                descripcion: "Espadas mágicas aparecen y atacan a criaturas a 5 pies."
            }
        },
        mensaje: {
            id: "mensaje", nombre: "Mensaje", escuela: "Transmutación", nivel: 0,
            tiempo: "1 acción", alcance: "120 pies", componentes: "V, S, M",
            clases_permitidas: ["bardo", "mago", "hechicero", "artífice"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Susurras un mensaje que solo el objetivo escucha." }
        },
        iluminacion: {
            id: "iluminacion", nombre: "Iluminación", escuela: "Evocación", nivel: 0,
            tiempo: "1 acción", alcance: "Toque", componentes: "V, M",
            clases_permitidas: ["bardo", "clerigo", "mago", "hechicero"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Un objeto brilla como una antorcha por 1 hora." }
        },
        chorro_de_agua: {
            id: "chorro_de_agua", nombre: "Chorro de Agua", escuela: "Conjuración", nivel: 0,
            tiempo: "1 acción", alcance: "30 pies", componentes: "S",
            clases_permitidas: ["druida", "mago", "hechicero"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Apaga fuegos pequeños, limpia objetos." }
        },
        toque_de_campo_fuerza: {
            id: "toque_de_campo_fuerza", nombre: "Toque de Campo de Fuerza", escuela: "Abjuración", nivel: 0,
            tiempo: "1 acción", alcance: "Toque", componentes: "V, S",
            clases_permitidas: ["mago", "hechicero", "artífice"],
            mecanica: { tipo_ataque: "buff", descripcion: "+2 de CA hasta el inicio de tu próximo turno." }
        },
        ilusion_menor: {
            id: "ilusion_menor", nombre: "Ilusión Menor", escuela: "Ilusión", nivel: 0,
            tiempo: "1 acción", alcance: "30 pies", componentes: "S, M",
            clases_permitidas: ["bardo", "mago", "hechicero", "brujo"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Creas un sonido o imagen estática menor." }
        }
    },

    // =========================================================
    // NIVEL 1
    // =========================================================
    nivel_1: {
        // Originales
        misil_magico: {
            id: "misil_magico", nombre: "Misil Mágico", escuela: "Evocación", nivel: 1,
            tiempo: "1 acción", alcance: "120 pies", componentes: "V, S",
            clases_permitidas: ["mago", "hechicero", "artífice"],
            mecanica: {
                tipo_ataque: "automatico", daño: { base: "3d4+3", tipo: "fuerza" },
                escalado_superior: "+1 dardo por nivel superior",
                descripcion: "Tres dardos de fuerza. Impactan automáticamente."
            }
        },
        curar_heridas: {
            id: "curar_heridas", nombre: "Curar Heridas", escuela: "Evocación", nivel: 1,
            tiempo: "1 acción", alcance: "Toque", componentes: "V, S",
            clases_permitidas: ["clerigo", "druida", "bardo", "paladin", "explorador", "artífice"],
            mecanica: {
                tipo_ataque: "curacion", daño: { base: "1d8+mod", tipo: "curación" },
                escalado_superior: "+1d8 por nivel superior",
                descripcion: "Recupera 1d8 + modificador de característica para lanzar hechizos."
            }
        },
        escudo: {
            id: "escudo", nombre: "Escudo", escuela: "Abjuración", nivel: 1,
            tiempo: "1 reacción", alcance: "Personal", componentes: "V, S",
            clases_permitidas: ["mago", "hechicero", "artífice"],
            mecanica: { tipo_ataque: "buff", descripcion: "+5 CA hasta el inicio de tu próximo turno. Inmune a Misil Mágico." }
        },
        armadura_mago: {
            id: "armadura_mago", nombre: "Armadura del Mago", escuela: "Abjuración", nivel: 1,
            tiempo: "1 acción", alcance: "Toque", componentes: "V, S, M",
            clases_permitidas: ["mago", "hechicero", "artífice"],
            mecanica: { tipo_ataque: "buff", descripcion: "CA base = 13 + Destreza. Dura 8 horas." }
        },
        detectar_magia: {
            id: "detectar_magia", nombre: "Detectar Magia", escuela: "Adivinación", nivel: 1,
            tiempo: "1 acción", alcance: "Personal", componentes: "V, S",
            clases_permitidas: ["mago", "hechicero", "clerigo", "druida", "bardo", "paladin", "explorador", "artífice"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Sientes magia en 30 pies. Concentración hasta 10 minutos." }
        },
        identificar: {
            id: "identificar", nombre: "Identificar", escuela: "Adivinación", nivel: 1,
            tiempo: "1 minuto", alcance: "Toque", componentes: "V, S, M",
            clases_permitidas: ["mago", "hechicero", "bardo", "artífice"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Aprendes propiedades de objeto mágico o hechizo activo." }
        },
        manos_ardientes: {
            id: "manos_ardientes", nombre: "Manos Ardientes", escuela: "Evocación", nivel: 1,
            tiempo: "1 acción", alcance: "15 pies (cono)", componentes: "V, S",
            clases_permitidas: ["mago", "hechicero"],
            mecanica: {
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Destreza", efecto: "Mitad" },
                daño: { base: "3d6", tipo: "fuego", escalado_superior: "+1d6 por nivel superior" },
                descripcion: "Cono de fuego de 15 pies."
            }
        },
        palabra_curativa: {
            id: "palabra_curativa", nombre: "Palabra Curativa", escuela: "Evocación", nivel: 1,
            tiempo: "1 acción bonus", alcance: "60 pies", componentes: "V",
            clases_permitidas: ["clerigo", "druida", "bardo"],
            mecanica: { 
                tipo_ataque: "curacion", daño: { base: "1d4+mod", tipo: "curación" }, 
                escalado_superior: "+1d4 por nivel superior",
                descripcion: "Curación a distancia." 
            }
        },
        herida_letal: {
            id: "herida_letal", nombre: "Herida Letal", escuela: "Nigromancia", nivel: 1,
            tiempo: "1 acción", alcance: "Toque", componentes: "V, S",
            clases_permitidas: ["clerigo", "druida"],
            mecanica: { 
                tipo_ataque: "hechizo", daño: { base: "3d10", tipo: "necrótico" }, 
                escalado_superior: "+1d10 por nivel superior",
                descripcion: "Ataque cuerpo a cuerpo con hechizo." 
            }
        },
        encantar_persona: {
            id: "encantar_persona", nombre: "Encantar Persona", escuela: "Encantamiento", nivel: 1,
            tiempo: "1 acción", alcance: "30 pies", componentes: "V, S",
            clases_permitidas: ["mago", "bardo", "hechicero", "brujo"],
            mecanica: { 
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Sabiduría", efecto: "Falla" }, 
                descripcion: "Humanoide encantado te ve como amigo por 1 hora." 
            }
        },
        
        // Nuevos nivel 1
        bendecir: {
            id: "bendecir", nombre: "Bendecir", escuela: "Encantamiento", nivel: 1,
            tiempo: "1 acción", alcance: "30 pies", componentes: "V, S, M",
            clases_permitidas: ["clerigo", "paladin"],
            mecanica: { 
                tipo_ataque: "buff", 
                descripcion: "Hasta 3 criaturas añaden 1d4 a tiradas de ataque y salvaciones por 1 minuto." 
            }
        },
        maldicion: {
            id: "maldicion", nombre: "Maldecir", escuela: "Encantamiento", nivel: 1,
            tiempo: "1 acción bonus", alcance: "90 pies", componentes: "V, S",
            clases_permitidas: ["clerigo", "paladin", "brujo"],
            mecanica: { 
                tipo_ataque: "debuff", 
                descripcion: "Objeto maldito. +1d6 de daño cuando atacas. Concentración." 
            }
        },
        santuario: {
            id: "santuario", nombre: "Santuario", escuela: "Abjuración", nivel: 1,
            tiempo: "1 acción bonus", alcance: "30 pies", componentes: "V, S, M",
            clases_permitidas: ["clerigo", "druida"],
            mecanica: { 
                tipo_ataque: "buff", 
                descripcion: "Criatura protegida. Los atacantes deben superar Sabiduría o no pueden atacar." 
            }
        },
        niebla_obscureciente: {
            id: "niebla_obscureciente", nombre: "Niebla Obscureciente", escuela: "Conjuración", nivel: 1,
            tiempo: "1 acción", alcance: "120 pies", componentes: "V, S",
            clases_permitidas: ["mago", "hechicero", "druida", "brujo"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Crea una esfera de niebla de 20 pies que oscurece la visión." }
        },
        caida_de_pluma: {
            id: "caida_de_pluma", nombre: "Caída de Pluma", escuela: "Transmutación", nivel: 1,
            tiempo: "1 reacción", alcance: "60 pies", componentes: "V, M",
            clases_permitidas: ["mago", "hechicero", "bardo"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Ralentiza la caída de hasta 5 criaturas." }
        },
        salto: {
            id: "salto", nombre: "Salto", escuela: "Transmutación", nivel: 1,
            tiempo: "1 acción", alcance: "Toque", componentes: "V, S, M",
            clases_permitidas: ["mago", "hechicero", "druida", "explorador"],
            mecanica: { tipo_ataque: "buff", descripcion: "El triple de distancia de salto por 1 minuto." }
        },
        zancada_prodigiosa: {
            id: "zancada_prodigiosa", nombre: "Zancada Prodigiosa", escuela: "Transmutación", nivel: 1,
            tiempo: "1 acción bonus", alcance: "Personal", componentes: "V, S",
            clases_permitidas: ["mago", "hechicero", "brujo", "druida", "explorador"],
            mecanica: { tipo_ataque: "buff", descripcion: "Velocidad +30 pies. No provoca ataques de oportunidad." }
        },
        comprension_idiomatica: {
            id: "comprension_idiomatica", nombre: "Comprensión Idiomática", escuela: "Adivinación", nivel: 1,
            tiempo: "1 acción", alcance: "Toque", componentes: "V, S, M",
            clases_permitidas: ["mago", "hechicero", "bardo", "brujo"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Comprendes cualquier idioma escrito por 1 hora." }
        },
        escritura_ilusoria: {
            id: "escritura_ilusoria", nombre: "Escritura Ilusoria", escuela: "Ilusión", nivel: 1,
            tiempo: "1 minuto", alcance: "Toque", componentes: "S, M",
            clases_permitidas: ["mago", "bardo", "brujo"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Escribes un mensaje ilusorio que solo los objetivos designados pueden leer." }
        },
        deteccion_veneno: {
            id: "deteccion_veneno", nombre: "Detección de Veneno y Enfermedad", escuela: "Adivinación", nivel: 1,
            tiempo: "1 acción", alcance: "Personal", componentes: "V, S, M",
            clases_permitidas: ["clerigo", "druida", "paladin", "explorador"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Detectas veneno y enfermedad en 30 pies." }
        },
        purificar_alimentos: {
            id: "purificar_alimentos", nombre: "Purificar Alimentos y Bebidas", escuela: "Transmutación", nivel: 1,
            tiempo: "1 acción", alcance: "10 pies", componentes: "V, S",
            clases_permitidas: ["clerigo", "druida", "paladin"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Purifica comida y bebida en un radio de 5 pies." }
        },
        crear_o_destruir_agua: {
            id: "crear_o_destruir_agua", nombre: "Crear o Destruir Agua", escuela: "Transmutación", nivel: 1,
            tiempo: "1 acción", alcance: "30 pies", componentes: "V, S, M",
            clases_permitidas: ["clerigo", "druida"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Creas o destruyes hasta 10 galones de agua." }
        },
        esquirla_de_hielo: {
            id: "esquirla_de_hielo", nombre: "Esquirla de Hielo", escuela: "Conjuración", nivel: 1,
            tiempo: "1 acción bonus", alcance: "60 pies", componentes: "S, M",
            clases_permitidas: ["mago", "hechicero", "druida"],
            mecanica: {
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Destreza", efecto: "Mitad" },
                daño: { base: "1d10", tipo: "perforante", escalado_superior: "+1d10 por nivel superior" },
                descripcion: "Esquirlas de hielo dañan y crean terreno difícil."
            }
        },
        onda_trueno: {
            id: "onda_trueno", nombre: "Onda de Trueno", escuela: "Evocación", nivel: 1,
            tiempo: "1 acción", alcance: "15 pies (cubo)", componentes: "V, S",
            clases_permitidas: ["bardo", "druida", "mago", "hechicero"],
            mecanica: {
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Constitución", efecto: "Mitad" },
                daño: { base: "2d8", tipo: "trueno", escalado_superior: "+1d8 por nivel superior" },
                descripcion: "Onda de fuerza que empuja 10 pies."
            }
        },
        proyectil_magico_de_tasha: {
            id: "proyectil_magico_de_tasha", nombre: "Proyectil Mágico de Tasha", escuela: "Evocación", nivel: 1,
            tiempo: "1 acción", alcance: "60 pies", componentes: "V, S, M",
            clases_permitidas: ["mago", "hechicero", "artífice"],
            mecanica: {
                tipo_ataque: "hechizo", tirada_salvacion: null,
                daño: { base: "2d4+2", tipo: "fuerza" },
                escalado_superior: "+1 proyectil por nivel superior",
                descripcion: "Dos proyectiles mágicos que impactan automáticamente."
            }
        },
        crecimiento_espinoso: {
            id: "crecimiento_espinoso", nombre: "Crecimiento Espinoso", escuela: "Transmutación", nivel: 1,
            tiempo: "1 acción", alcance: "150 pies", componentes: "V, S, M",
            clases_permitidas: ["druida", "explorador"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Terreno de 20 pies causa 2d4 perforante cada 5 pies." }
        },
        ola_atronadora: {
            id: "ola_atronadora", nombre: "Ola Atronadora", escuela: "Evocación", nivel: 1,
            tiempo: "1 acción", alcance: "Personal (15 pies)", componentes: "V, S",
            clases_permitidas: ["clerigo", "druida"],
            mecanica: {
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Constitución", efecto: "Mitad" },
                daño: { base: "2d8", tipo: "trueno", escalado_superior: "+1d8 por nivel superior" },
                descripcion: "Onda expansiva en cono."
            }
        },
        fuego_fatuo: {
            id: "fuego_fatuo", nombre: "Fuego Fatuo", escuela: "Evocación", nivel: 1,
            tiempo: "1 acción", alcance: "120 pies", componentes: "V",
            clases_permitidas: ["druida"],
            mecanica: { tipo_ataque: "debuff", descripcion: "Objeto iluminado. Ventaja para atacar contra él." }
        },
        buenberry: {
            id: "buenberry", nombre: "Buenberry", escuela: "Transmutación", nivel: 1,
            tiempo: "1 acción", alcance: "Toque", componentes: "V, S, M",
            clases_permitidas: ["druida", "explorador"],
            mecanica: { tipo_ataque: "curacion", descripcion: "Creas 10 bayas que curan 1 PG cada una." }
        },
        ola_curativa: {
            id: "ola_curativa", nombre: "Ola Curativa", escuela: "Evocación", nivel: 1,
            tiempo: "1 acción", alcance: "Personal", componentes: "V, S",
            clases_permitidas: ["clerigo", "druida"],
            mecanica: { tipo_ataque: "curacion", daño: { base: "1d8", tipo: "curación" }, descripcion: "Curas a ti y a aliados en un radio de 15 pies." }
        }
    },

    // =========================================================
    // NIVEL 2
    // =========================================================
    nivel_2: {
        // Originales
        nube_de_dagas: {
            id: "nube_de_dagas", nombre: "Nube de Dagas", escuela: "Conjuración", nivel: 2,
            tiempo: "1 acción", alcance: "60 pies", componentes: "V, S, M",
            clases_permitidas: ["mago", "hechicero", "brujo"],
            mecanica: {
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Destreza", efecto: "Mitad" },
                daño: { base: "4d4", tipo: "cortante" },
                escalado_superior: "+2d4 por nivel superior",
                descripcion: "Dagas giratorias en cubo de 5 pies. Daño al entrar o empezar turno."
            }
        },
        silencio: {
            id: "silencio", nombre: "Silencio", escuela: "Ilusión", nivel: 2,
            tiempo: "1 acción", alcance: "120 pies", componentes: "V, S",
            clases_permitidas: ["clerigo", "druida", "bardo", "mago", "explorador"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Esfera de 20 pies de silencio mágico por 10 minutos." }
        },
        piel_corteza: {
            id: "piel_corteza", nombre: "Piel de Corteza", escuela: "Transmutación", nivel: 2,
            tiempo: "1 acción", alcance: "Toque", componentes: "V, S, M",
            clases_permitidas: ["druida", "clerigo", "explorador"],
            mecanica: { tipo_ataque: "buff", descripcion: "CA del objetivo no puede ser menor que 16 por 1 hora." }
        },
        invisibilidad: {
            id: "invisibilidad", nombre: "Invisibilidad", escuela: "Ilusión", nivel: 2,
            tiempo: "1 acción", alcance: "Toque", componentes: "V, S, M",
            clases_permitidas: ["mago", "hechicero", "brujo", "bardo", "artífice"],
            mecanica: { tipo_ataque: "buff", descripcion: "Criatura invisible por 1 hora. Termina si ataca o lanza hechizo." }
        },
        detectar_pensamientos: {
            id: "detectar_pensamientos", nombre: "Detectar Pensamientos", escuela: "Adivinación", nivel: 2,
            tiempo: "1 acción", alcance: "Personal", componentes: "V, S, M",
            clases_permitidas: ["mago", "hechicero", "bardo"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Lees pensamientos superficiales de criaturas cercanas por 1 minuto." }
        },
        
        // Nuevos nivel 2
        rayo_de_luna: {
            id: "rayo_de_luna", nombre: "Rayo de Luna", escuela: "Evocación", nivel: 2,
            tiempo: "1 acción", alcance: "120 pies", componentes: "V, S, M",
            clases_permitidas: ["druida"],
            mecanica: {
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Constitución", efecto: "Mitad" },
                daño: { base: "2d10", tipo: "radiante", escalado_superior: "+1d10 por nivel superior" },
                descripcion: "Rayo de luz lunar. Si falla salvación, criatura cambia forma en su turno."
            }
        },
        espada_magica_de_melf: {
            id: "espada_magica_de_melf", nombre: "Espada Mágica de Melf", escuela: "Evocación", nivel: 2,
            tiempo: "1 acción", alcance: "60 pies", componentes: "V, S, M",
            clases_permitidas: ["mago", "hechicero"],
            mecanica: {
                tipo_ataque: "hechizo", tirada_salvacion: null,
                daño: { base: "3d10", tipo: "fuerza" },
                descripcion: "Espada flotante que ataca a tu orden."
            }
        },
        flecha_ácida_de_melf: {
            id: "flecha_acida_de_melf", nombre: "Flecha Ácida de Melf", escuela: "Evocación", nivel: 2,
            tiempo: "1 acción", alcance: "90 pies", componentes: "V, S, M",
            clases_permitidas: ["mago", "hechicero"],
            mecanica: {
                tipo_ataque: "hechizo", tirada_salvacion: null,
                daño: { base: "4d4", tipo: "ácido" },
                escalado_superior: "+1d4 por nivel superior",
                descripcion: "Flecha que causa daño adicional en el siguiente turno."
            }
        },
        telarana: {
            id: "telarana", nombre: "Telaraña", escuela: "Conjuración", nivel: 2,
            tiempo: "1 acción", alcance: "60 pies", componentes: "V, S, M",
            clases_permitidas: ["mago", "hechicero", "artífice"],
            mecanica: {
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Destreza", efecto: "Falla" },
                descripcion: "Telarañas en cubo de 20 pies. Terreno difícil. Criaturas inmovilizadas si fallan salvación."
            }
        },
        flamear: {
            id: "flamear", nombre: "Flamear", escuela: "Evocación", nivel: 2,
            tiempo: "1 acción bonus", alcance: "Personal", componentes: "V, S",
            clases_permitidas: ["druida", "mago", "hechicero", "artífice"],
            mecanica: {
                tipo_ataque: "buff",
                daño: { base: "1d8", tipo: "fuego" },
                descripcion: "Tu arma arde en llamas. +1d8 de daño de fuego."
            }
        },
        oscuridad: {
            id: "oscuridad", nombre: "Oscuridad", escuela: "Evocación", nivel: 2,
            tiempo: "1 acción", alcance: "60 pies", componentes: "V, M",
            clases_permitidas: ["mago", "hechicero", "brujo"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Oscuridad mágica en 15 pies. Visión oscura no funciona." }
        },
        paso_brumoso: {
            id: "paso_brumoso", nombre: "Paso Brumoso", escuela: "Conjuración", nivel: 2,
            tiempo: "1 acción bonus", alcance: "Personal", componentes: "V",
            clases_permitidas: ["mago", "hechicero", "brujo", "bardo"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Te teletransportas 30 pies a un espacio desocupado que puedas ver." }
        },
        sugestion: {
            id: "sugestion", nombre: "Sugestión", escuela: "Encantamiento", nivel: 2,
            tiempo: "1 acción", alcance: "30 pies", componentes: "V, M",
            clases_permitidas: ["mago", "bardo", "hechicero", "brujo"],
            mecanica: { 
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Sabiduría", efecto: "Falla" }, 
                descripcion: "Sugieres una acción a una criatura. Debe sonar razonable." 
            }
        },
        inmovilizar_persona: {
            id: "inmovilizar_persona", nombre: "Inmovilizar Persona", escuela: "Encantamiento", nivel: 2,
            tiempo: "1 acción", alcance: "60 pies", componentes: "V, S, M",
            clases_permitidas: ["mago", "bardo", "clerigo", "hechicero", "brujo"],
            mecanica: { 
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Sabiduría", efecto: "Falla" }, 
                descripcion: "Paraliza a un humanoide." 
            }
        },
        calmar_emociones: {
            id: "calmar_emociones", nombre: "Calmar Emociones", escuela: "Encantamiento", nivel: 2,
            tiempo: "1 acción", alcance: "60 pies", componentes: "V, S",
            clases_permitidas: ["bardo", "clerigo"],
            mecanica: { 
                tipo_ataque: "utilidad", 
                descripcion: "Suprime efectos de encantamiento. Neutraliza emociones fuertes." 
            }
        },
        restauracion_menor: {
            id: "restauracion_menor", nombre: "Restauración Menor", escuela: "Abjuración", nivel: 2,
            tiempo: "1 acción", alcance: "Toque", componentes: "V, S",
            clases_permitidas: ["clerigo", "druida", "bardo", "paladin", "explorador", "artífice"],
            mecanica: { tipo_ataque: "curacion", descripcion: "Cura una enfermedad, parálisis o condición." }
        },
        ceguera_sordera: {
            id: "ceguera_sordera", nombre: "Ceguera/Sordera", escuela: "Nigromancia", nivel: 2,
            tiempo: "1 acción", alcance: "30 pies", componentes: "V",
            clases_permitidas: ["mago", "hechicero", "bardo", "clerigo"],
            mecanica: { 
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Constitución", efecto: "Falla" }, 
                descripcion: "Ciega o ensordece a una criatura." 
            }
        },
        imagen_reflejada: {
            id: "imagen_reflejada", nombre: "Imagen Reflejada", escuela: "Ilusión", nivel: 2,
            tiempo: "1 acción", alcance: "Personal", componentes: "V, S",
            clases_permitidas: ["mago", "hechicero", "brujo"],
            mecanica: { tipo_ataque: "buff", descripcion: "Crea 3 copias ilusorias. +3 a CA mientras duren." }
        },
        nube_apesta: {
            id: "nube_apesta", nombre: "Nube Apestosa", escuela: "Conjuración", nivel: 2,
            tiempo: "1 acción", alcance: "90 pies", componentes: "V, S, M",
            clases_permitidas: ["mago", "hechicero", "druida"],
            mecanica: {
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Constitución", efecto: "Falla" },
                descripcion: "Nube apestosa que provoca náuseas. Incapacitados mientras están dentro."
            }
        },
        rayo_ardiente: {
            id: "rayo_ardiente", nombre: "Rayo Ardiente", escuela: "Evocación", nivel: 2,
            tiempo: "1 acción", alcance: "120 pies", componentes: "V, S",
            clases_permitidas: ["mago", "hechicero"],
            mecanica: {
                tipo_ataque: "hechizo", tirada_salvacion: null,
                daño: { base: "2d6", tipo: "fuego" },
                escalado_superior: "+1 rayo por nivel superior",
                descripcion: "Lanzas 3 rayos de fuego. Pueden tener objetivos diferentes."
            }
        },
        levitacion: {
            id: "levitacion", nombre: "Levitación", escuela: "Transmutación", nivel: 2,
            tiempo: "1 acción", alcance: "60 pies", componentes: "V, S, M",
            clases_permitidas: ["mago", "hechicero", "artífice"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Mueves verticalmente a una criatura u objeto hasta 20 pies." }
        },
        sostener_persona: {
            id: "sostener_persona", nombre: "Sostener Persona", escuela: "Encantamiento", nivel: 2,
            tiempo: "1 acción", alcance: "60 pies", componentes: "V, S, M",
            clases_permitidas: ["clerigo", "druida"],
            mecanica: { 
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Sabiduría", efecto: "Falla" }, 
                descripcion: "Paraliza a un humanoide." 
            }
        },
        aliado_animal: {
            id: "aliado_animal", nombre: "Aliado Animal", escuela: "Encantamiento", nivel: 2,
            tiempo: "1 acción", alcance: "30 pies", componentes: "V, S",
            clases_permitidas: ["druida", "explorador"],
            mecanica: { 
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Sabiduría", efecto: "Falla" }, 
                descripcion: "Bestia con Int 3 o inferior te ayuda en combate." 
            }
        },
        encontrar_trampas: {
            id: "encontrar_trampas", nombre: "Encontrar Trampas", escuela: "Adivinación", nivel: 2,
            tiempo: "1 acción", alcance: "120 pies", componentes: "V, S",
            clases_permitidas: ["clerigo", "druida", "explorador"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Detectas trampas en línea de visión." }
        },
        globo_de_invulnerabilidad: {
            id: "globo_de_invulnerabilidad", nombre: "Globo de Invulnerabilidad", escuela: "Abjuración", nivel: 2,
            tiempo: "1 acción", alcance: "Personal", componentes: "V, S, M",
            clases_permitidas: ["mago", "hechicero"],
            mecanica: { tipo_ataque: "buff", descripcion: "Inmune a daño no mágico por 1 minuto." }
        },
        corona_del_insensato: {
            id: "corona_del_insensato", nombre: "Corona del Insensato", escuela: "Encantamiento", nivel: 2,
            tiempo: "1 acción", alcance: "120 pies", componentes: "V, S",
            clases_permitidas: ["bardo", "mago", "hechicero", "brujo"],
            mecanica: { 
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Sabiduría", efecto: "Falla" }, 
                descripcion: "Objetivo encantado debe usar su acción para aplaudir." 
            }
        },
        agrandar_reducir: {
            id: "agrandar_reducir", nombre: "Agrandar/Reducir", escuela: "Transmutación", nivel: 2,
            tiempo: "1 acción", alcance: "30 pies", componentes: "V, S, M",
            clases_permitidas: ["mago", "hechicero", "artífice"],
            mecanica: { 
                tipo_ataque: "buff", 
                descripcion: "Duplica o reduce a la mitad el tamaño de una criatura. Cambia daño y fuerza." 
            }
        }
    },

    // =========================================================
    // NIVEL 3
    // =========================================================
    nivel_3: {
        // Originales
        bola_de_fuego: {
            id: "bola_de_fuego", nombre: "Bola de Fuego", escuela: "Evocación", nivel: 3,
            tiempo: "1 acción", alcance: "150 pies", componentes: "V, S, M",
            clases_permitidas: ["mago", "hechicero", "artífice"],
            mecanica: {
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Destreza", efecto: "Mitad" },
                daño: { base: "8d6", tipo: "fuego" },
                escalado_superior: "+1d6 por nivel superior",
                descripcion: "Explosión en radio de 20 pies."
            }
        },
        relampago: {
            id: "relampago", nombre: "Relámpago", escuela: "Evocación", nivel: 3,
            tiempo: "1 acción", alcance: "100 pies", componentes: "V, S, M",
            clases_permitidas: ["mago", "hechicero", "druida", "artífice"],
            mecanica: {
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Destreza", efecto: "Mitad" },
                daño: { base: "8d6", tipo: "rayo" },
                escalado_superior: "+1d6 por nivel superior",
                descripcion: "Línea de 100 x 5 pies de rayo."
            }
        },
        acelerar: {
            id: "acelerar", nombre: "Acelerar", escuela: "Transmutación", nivel: 3,
            tiempo: "1 acción", alcance: "30 pies", componentes: "V, S, M",
            clases_permitidas: ["mago", "hechicero", "druida", "artífice"],
            mecanica: { 
                tipo_ataque: "buff", 
                descripcion: "Velocidad x2, +2 CA, ventaja en Destreza, acción extra cada turno por 1 minuto." 
            }
        },
        contrahechizo: {
            id: "contrahechizo", nombre: "Contrahechizo", escuela: "Abjuración", nivel: 3,
            tiempo: "1 reacción", alcance: "60 pies", componentes: "S",
            clases_permitidas: ["mago", "hechicero", "brujo", "bardo"],
            mecanica: { 
                tipo_ataque: "utilidad", 
                descripcion: "Falla hechizo de nivel 3 o inferior. Para nivel superior, prueba de habilidad CD 10+nivel." 
            }
        },
        revivir: {
            id: "revivir", nombre: "Revivir", escuela: "Nigromancia", nivel: 3,
            tiempo: "1 acción", alcance: "Toque", componentes: "V, S, M",
            clases_permitidas: ["clerigo", "druida", "paladin", "bardo"],
            mecanica: { 
                tipo_ataque: "curacion", 
                descripcion: "Devuelve a la vida a criatura muerta hace menos de 1 minuto con 1 PG." 
            }
        },
        volar: {
            id: "volar", nombre: "Volar", escuela: "Transmutación", nivel: 3,
            tiempo: "1 acción", alcance: "Toque", componentes: "V, S, M",
            clases_permitidas: ["mago", "hechicero", "druida", "brujo", "artífice"],
            mecanica: { tipo_ataque: "buff", descripcion: "Velocidad de vuelo 60 pies por 10 minutos." }
        },
        disipar_magia: {
            id: "disipar_magia", nombre: "Disipar Magia", escuela: "Abjuración", nivel: 3,
            tiempo: "1 acción", alcance: "120 pies", componentes: "V, S",
            clases_permitidas: ["mago", "hechicero", "clerigo", "druida", "brujo", "bardo", "paladin", "artífice"],
            mecanica: { 
                tipo_ataque: "utilidad", 
                descripcion: "Termina hechizos de nivel 3 o inferior en objetivo. Superior requiere prueba." 
            }
        },
        
        // Nuevos nivel 3
        conjurar_animales: {
            id: "conjurar_animales", nombre: "Conjurar Animales", escuela: "Conjuración", nivel: 3,
            tiempo: "1 acción", alcance: "60 pies", componentes: "V, S",
            clases_permitidas: ["druida", "explorador"],
            mecanica: { 
                tipo_ataque: "invocacion", 
                descripcion: "Conjuras bestias (CR 2 o menos) que te ayudan." 
            }
        },
        conjurar_seres_del_bosque: {
            id: "conjurar_seres_del_bosque", nombre: "Conjurar Seres del Bosque", escuela: "Conjuración", nivel: 3,
            tiempo: "1 acción", alcance: "60 pies", componentes: "V, S",
            clases_permitidas: ["druida"],
            mecanica: { 
                tipo_ataque: "invocacion", 
                descripcion: "Conjuras fata o espíritu del bosque." 
            }
        },
        dia_eterno: {
            id: "dia_eterno", nombre: "Día Eterno", escuela: "Evocación", nivel: 3,
            tiempo: "1 acción", alcance: "60 pies", componentes: "V, S",
            clases_permitidas: ["clerigo", "paladin"],
            mecanica: { 
                tipo_ataque: "utilidad", 
                descripcion: "Luz solar brillante en radio de 60 pies. Daña a no muertos." 
            }
        },
        proteger_energia: {
            id: "proteger_energia", nombre: "Proteger Energía", escuela: "Abjuración", nivel: 3,
            tiempo: "1 acción", alcance: "Toque", componentes: "V, S",
            clases_permitidas: ["clerigo", "druida", "explorador", "mago", "hechicero"],
            mecanica: { 
                tipo_ataque: "buff", 
                descripcion: "Resistencia a un tipo de daño (ácido, frío, fuego, rayo, trueno). Concentración 1 hora." 
            }
        },
        circulo_magico: {
            id: "circulo_magico", nombre: "Círculo Mágico", escuela: "Abjuración", nivel: 3,
            tiempo: "1 minuto", alcance: "10 pies", componentes: "V, S, M",
            clases_permitidas: ["clerigo", "mago", "hechicero", "brujo"],
            mecanica: { 
                tipo_ataque: "utilidad", 
                descripcion: "Círculo de 10 pies que protege contra cierto tipo de criaturas (celestiales, fatas, infernales, etc.)." 
            }
        },
        espiritus_guardianes: {
            id: "espiritus_guardianes", nombre: "Espíritus Guardianes", escuela: "Conjuración", nivel: 3,
            tiempo: "1 acción", alcance: "Personal", componentes: "V, S, M",
            clases_permitidas: ["clerigo"],
            mecanica: {
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Sabiduría", efecto: "Mitad" },
                daño: { base: "3d8", tipo: "radiante" },
                descripcion: "Espíritus te rodean en radio 15 pies. Dañan a enemigos que entran."
            }
        },
        luz_del_dia: {
            id: "luz_del_dia", nombre: "Luz del Día", escuela: "Evocación", nivel: 3,
            tiempo: "1 acción", alcance: "60 pies", componentes: "V, S",
            clases_permitidas: ["clerigo", "druida", "paladin"],
            mecanica: { 
                tipo_ataque: "utilidad", 
                descripcion: "Luz solar en radio 60 pies. Disipa oscuridad mágica." 
            }
        },
        pisotear_tierra: {
            id: "pisotear_tierra", nombre: "Pisotear Tierra", escuela: "Transmutación", nivel: 3,
            tiempo: "1 acción", alcance: "120 pies", componentes: "V, S",
            clases_permitidas: ["druida", "clerigo"],
            mecanica: {
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Fuerza", efecto: "Mitad" },
                daño: { base: "4d10", tipo: "contundente" },
                descripcion: "La tierra se agita y derriba criaturas."
            }
        },
        llamar_relampago: {
            id: "llamar_relampago", nombre: "Llamar Relámpago", escuela: "Conjuración", nivel: 3,
            tiempo: "1 acción", alcance: "120 pies", componentes: "V, S",
            clases_permitidas: ["druida"],
            mecanica: {
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Destreza", efecto: "Mitad" },
                daño: { base: "3d10", tipo: "rayo" },
                descripcion: "Tormenta en radio 60 pies. Puedes llamar rayos cada turno."
            }
        },
        caminar_sobre_agua: {
            id: "caminar_sobre_agua", nombre: "Caminar sobre Agua", escuela: "Transmutación", nivel: 3,
            tiempo: "1 acción", alcance: "30 pies", componentes: "V, S, M",
            clases_permitidas: ["clerigo", "druida", "explorador", "hechicero"],
            mecanica: { tipo_ataque: "buff", descripcion: "Hasta 10 criaturas pueden caminar sobre líquidos por 1 hora." }
        },
        respirar_bajo_agua: {
            id: "respirar_bajo_agua", nombre: "Respirar bajo Agua", escuela: "Transmutación", nivel: 3,
            tiempo: "1 acción", alcance: "30 pies", componentes: "V, S, M",
            clases_permitidas: ["druida", "explorador", "hechicero", "mago"],
            mecanica: { tipo_ataque: "buff", descripcion: "Hasta 10 criaturas pueden respirar bajo agua por 24 horas." }
        },
        agrandar_planta: {
            id: "agrandar_planta", nombre: "Agrandar Planta", escuela: "Transmutación", nivel: 3,
            tiempo: "1 acción", alcance: "150 pies", componentes: "V, S",
            clases_permitidas: ["druida", "explorador"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Plantas crecen, crean terreno difícil o atrapan." }
        },
        hipnotizar: {
            id: "hipnotizar", nombre: "Hipnotizar", escuela: "Encantamiento", nivel: 3,
            tiempo: "1 acción", alcance: "120 pies", componentes: "V, S, M",
            clases_permitidas: ["bardo", "mago", "hechicero", "brujo"],
            mecanica: { 
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Sabiduría", efecto: "Falla" }, 
                descripcion: "Encanta a criaturas en un cubo de 30 pies. Quedan incapacitadas." 
            }
        },
        pequena_cabana_de_leomund: {
            id: "pequena_cabana_de_leomund", nombre: "Pequeña Cabaña de Leomund", escuela: "Evocación", nivel: 3,
            tiempo: "1 minuto", alcance: "Personal", componentes: "V, S, M",
            clases_permitidas: ["mago", "hechicero", "bardo"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Cúpula de fuerza de 10 pies. Protege del clima y criaturas." }
        },
        don_de_las_lenguas: {
            id: "don_de_las_lenguas", nombre: "Don de las Lenguas", escuela: "Adivinación", nivel: 3,
            tiempo: "1 acción", alcance: "Toque", componentes: "V, M",
            clases_permitidas: ["bardo", "clerigo", "hechicero", "mago", "brujo"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Comprendes y hablas cualquier idioma por 1 hora." }
        },
        imagen_mayor: {
            id: "imagen_mayor", nombre: "Imagen Mayor", escuela: "Ilusión", nivel: 3,
            tiempo: "1 acción", alcance: "120 pies", componentes: "V, S, M",
            clases_permitidas: ["bardo", "mago", "hechicero", "brujo"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Creación ilusoria de hasta 20 pies con sonido." }
        },
        miedo: {
            id: "miedo", nombre: "Miedo", escuela: "Ilusión", nivel: 3,
            tiempo: "1 acción", alcance: "30 pies", componentes: "V, S, M",
            clases_permitidas: ["mago", "hechicero", "bardo", "brujo"],
            mecanica: { 
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Sabiduría", efecto: "Falla" }, 
                descripcion: "Proyecta una imagen que asusta. Objetivo huye y suelta lo que lleva." 
            }
        },
        clariaudiencia: {
            id: "clariaudiencia", nombre: "Clariaudiencia", escuela: "Adivinación", nivel: 3,
            tiempo: "10 minutos", alcance: "1 milla", componentes: "V, S, M",
            clases_permitidas: ["bardo", "clerigo", "mago", "hechicero"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Creas un sensor invisible que te permite ver u oír en un lugar." }
        },
        bola_de_fuego_helada: {
            id: "bola_de_fuego_helada", nombre: "Bola de Fuego Helada", escuela: "Evocación", nivel: 3,
            tiempo: "1 acción", alcance: "150 pies", componentes: "V, S, M",
            clases_permitidas: ["mago", "hechicero"],
            mecanica: {
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Constitución", efecto: "Mitad" },
                daño: { base: "8d6", tipo: "frío" },
                descripcion: "Similar a bola de fuego pero de frío."
            }
        }
    },

    // =========================================================
    // NIVEL 4
    // =========================================================
    nivel_4: {
        // Originales
        ojo_arcano: {
            id: "ojo_arcano", nombre: "Ojo Arcano", escuela: "Adivinación", nivel: 4,
            tiempo: "1 acción", alcance: "30 pies", componentes: "V, S, M",
            clases_permitidas: ["mago", "hechicero", "brujo", "artífice"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Ojo flotante invisible que puedes mover para espiar por 1 hora." }
        },
        muro_fuego: {
            id: "muro_fuego", nombre: "Muro de Fuego", escuela: "Evocación", nivel: 4,
            tiempo: "1 acción", alcance: "120 pies", componentes: "V, S, M",
            clases_permitidas: ["mago", "hechicero", "druida"],
            mecanica: {
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Destreza", efecto: "Mitad" },
                daño: { base: "5d8", tipo: "fuego" },
                escalado_superior: "+1d8 por nivel superior",
                descripcion: "Muro de 60x20 pies. Causa daño al aparecer y a criaturas que entren."
            }
        },
        polimorfar: {
            id: "polimorfar", nombre: "Polimorfar", escuela: "Transmutación", nivel: 4,
            tiempo: "1 acción", alcance: "60 pies", componentes: "V, S, M",
            clases_permitidas: ["mago", "hechicero", "druida", "bardo"],
            mecanica: { 
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Sabiduría", efecto: "Falla" }, 
                descripcion: "Transforma criatura en bestia de CR igual o menor." 
            }
        },
        invisibilidad_mayor: {
            id: "invisibilidad_mayor", nombre: "Invisibilidad Mayor", escuela: "Ilusión", nivel: 4,
            tiempo: "1 acción", alcance: "Toque", componentes: "V, S",
            clases_permitidas: ["mago", "hechicero", "brujo", "bardo", "artífice"],
            mecanica: { tipo_ataque: "buff", descripcion: "Invisible por 1 minuto. NO termina al atacar." }
        },
        
        // Nuevos nivel 4
        maldicion: {
            id: "maldicion", nombre: "Maldición", escuela: "Nigromancia", nivel: 4,
            tiempo: "1 acción", alcance: "Toque", componentes: "V, S",
            clases_permitidas: ["clerigo", "mago", "hechicero", "brujo"],
            mecanica: { 
                tipo_ataque: "debuff", 
                descripcion: "Maldices a una criatura. Elige efecto: desventaja en ataques/habilidad/salvaciones, o perder su turno." 
            }
        },
        muro_hielo: {
            id: "muro_hielo", nombre: "Muro de Hielo", escuela: "Evocación", nivel: 4,
            tiempo: "1 acción", alcance: "120 pies", componentes: "V, S, M",
            clases_permitidas: ["mago", "hechicero", "druida"],
            mecanica: {
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Destreza", efecto: "Mitad" },
                daño: { base: "10d6", tipo: "frío" },
                descripcion: "Muro de hielo de hasta 10 secciones de 10x10. Daño frío si se rompe."
            }
        },
        muro_espinas: {
            id: "muro_espinas", nombre: "Muro de Espinas", escuela: "Conjuración", nivel: 4,
            tiempo: "1 acción", alcance: "120 pies", componentes: "V, S, M",
            clases_permitidas: ["druida"],
            mecanica: {
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Destreza", efecto: "Mitad" },
                daño: { base: "7d8", tipo: "perforante" },
                descripcion: "Muro de espinas. Daño al atravesarlo."
            }
        },
        controlar_agua: {
            id: "controlar_agua", nombre: "Controlar Agua", escuela: "Transmutación", nivel: 4,
            tiempo: "1 acción", alcance: "300 pies", componentes: "V, S, M",
            clases_permitidas: ["clerigo", "druida", "mago"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Controlas agua en un área: inundar, partir, redirigir, etc." }
        },
        puerta_dimencional: {
            id: "puerta_dimencional", nombre: "Puerta Dimensional", escuela: "Conjuración", nivel: 4,
            tiempo: "1 acción", alcance: "500 pies", componentes: "V",
            clases_permitidas: ["mago", "hechicero", "bardo", "brujo"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Te teletransportas hasta 500 pies." }
        },
        libertad_movimiento: {
            id: "libertad_movimiento", nombre: "Libertad de Movimiento", escuela: "Abjuración", nivel: 4,
            tiempo: "1 acción", alcance: "Toque", componentes: "V, S, M",
            clases_permitidas: ["bardo", "clerigo", "druida", "explorador"],
            mecanica: { tipo_ataque: "buff", descripcion: "Ignora terreno difícil, parálisis, agarres, etc. por 1 hora." }
        },
        muerte_falsa: {
            id: "muerte_falsa", nombre: "Muerte Falsa", escuela: "Nigromancia", nivel: 4,
            tiempo: "1 acción", alcance: "Toque", componentes: "V, S, M",
            clases_permitidas: ["clerigo", "druida", "mago"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Pones a una criatura en estado cataléptico. Parece muerta." }
        },
        guardabosques: {
            id: "guardabosques", nombre: "Guardabosques", escuela: "Adivinación", nivel: 4,
            tiempo: "1 acción", alcance: "Personal", componentes: "V, S, M",
            clases_permitidas: ["bardo", "clerigo", "druida", "explorador"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Sabes exactamente tu ubicación en el mundo." }
        },
        conjurar_elemental_menor: {
            id: "conjurar_elemental_menor", nombre: "Conjurar Elemental Menor", escuela: "Conjuración", nivel: 4,
            tiempo: "1 minuto", alcance: "90 pies", componentes: "V, S",
            clases_permitidas: ["druida", "mago"],
            mecanica: { tipo_ataque: "invocacion", descripcion: "Conjuras un elemental de CR 2 o menos." }
        },
        tormenta_de_hielo: {
            id: "tormenta_de_hielo", nombre: "Tormenta de Hielo", escuela: "Evocación", nivel: 4,
            tiempo: "1 acción", alcance: "300 pies", componentes: "V, S, M",
            clases_permitidas: ["druida", "mago", "hechicero"],
            mecanica: {
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Destreza", efecto: "Mitad" },
                daño: { base: "2d8", tipo: "contundente", daño2: { base: "4d6", tipo: "frío" } },
                descripcion: "Granizo en radio 20 pies. Terreno difícil."
            }
        },
        esfera_resistente_de_otiluke: {
            id: "esfera_resistente_de_otiluke", nombre: "Esfera Resistente de Otiluke", escuela: "Evocación", nivel: 4,
            tiempo: "1 acción", alcance: "30 pies", componentes: "V, S, M",
            clases_permitidas: ["mago", "hechicero"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Esfera de fuerza que atrapa a una criatura." }
        },
        fabricar: {
            id: "fabricar", nombre: "Fabricar", escuela: "Transmutación", nivel: 4,
            tiempo: "10 minutos", alcance: "120 pies", componentes: "V, S",
            clases_permitidas: ["artífice", "mago", "hechicero"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Conviertes materiales en objetos manufacturados." }
        },
        santuario_privado_de_mordenkainen: {
            id: "santuario_privado_de_mordenkainen", nombre: "Santuario Privado de Mordenkainen", escuela: "Abjuración", nivel: 4,
            tiempo: "10 minutos", alcance: "120 pies", componentes: "V, S, M",
            clases_permitidas: ["mago"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Proteges un área de 100 pies de exploración mágica." }
        },
        fuego_faerie: {
            id: "fuego_faerie", nombre: "Fuego Faerie", escuela: "Evocación", nivel: 4,
            tiempo: "1 acción", alcance: "60 pies", componentes: "V",
            clases_permitidas: ["druida", "bardo"],
            mecanica: { 
                tipo_ataque: "debuff", 
                descripcion: "Objetos en cubo 20 pies resplandecen. Ventaja para atacar." 
            }
        }
    },

    // =========================================================
    // NIVEL 5
    // =========================================================
    nivel_5: {
        // Originales
        nube_mortal: {
            id: "nube_mortal", nombre: "Nube Mortal", escuela: "Conjuración", nivel: 5,
            tiempo: "1 acción", alcance: "120 pies", componentes: "V, S",
            clases_permitidas: ["mago", "hechicero", "druida"],
            mecanica: {
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Constitución", efecto: "Mitad" },
                daño: { base: "8d8", tipo: "veneno" },
                escalado_superior: "+1d8 por nivel superior",
                descripcion: "Nube tóxica de 20 pies. Daño al entrar o empezar turno."
            }
        },
        cono_frio: {
            id: "cono_frio", nombre: "Cono de Frío", escuela: "Evocación", nivel: 5,
            tiempo: "1 acción", alcance: "60 pies (cono)", componentes: "V, S, M",
            clases_permitidas: ["mago", "hechicero", "druida"],
            mecanica: {
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Constitución", efecto: "Mitad" },
                daño: { base: "8d8", tipo: "frío" },
                escalado_superior: "+1d8 por nivel superior",
                descripcion: "Cono de 60 pies de aire helado."
            }
        },
        curar_heridas_masivo: {
            id: "curar_heridas_masivo", nombre: "Curar Heridas en Masa", escuela: "Evocación", nivel: 5,
            tiempo: "1 acción", alcance: "60 pies", componentes: "V, S",
            clases_permitidas: ["clerigo", "druida", "bardo"],
            mecanica: { 
                tipo_ataque: "curacion", daño: { base: "3d8+mod", tipo: "curación" }, 
                escalado_superior: "+1d8 por nivel superior",
                descripcion: "Cura hasta 6 criaturas en un radio de 30 pies." 
            }
        },
        restauracion_mayor: {
            id: "restauracion_mayor", nombre: "Restauración Mayor", escuela: "Abjuración", nivel: 5,
            tiempo: "1 acción", alcance: "Toque", componentes: "V, S, M",
            clases_permitidas: ["clerigo", "druida", "bardo", "paladin", "explorador"],
            mecanica: { tipo_ataque: "curacion", descripcion: "Reduce agotamiento, cura maldiciones, restaura habilidades." }
        },
        
        // Nuevos nivel 5
        circulo_de_teleportacion: {
            id: "circulo_de_teleportacion", nombre: "Círculo de Teleportación", escuela: "Conjuración", nivel: 5,
            tiempo: "1 minuto", alcance: "10 pies", componentes: "V, M",
            clases_permitidas: ["mago", "hechicero", "bardo"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Creas un círculo de teletransporte permanente." }
        },
        telequinesis: {
            id: "telequinesis", nombre: "Telequinesis", escuela: "Transmutación", nivel: 5,
            tiempo: "1 acción", alcance: "60 pies", componentes: "V, S",
            clases_permitidas: ["mago", "hechicero", "brujo"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Mueves objetos o criaturas con la mente por 10 minutos." }
        },
        escudriñar: {
            id: "escudriñar", nombre: "Escudriñar", escuela: "Adivinación", nivel: 5,
            tiempo: "10 minutos", alcance: "Personal", componentes: "V, S, M",
            clases_permitidas: ["bardo", "clerigo", "druida", "mago", "hechicero", "brujo"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Puedes ver y oír a una criatura en el mismo plano." }
        },
        sueño: {
            id: "sueño", nombre: "Sueño", escuela: "Ilusión", nivel: 5,
            tiempo: "1 minuto", alcance: "Personal", componentes: "V, S, M",
            clases_permitidas: ["bardo", "mago", "hechicero", "brujo"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Creas sueños en la mente de una criatura." }
        },
        muro_de_piedra: {
            id: "muro_de_piedra", nombre: "Muro de Piedra", escuela: "Evocación", nivel: 5,
            tiempo: "1 acción", alcance: "120 pies", componentes: "V, S, M",
            clases_permitidas: ["druida", "mago", "hechicero", "artífice"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Creas un muro de piedra no mágico." }
        },
        geas: {
            id: "geas", nombre: "Geas", escuela: "Encantamiento", nivel: 5,
            tiempo: "1 minuto", alcance: "60 pies", componentes: "V",
            clases_permitidas: ["bardo", "clerigo", "druida", "mago", "paladin"],
            mecanica: { 
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Sabiduría", efecto: "Falla" }, 
                descripcion: "Ordenas a una criatura. Si desobedece, sufre 5d10 psíquico diario." 
            }
        },
        leyenda: {
            id: "leyenda", nombre: "Leyenda", escuela: "Adivinación", nivel: 5,
            tiempo: "10 minutos", alcance: "Personal", componentes: "V, S, M",
            clases_permitidas: ["bardo", "clerigo", "mago"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Obtienes información sobre una persona, lugar u objeto." }
        },
        comunion: {
            id: "comunion", nombre: "Comunión", escuela: "Adivinación", nivel: 5,
            tiempo: "1 minuto", alcance: "Personal", componentes: "V, S, M",
            clases_permitidas: ["clerigo"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Contactas con tu deidad para hacer 3 preguntas." }
        },
        comunion_con_naturaleza: {
            id: "comunion_con_naturaleza", nombre: "Comunión con la Naturaleza", escuela: "Adivinación", nivel: 5,
            tiempo: "1 minuto", alcance: "Personal", componentes: "V, S",
            clases_permitidas: ["druida", "explorador"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Conoces información sobre el terreno a 3 millas." }
        },
        insecto_gigante: {
            id: "insecto_gigante", nombre: "Insecto Gigante", escuela: "Transmutación", nivel: 5,
            tiempo: "1 acción", alcance: "30 pies", componentes: "V, S",
            clases_permitidas: ["druida"],
            mecanica: { tipo_ataque: "invocacion", descripcion: "Conviertes insectos en versiones gigantes que te sirven." }
        },
        plagas: {
            id: "plagas", nombre: "Plagas", escuela: "Conjuración", nivel: 5,
            tiempo: "1 acción", alcance: "300 pies", componentes: "V, S, M",
            clases_permitidas: ["clerigo", "druida"],
            mecanica: { 
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Constitución", efecto: "Mitad" },
                daño: { base: "4d10", tipo: "necrótico" },
                descripcion: "Nube de insectos en radio 20 pies. Daño y veneno." 
            }
        },
        columnas_de_fuego: {
            id: "columnas_de_fuego", nombre: "Columnas de Fuego", escuela: "Evocación", nivel: 5,
            tiempo: "1 acción", alcance: "60 pies", componentes: "V, S, M",
            clases_permitidas: ["druida", "mago", "hechicero"],
            mecanica: {
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Destreza", efecto: "Mitad" },
                daño: { base: "7d6", tipo: "fuego" },
                descripcion: "Dos columnas de fuego de 10 pies de altura."
            }
        },
        animar_objetos: {
            id: "animar_objetos", nombre: "Animar Objetos", escuela: "Transmutación", nivel: 5,
            tiempo: "1 acción", alcance: "120 pies", componentes: "V, S",
            clases_permitidas: ["mago", "hechicero", "artífice"],
            mecanica: { tipo_ataque: "invocacion", descripcion: "Hasta 10 objetos no mágicos te obedecen." }
        },
        creacion: {
            id: "creacion", nombre: "Creación", escuela: "Ilusión", nivel: 5,
            tiempo: "1 minuto", alcance: "30 pies", componentes: "V, S, M",
            clases_permitidas: ["mago", "hechicero", "artífice"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Creas un objeto no vivo de hasta 5 pies." }
        },
        mano_telekinetica_de_bigby: {
            id: "mano_telekinetica_de_bigby", nombre: "Mano Telequinética de Bigby", escuela: "Evocación", nivel: 5,
            tiempo: "1 acción", alcance: "120 pies", componentes: "V, S, M",
            clases_permitidas: ["mago", "hechicero"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Mano de fuerza que puede agarrar, empujar o proteger." }
        }
    },

    // =========================================================
    // NIVEL 6
    // =========================================================
    nivel_6: {
        // Originales
        desintegrar: {
            id: "desintegrar", nombre: "Desintegrar", escuela: "Transmutación", nivel: 6,
            tiempo: "1 acción", alcance: "60 pies", componentes: "V, S, M",
            clases_permitidas: ["mago", "hechicero", "artífice"],
            mecanica: {
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Destreza", efecto: "Falla" },
                daño: { base: "10d6+40", tipo: "fuerza" },
                escalado_superior: "+3d6 por nivel superior",
                descripcion: "Rayo verde. Si mata, desintegra el cuerpo."
            }
        },
        rayo_solar: {
            id: "rayo_solar", nombre: "Rayo Solar", escuela: "Evocación", nivel: 6,
            tiempo: "1 acción", alcance: "60 pies (línea)", componentes: "V, S, M",
            clases_permitidas: ["mago", "hechicero", "druida"],
            mecanica: {
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Constitución", efecto: "Mitad" },
                daño: { base: "12d6", tipo: "radiante" },
                descripcion: "Línea de luz solar. Ciega si falla."
            }
        },
        crear_muerto: {
            id: "crear_muerto", nombre: "Crear Muertos Vivientes", escuela: "Nigromancia", nivel: 6,
            tiempo: "1 minuto", alcance: "10 pies", componentes: "V, S, M",
            clases_permitidas: ["mago", "hechicero", "clerigo", "brujo"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Reanimas hasta 3 cadáveres como zombis o esqueletos." }
        },
        
        // Nuevos nivel 6
        muro_de_hierro: {
            id: "muro_de_hierro", nombre: "Muro de Hierro", escuela: "Evocación", nivel: 6,
            tiempo: "1 acción", alcance: "60 pies", componentes: "V, S, M",
            clases_permitidas: ["mago", "hechicero", "druida"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Muro de hierro de hasta 50x10x1 pies." }
        },
        globo_de_invulnerabilidad: {
            id: "globo_de_invulnerabilidad", nombre: "Globo de Invulnerabilidad", escuela: "Abjuración", nivel: 6,
            tiempo: "1 acción", alcance: "Personal", componentes: "V, S, M",
            clases_permitidas: ["mago", "hechicero"],
            mecanica: { tipo_ataque: "buff", descripcion: "Detiene hechizos de nivel 5 o inferior en radio 10 pies." }
        },
        guardas_y_sellos: {
            id: "guardas_y_sellos", nombre: "Guardas y Sellos", escuela: "Abjuración", nivel: 6,
            tiempo: "10 minutos", alcance: "Toque", componentes: "V, S, M",
            clases_permitidas: ["mago", "hechicero", "clerigo"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Proteges un área de hasta 20000 pies cúbicos." }
        },
        reparar_hechizo: {
            id: "reparar_hechizo", nombre: "Reparar Hechizo", escuela: "Abjuración", nivel: 6,
            tiempo: "1 acción", alcance: "30 pies", componentes: "V, S",
            clases_permitidas: ["mago", "hechicero", "clerigo"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Intentas terminar un hechizo en un área." }
        },
        conjurar_hadas: {
            id: "conjurar_hadas", nombre: "Conjurar Hadas", escuela: "Conjuración", nivel: 6,
            tiempo: "1 acción", alcance: "90 pies", componentes: "V, S",
            clases_permitidas: ["druida", "bardo", "brujo"],
            mecanica: { tipo_ataque: "invocacion", descripcion: "Conjuras una hada de CR 6 o menos." }
        },
        conjurar_elemental: {
            id: "conjurar_elemental", nombre: "Conjurar Elemental", escuela: "Conjuración", nivel: 6,
            tiempo: "1 acción", alcance: "90 pies", componentes: "V, S",
            clases_permitidas: ["druida", "mago", "hechicero"],
            mecanica: { tipo_ataque: "invocacion", descripcion: "Conjuras un elemental de CR 5 o menos." }
        },
        encontrar_el_camino: {
            id: "encontrar_el_camino", nombre: "Encontrar el Camino", escuela: "Adivinación", nivel: 6,
            tiempo: "1 minuto", alcance: "Personal", componentes: "V, S, M",
            clases_permitidas: ["bardo", "clerigo", "druida"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Conoces el camino más corto hacia un destino." }
        },
        mover_tierra: {
            id: "mover_tierra", nombre: "Mover Tierra", escuela: "Transmutación", nivel: 6,
            tiempo: "1 acción", alcance: "120 pies", componentes: "V, S, M",
            clases_permitidas: ["druida", "mago", "hechicero"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Excavas hasta 40 pies de tierra en 10 minutos." }
        },
        transmutar_roca: {
            id: "transmutar_roca", nombre: "Transmutar Roca", escuela: "Transmutación", nivel: 6,
            tiempo: "1 acción", alcance: "120 pies", componentes: "V, S, M",
            clases_permitidas: ["druida", "mago", "hechicero", "artífice"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Conviertes roca en lodo o lodo en roca." }
        },
        visiones_del_pasado: {
            id: "visiones_del_pasado", nombre: "Visiones del Pasado", escuela: "Adivinación", nivel: 6,
            tiempo: "1 minuto", alcance: "Personal", componentes: "V, S, M",
            clases_permitidas: ["bardo", "mago"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Ves eventos pasados en un lugar." }
        },
        palabra_de_poder_curar: {
            id: "palabra_de_poder_curar", nombre: "Palabra de Poder Curar", escuela: "Evocación", nivel: 6,
            tiempo: "1 acción", alcance: "60 pies", componentes: "V",
            clases_permitidas: ["clerigo", "bardo"],
            mecanica: { 
                tipo_ataque: "curacion", 
                daño: { base: "50", tipo: "curación" },
                descripcion: "Cura 50 PG a una criatura." 
            }
        },
        tormenta_de_fuego: {
            id: "tormenta_de_fuego", nombre: "Tormenta de Fuego", escuela: "Evocación", nivel: 6,
            tiempo: "1 acción", alcance: "150 pies", componentes: "V, S, M",
            clases_permitidas: ["clerigo", "druida", "mago", "hechicero"],
            mecanica: {
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Destreza", efecto: "Mitad" },
                daño: { base: "10d6", tipo: "fuego" },
                descripcion: "Muro de fuego de 10 pies de altura en área de 100 pies."
            }
        },
        cadena_de_relampagos: {
            id: "cadena_de_relampagos", nombre: "Cadena de Relámpagos", escuela: "Evocación", nivel: 6,
            tiempo: "1 acción", alcance: "150 pies", componentes: "V, S, M",
            clases_permitidas: ["mago", "hechicero"],
            mecanica: {
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Destreza", efecto: "Mitad" },
                daño: { base: "10d8", tipo: "rayo" },
                escalado_superior: "+1d8 por nivel superior",
                descripcion: "Rayo que salta a 3 objetivos adicionales."
            }
        }
    },

    // =========================================================
    // NIVEL 7
    // =========================================================
    nivel_7: {
        // Originales
        parar_tiempo: {
            id: "parar_tiempo", nombre: "Parar el Tiempo", escuela: "Transmutación", nivel: 7,
            tiempo: "1 acción", alcance: "Personal", componentes: "V",
            clases_permitidas: ["mago", "hechicero", "brujo"],
            mecanica: { 
                tipo_ataque: "utilidad", 
                descripcion: "El tiempo se detiene para todos excepto tú. Obtienes 1d4+1 turnos." 
            }
        },
        dedo_muerte: {
            id: "dedo_muerte", nombre: "Dedo de la Muerte", escuela: "Nigromancia", nivel: 7,
            tiempo: "1 acción", alcance: "60 pies", componentes: "V, S",
            clases_permitidas: ["mago", "hechicero", "brujo", "clerigo"],
            mecanica: {
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Constitución", efecto: "Mitad" },
                daño: { base: "7d8+30", tipo: "necrótico" },
                escalado_superior: "+1d8 por nivel superior",
                descripcion: "Energía negativa. Mata instantáneamente si reduce a 0 PG."
            }
        },
        
        // Nuevos nivel 7
        dedo_del_mago: {
            id: "dedo_del_mago", nombre: "Dedo del Mago", escuela: "Encantamiento", nivel: 7,
            tiempo: "1 acción", alcance: "60 pies", componentes: "V, S",
            clases_permitidas: ["mago", "hechicero", "brujo"],
            mecanica: { 
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Sabiduría", efecto: "Falla" }, 
                descripcion: "Controlas a una criatura como marioneta por 1 minuto." 
            }
        },
        teleportacion: {
            id: "teleportacion", nombre: "Teleportación", escuela: "Conjuración", nivel: 7,
            tiempo: "1 acción", alcance: "10 pies", componentes: "V",
            clases_permitidas: ["bardo", "mago", "hechicero"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Teletransportas criaturas a cualquier lugar del mismo plano." }
        },
        esplendor_del_angel: {
            id: "esplendor_del_angel", nombre: "Esplendor del Ángel", escuela: "Transmutación", nivel: 7,
            tiempo: "1 acción", alcance: "Personal", componentes: "V, S",
            clases_permitidas: ["clerigo"],
            mecanica: { tipo_ataque: "buff", descripcion: "Te transformas en un celestial. +2 CA, alas, aura radiante." }
        },
        palabra_divina: {
            id: "palabra_divina", nombre: "Palabra Divina", escuela: "Evocación", nivel: 7,
            tiempo: "1 acción bonus", alcance: "30 pies", componentes: "V",
            clases_permitidas: ["clerigo"],
            mecanica: { 
                tipo_ataque: "utilidad", 
                descripcion: "Pronuncias una palabra que puede matar, cegar, ensordecer o aturdir según PG." 
            }
        },
        regresar: {
            id: "regresar", nombre: "Regresar", escuela: "Transmutación", nivel: 7,
            tiempo: "1 acción", alcance: "Toque", componentes: "V, S, M",
            clases_permitidas: ["clerigo", "druida"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Devuelves a un muerto a la vida si murió en los últimos 10 días." }
        },
        tormenta_de_fuego: {
            id: "tormenta_de_fuego", nombre: "Tormenta de Fuego", escuela: "Evocación", nivel: 7,
            tiempo: "1 acción", alcance: "150 pies", componentes: "V, S",
            clases_permitidas: ["clerigo", "druida", "mago", "hechicero"],
            mecanica: {
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Destreza", efecto: "Mitad" },
                daño: { base: "10d6", tipo: "fuego" },
                descripcion: "Muro de fuego de 10 pies de altura en área de 100 pies."
            }
        },
        jaula_de_fuerza: {
            id: "jaula_de_fuerza", nombre: "Jaula de Fuerza", escuela: "Evocación", nivel: 7,
            tiempo: "1 acción", alcance: "100 pies", componentes: "V, S, M",
            clases_permitidas: ["mago", "hechicero"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Prisión de fuerza que atrapa a una criatura." }
        },
        esplendor_del_eclipse: {
            id: "esplendor_del_eclipse", nombre: "Esplendor del Eclipse", escuela: "Nigromancia", nivel: 7,
            tiempo: "1 acción", alcance: "150 pies", componentes: "V, S, M",
            clases_permitidas: ["mago", "hechicero", "brujo"],
            mecanica: {
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Constitución", efecto: "Mitad" },
                daño: { base: "12d8", tipo: "necrótico" },
                descripcion: "Explosión de energía oscura en radio 30 pies."
            }
        },
        tormenta_de_venganza: {
            id: "tormenta_de_venganza", nombre: "Tormenta de Venganza", escuela: "Conjuración", nivel: 7,
            tiempo: "1 acción", alcance: "Vista", componentes: "V, S",
            clases_permitidas: ["druida"],
            mecanica: { 
                tipo_ataque: "utilidad", 
                descripcion: "Creas una tormenta en radio 360 pies que dura 1 minuto con efectos cada turno." 
            }
        }
    },

    // =========================================================
    // NIVEL 8
    // =========================================================
    nivel_8: {
        // Originales
        palabra_poder_atontar: {
            id: "palabra_poder_atontar", nombre: "Palabra de Poder: Atontar", escuela: "Encantamiento", nivel: 8,
            tiempo: "1 acción", alcance: "60 pies", componentes: "V",
            clases_permitidas: ["mago", "hechicero", "brujo", "clerigo", "bardo"],
            mecanica: { 
                tipo_ataque: "salvacion", 
                descripcion: "Criatura con 150 PG o menos queda aturdida sin salvación." 
            }
        },
        terremoto: {
            id: "terremoto", nombre: "Terremoto", escuela: "Evocación", nivel: 8,
            tiempo: "1 acción", alcance: "500 pies", componentes: "V, S, M",
            clases_permitidas: ["druida", "clerigo", "mago", "hechicero"],
            mecanica: {
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Destreza", efecto: "Mitad" },
                daño: { base: "5d6", tipo: "contundente" },
                descripcion: "Terremoto en radio 100 pies. Terreno difícil, edificios colapsan."
            }
        },
        
        // Nuevos nivel 8
        dominio: {
            id: "dominio", nombre: "Dominio", escuela: "Encantamiento", nivel: 8,
            tiempo: "1 acción", alcance: "60 pies", componentes: "V, S",
            clases_permitidas: ["mago", "hechicero", "brujo", "bardo"],
            mecanica: { 
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Sabiduría", efecto: "Falla" }, 
                descripcion: "Controlas completamente a una criatura por 8 horas." 
            }
        },
        mente_en_blanco: {
            id: "mente_en_blanco", nombre: "Mente en Blanco", escuela: "Abjuración", nivel: 8,
            tiempo: "1 acción", alcance: "Toque", componentes: "V, S",
            clases_permitidas: ["bardo", "mago", "hechicero"],
            mecanica: { tipo_ataque: "buff", descripcion: "Inmune a daño psíquico y efectos que lean emociones o pensamientos por 24h." }
        },
        campo_antimagia: {
            id: "campo_antimagia", nombre: "Campo Antimagia", escuela: "Abjuración", nivel: 8,
            tiempo: "1 acción", alcance: "Personal", componentes: "V, S, M",
            clases_permitidas: ["mago", "hechicero", "clerigo"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Esfera de 10 pies donde la magia no funciona." }
        },
        clon: {
            id: "clon", nombre: "Clon", escuela: "Nigromancia", nivel: 8,
            tiempo: "1 hora", alcance: "Toque", componentes: "V, S, M",
            clases_permitidas: ["mago"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Crear un clon que revive si mueres." }
        },
        control_climatico: {
            id: "control_climatico", nombre: "Control Climático", escuela: "Transmutación", nivel: 8,
            tiempo: "10 minutos", alcance: "Personal", componentes: "V, S, M",
            clases_permitidas: ["clerigo", "druida", "mago", "hechicero"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Controlas el clima en 5 millas por 8 horas." }
        },
        labia_poderosa: {
            id: "labia_poderosa", nombre: "Labia Poderosa", escuela: "Encantamiento", nivel: 8,
            tiempo: "1 acción", alcance: "60 pies", componentes: "V",
            clases_permitidas: ["bardo"],
            mecanica: { 
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Sabiduría", efecto: "Falla" }, 
                descripcion: "Obligas a una criatura a decir la verdad." 
            }
        },
        aura_sagrada: {
            id: "aura_sagrada", nombre: "Aura Sagrada", escuela: "Abjuración", nivel: 8,
            tiempo: "1 acción", alcance: "Personal", componentes: "V, S, M",
            clases_permitidas: ["clerigo"],
            mecanica: { 
                tipo_ataque: "buff", 
                descripcion: "Las criaturas en un radio de 30 pies tienen ventaja en salvaciones, resistencia a daño de hechizos." 
            }
        },
        incendio_repentino: {
            id: "incendio_repentino", nombre: "Incendio Repentino", escuela: "Evocación", nivel: 8,
            tiempo: "1 acción", alcance: "Vista", componentes: "V",
            clases_permitidas: ["druida", "hechicero", "mago"],
            mecanica: {
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Destreza", efecto: "Mitad" },
                daño: { base: "12d6", tipo: "fuego" },
                descripcion: "Fuego en radio 20 pies en cualquier punto que puedas ver."
            }
        },
        tormenta_gigante: {
            id: "tormenta_gigante", nombre: "Tormenta Gigante", escuela: "Conjuración", nivel: 8,
            tiempo: "1 acción", alcance: "Vista", componentes: "V, S",
            clases_permitidas: ["druida"],
            mecanica: {
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Destreza", efecto: "Mitad" },
                daño: { base: "8d6", tipo: "trueno", daño2: { base: "6d6", tipo: "relámpago" } },
                descripcion: "Tormenta masiva de granizo y rayos."
            }
        },
        sol_media: {
            id: "sol_media", nombre: "Sol Media", escuela: "Evocación", nivel: 8,
            tiempo: "1 acción", alcance: "150 pies", componentes: "V, S, M",
            clases_permitidas: ["druida", "clerigo"],
            mecanica: {
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Constitución", efecto: "Mitad" },
                daño: { base: "12d8", tipo: "radiante" },
                descripcion: "Esfera de luz solar en radio 60 pies. Ciega y daña a no muertos."
            }
        }
    },

    // =========================================================
    // NIVEL 9
    // =========================================================
    nivel_9: {
        // Originales
        deseo: {
            id: "deseo", nombre: "Deseo", escuela: "Conjuración", nivel: 9,
            tiempo: "1 acción", alcance: "Personal", componentes: "V",
            clases_permitidas: ["mago", "hechicero", "brujo"],
            mecanica: { 
                tipo_ataque: "utilidad", 
                descripcion: "Alteras la realidad. Duplica hechizo nivel 8 o menor sin componentes. 33% de probabilidad de no poder usarlo de nuevo." 
            }
        },
        invocar_meteoro: {
            id: "invocar_meteoro", nombre: "Invocar Meteoro", escuela: "Conjuración", nivel: 9,
            tiempo: "1 acción", alcance: "1 milla", componentes: "V, S",
            clases_permitidas: ["druida", "mago", "hechicero"],
            mecanica: {
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Destreza", efecto: "Mitad" },
                daño: { base: "20d6", tipo: "fuego", daño2: { base: "20d6", tipo: "contundente" } },
                descripcion: "4 meteoros caen en puntos diferentes. Cada uno explota en radio 40 pies."
            }
        },
        palabra_poder_sanar: {
            id: "palabra_poder_sanar", nombre: "Palabra de Poder: Sanar", escuela: "Evocación", nivel: 9,
            tiempo: "1 acción", alcance: "60 pies", componentes: "V",
            clases_permitidas: ["clerigo", "druida", "bardo"],
            mecanica: { 
                tipo_ataque: "curacion", 
                daño: { base: "250", tipo: "curación" }, 
                descripcion: "Cura 250 PG y elimina ceguera, sordera y enfermedades." 
            }
        },
        
        // Nuevos nivel 9
        prision: {
            id: "prision", nombre: "Prisión", escuela: "Abjuración", nivel: 9,
            tiempo: "1 acción", alcance: "30 pies", componentes: "V, S, M",
            clases_permitidas: ["mago", "hechicero", "brujo"],
            mecanica: { 
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Sabiduría", efecto: "Falla" }, 
                descripcion: "Aprisionas a una criatura en una prisión mágica difícil de liberar." 
            }
        },
        parada_temporal: {
            id: "parada_temporal", nombre: "Parada Temporal", escuela: "Transmutación", nivel: 9,
            tiempo: "1 acción", alcance: "120 pies", componentes: "V, S, M",
            clases_permitidas: ["mago", "hechicero", "brujo"],
            mecanica: { 
                tipo_ataque: "utilidad", 
                descripcion: "Detienes el tiempo para una criatura. No puede hacer nada por 1d4 turnos." 
            }
        },
        muerte_instantanea: {
            id: "muerte_instantanea", nombre: "Muerte Instantánea", escuela: "Nigromancia", nivel: 9,
            tiempo: "1 acción", alcance: "60 pies", componentes: "V, S, M",
            clases_permitidas: ["mago", "hechicero", "brujo", "clerigo"],
            mecanica: { 
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Constitución", efecto: "Falla" }, 
                descripcion: "Mata instantáneamente a una criatura con menos de 100 PG." 
            }
        },
        portal: {
            id: "portal", nombre: "Portal", escuela: "Conjuración", nivel: 9,
            tiempo: "1 acción", alcance: "60 pies", componentes: "V, S",
            clases_permitidas: ["mago", "hechicero", "clerigo", "bardo"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Creas un portal entre dos planos de existencia." }
        },
        resurreccion_verdadera: {
            id: "resurreccion_verdadera", nombre: "Resurrección Verdadera", escuela: "Nigromancia", nivel: 9,
            tiempo: "1 hora", alcance: "Toque", componentes: "V, S, M",
            clases_permitidas: ["clerigo", "druida"],
            mecanica: { tipo_ataque: "curacion", descripcion: "Revives a un muerto de hasta 200 años sin restos." }
        },
        forma_eterea: {
            id: "forma_eterea", nombre: "Forma Etérea", escuela: "Transmutación", nivel: 9,
            tiempo: "1 acción", alcance: "Personal", componentes: "V, S",
            clases_permitidas: ["mago", "hechicero", "clerigo"],
            mecanica: { tipo_ataque: "utilidad", descripcion: "Te vuelves etéreo por hasta 8 horas." }
        },
        tormenta_de_sabiduria: {
            id: "tormenta_de_sabiduria", nombre: "Tormenta de Sabiduría", escuela: "Encantamiento", nivel: 9,
            tiempo: "1 acción", alcance: "300 pies", componentes: "V",
            clases_permitidas: ["bardo", "mago", "hechicero", "brujo"],
            mecanica: { 
                tipo_ataque: "salvacion", tirada_salvacion: { stat: "Inteligencia", efecto: "Falla" }, 
                descripcion: "Daño psíquico masivo y posible muerte cerebral." 
            }
        }
    }
};

if (typeof module !== 'undefined' && module.exports) module.exports = HECHIZOS;