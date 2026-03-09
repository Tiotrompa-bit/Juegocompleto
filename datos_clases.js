// datos_clases.js - Versión mejorada con descripciones completas
// Añadido equipo_inicial para cada clase

const CLASES = {
    barbaro: {
        id: "barbaro",
        nombre: "Bárbaro",
        descripcion: "El bárbaro canaliza su furia interior para convertirse en una máquina de combate imparable. En combate, entra en rabia, ganando resistencia y fuerza sobrehumana.",
        puntos_fuertes: "Gran resistencia, mucho daño cuerpo a cuerpo, difícil de matar",
        ideal_para: "jugadores que quieran ser el tanque del grupo y causar mucho daño",
        rol: "Defensor / DPS cuerpo a cuerpo",
        dadoGolpe: 12,
        formula_ca_especial: "10 + des + con",
        // EQUIPO INICIAL AÑADIDO
        equipo_inicial: [
            { id_objeto: "hacha_gran", cantidad: 1 },
            { id_objeto: "hacha_mano", cantidad: 2 },
            { id_objeto: "bolsa", cantidad: 1 }
        ],
        recursos: [
            { id: "rabia", nombre: "Rabia", base: 2, escala_nivel: "rango_rabia", desbloqueo_nivel: 1, recarga: "descanso_largo" },
            { id: "furia_incontrolable", nombre: "Furia Incontrolable", base: 0, escala_nivel: "rango_rabia", desbloqueo_nivel: 11 }
        ],
        competencias: {
            salvaciones: ["Fuerza", "Constitución"],
            armas: ["Sencillas", "Marciales"],
            armaduras: ["Ligera", "Media", "Escudos"],
            habilidades: ["Atletismo", "Intimidación"]
        },
        niveles: {
            1: [
                { nombre: "Rabia", tipo: "recurso", descripcion: "Entras en furia: ventaja en FUE, +2 daño, resistencia a daño físico. Dura 1 minuto. 2 usos por descanso." },
                { nombre: "Defensa Sin Armadura", tipo: "pasivo", descripcion: "CA = 10 + DES + CON si no llevas armadura." }
            ],
            2: [
                { nombre: "Ataque Temerario", tipo: "combate", descripcion: "Ventaja en ataques cuerpo a cuerpo, pero desventaja en ataques contra ti." },
                { nombre: "Sentido del Peligro", tipo: "pasivo", descripcion: "Ventaja en salvaciones de DES contra efectos visibles." }
            ],
            3: [
                { nombre: "Senda Primitiva", tipo: "subclase", descripcion: "Elige tu camino de berserker: Berserker (más daño) o Totémico (más resistencia)." }
            ],
            4: [
                { nombre: "Mejora de Características", tipo: "pasivo", descripcion: "+2 a un atributo o una dote." }
            ],
            5: [
                { nombre: "Ataque Extra", tipo: "combate", descripcion: "Atacas dos veces por acción." },
                { nombre: "Movimiento Rápido", tipo: "pasivo", descripcion: "+3m velocidad si no llevas armadura pesada." }
            ],
            6: [
                { nombre: "Beneficio de Senda", tipo: "subclase", descripcion: "Nuevo rasgo según tu senda." }
            ],
            7: [
                { nombre: "Instinto Salvaje", tipo: "pasivo", descripcion: "Ventaja en tiradas de iniciativa." }
            ],
            8: [
                { nombre: "Mejora de Características", tipo: "pasivo", descripcion: "+2 a un atributo o una dote." }
            ],
            9: [
                { nombre: "Golpe Crítico Brutal", tipo: "combate", descripcion: "Añades un dado de daño adicional en críticos." }
            ],
            10: [
                { nombre: "Beneficio de Senda", tipo: "subclase", descripcion: "Nuevo rasgo según tu senda." }
            ],
            11: [
                { nombre: "Furia Incontrolable", tipo: "recurso", descripcion: "Puedes usar Rabia sin límite de usos." }
            ],
            12: [
                { nombre: "Mejora de Características", tipo: "pasivo", descripcion: "+2 a un atributo o una dote." }
            ],
            13: [
                { nombre: "Golpe Crítico Brutal Mejorado", tipo: "combate", descripcion: "Añades dos dados adicionales en críticos." }
            ],
            14: [
                { nombre: "Beneficio de Senda", tipo: "subclase", descripcion: "Nuevo rasgo según tu senda." }
            ],
            15: [
                { nombre: "Furia Persistente", tipo: "pasivo", descripcion: "Tu Rabia solo termina si quedas inconsciente o eliges terminarla." }
            ],
            16: [
                { nombre: "Mejora de Características", tipo: "pasivo", descripcion: "+2 a un atributo o una dote." }
            ],
            17: [
                { nombre: "Golpe Crítico Brutal Superior", tipo: "combate", descripcion: "Añades tres dados adicionales en críticos." }
            ],
            18: [
                { nombre: "Poder Indómito", tipo: "pasivo", descripcion: "Fuerza aumenta en 4 (máx 24) si es menor." }
            ],
            19: [
                { nombre: "Mejora de Características", tipo: "pasivo", descripcion: "+2 a un atributo o una dote." }
            ],
            20: [
                { nombre: "Campeón Primitivo", tipo: "pasivo", descripcion: "Fuerza y Constitución aumentan en 4 (máx 24)." }
            ]
        }
    },
    
    bardo: {
        id: "bardo",
        nombre: "Bardo",
        descripcion: "El bardo usa su arte, carisma y conocimiento para inspirar a sus aliados, confundir a sus enemigos y enfrentar cualquier situación con ingenio.",
        puntos_fuertes: "Versatilidad máxima, apoyo, habilidades sociales, magia variada",
        ideal_para: "jugadores que quieran ser el 'comodín' del grupo, con solución para todo",
        rol: "Apoyo / Control / Diplomático",
        dadoGolpe: 8,
        // EQUIPO INICIAL AÑADIDO
        equipo_inicial: [
            { id_objeto: "estoque", cantidad: 1 },
            { id_objeto: "instrumento_musical", cantidad: 1 },
            { id_objeto: "cuero", cantidad: 1 },
            { id_objeto: "bolsa", cantidad: 1 }
        ],
        magia: { tipo: "completo", atributo: "Carisma", slots: "completo" },
        recursos: [
            { id: "inspiracion_bardica", nombre: "Inspiración Bárdica", base: 0, escala_nivel: "carisma_mod", desbloqueo_nivel: 1, recarga: "descanso_corto" }
        ],
        competencias: {
            salvaciones: ["Destreza", "Carisma"],
            armas: ["Sencillas", "Ballesta de mano", "Espada larga", "Estoque", "Espada corta"],
            armaduras: ["Ligera"],
            herramientas: ["Instrumentos musicales (3 a elegir)"],
            habilidades: ["Elige 3 de cualquier lista"]
        },
        niveles: {
            1: [
                { nombre: "Inspiración Bárdica", tipo: "recurso", descripcion: "d6 para añadir a tiradas de aliados (habilidad, ataque, salvación). Recargas en descanso corto." },
                { nombre: "Lanzamiento de Conjuros", tipo: "magia", descripcion: "Lanzas conjuros de lista de Bardo. Conoces 2 trucos y 4 conjuros nivel 1." }
            ],
            2: [
                { nombre: "Descanso Corto", tipo: "utilidad", descripcion: "Recuperas usos de Inspiración Bárdica en descanso corto." },
                { nombre: "Canción de Descanso", tipo: "utilidad", descripcion: "Aliados recuperan +1d6 HP extra en descanso corto." }
            ],
            3: [
                { nombre: "Colegio de Bardos", tipo: "subclase", descripcion: "Elige tu colegio: Valor (combate), Sapiencia (habilidades) o Glamour (control social)." },
                { nombre: "Experto", tipo: "pasivo", descripcion: "Duplicas competencia en 2 habilidades." }
            ],
            4: [
                { nombre: "Mejora de Características", tipo: "pasivo", descripcion: "+2 a un atributo o una dote." }
            ],
            5: [
                { nombre: "Inspiración Mejorada", tipo: "pasivo", descripcion: "Inspiración Bárdica mejora a d8." },
                { nombre: "Fuente de Inspiración", tipo: "recurso", descripcion: "Recuperas usos de Inspiración en descanso corto." }
            ],
            6: [
                { nombre: "Contrahechizos", tipo: "magia", descripcion: "Reacción para interrumpir conjuro enemigo." },
                { nombre: "Beneficio de Colegio", tipo: "subclase", descripcion: "Nuevo rasgo según colegio." }
            ]
        }
    },
    
    clerigo: {
        id: "clerigo",
        nombre: "Clérigo",
        descripcion: "El clérigo es un campeón de su fe, canalizando el poder divino para sanar a sus aliados, proteger a los inocentes y destruir a los no-muertos.",
        puntos_fuertes: "Curación, apoyo, versatilidad según dominio, buen combate",
        ideal_para: "jugadores que quieran apoyar al grupo y tener opciones divinas",
        rol: "Sanador / Apoyo / Combatiente según dominio",
        dadoGolpe: 8,
        // EQUIPO INICIAL AÑADIDO
        equipo_inicial: [
            { id_objeto: "maza", cantidad: 1 },
            { id_objeto: "escudo", cantidad: 1 },
            { id_objeto: "cota_mallas", cantidad: 1 },
            { id_objeto: "simbolo_sagrado", cantidad: 1 },
            { id_objeto: "bolsa", cantidad: 1 }
        ],
        magia: { tipo: "completo", atributo: "Sabiduria", slots: "completo" },
        recursos: [
            { id: "canalizar_divinidad", nombre: "Canalizar Divinidad", base: 1, escala_nivel: "rango_canalizar", desbloqueo_nivel: 2, recarga: "descanso_corto" }
        ],
        competencias: {
            salvaciones: ["Sabiduria", "Carisma"],
            armas: ["Sencillas"],
            armaduras: ["Ligera", "Media", "Escudos"],
            habilidades: ["Historia", "Perspicacia", "Medicina", "Persuasión", "Religión"]
        },
        niveles: {
            1: [
                { nombre: "Lanzamiento de Conjuros", tipo: "magia", descripcion: "Lanzas conjuros de lista de Clérigo. Conoces 3 trucos y preparas conjuros." },
                { nombre: "Dominio Divino", tipo: "subclase", descripcion: "Elige tu dominio: Vida (mejor sanador), Guerra (combate), Conocimiento (habilidades), etc." }
            ],
            2: [
                { nombre: "Canalizar Divinidad", tipo: "recurso", descripcion: "Efectos especiales según tu dominio. Una vez por descanso corto." },
                { nombre: "Destruir No-Muertos", tipo: "combate", descripcion: "Destruyes no-muertos de CR bajo con Canalizar Divinidad." }
            ]
        }
    },
    
    druida: {
        id: "druida",
        nombre: "Druida",
        descripcion: "El druida obtiene su poder de la naturaleza misma, pudiendo transformarse en animales, controlar los elementos y sanar a sus aliados.",
        puntos_fuertes: "Transformación en animales, magia natural, versatilidad",
        ideal_para: "jugadores que quieran conectar con la naturaleza y tener opciones variadas",
        rol: "Versátil / Control / Apoyo",
        dadoGolpe: 8,
        // EQUIPO INICIAL AÑADIDO
        equipo_inicial: [
            { id_objeto: "baston", cantidad: 1 },
            { id_objeto: "cuero", cantidad: 1 },
            { id_objeto: "kit_herborista", cantidad: 1 },
            { id_objeto: "bolsa", cantidad: 1 }
        ],
        magia: { tipo: "completo", atributo: "Sabiduria", slots: "completo" },
        recursos: [
            { id: "forma_salvaje", nombre: "Forma Salvaje", base: 2, escala_nivel: "medio_nivel", desbloqueo_nivel: 2, recarga: "descanso_corto" }
        ],
        competencias: {
            salvaciones: ["Inteligencia", "Sabiduria"],
            armas: ["Clavas", "Dagas", "Dardos", "Jabalinas", "Mazas", "Bastones", "Cimitarras", "Hondas"],
            armaduras: ["Ligera", "Media", "Escudos"],
            herramientas: ["Kit de herborista"],
            habilidades: ["Arcano", "Trato con Animales", "Perspicacia", "Medicina", "Naturaleza", "Percepción", "Religión", "Supervivencia"]
        },
        niveles: {
            1: [
                { nombre: "Lanzamiento de Conjuros", tipo: "magia", descripcion: "Lanzas conjuros de lista de Druida. Conoces 2 trucos." },
                { nombre: "Druídico", tipo: "pasivo", descripcion: "Conoces el lenguaje secreto de los druidas." }
            ],
            2: [
                { nombre: "Forma Salvaje", tipo: "recurso", descripcion: "Te transformas en bestias. CR máximo 1/4, sin volar." },
                { nombre: "Círculo de Druidas", tipo: "subclase", descripcion: "Elige tu círculo: Tierra (más conjuros) o Luna (mejor transformación)." }
            ]
        }
    },
    
    mago: {
        id: "mago",
        nombre: "Mago",
        descripcion: "El mago es un maestro del conocimiento arcano, capaz de aprender y lanzar una amplia variedad de conjuros mediante estudio y práctica.",
        puntos_fuertes: "Máxima versatilidad mágica, gran cantidad de conjuros",
        ideal_para: "jugadores que quieran tener respuesta mágica para cualquier situación",
        rol: "Control / Daño a distancia / Utilidad",
        dadoGolpe: 6,
        // EQUIPO INICIAL AÑADIDO
        equipo_inicial: [
            { id_objeto: "baston", cantidad: 1 },
            { id_objeto: "bolsa", cantidad: 1 },
            { id_objeto: "tinta", cantidad: 1 },
            { id_objeto: "pluma", cantidad: 1 },
            { id_objeto: "pergamino", cantidad: 10 },
            { id_objeto: "libro", cantidad: 1 }
        ],
        magia: { tipo: "completo", atributo: "Inteligencia", slots: "completo" },
        recursos: [
            { id: "recuperacion_arcanica", nombre: "Recuperación Arcánica", base: 1, desbloqueo_nivel: 1, recarga: "descanso_corto" }
        ],
        competencias: {
            salvaciones: ["Inteligencia", "Sabiduria"],
            armas: ["Dagas", "Dardos", "Ballestas ligeras", "Bastones"],
            armaduras: [],
            habilidades: ["Arcano", "Historia", "Perspicacia", "Investigación", "Medicina", "Religión"]
        },
        niveles: {
            1: [
                { nombre: "Lanzamiento de Conjuros", tipo: "magia", descripcion: "Lanzas conjuros de lista de Mago. Conoces 3 trucos y 6 conjuros nivel 1 en tu grimorio." },
                { nombre: "Recuperación Arcánica", tipo: "recurso", descripcion: "Una vez al día, recuperas espacios de conjuro gastados (total hasta la mitad de nivel)." },
                { nombre: "Grimorio", tipo: "utilidad", descripcion: "Registras conjuros en tu libro. Puedes copiar conjuros encontrados." }
            ],
            2: [
                { nombre: "Tradición Arcana", tipo: "subclase", descripcion: "Elige tu escuela de magia: Evocación, Abjuración, Ilusión, etc." }
            ]
        }
    },
    
    picaro: {
        id: "picaro",
        nombre: "Pícaro",
        descripcion: "El pícaro es un maestro del sigilo, la astucia y el daño preciso. Golpea donde más duele y siempre tiene un as bajo la manga.",
        puntos_fuertes: "Sigilo, habilidades sociales, daño concentrado, versatilidad",
        ideal_para: "jugadores que quieran ser hábiles, astutos y causar gran daño con un solo golpe",
        rol: "Daño / Explorador / Infiltrador",
        dadoGolpe: 8,
        // EQUIPO INICIAL AÑADIDO
        equipo_inicial: [
            { id_objeto: "estoque", cantidad: 1 },
            { id_objeto: "cuero", cantidad: 1 },
            { id_objeto: "herramientas_ladron", cantidad: 1 },
            { id_objeto: "bolsa", cantidad: 1 }
        ],
        recursos: [
            { id: "sneak_attack", nombre: "Ataque Furtivo", base: 1, escala_nivel: "dado_cada_2_niveles", desbloqueo_nivel: 1 }
        ],
        competencias: {
            salvaciones: ["Destreza", "Inteligencia"],
            armas: ["Sencillas", "Ballestas de mano", "Espadas largas", "Estoques", "Espadas cortas"],
            armaduras: ["Ligera"],
            herramientas: ["Herramientas de ladrón"],
            habilidades: ["Acrobacias", "Atletismo", "Engaño", "Perspicacia", "Intimidación", "Investigación", "Percepción", "Persuasión", "Sigilo", "Juego de Manos"]
        },
        niveles: {
            1: [
                { nombre: "Ataque Furtivo", tipo: "combate", descripcion: "1d6 de daño extra si tienes ventaja o aliado adyacente. Una vez por turno." },
                { nombre: "Pericia", tipo: "pasivo", descripcion: "Duplicas competencia en 2 habilidades." },
                { nombre: "Ladrón", tipo: "pasivo", descripcion: "Competencia en herramientas de ladrón y puedes usar Destreza para abrir cerraduras." }
            ],
            2: [
                { nombre: "Acción Astuta", tipo: "utilidad", descripcion: "Acción adicional para Correr, Desenganchar o Esconderse." }
            ],
            3: [
                { nombre: "Arquetipo de Pícaro", tipo: "subclase", descripcion: "Elige: Asesino (emboscadas), Ladrón (habilidades), Misterio (magia)." }
            ],
            4: [
                { nombre: "Mejora de Características", tipo: "pasivo", descripcion: "+2 a un atributo o una dote." }
            ],
            5: [
                { nombre: "Ataque Furtivo Mejorado", tipo: "combate", descripcion: "3d6 de daño." }
            ]
        }
    },
    
    guerrero: {
        id: "guerrero",
        nombre: "Guerrero",
        descripcion: "El guerrero es un maestro del combate, entrenado en todas las formas de lucha. Versátil y resistente, puede adaptarse a cualquier situación bélica.",
        puntos_fuertes: "Múltiples ataques, versatilidad marcial, resistente",
        ideal_para: "jugadores que quieran un combatiente puro, simple pero efectivo",
        rol: "Tanque / DPS / Versátil",
        dadoGolpe: 10,
        // EQUIPO INICIAL AÑADIDO
        equipo_inicial: [
            { id_objeto: "espada_larga", cantidad: 1 },
            { id_objeto: "escudo", cantidad: 1 },
            { id_objeto: "cota_mallas", cantidad: 1 },
            { id_objeto: "bolsa", cantidad: 1 }
        ],
        recursos: [
            { id: "segundo_aliento", nombre: "Segundo Aliento", base: 1, recarga: "descanso_corto", desbloqueo_nivel: 1 },
            { id: "accion_resistente", nombre: "Acción Resistente", base: 1, recarga: "descanso_largo", desbloqueo_nivel: 2 },
            { id: "indomable", nombre: "Indomable", base: 1, escala_nivel: "rango_indomable", recarga: "descanso_largo", desbloqueo_nivel: 9 }
        ],
        competencias: {
            salvaciones: ["Fuerza", "Constitución"],
            armas: ["Sencillas", "Marciales"],
            armaduras: ["Ligera", "Media", "Pesada", "Escudos"],
            habilidades: ["Acrobacias", "Trato con Animales", "Atletismo", "Historia", "Perspicacia", "Intimidación", "Percepción", "Supervivencia"]
        },
        niveles: {
            1: [
                { nombre: "Estilo de Combate", tipo: "eleccion", descripcion: "Elige: Arquería (+2 ataque distancia), Defensa (+1 CA), Duelo (+2 daño una mano), etc." },
                { nombre: "Segundo Aliento", tipo: "recurso", descripcion: "Acción bonus para recuperar 1d10 + nivel PG. Una vez por descanso corto." }
            ],
            2: [
                { nombre: "Acción Resistente", tipo: "recurso", descripcion: "Acción adicional extra en tu turno. Una vez por descanso corto (2 veces nivel 17)." }
            ],
            3: [
                { nombre: "Arquetipo Marcial", tipo: "subclase", descripcion: "Elige: Campeón (críticos mejorados), Maestro de Armas (tácticas), Caballero Eldritch (magia)." }
            ],
            4: [
                { nombre: "Mejora de Características", tipo: "pasivo", descripcion: "+2 a un atributo o una dote." }
            ],
            5: [
                { nombre: "Ataque Extra", tipo: "combate", descripcion: "Atacas dos veces por acción." }
            ],
            6: [
                { nombre: "Mejora de Características", tipo: "pasivo", descripcion: "+2 a un atributo o una dote." }
            ],
            7: [
                { nombre: "Beneficio de Arquetipo", tipo: "subclase", descripcion: "Nuevo rasgo según arquetipo." }
            ],
            8: [
                { nombre: "Mejora de Características", tipo: "pasivo", descripcion: "+2 a un atributo o una dote." }
            ],
            9: [
                { nombre: "Indomable", tipo: "recurso", descripcion: "Relanzas una salvación fallida. Una vez por descanso largo." }
            ],
            10: [
                { nombre: "Beneficio de Arquetipo", tipo: "subclase", descripcion: "Nuevo rasgo según arquetipo." }
            ],
            11: [
                { nombre: "Ataque Extra Mejorado", tipo: "combate", descripcion: "Atacas tres veces por acción." }
            ],
            12: [
                { nombre: "Mejora de Características", tipo: "pasivo", descripcion: "+2 a un atributo o una dote." }
            ],
            13: [
                { nombre: "Indomable Mejorado", tipo: "recurso", descripcion: "Puedes usar Indomable dos veces por descanso largo." }
            ],
            14: [
                { nombre: "Mejora de Características", tipo: "pasivo", descripcion: "+2 a un atributo o una dote." }
            ],
            15: [
                { nombre: "Beneficio de Arquetipo", tipo: "subclase", descripcion: "Nuevo rasgo según arquetipo." }
            ],
            16: [
                { nombre: "Mejora de Características", tipo: "pasivo", descripcion: "+2 a un atributo o una dote." }
            ],
            17: [
                { nombre: "Acción Resistente Mejorada", tipo: "recurso", descripcion: "Puedes usar Acción Resistente dos veces por descanso." },
                { nombre: "Indomable Mejorado", tipo: "recurso", descripcion: "Puedes usar Indomable tres veces por descanso largo." }
            ],
            18: [
                { nombre: "Beneficio de Arquetipo", tipo: "subclase", descripcion: "Nuevo rasgo según arquetipo." }
            ],
            19: [
                { nombre: "Mejora de Características", tipo: "pasivo", descripcion: "+2 a un atributo o una dote." }
            ],
            20: [
                { nombre: "Ataque Extra Superior", tipo: "combate", descripcion: "Atacas cuatro veces por acción." }
            ]
        }
    },
    
    explorador: {
        id: "explorador",
        nombre: "Explorador",
        descripcion: "El explorador es un superviviente experto, rastreador y cazador. Se mueve con facilidad por la naturaleza y tiene un vínculo especial con ella.",
        puntos_fuertes: "Versatilidad en exteriores, combate a distancia o dobles armas, magia natural",
        ideal_para: "jugadores que quieran un arquero o guerrero ágil con toques de magia",
        rol: "DPS / Explorador / Supervivencia",
        dadoGolpe: 10,
        // EQUIPO INICIAL AÑADIDO
        equipo_inicial: [
            { id_objeto: "arco_largo", cantidad: 1 },
            { id_objeto: "cuero", cantidad: 1 },
            { id_objeto: "bolsa", cantidad: 1 }
        ],
        magia: { tipo: "medio", atributo: "Sabiduria", slots: "medio" },
        recursos: [
            { id: "enemigo_predilecto", nombre: "Enemigo Predilecto", base: 1, desbloqueo_nivel: 1 },
            { id: "explorador_natural", nombre: "Explorador Natural", base: 1, desbloqueo_nivel: 1 }
        ],
        competencias: {
            salvaciones: ["Fuerza", "Destreza"],
            armas: ["Sencillas", "Marciales"],
            armaduras: ["Ligera", "Media", "Escudos"],
            habilidades: ["Atletismo", "Sigilo", "Percepción", "Supervivencia", "Trato con Animales", "Naturaleza", "Investigación"]
        },
        niveles: {
            1: [
                { nombre: "Enemigo Predilecto", tipo: "eleccion", descripcion: "Elige un tipo de criatura: ventaja en rastrearlos y seguirlos." },
                { nombre: "Explorador Natural", tipo: "eleccion", descripcion: "Elige un terreno: ventaja en supervivencia y movimiento en él." }
            ],
            2: [
                { nombre: "Estilo de Combate", tipo: "eleccion", descripcion: "Elige: Arquería, Duelo, Dos Armas." },
                { nombre: "Lanzamiento de Conjuros", tipo: "magia", descripcion: "Lanzas conjuros de lista de Explorador." }
            ],
            3: [
                { nombre: "Arquetipo de Explorador", tipo: "subclase", descripcion: "Elige: Cazador (daño), Domador de Bestias (compañero animal), Acechador (sigilo)." },
                { nombre: "Conciencia Primitiva", tipo: "utilidad", descripcion: "Puedes sentir la presencia de tu enemigo predilecto." }
            ],
            4: [
                { nombre: "Mejora de Características", tipo: "pasivo", descripcion: "+2 a un atributo o una dote." }
            ],
            5: [
                { nombre: "Ataque Extra", tipo: "combate", descripcion: "Atacas dos veces por acción." }
            ],
            6: [
                { nombre: "Mejora de Enemigo Predilecto", tipo: "pasivo", descripcion: "Elige un segundo enemigo o mejora el primero." },
                { nombre: "Andar como el Viento", tipo: "pasivo", descripcion: "Terreno difícil no te ralentiza." }
            ],
            7: [
                { nombre: "Beneficio de Arquetipo", tipo: "subclase", descripcion: "Nuevo rasgo según arquetipo." }
            ],
            8: [
                { nombre: "Mejora de Características", tipo: "pasivo", descripcion: "+2 a un atributo o una dote." }
            ]
        }
    },
    
    hechicero: {
        id: "hechicero",
        nombre: "Hechicero",
        descripcion: "El hechicero tiene magia innata en su sangre, capaz de manipular los conjuros de formas únicas mediante la metamagia.",
        puntos_fuertes: "Personalización de conjuros, puntos de hechicería, metamagia",
        ideal_para: "jugadores que quieran un lanzador de conjuros muy personalizable",
        rol: "Daño / Control / Apoyo",
        dadoGolpe: 6,
        // EQUIPO INICIAL AÑADIDO
        equipo_inicial: [
            { id_objeto: "baston", cantidad: 1 },
            { id_objeto: "bolsa", cantidad: 1 }
        ],
        magia: { tipo: "completo", atributo: "Carisma", slots: "completo" },
        recursos: [
            { id: "puntos_hechiceria", nombre: "Puntos de Hechicería", base: 0, escala_nivel: 1, desbloqueo_nivel: 2, recarga: "descanso_largo" },
            { id: "metamagia", nombre: "Metamagia", base: 2, escala_nivel: "rango_metamagia", desbloqueo_nivel: 3 }
        ],
        competencias: {
            salvaciones: ["Constitución", "Carisma"],
            armas: ["Dagas", "Dardos", "Ballestas ligeras", "Bastones"],
            armaduras: [],
            habilidades: ["Arcano", "Engaño", "Perspicacia", "Intimidación", "Persuasión", "Religión"]
        },
        niveles: {
            1: [
                { nombre: "Lanzamiento de Conjuros", tipo: "magia", descripcion: "Lanzas conjuros de lista de Hechicero. Conoces 4 trucos y 2 conjuros nivel 1." },
                { nombre: "Origen de Hechicería", tipo: "subclase", descripcion: "Elige: Linaje Dracónico (más HP, alas) o Magia Salvaje (caos impredecible)." }
            ],
            2: [
                { nombre: "Fuente de Magia", tipo: "recurso", descripcion: "2 puntos de hechicería. Puedes convertir entre puntos y ranuras." }
            ],
            3: [
                { nombre: "Metamagia", tipo: "eleccion", descripcion: "Elige 2 opciones: Conjuro Acelerado, Conjuro Sutil, Conjuro Potenciado, etc." }
            ],
            4: [
                { nombre: "Mejora de Características", tipo: "pasivo", descripcion: "+2 a un atributo o una dote." }
            ]
        }
    },
    
    artificiero: {
        id: "artificiero",
        nombre: "Artificiero",
        descripcion: "El artificiero combina la magia con la tecnología, creando objetos mágicos e infusiones para apoyar a su grupo.",
        puntos_fuertes: "Creación de objetos mágicos, versatilidad, apoyo con objetos",
        ideal_para: "jugadores creativos que quieran inventar y crear",
        rol: "Apoyo / Utilidad / Creación",
        dadoGolpe: 8,
        // EQUIPO INICIAL AÑADIDO
        equipo_inicial: [
            { id_objeto: "herramientas_artesano", cantidad: 1 },
            { id_objeto: "cuero", cantidad: 1 },
            { id_objeto: "bolsa", cantidad: 1 }
        ],
        magia: { tipo: "medio", atributo: "Inteligencia", slots: "medio" },
        recursos: [
            { id: "infusiones", nombre: "Infusiones", base: 4, escala_nivel: "rango_infusiones", desbloqueo_nivel: 2 },
            { id: "objetos_infundidos", nombre: "Objetos Infundidos", base: 2, escala_nivel: "rango_objetos", desbloqueo_nivel: 2 }
        ],
        competencias: {
            salvaciones: ["Constitución", "Inteligencia"],
            armas: ["Sencillas", "Armas de fuego"],
            armaduras: ["Ligera", "Media", "Escudos"],
            herramientas: ["Herramientas de ladrón", "Herramientas de artesano a elegir"],
            habilidades: ["Arcano", "Historia", "Investigación", "Medicina", "Percepción", "Juego de Manos"]
        },
        niveles: {
            1: [
                { nombre: "Lanzamiento de Conjuros", tipo: "magia", descripcion: "Lanzas conjuros de lista de Artificiero. Usas herramientas como foco." },
                { nombre: "Maestro de Herramientas", tipo: "pasivo", descripcion: "Puedes usar cualquier herramienta en la que seas competente como foco." }
            ],
            2: [
                { nombre: "Infundir Objeto", tipo: "recurso", descripcion: "Aprendes 4 infusiones. Puedes tener 2 objetos infundidos activos." }
            ],
            3: [
                { nombre: "Especialista en Artificiero", tipo: "subclase", descripcion: "Elige: Alquimista (pociones), Herrero de Armas (armas mágicas), Herrero de Armaduras (armaduras), Artillero (cañón)." }
            ],
            4: [
                { nombre: "Mejora de Características", tipo: "pasivo", descripcion: "+2 a un atributo o una dote." }
            ],
            5: [
                { nombre: "Beneficio de Especialista", tipo: "subclase", descripcion: "Nuevo rasgo según especialidad." }
            ]
        }
    }
};

if (typeof module !== 'undefined' && module.exports) module.exports = CLASES;