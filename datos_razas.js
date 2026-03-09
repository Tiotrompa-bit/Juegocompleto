// datos_razas.js - Versión mejorada con descripciones y más razas
// Versión 2.0 - Incluye soporte para dote_extra en humano

const RAZAS = {
    humano: {
        id: "humano",
        nombre: "Humano",
        descripcion: "Los humanos son la raza más adaptable y versátil de todos los pueblos. Su ambición y corta vida los impulsa a lograr grandes cosas en poco tiempo.",
        puntos_fuertes: "Versatilidad, adaptable",
        ideal_para: "cualquier clase, especialmente para principiantes",
        velocidad: 30,
        idiomas: ["Común"],
        dote_extra: true, // Variable que indica que tiene opción de dote extra
        bonificadores: {
            fuerza: 1,
            destreza: 1,
            constitucion: 1,
            inteligencia: 1,
            sabiduria: 1,
            carisma: 1
        },
        rasgos_comunes: [
            { nombre: "Versátil", descripcion: "+1 a todos los atributos" }
        ],
        variantes: {
            variante: {
                nombre: "Humano (Dote Extra)",
                descripcion: "Intercambias tu versatilidad general por un talento especializado y un segundo trasfondo. Ganas +1 a dos atributos, una dote a elegir y competencia en una habilidad adicional.",
                beneficios: "+1 a dos atributos, una dote y un segundo trasfondo",
                dote_extra: true, // Esta variante también activa la opción de segundo trasfondo
                bonificadores: {
                    tipo: "eleccion_dos_atributos"
                },
                rasgos: [
                    { 
                        nombre: "Dote de origen", 
                        tipo: "dote_origen",
                        descripcion: "Obtienes una dote a nivel 1"
                    },
                    { 
                        nombre: "Habilidad adicional", 
                        tipo: "habilidad",
                        mecanica: { fuente: "habilidades_todas" },
                        descripcion: "Obtienes competencia en una habilidad a tu elección"
                    }
                ]
            }
        }
    },
    
    elfo: {
        id: "elfo",
        nombre: "Elfo",
        descripcion: "Los elfos son criaturas mágicas de gracia sobrenatural, viven miles de años y poseen una conexión profunda con la naturaleza y la magia.",
        puntos_fuertes: "Alta destreza, visión en oscuridad, inmunidad a dormir",
        ideal_para: "exploradores, magos, pícaros",
        velocidad: 30,
        idiomas: ["Común", "Élfico"],
        dote_extra: false,
        bonificadores: {
            destreza: 2
        },
        rasgos_comunes: [
            { nombre: "Visión en la oscuridad", descripcion: "Puedes ver en oscuridad a 60 pies como si fuera luz tenue" },
            { nombre: "Ascendencia feérica", descripcion: "Ventaja en salvaciones contra encantamientos y la magia no puede dormirte" },
            { nombre: "Trance", descripcion: "No necesitas dormir, solo meditar 4 horas (equivale a 8h de sueño)" }
        ],
        subrazas: {
            alto: {
                nombre: "Elfo Alto",
                descripcion: "Los altos elfos tienen una afinidad natural con la magia arcana.",
                beneficios: "+1 inteligencia, un truco de mago, competencia con arcos y espadas",
                bonificadores: { inteligencia: 1 },
                rasgos: [
                    { nombre: "Entrenamiento élfico en armas", descripcion: "Competencia con espada larga, espada corta, arco largo y arco corto" },
                    { nombre: "Truco", descripcion: "Conoces un truco de mago de la lista de mago" }
                ]
            },
            bosque: {
                nombre: "Elfo del Bosque",
                descripcion: "Los elfos del bosque viven en armonía con la naturaleza y son sigilosos.",
                beneficios: "+1 sabiduría, mayor velocidad, pueden esconderse en la naturaleza",
                bonificadores: { sabiduria: 1 },
                rasgos: [
                    { nombre: "Entrenamiento élfico en armas", descripcion: "Competencia con espada larga, espada corta, arco largo y arco corto" },
                    { nombre: "Pies ligeros", descripcion: "Puedes esconderte cuando estás ligeramente cubierto por vegetación natural" }
                ]
            },
            oscuro: {
                nombre: "Elfo Oscuro (Drow)",
                descripcion: "Los drows viven en el subterráneo y tienen magia innata, pero sufren en la luz solar.",
                beneficios: "+1 carisma, visión superior, magia drow, pero sensibilidad solar",
                bonificadores: { carisma: 1 },
                rasgos: [
                    { nombre: "Visión en la oscuridad superior", descripcion: "Puedes ver en oscuridad mágica a 120 pies" },
                    { nombre: "Magia drow", descripcion: "Conoces el truco 'Luces danzantes'. A nivel 3 puedes lanzar 'Fuego feérico' una vez, y a nivel 5 'Oscuridad' una vez" },
                    { nombre: "Sensibilidad a la luz solar", descripcion: "Desventaja en ataques y percepciones basadas en vista bajo luz solar directa" }
                ]
            }
        }
    },
    
    enano: {
        id: "enano",
        nombre: "Enano",
        descripcion: "Los enanos son famosos por su resistencia, su habilidad como artesanos y su valentía en combate.",
        puntos_fuertes: "Alta constitución, resistencia al veneno, competencia con armas enanas",
        ideal_para: "guerreros, paladines, clérigos",
        velocidad: 25,
        idiomas: ["Común", "Enano"],
        dote_extra: false,
        bonificadores: {
            constitucion: 2
        },
        rasgos_comunes: [
            { nombre: "Visión en la oscuridad", descripcion: "Puedes ver en oscuridad a 60 pies" },
            { nombre: "Resistencia enana", descripcion: "Ventaja en salvaciones contra veneno y resistencia al daño por veneno" },
            { nombre: "Competencia enana", descripcion: "Competencia con hachas de batalla, hachas de mano, martillos de guerra y martillos ligeros" },
            { nombre: "Conocimiento de la piedra", descripcion: "Sabes cuándo una construcción tiene trampas o es inestable" }
        ],
        subrazas: {
            colina: {
                nombre: "Enano de las Colinas",
                descripcion: "Los enanos de las colinas son más sabios y resistentes, con una conexión especial a la tierra.",
                beneficios: "+1 sabiduría, +1 punto de golpe por nivel",
                bonificadores: { sabiduria: 1 },
                rasgos: [
                    { nombre: "Robustez enana", descripcion: "+1 PG por nivel" }
                ]
            },
            montana: {
                nombre: "Enano de las Montañas",
                descripcion: "Los enanos de las montañas son guerreros natos, fuertes y resistentes.",
                beneficios: "+2 fuerza, competencia con armaduras ligeras y medias",
                bonificadores: { fuerza: 2 },
                rasgos: [
                    { nombre: "Entrenamiento en armadura enana", descripcion: "Competencia con armaduras ligeras y medias" }
                ]
            }
        }
    },
    
    mediano: {
        id: "mediano",
        nombre: "Mediano",
        descripcion: "Los medianos son una raza pequeña pero valiente, conocida por su suerte y su capacidad para esconderse.",
        puntos_fuertes: "Afortunados, valientes, sigilosos",
        ideal_para: "pícaros, bardos, exploradores",
        velocidad: 25,
        idiomas: ["Común", "Mediano"],
        dote_extra: false,
        bonificadores: {
            destreza: 2
        },
        rasgos_comunes: [
            { nombre: "Afortunado", descripcion: "Puedes repetir un 1 en cualquier tirada de ataque, habilidad o salvación" },
            { nombre: "Valiente", descripcion: "Ventaja en salvaciones contra miedo" },
            { nombre: "Sigilo natural", descripcion: "Puedes esconderte incluso cuando solo estás oculto por una criatura de tamaño mayor" }
        ],
        subrazas: {
            piesligeros: {
                nombre: "Mediano Piesligeros",
                descripcion: "Los piesligeros son más aventureros y pueden esconderse casi en cualquier lugar.",
                beneficios: "+1 carisma, sigilo mejorado",
                bonificadores: { carisma: 1 },
                rasgos: [
                    { nombre: "Sigilo natural mejorado", descripcion: "Puedes esconderte incluso cuando solo estás oculto por una criatura de tamaño mayor" }
                ]
            },
            fornido: {
                nombre: "Mediano Fornido",
                descripcion: "Los fornidos son más resistentes y tienen una conexión con los enanos.",
                beneficios: "+1 constitución, resistencia al veneno",
                bonificadores: { constitucion: 1 },
                rasgos: [
                    { nombre: "Resistencia fornida", descripcion: "Ventaja en salvaciones contra veneno y resistencia al daño por veneno" }
                ]
            }
        }
    },
    
    dragonido: {
        id: "dragonido",
        nombre: "Dracónido",
        descripcion: "Los dracónidos descienden de los dragones y poseen rasgos de sus ancestros: escamas, aliento elemental y orgullo.",
        puntos_fuertes: "Fuerza y carisma, arma de aliento, resistencia elemental",
        ideal_para: "paladines, hechiceros, guerreros",
        velocidad: 30,
        idiomas: ["Común", "Dracónico"],
        dote_extra: false,
        bonificadores: {
            fuerza: 2,
            carisma: 1
        },
        rasgos_comunes: [
            { nombre: "Ascendencia dracónica", descripcion: "Eliges un tipo de dragón que determina tu arma de aliento y resistencia" },
            { nombre: "Arma de aliento", descripcion: "Puedes usar una acción para exhalar energía elemental en un cono o línea. 2d6 de daño, mejora con nivel" },
            { nombre: "Resistencia dracónica", descripcion: "Resistencia al tipo de daño de tu ascendencia" }
        ]
    },
    
    gnomo: {
        id: "gnomo",
        nombre: "Gnomo",
        descripcion: "Los gnomos son pequeños, ingeniosos y tienen una afinidad natural con la magia y los artilugios.",
        puntos_fuertes: "Alta inteligencia, resistencia mágica, astucia",
        ideal_para: "magos, artificies, bardos",
        velocidad: 25,
        idiomas: ["Común", "Gnomo"],
        dote_extra: false,
        bonificadores: {
            inteligencia: 2
        },
        rasgos_comunes: [
            { nombre: "Visión en la oscuridad", descripcion: "Puedes ver en oscuridad a 60 pies" },
            { nombre: "Astucia gnoma", descripcion: "Ventaja en salvaciones de Inteligencia, Sabiduría y Carisma contra magia" }
        ],
        subrazas: {
            bosque: {
                nombre: "Gnomo de los Bosques",
                descripcion: "Los gnomos del bosque son sigilosos y tienen una conexión natural con las pequeñas bestias.",
                beneficios: "+1 destreza, ilusión menor, hablar con animales pequeños",
                bonificadores: { destreza: 1 },
                rasgos: [
                    { nombre: "Ilusión natural", descripcion: "Conoces el truco 'ilusión menor'" },
                    { nombre: "Hablar con bestias pequeñas", descripcion: "Puedes comunicarte con animales pequeños" }
                ]
            },
            roca: {
                nombre: "Gnomo de las Rocas",
                descripcion: "Los gnomos de las rocas son inventores y artífices natos.",
                beneficios: "+1 constitución, doble competencia en historia sobre objetos mágicos",
                bonificadores: { constitucion: 1 },
                rasgos: [
                    { nombre: "Conocimiento de artilugios", descripcion: "Doble competencia en pruebas de Inteligencia sobre objetos mágicos, alquimia y tecnología" },
                    { nombre: "Inventor", descripcion: "Puedes crear pequeños artilugios mecánicos" }
                ]
            }
        }
    },
    
    semielfo: {
        id: "semielfo",
        nombre: "Semielfo",
        descripcion: "Los semielfos heredan lo mejor de dos mundos: la versatilidad humana y la gracia élfica.",
        puntos_fuertes: "Carismáticos, versátiles, dos habilidades a elegir",
        ideal_para: "bardos, hechiceros, paladines, cualquier clase social",
        velocidad: 30,
        idiomas: ["Común", "Élfico", "Un idioma adicional"],
        dote_extra: false,
        bonificadores: {
            carisma: 2
        },
        rasgos_comunes: [
            { nombre: "Ascendencia feérica", descripcion: "Ventaja en salvaciones contra encantamientos y la magia no puede dormirte" },
            { nombre: "Habilidades versátiles", descripcion: "Obtienes competencia en dos habilidades a tu elección" },
            { nombre: "Visión en la oscuridad", descripcion: "Puedes ver en oscuridad a 60 pies" }
        ]
    },
    
    semiorco: {
        id: "semiorco",
        nombre: "Semi-orco",
        descripcion: "Los semiorcos combinan la ferocidad orca con la adaptabilidad humana, siendo guerreros temibles.",
        puntos_fuertes: "Fuerza y constitución, críticos devastadores, resistencia a la muerte",
        ideal_para: "bárbaros, guerreros, paladines",
        velocidad: 30,
        idiomas: ["Común", "Orco"],
        dote_extra: false,
        bonificadores: {
            fuerza: 2,
            constitucion: 1
        },
        rasgos_comunes: [
            { nombre: "Ataque salvaje", descripcion: "Cuando consigues un golpe crítico, puedes tirar el dado de daño una vez más y añadirlo al total" },
            { nombre: "Resistencia implacable", descripcion: "Si te reducen a 0 PG pero no te matan, puedes quedarte con 1 PG en su lugar. Una vez por descanso largo" },
            { nombre: "Intimidación natural", descripcion: "Tienes competencia en Intimidación" }
        ]
    },
    
    tiefling: {
        id: "tiefling",
        nombre: "Tiefling",
        descripcion: "Los tieflings tienen ascendencia infernal, lo que les otorga habilidades mágicas y resistencia al fuego.",
        puntos_fuertes: "Carisma e inteligencia, magia infernal, resistencia al fuego",
        ideal_para: "hechiceros, brujos, bardos, magos",
        velocidad: 30,
        idiomas: ["Común", "Infernal"],
        dote_extra: false,
        bonificadores: {
            inteligencia: 1,
            carisma: 2
        },
        rasgos_comunes: [
            { nombre: "Visión en la oscuridad", descripcion: "Puedes ver en oscuridad a 60 pies" },
            { nombre: "Resistencia infernal", descripcion: "Resistencia al daño por fuego" },
            { nombre: "Magia infernal", descripcion: "Conoces el truco 'taumaturgia'. A nivel 3 puedes lanzar 'Reprensión infernal' una vez, y a nivel 5 'Oscuridad' una vez" }
        ]
    },
    
    aarakocra: {
        id: "aarakocra",
        nombre: "Aarakocra",
        descripcion: "Los aarakocra son humanoides pájaro que habitan en las montañas más altas. Son criaturas pacíficas que aman volar.",
        puntos_fuertes: "Vuelo a 50 pies, destreza, garras naturales",
        ideal_para: "exploradores, monjes, pícaros, magos",
        velocidad: 25,
        velocidad_especial: { tipo: "volar", valor: 50 },
        idiomas: ["Común", "Aarakocra", "Aire"],
        dote_extra: false,
        bonificadores: {
            destreza: 2,
            sabiduria: 1
        },
        rasgos_comunes: [
            { nombre: "Vuelo", descripcion: "Tienes una velocidad de vuelo de 50 pies. No puedes volar si llevas armadura pesada" },
            { nombre: "Garras", descripcion: "Tus garras son armas naturales que causan 1d4 de daño cortante" },
            { nombre: "Talón de aquiles", descripcion: "Eres vulnerable en espacios cerrados" }
        ]
    },
    
    genasi: {
        id: "genasi",
        nombre: "Genasi",
        descripcion: "Los genasi descienden de genios elementales, reflejando el poder de los planos elementales.",
        puntos_fuertes: "Magia elemental, resistencia elemental",
        ideal_para: "hechiceros, brujos, magos",
        velocidad: 30,
        idiomas: ["Común", "Primigenio"],
        dote_extra: false,
        bonificadores: {
            constitucion: 2
        },
        subrazas: {
            fuego: {
                nombre: "Genasi de Fuego",
                descripcion: "Descendientes de genios de fuego, son apasionados y de temperamento ardiente.",
                beneficios: "+1 inteligencia, resistencia al fuego, magia de fuego",
                bonificadores: { inteligencia: 1 },
                rasgos: [
                    { nombre: "Resistencia al fuego", descripcion: "Resistencia al daño por fuego" },
                    { nombre: "Iluminación", descripcion: "Puedes encender una llama en tu mano que ilumina 10 pies" },
                    { nombre: "Paso de fuego", descripcion: "Conoces el truco 'Producir llama'. A nivel 3 puedes lanzar 'Manos ardientes' una vez" }
                ]
            },
            agua: {
                nombre: "Genasi de Agua",
                descripcion: "Descendientes de genios de agua, son fluidos y adaptables.",
                beneficios: "+1 sabiduría, resistencia al ácido, respirar agua",
                bonificadores: { sabiduria: 1 },
                rasgos: [
                    { nombre: "Resistencia al ácido", descripcion: "Resistencia al daño por ácido" },
                    { nombre: "Anfibio", descripcion: "Puedes respirar aire y agua" },
                    { nombre: "Manipular agua", descripcion: "Conoces el truco 'Crear agua'. A nivel 3 puedes lanzar 'Ola atronadora' una vez" }
                ]
            },
            tierra: {
                nombre: "Genasi de Tierra",
                descripcion: "Descendientes de genios de tierra, son sólidos y resistentes.",
                beneficios: "+1 fuerza, atravesar tierra",
                bonificadores: { fuerza: 1 },
                rasgos: [
                    { nombre: "Pasar sin rastro", descripcion: "Puedes moverte a través de tierra y piedra sin dejar rastro" },
                    { nombre: "Fundirse con la piedra", descripcion: "Conoces el truco 'Pasar sin dejar rastro' limitado. A nivel 3 puedes lanzar 'Fundirse con la piedra' una vez" }
                ]
            },
            aire: {
                nombre: "Genasi de Aire",
                descripcion: "Descendientes de genios de aire, son libres y ligeros.",
                beneficios: "+1 destreza, respirar indefinidamente",
                bonificadores: { destreza: 1 },
                rasgos: [
                    { nombre: "Resistencia al rayo", descripcion: "Resistencia al daño por rayo" },
                    { nombre: "Sin aliento", descripcion: "Puedes contener la respiración indefinidamente" },
                    { nombre: "Magia del viento", descripcion: "Conoces el truco 'Mano de mago' que siempre está invisible. A nivel 3 puedes lanzar 'Empujar' una vez" }
                ]
            }
        }
    },
    
    goliat: {
        id: "goliat",
        nombre: "Goliat",
        descripcion: "Los goliat son humanoides gigantes que viven en las montañas más altas. Son guerreros nómadas que valoran la fuerza y el honor.",
        puntos_fuertes: "Fuerza y constitución, resistencia natural, hazañas atléticas",
        ideal_para: "bárbaros, guerreros, exploradores",
        velocidad: 30,
        idiomas: ["Común", "Gigante"],
        dote_extra: false,
        bonificadores: {
            fuerza: 2,
            constitucion: 1
        },
        rasgos_comunes: [
            { nombre: "Atleta natural", descripcion: "Tienes competencia en Atletismo" },
            { nombre: "Resistencia de piedra", descripcion: "Puedes reducir el daño recibido en 1d12 + tu constitución una vez por descanso corto" },
            { nombre: "Nacido en la montaña", descripcion: "Eres natural en altas altitudes y frío extremo" },
            { nombre: "Complexión poderosa", descripcion: "Cuentas como una criatura de un tamaño más grande para fuerza de carga" }
        ]
    },
    
    kenku: {
        id: "kenku",
        nombre: "Kenku",
        descripcion: "Los kenku son humanoides cuervo que perdieron su capacidad de crear y solo pueden imitar lo que ven.",
        puntos_fuertes: "Destreza, sigilo, imitación perfecta",
        ideal_para: "pícaros, exploradores, bardos",
        velocidad: 30,
        idiomas: ["Común", "Kenku"],
        dote_extra: false,
        bonificadores: {
            destreza: 2,
            sabiduria: 1
        },
        rasgos_comunes: [
            { nombre: "Imitación experta", descripcion: "Puedes imitar cualquier sonido que hayas escuchado. Ventaja en engaño para hacerte pasar por alguien" },
            { nombre: "Entrenamiento kenku", descripcion: "Tienes competencia en Sigilo y en dos habilidades adicionales a elegir" },
            { nombre: "Maldición de la creación", descripcion: "No puedes crear cosas nuevas, solo replicar lo que has visto" }
        ]
    },
    
    tabaxi: {
        id: "tabaxi",
        nombre: "Tabaxi",
        descripcion: "Los tabaxi son humanoides felinos curiosos por naturaleza y excelentes trepadores.",
        puntos_fuertes: "Destreza, velocidad, trepar, garras",
        ideal_para: "exploradores, pícaros, monjes",
        velocidad: 30,
        velocidad_especial: { tipo: "trepar", valor: 20 },
        idiomas: ["Común", "Tabaxi"],
        dote_extra: false,
        bonificadores: {
            destreza: 2,
            carisma: 1
        },
        rasgos_comunes: [
            { nombre: "Visión en la oscuridad", descripcion: "Puedes ver en oscuridad a 60 pies" },
            { nombre: "Garras felinas", descripcion: "Tus garras son armas naturales que causan 1d4 de daño cortante" },
            { nombre: "Agilidad felina", descripcion: "Puedes duplicar tu velocidad en un turno. Necesitas moverte 0 pies en el siguiente para recargar" },
            { nombre: "Trepar", descripcion: "Tienes velocidad de trepar de 20 pies" },
            { nombre: "Curiosidad felina", descripcion: "Tienes competencia en Percepción y Sigilo" }
        ]
    },
    
    triton: {
        id: "triton",
        nombre: "Tritón",
        descripcion: "Los tritones son guardianes de las profundidades marinas, protectores del reino submarino contra las fuerzas del mal.",
        puntos_fuertes: "Anfibio, magia del agua, comunicación con criaturas marinas",
        ideal_para: "paladines, clérigos, druidas, exploradores",
        velocidad: 30,
        velocidad_especial: { tipo: "nadar", valor: 30 },
        idiomas: ["Común", "Primigenio"],
        dote_extra: false,
        bonificadores: {
            fuerza: 1,
            constitucion: 1,
            carisma: 1
        },
        rasgos_comunes: [
            { nombre: "Anfibio", descripcion: "Puedes respirar aire y agua" },
            { nombre: "Control del agua", descripcion: "Puedes crear efectos de agua menores a voluntad" },
            { nombre: "Emisario del mar", descripcion: "Puedes comunicarte con bestias que tienen velocidad nadar" },
            { nombre: "Guardianes de las olas", descripcion: "Conoces el truco 'Rociar veneno'. A nivel 3 puedes lanzar 'Niebla' una vez, y a nivel 5 'Golpe de ola' una vez. Carisma es tu atributo de conjuros" },
            { nombre: "Frío del abismo", descripcion: "Resistencia al daño por frío" }
        ]
    },
    
    aasimar: {
        id: "aasimar",
        nombre: "Aasimar",
        descripcion: "Los aasimar tienen ascendencia celestial y portan dentro de sí la luz de los planos superiores.",
        puntos_fuertes: "Carisma, curación, resistencia radiante/necrótica",
        ideal_para: "clérigos, paladines, bardos",
        velocidad: 30,
        idiomas: ["Común", "Celestial"],
        dote_extra: false,
        bonificadores: {
            carisma: 2
        },
        subrazas: {
            protector: {
                nombre: "Aasimar Protector",
                descripcion: "Los protectores tienen un guía celestial que les otorga poder para defender a los inocentes.",
                beneficios: "+1 sabiduría, alas espirituales",
                bonificadores: { sabiduria: 1 },
                rasgos: [
                    { nombre: "Alas espirituales", descripcion: "Puedes manifestar alas etéreas que te dan vuelo 30 pies por 1 minuto. Una vez por descanso largo" },
                    { nombre: "Manos sanadoras", descripcion: "Puedes curar a una criatura con tu toque. Igual a tu nivel. Una vez por descanso largo" },
                    { nombre: "Resistencia celestial", descripcion: "Resistencia al daño necrótico y radiante" }
                ]
            },
            caido: {
                nombre: "Aasimar Caído",
                descripcion: "Los caídos han perdido su conexión celestial o la han corrompido, obteniendo un poder más oscuro.",
                beneficios: "+1 fuerza, aura necrótica",
                bonificadores: { fuerza: 1 },
                rasgos: [
                    { nombre: "Aura necrótica", descripcion: "Puedes emanar un aura que causa daño necrótico a quienes te ataquen cuerpo a cuerpo. Una vez por descanso largo" },
                    { nombre: "Toque necrótico", descripcion: "Puedes causar daño necrótico con tu toque. Igual a tu nivel. Una vez por descanso largo" },
                    { nombre: "Resistencia celestial", descripcion: "Resistencia al daño necrótico y radiante" }
                ]
            },
            escudero: {
                nombre: "Aasimar Escudero",
                descripcion: "Los escuderos tienen una conexión con la bestia interior que les otorga poder físico.",
                beneficios: "+1 constitución, transformación bestial",
                bonificadores: { constitucion: 1 },
                rasgos: [
                    { nombre: "Transformación bestial", descripcion: "Puedes transformarte, creciendo garras y ojos bestiales. Causas daño adicional igual a tu nivel. Una vez por descanso largo" },
                    { nombre: "Manos sanadoras", descripcion: "Puedes curar a una criatura con tu toque. Igual a tu nivel. Una vez por descanso largo" },
                    { nombre: "Resistencia celestial", descripcion: "Resistencia al daño necrótico y radiante" }
                ]
            }
        }
    },
    
    firbolg: {
        id: "firbolg",
        nombre: "Firbolg",
        descripcion: "Los firbolg son gigantes bondadosos que viven en armonía con la naturaleza y evitan el contacto con otras razas.",
        puntos_fuertes: "Sabiduría, fuerza, magia druídica, invisibilidad natural",
        ideal_para: "druidas, exploradores, clérigos de la naturaleza",
        velocidad: 30,
        idiomas: ["Común", "Gigante", "Élfico"],
        dote_extra: false,
        bonificadores: {
            fuerza: 1,
            sabiduria: 2
        },
        rasgos_comunes: [
            { nombre: "Magia firbolg", descripcion: "Puedes lanzar 'Detectar magia' y 'Disfrazarse' una vez cada uno. Sabiduría es tu atributo de conjuros" },
            { nombre: "Ocultarse en la naturaleza", descripcion: "Puedes esconderte incluso cuando solo estás ligeramente cubierto por vegetación" },
            { nombre: "Constitución poderosa", descripcion: "Cuentas como una criatura de un tamaño más grande para fuerza de carga" },
            { nombre: "Hablar con bestias y plantas", descripcion: "Puedes comunicarte con bestias y plantas" }
        ]
    },
    
    tortuga: {
        id: "tortuga",
        nombre: "Tortle (Hombre Tortuga)",
        descripcion: "Los tortle son humanoides tortuga que viven en armonía con la naturaleza y llevan su casa a cuestas.",
        puntos_fuertes: "CA natural alta, fuerza, sabiduría",
        ideal_para: "druidas, exploradores, clérigos, monjes",
        velocidad: 30,
        idiomas: ["Común", "Tortle"],
        dote_extra: false,
        bonificadores: {
            fuerza: 2,
            sabiduria: 1
        },
        rasgos_comunes: [
            { nombre: "Caparazón natural", descripcion: "CA base = 17 (destreza no modifica). No puedes llevar armadura pero puedes usar escudo" },
            { nombre: "Estrategia de caparazón", descripcion: "Puedes esconderte en tu caparazón, ganando +4 CA pero quedando indefenso" },
            { nombre: "Garras", descripcion: "Tus garras son armas naturales que causan 1d4 de daño cortante" },
            { nombre: "Retención de aliento", descripcion: "Puedes contener la respiración hasta 1 hora" },
            { nombre: "Instinto natural", descripcion: "Tienes competencia en Supervivencia" }
        ]
    },
    
    changeling: {
        id: "changeling",
        nombre: "Cambiante (Changeling)",
        descripcion: "Los cambiantes pueden alterar su apariencia a voluntad, siendo maestros del disfraz y el engaño.",
        puntos_fuertes: "Carisma, cambio de forma, versatilidad social",
        ideal_para: "bardos, pícaros, hechiceros, cualquier clase social",
        velocidad: 30,
        idiomas: ["Común", "Dos idiomas adicionales"],
        dote_extra: false,
        bonificadores: {
            carisma: 2,
            otro: "eleccion"
        },
        rasgos_comunes: [
            { nombre: "Cambiante", descripcion: "Como acción, puedes cambiar tu apariencia (altura, peso, rasgos, voz). No cambian estadísticas" },
            { nombre: "Identidad cambiante", descripcion: "Tienes ventaja en engaño y persuasión cuando usas tu habilidad de cambio" },
            { nombre: "Sin descanso", descripcion: "Solo necesitas 4 horas de trance para descansar" }
        ]
    },
    
    warforged: {
        id: "warforged",
        nombre: "Warforged (Forjado)",
        descripcion: "Los forjados son constructos vivientes creados para la guerra, ahora buscan su propósito en el mundo.",
        puntos_fuertes: "Constitución, CA natural, sin necesidad de comer/dormir",
        ideal_para: "guerreros, paladines, artificies",
        velocidad: 30,
        idiomas: ["Común", "Un idioma adicional"],
        dote_extra: false,
        bonificadores: {
            constitucion: 2,
            otro: "eleccion"
        },
        rasgos_comunes: [
            { nombre: "Cuerpo compuesto", descripcion: "CA base = 16 (destreza máximo +2). Puedes integrar armadura" },
            { nombre: "Naturaleza construida", descripcion: "No necesitas comer, beber, respirar o dormir. Inmune a enfermedades" },
            { nombre: "Centinela de descanso", descripcion: "Durante un descanso largo permaneces alerta, no puedes ser sorprendido" },
            { nombre: "Integración de armadura", descripcion: "Puedes integrar una armadura en 1 hora, no puedes ser desarmado mientras vives" }
        ]
    }
};

if (typeof module !== 'undefined' && module.exports) module.exports = RAZAS;