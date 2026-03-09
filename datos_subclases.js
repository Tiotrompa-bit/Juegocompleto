// datos_subclases.js - Todas las subclases con descripciones
// Versión 2.0 - Incluye propiedades mágicas para subclases como Caballero Eldritch

const SUBCLASES = {
    // ========================================================================
    // BÁRBARO
    // ========================================================================
    berserker: {
        id: "berserker",
        nombre: "Berserker",
        clase_id: "barbaro",
        nivel_acceso: 3,
        descripcion: "El Berserker es un guerrero que canaliza su furia sin límites, entrando en frenesí para golpear una y otra vez sin descanso.",
        rasgos: {
            3: [
                { nombre: "Frenesí", tipo: "recurso", descripcion: "Cuando entras en rabia, puedes entrar en frenesí. Como acción bonus, realiza un ataque cuerpo a cuerpo con arma. Al terminar, sufres un nivel de agotamiento." }
            ],
            6: [
                { nombre: "Furia Inconsciente", tipo: "pasivo", descripcion: "No puedes ser hechizado o asustado mientras estás en rabia." }
            ],
            10: [
                { nombre: "Presencia Intimidante", tipo: "accion", descripcion: "Usas tu acción para asustar a una criatura. Puede repetir la salvación al final de su turno." }
            ],
            14: [
                { nombre: "Represalia", tipo: "reaccion", descripcion: "Cuando recibes daño de una criatura a 5 pies, puedes usar tu reacción para atacarla." }
            ]
        }
    },
    
    totemico: {
        id: "totemico",
        nombre: "Guerrero Totémico",
        clase_id: "barbaro",
        nivel_acceso: 3,
        descripcion: "El Guerrero Totémico se conecta con espíritus animales, obteniendo diferentes beneficios según el tótem elegido.",
        rasgos: {
            3: [
                { nombre: "Buscador del Espíritu", tipo: "eleccion", descripcion: "Elige un animal tótem: Oso (resistencia), Águila (visión), Lobo (trabajo en equipo). Obtienes un rasgo mientras estás en rabia." }
            ],
            6: [
                { nombre: "Aspecto de la Bestia", tipo: "eleccion", descripcion: "Eliges un beneficio adicional de tu tótem o de otro." }
            ],
            10: [
                { nombre: "Espíritu Andante", tipo: "eleccion", descripcion: "Puedes lanzar el conjuro 'Hablar con los Animales' como ritual." }
            ],
            14: [
                { nombre: "Arañazo del Tótem", tipo: "eleccion", descripcion: "Mientras estás en rabia, obtienes un beneficio final de tu tótem." }
            ]
        }
    },
    
    ancestros: {
        id: "ancestros",
        nombre: "Guerrero de los Ancestros",
        clase_id: "barbaro",
        nivel_acceso: 3,
        descripcion: "Estos bárbaros son guiados por espíritus ancestrales que protegen a sus aliados y castigan a sus enemigos.",
        rasgos: {
            3: [
                { nombre: "Guardianes Ancestrales", tipo: "pasivo", descripcion: "Mientras estás en rabia, la primera criatura que ataques tiene desventaja para atacar a otros." }
            ],
            6: [
                { nombre: "Escudo Ancestral", tipo: "reaccion", descripcion: "Reacción para dar resistencia a un aliado contra el daño de un ataque." }
            ],
            10: [
                { nombre: "Consultar a los Espíritus", tipo: "utilidad", descripcion: "Puedes lanzar 'Augurio' o 'Clarividencia' como ritual." }
            ],
            14: [
                { nombre: "Vengador Ancestral", tipo: "pasivo", descripcion: "Cuando usas Escudo Ancestral, el atacante recibe daño igual a tu reducción." }
            ]
        }
    },

    // ========================================================================
    // MAGO
    // ========================================================================
    evocacion: {
        id: "evocacion",
        nombre: "Escuela de Evocación",
        clase_id: "mago",
        nivel_acceso: 2,
        descripcion: "Los magos de la escuela de evocación son especialistas en crear energía mágica destructiva: bolas de fuego, relámpagos y explosiones.",
        rasgos: {
            2: [
                { nombre: "Sabio de la Evocación", tipo: "pasivo", descripcion: "El oro y tiempo para copiar conjuros de evocación se reduce a la mitad." },
                { nombre: "Esculpir Conjuros", tipo: "pasivo", descripcion: "Puedes elegir un número de criaturas igual a 1 + el nivel del conjuro para que no sufran daño por tus conjuros de evocación." }
            ],
            6: [
                { nombre: "Truco Potente", tipo: "pasivo", descripcion: "Añades tu modificador de Inteligencia al daño de un truco de evocación." }
            ],
            10: [
                { nombre: "Evocación Mejorada", tipo: "pasivo", descripcion: "Cuando lanzas un conjuro de evocación, puedes añadir tu modificador de Inteligencia a una tirada de daño." }
            ],
            14: [
                { nombre: "Sobrecarga", tipo: "accion", descripcion: "Puedes lanzar un conjuro de evocación de nivel 5 o inferior sin gastar espacio de conjuro. Una vez por descanso largo." }
            ]
        }
    },
    
    ilusion: {
        id: "ilusion",
        nombre: "Escuela de Ilusión",
        clase_id: "mago",
        nivel_acceso: 2,
        descripcion: "Los ilusionistas manipulan la percepción y la realidad, creando imágenes y engaños para confundir a sus enemigos.",
        rasgos: {
            2: [
                { nombre: "Sabio de la Ilusión", tipo: "pasivo", descripcion: "El oro y tiempo para copiar conjuros de ilusión se reduce a la mitad." },
                { nombre: "Ilusiones Mejoradas", tipo: "pasivo", descripcion: "Cuando creas una ilusión, puedes crear un sonido, olor u otro efecto sensorial adicional con ella." }
            ],
            6: [
                { nombre: "Ilusión Maleable", tipo: "pasivo", descripcion: "Usando una acción, puedes cambiar la naturaleza de una ilusión que hayas creado." }
            ],
            10: [
                { nombre: "Ilusión Aparente", tipo: "pasivo", descripcion: "Puedes hacer que una ilusión parezca real a todos los sentidos." }
            ],
            14: [
                { nombre: "Realidad Ilusoria", tipo: "accion", descripcion: "Puedes hacer que un objeto de una ilusión sea real por un minuto." }
            ]
        }
    },
    
    adivinacion: {
        id: "adivinacion",
        nombre: "Escuela de Adivinación",
        clase_id: "mago",
        nivel_acceso: 2,
        descripcion: "Los adivinos pueden ver el futuro, leer los hilos del destino y alterar el curso de los acontecimientos.",
        rasgos: {
            2: [
                { nombre: "Sabio de la Adivinación", tipo: "pasivo", descripcion: "El oro y tiempo para copiar conjuros de adivinación se reduce a la mitad." },
                { nombre: "Presagios", tipo: "recurso", descripcion: "Tiras dos d20 al final de cada descanso largo. Puedes sustituir cualquier tirada con estos resultados." }
            ],
            6: [
                { nombre: "Visión del Futuro", tipo: "recurso", descripcion: "Puedes gastar un presagio para dar ventaja/desventaja a un aliado/enemigo." }
            ],
            10: [
                { nombre: "Tercer Ojo", tipo: "accion", descripcion: "Puedes ver en la oscuridad, etérea e invisible por 1 minuto." }
            ],
            14: [
                { nombre: "Presagios Mejorados", tipo: "pasivo", descripcion: "Tiras tres d20 en lugar de dos." }
            ]
        }
    },
    
    conjuracion: {
        id: "conjuracion",
        nombre: "Escuela de Conjuración",
        clase_id: "mago",
        nivel_acceso: 2,
        descripcion: "Los conjuradores se especializan en traer objetos, criaturas y efectos de otros lugares a la realidad.",
        rasgos: {
            2: [
                { nombre: "Sabio de la Conjuración", tipo: "pasivo", descripcion: "El oro y tiempo para copiar conjuros de conjuración se reduce a la mitad." },
                { nombre: "Conjuro Menor", tipo: "recurso", descripcion: "Puedes conjurar un objeto inerte de hasta 3 pies y 10 libras por un minuto." }
            ],
            6: [
                { nombre: "Teletransporte Benigno", tipo: "accion", descripcion: "Puedes teletransportarte hasta 30 pies a un espacio visible." }
            ],
            10: [
                { nombre: "Concentración Focalizada", tipo: "pasivo", descripcion: "No puedes perder concentración por daño mientras conjuras." }
            ],
            14: [
                { nombre: "Conjuro Duradero", tipo: "pasivo", descripcion: "Tus conjuros de conjuración duran el doble." }
            ]
        }
    },
    
    abjuracion: {
        id: "abjuracion",
        nombre: "Escuela de Abjuración",
        clase_id: "mago",
        nivel_acceso: 2,
        descripcion: "Los abjuradores son protectores, especializados en barreras mágicas, defensas y anulación de magia.",
        rasgos: {
            2: [
                { nombre: "Sabio de la Abjuración", tipo: "pasivo", descripcion: "El oro y tiempo para copiar conjuros de abjuración se reduce a la mitad." },
                { nombre: "Escudo Arcano", tipo: "recurso", descripcion: "Cuando lanzas un conjuro de abjuración, creas una barrera que absorbe daño." }
            ],
            6: [
                { nombre: "Protección Arcana", tipo: "reaccion", descripcion: "Puedes extender tu escudo a un aliado." }
            ],
            10: [
                { nombre: "Escudo Mejorado", tipo: "pasivo", descripcion: "Tu escudo absorbe más daño." }
            ],
            14: [
                { nombre: "Contrahechizo Mejorado", tipo: "pasivo", descripcion: "Tienes ventaja en los chequeos de contrahechizo." }
            ]
        }
    },
    
    nigromancia: {
        id: "nigromancia",
        nombre: "Escuela de Nigromancia",
        clase_id: "mago",
        nivel_acceso: 2,
        descripcion: "Los nigromantes estudian las fuerzas de la vida y la muerte, pudiendo controlar no-muertos y drenar energía vital.",
        rasgos: {
            2: [
                { nombre: "Sabio de la Nigromancia", tipo: "pasivo", descripcion: "El oro y tiempo para copiar conjuros de nigromancia se reduce a la mitad." },
                { nombre: "Cosecha Siniestra", tipo: "pasivo", descripcion: "Cuando matas a una criatura con un conjuro de nigromancia, recuperas PV igual al nivel del conjuro." }
            ],
            6: [
                { nombre: "Esclavizar No-muerto", tipo: "recurso", descripcion: "Añades un no-muerto a tu control." }
            ],
            10: [
                { nombre: "Resistencia a No-muertos", tipo: "pasivo", descripcion: "Resistencia al daño necrótico y no puedes ser envenenado." }
            ],
            14: [
                { nombre: "Comandar No-muertos", tipo: "recurso", descripcion: "Puedes tomar control de no-muertos creados por otros." }
            ]
        }
    },
    
    encantamiento: {
        id: "encantamiento",
        nombre: "Escuela de Encantamiento",
        clase_id: "mago",
        nivel_acceso: 2,
        descripcion: "Los encantadores manipulan las mentes y emociones, pudiendo controlar, calmar o aterrorizar a otros.",
        rasgos: {
            2: [
                { nombre: "Sabio del Encantamiento", tipo: "pasivo", descripcion: "El oro y tiempo para copiar conjuros de encantamiento se reduce a la mitad." },
                { nombre: "Mirada Hipnótica", tipo: "accion", descripcion: "Hechizas a una criatura, reduciendo su velocidad a 0 por un turno." }
            ],
            6: [
                { nombre: "Instinto Encantador", tipo: "pasivo", descripcion: "Cuando lanzas un conjuro de encantamiento, puedes hacer que dos objetivos lo sufran." }
            ],
            10: [
                { nombre: "Recuerdo Dividido", tipo: "pasivo", descripcion: "Cuando un conjuro de encantamiento termina, el objetivo no recuerda haber sido afectado." }
            ],
            14: [
                { nombre: "Mirada Aterradora", tipo: "accion", descripcion: "Asustas a una criatura. Mientras esté asustada, está paralizada." }
            ]
        }
    },
    
    transmutacion: {
        id: "transmutacion",
        nombre: "Escuela de Transmutación",
        clase_id: "mago",
        nivel_acceso: 2,
        descripcion: "Los transmutadores cambian la forma y naturaleza de las cosas, desde transformar objetos hasta alterar cuerpos.",
        rasgos: {
            2: [
                { nombre: "Sabio de la Transmutación", tipo: "pasivo", descripcion: "El oro y tiempo para copiar conjuros de transmutación se reduce a la mitad." },
                { nombre: "Piedra del Transmutador", tipo: "recurso", descripcion: "Crear una piedra que da un beneficio: +10 velocidad, +1 CA, ventaja en CON, etc." }
            ],
            6: [
                { nombre: "Alquimia Menor", tipo: "utilidad", descripcion: "Puedes crear efectos alquímicos menores." }
            ],
            10: [
                { nombre: "Piedra del Transmutador Mejorada", tipo: "pasivo", descripcion: "Tu piedra da dos beneficios." }
            ],
            14: [
                { nombre: "Maestro Transmutador", tipo: "pasivo", descripcion: "Puedes lanzar 'Polimorfar' en ti mismo sin gastar espacio." }
            ]
        }
    },

    // ========================================================================
    // PÍCARO
    // ========================================================================
    asesino: {
        id: "asesino",
        nombre: "Asesino",
        clase_id: "picaro",
        nivel_acceso: 3,
        descripcion: "El asesino es un maestro de la muerte súbita, especializado en ataques sorpresa y golpes letales.",
        rasgos: {
            3: [
                { nombre: "Experto en Asesinatos", tipo: "pasivo", descripcion: "Tienes ventaja en ataques contra criaturas que no han actuado en combate." },
                { nombre: "Golpe Certero", tipo: "pasivo", descripcion: "Cualquier golpe crítico contra una criatura sorprendida es automático." }
            ],
            9: [
                { nombre: "Infiltración", tipo: "pasivo", descripcion: "Puedes crear identidades falsas. Superas chequeos para hacerse pasar por otra persona." }
            ],
            13: [
                { nombre: "Imitar", tipo: "pasivo", descripcion: "Puedes imitar el habla y escritura de otra persona." }
            ],
            17: [
                { nombre: "Golpe Mortal", tipo: "accion", descripcion: "Atacas a una criatura sorprendida. Si falla una salvación de Constitución, muere." }
            ]
        }
    },
    
    ladron: {
        id: "ladron",
        nombre: "Ladrón",
        clase_id: "picaro",
        nivel_acceso: 3,
        descripcion: "El ladrón es un experto en habilidades: trepar, robar, abrir cerraduras y moverse sigilosamente.",
        rasgos: {
            3: [
                { nombre: "Manos Rápidas", tipo: "accion_bonus", descripcion: "Puedes usar una acción bonus para hacer un chequeo de Destreza (Juego de Manos) o usar tus herramientas de ladrón." },
                { nombre: "Trabajo en Segundo Plano", tipo: "pasivo", descripcion: "Ganas un segundo piso de movimiento al escalar." }
            ],
            9: [
                { nombre: "Sigilo Mejorado", tipo: "pasivo", descripcion: "Si te mueves más de la mitad de tu velocidad en tu turno, tienes ventaja en esconderte." }
            ],
            13: [
                { nombre: "Usar Objeto Mágico", tipo: "pasivo", descripcion: "Ignoras requisitos de clase, raza y nivel para usar objetos mágicos." }
            ],
            17: [
                { nombre: "Reflejos de Asalto", tipo: "pasivo", descripcion: "Puedes tener dos turnos en la primera ronda de combate." }
            ]
        }
    },
    
    misterio: {
        id: "misterio",
        nombre: "Misterio Arcano",
        clase_id: "picaro",
        nivel_acceso: 3,
        descripcion: "El misterio arcano combina habilidades de pícaro con magia, pudiendo lanzar conjuros y usar trucos mágicos.",
        // PROPIEDADES MÁGICAS AÑADIDAS
        tiene_magia: true,
        lista_hechizos: "mago",
        rasgos: {
            3: [
                { nombre: "Lanzador de Conjuros", tipo: "magia", descripcion: "Obtienes la capacidad de lanzar conjuros de mago. Usas Inteligencia." },
                { nombre: "Presteza Mágica", tipo: "pasivo", descripcion: "Puedes usar tu acción bonus para canalizar un truco." }
            ],
            9: [
                { nombre: "Emboscada Mágica", tipo: "pasivo", descripcion: "Si estás escondido cuando lanzas un conjuro, el objetivo tiene desventaja en la salvación." }
            ],
            13: [
                { nombre: "Truco Versátil", tipo: "pasivo", descripcion: "Aprendes un truco adicional." }
            ],
            17: [
                { nombre: "Sigilo Mágico", tipo: "pasivo", descripcion: "No puedes ser visto por magia de adivinación." }
            ]
        }
    },

    // ========================================================================
    // CLÉRIGO (Dominios)
    // ========================================================================
    vida: {
        id: "vida",
        nombre: "Dominio de la Vida",
        clase_id: "clerigo",
        nivel_acceso: 1,
        descripcion: "Los clérigos de la vida son sanadores excepcionales, dedicados a preservar la vida y proteger a los inocentes.",
        rasgos: {
            1: [
                { nombre: "Competencia adicional", tipo: "pasivo", descripcion: "Obtienes competencia con armaduras pesadas." },
                { nombre: "Discípulo de la Vida", tipo: "pasivo", descripcion: "Tus conjuros de curación curan 2 + el nivel del conjuro puntos adicionales." }
            ],
            2: [
                { nombre: "Canalizar Divinidad: Preservar la Vida", tipo: "recurso", descripcion: "Como acción, restauras HP a criaturas vivas en 30 pies (hasta 5 x nivel de clérigo)." }
            ],
            6: [
                { nombre: "Sanador Bendito", tipo: "pasivo", descripcion: "Cuando curas a una criatura, esa criatura gana resistencia al daño de las siguientes fuentes." }
            ],
            8: [
                { nombre: "Golpe Divino", tipo: "pasivo", descripcion: "Una vez por turno, añades 1d8 de daño radiante a tu ataque con arma." }
            ],
            17: [
                { nombre: "Curación Suprema", tipo: "pasivo", descripcion: "Cuando lanzas un conjuro de curación, usas el máximo en lugar de tirar." }
            ]
        }
    },
    
    guerra: {
        id: "guerra",
        nombre: "Dominio de la Guerra",
        clase_id: "clerigo",
        nivel_acceso: 1,
        descripcion: "Los clérigos de la guerra son campeones divinos que lideran a los ejércitos y bendicen a los guerreros.",
        rasgos: {
            1: [
                { nombre: "Competencia adicional", tipo: "pasivo", descripcion: "Obtienes competencia con armas marciales y armaduras pesadas." },
                { nombre: "Sacerdote Guerrero", tipo: "recurso", descripcion: "Como acción bonus, puedes hacer un ataque con arma. Usas un número de veces igual a tu modificador de Sabiduría." }
            ],
            2: [
                { nombre: "Canalizar Divinidad: Golpe Guiado", tipo: "recurso", descripcion: "Añades +10 a una tirada de ataque después de ver el resultado." }
            ],
            6: [
                { nombre: "Paso del Guerrero", tipo: "recurso", descripcion: "Cuando usas la acción de ataque, puedes teletransportarte hasta 30 pies antes del primer ataque." }
            ],
            8: [
                { nombre: "Golpe Divino", tipo: "pasivo", descripcion: "Una vez por turno, añades 1d8 de daño del mismo tipo que tu arma." }
            ],
            17: [
                { nombre: "Avatar de la Batalla", tipo: "pasivo", descripcion: "Tienes resistencia al daño contundente, perforante y cortante de armas no mágicas." }
            ]
        }
    },
    
    conocimiento: {
        id: "conocimiento",
        nombre: "Dominio del Conocimiento",
        clase_id: "clerigo",
        nivel_acceso: 1,
        descripcion: "Los clérigos del conocimiento son eruditos, historiadores y guardianes de secretos antiguos.",
        rasgos: {
            1: [
                { nombre: "Competencias adicionales", tipo: "pasivo", descripcion: "Ganas competencia en dos habilidades a elegir entre Arcano, Historia, Naturaleza o Religión. Doble competencia en ellas." },
                { nombre: "Lectura de Pensamientos", tipo: "utilidad", descripcion: "Puedes lanzar 'Detectar pensamientos' como acción." }
            ],
            2: [
                { nombre: "Canalizar Divinidad: Conocimiento de los Dioses", tipo: "recurso", descripcion: "Obtienes competencia en una herramienta o habilidad por 10 minutos." }
            ],
            6: [
                { nombre: "Leer lo Oculto", tipo: "pasivo", descripcion: "Puedes leer cualquier idioma y entender escrituras." }
            ],
            8: [
                { nombre: "Golpe Divino", tipo: "pasivo", descripcion: "Una vez por turno, añades 1d8 de daño psíquico a tu ataque con arma." }
            ],
            17: [
                { nombre: "Visión del Pasado", tipo: "pasivo", descripcion: "Puedes ver el pasado de un objeto o lugar." }
            ]
        }
    },
    
    luz: {
        id: "luz",
        nombre: "Dominio de la Luz",
        clase_id: "clerigo",
        nivel_acceso: 1,
        descripcion: "Los clérigos de la luz son campeones del sol, cegando a los no-muertos y quemando a las sombras.",
        rasgos: {
            1: [
                { nombre: "Truco adicional", tipo: "magia", descripcion: "Aprendes el truco 'Luz' y 'Fuego feérico'." }
            ],
            2: [
                { nombre: "Canalizar Divinidad: Destello de Luz", tipo: "recurso", descripcion: "Ciegas a enemigos en 30 pies durante 1 minuto." }
            ],
            6: [
                { nombre: "Escudo de Luz", tipo: "reaccion", descripcion: "Como reacción, impones desventaja en un ataque." }
            ],
            8: [
                { nombre: "Golpe Divino", tipo: "pasivo", descripcion: "Una vez por turno, añades 1d8 de daño radiante a tu ataque con arma." }
            ],
            17: [
                { nombre: "Corona de Luz", tipo: "accion", descripcion: "Creas una corona de luz que da ventaja a aliados y daña enemigos." }
            ]
        }
    },
    
    naturaleza: {
        id: "naturaleza",
        nombre: "Dominio de la Naturaleza",
        clase_id: "clerigo",
        nivel_acceso: 1,
        descripcion: "Los clérigos de la naturaleza protegen el mundo natural y pueden controlar animales y plantas.",
        rasgos: {
            1: [
                { nombre: "Competencia adicional", tipo: "pasivo", descripcion: "Ganas competencia en armaduras pesadas y una habilidad de Naturaleza o Trato con Animales." },
                { nombre: "Acólito de la Naturaleza", tipo: "magia", descripcion: "Aprendes un truco de druida y un conjuro de nivel 1 de druida." }
            ],
            2: [
                { nombre: "Canalizar Divinidad: Encantar Animales", tipo: "recurso", descripcion: "Encantas a animales y plantas." }
            ],
            6: [
                { nombre: "Inmunizar a lo Natural", tipo: "pasivo", descripcion: "Ganas resistencia a daño de veneno y fuego." }
            ],
            8: [
                { nombre: "Golpe Divino", tipo: "pasivo", descripcion: "Una vez por turno, añades 1d8 de daño de frío, fuego o rayo a tu ataque." }
            ],
            17: [
                { nombre: "Maestro de la Naturaleza", tipo: "pasivo", descripcion: "Puedes lanzar 'Dominar bestia' y 'Andar sin rastro' a voluntad." }
            ]
        }
    },
    
    tempestad: {
        id: "tempestad",
        nombre: "Dominio de la Tempestad",
        clase_id: "clerigo",
        nivel_acceso: 1,
        descripcion: "Los clérigos de la tempestad controlan truenos, relámpagos y tormentas, castigando con el poder del cielo.",
        rasgos: {
            1: [
                { nombre: "Competencia adicional", tipo: "pasivo", descripcion: "Ganas competencia con armas marciales y armaduras pesadas." },
                { nombre: "Ira de la Tormenta", tipo: "reaccion", descripcion: "Cuando te atacan, puedes causar 2d8 de daño de rayo o trueno." }
            ],
            2: [
                { nombre: "Canalizar Divinidad: Furia Destructiva", tipo: "recurso", descripcion: "Cuando causas daño de rayo o trueno, puedes causar el máximo." }
            ],
            6: [
                { nombre: "Golpe de Trueno", tipo: "pasivo", descripcion: "Cuando golpeas, puedes empujar al objetivo 10 pies." }
            ],
            8: [
                { nombre: "Golpe Divino", tipo: "pasivo", descripcion: "Una vez por turno, añades 1d8 de daño de trueno a tu ataque." }
            ],
            17: [
                { nombre: "Tormenta de Venganza", tipo: "accion", descripcion: "Crear una tormenta de 60 pies que daña y ralentiza." }
            ]
        }
    },
    
    trampa: {
        id: "trampa",
        nombre: "Dominio de la Trampa",
        clase_id: "clerigo",
        nivel_acceso: 1,
        descripcion: "Los clérigos de la trampa (ingenio) son astutos, rápidos y engañosos, protegiendo con trucos y emboscadas.",
        rasgos: {
            1: [
                { nombre: "Competencia adicional", tipo: "pasivo", descripcion: "Ganas competencia con ballestas y herramientas de ladrón." },
                { nombre: "Bendición del Tramposo", tipo: "utilidad", descripcion: "Puedes dar a un aliado ventaja en sigilo." }
            ],
            2: [
                { nombre: "Canalizar Divinidad: Presencia del Tramposo", tipo: "recurso", descripcion: "Te vuelves invisible por 1 minuto." }
            ],
            6: [
                { nombre: "Clon del Tramposo", tipo: "recurso", descripcion: "Crear un clon ilusorio de ti mismo." }
            ],
            8: [
                { nombre: "Golpe Divino", tipo: "pasivo", descripcion: "Una vez por turno, añades 1d8 de daño de veneno a tu ataque." }
            ],
            17: [
                { nombre: "Mejorar Invisibilidad", tipo: "pasivo", descripcion: "Cuando eres invisible, tienes resistencia a todo daño." }
            ]
        }
    },

    // ========================================================================
    // GUERRERO
    // ========================================================================
    campeon: {
        id: "campeon",
        nombre: "Campeón",
        clase_id: "guerrero",
        nivel_acceso: 3,
        descripcion: "El campeón es un guerrero simple pero efectivo, con mejores críticos y habilidades atléticas superiores.",
        rasgos: {
            3: [
                { nombre: "Crítico Mejorado", tipo: "pasivo", descripcion: "Tus ataques son críticos con 19-20." },
                { nombre: "Atleta Sobresaliente", tipo: "pasivo", descripcion: "Puedes añadir la mitad de tu competencia a chequeos de fuerza, destreza o constitución." }
            ],
            7: [
                { nombre: "Atleta Sobresaliente", tipo: "pasivo", descripcion: "Mejora tu capacidad atlética." }
            ],
            10: [
                { nombre: "Estilo de Combate Adicional", tipo: "pasivo", descripcion: "Ganas un segundo estilo de combate." }
            ],
            15: [
                { nombre: "Crítico Superior", tipo: "pasivo", descripcion: "Tus ataques son críticos con 18-20." }
            ],
            18: [
                { nombre: "Superviviente", tipo: "pasivo", descripcion: "Al inicio de tu turno, recuperas 5 + tu constitución PG si tienes menos de la mitad." }
            ]
        }
    },
    
    maestro_armas: {
        id: "maestro_armas",
        nombre: "Maestro de Armas",
        clase_id: "guerrero",
        nivel_acceso: 3,
        descripcion: "El maestro de armas usa tácticas y maniobras especiales para controlar el campo de batalla.",
        rasgos: {
            3: [
                { nombre: "Dados de Superioridad", tipo: "recurso", descripcion: "Tienes 4d8 de superioridad. Puedes usar maniobras como Derribar, Desarmar, etc." },
                { nombre: "Maniobras", tipo: "eleccion", descripcion: "Aprendes 3 maniobras a elegir." }
            ],
            7: [
                { nombre: "Maniobra Adicional", tipo: "pasivo", descripcion: "Aprendes 2 maniobras más. Dados pasan a d10." }
            ],
            10: [
                { nombre: "Maniobra Adicional", tipo: "pasivo", descripcion: "Aprendes otra maniobra." }
            ],
            15: [
                { nombre: "Dados Mejorados", tipo: "pasivo", descripcion: "Dados pasan a d12." }
            ],
            18: [
                { nombre: "Maestro de Maniobras", tipo: "pasivo", descripcion: "Si gastas un dado y sacas el número mínimo, lo recuperas." }
            ]
        }
    },
    
    eldritch: {
        id: "eldritch",
        nombre: "Caballero Eldritch",
        clase_id: "guerrero",
        nivel_acceso: 3,
        descripcion: "El caballero eldritch combina combate marcial con magia de mago, pudiendo teletransportarse y lanzar conjuros.",
        // PROPIEDADES MÁGICAS AÑADIDAS
        tiene_magia: true,
        lista_hechizos: "mago",
        rasgos: {
            3: [
                { nombre: "Lanzamiento de Conjuros", tipo: "magia", descripcion: "Aprendes magia de mago. Usas Inteligencia. Conjuros de abjuración y evocación." },
                { nombre: "Vínculo de Arma", tipo: "utilidad", descripcion: "Puedes invocar tu arma como acción bonus." }
            ],
            7: [
                { nombre: "Ola de Magia", tipo: "combate", descripcion: "Después de atacar, puedes hacer un ataque adicional si lanzas un truco." }
            ],
            10: [
                { nombre: "Escudo Eldritch", tipo: "reaccion", descripcion: "Cuando te atacan, puedes teletransportarte con el atacante." }
            ],
            15: [
                { nombre: "Magia de Arma", tipo: "pasivo", descripcion: "Tus ataques con arma cuentan como mágicos." }
            ],
            18: [
                { nombre: "Ola de Magia Mejorada", tipo: "combate", descripcion: "Puedes lanzar un conjuro y atacar en la misma acción." }
            ]
        }
    },

    // ========================================================================
    // MONJE
    // ========================================================================
    mano_abierta: {
        id: "mano_abierta",
        nombre: "Mano Abierta",
        clase_id: "monje",
        nivel_acceso: 3,
        descripcion: "El monje de mano abierta es un maestro del control, pudiendo empujar, derribar y aturdir a sus enemigos.",
        rasgos: {
            3: [
                { nombre: "Técnica de Mano Abierta", tipo: "combate", descripcion: "Cuando golpeas con Ráfaga de Golpes, puedes derribar, empujar o negar reacciones." }
            ],
            6: [
                { nombre: "Integridad Corporal", tipo: "pasivo", descripcion: "Puedes curarte a ti mismo con ki." }
            ],
            11: [
                { nombre: "Temblor", tipo: "accion", descripcion: "Puedes sentir vibraciones en el suelo." }
            ],
            17: [
                { nombre: "Palma de la Muerte", tipo: "accion", descripcion: "Gasta 3 ki para causar daño masivo." }
            ]
        }
    },
    
    sombra: {
        id: "sombra",
        nombre: "Sombra",
        clase_id: "monje",
        nivel_acceso: 3,
        descripcion: "El monje de la sombra es un asesino silencioso que usa la oscuridad y el sigilo.",
        rasgos: {
            3: [
                { nombre: "Artes de la Sombra", tipo: "magia", descripcion: "Puedes lanzar 'Oscuridad', 'Visión en la oscuridad' y 'Silencio' con ki." }
            ],
            6: [
                { nombre: "Paso Sombrio", tipo: "utilidad", descripcion: "Puedes teletransportarte entre sombras." }
            ],
            11: [
                { nombre: "Manto de Sombras", tipo: "utilidad", descripcion: "Puedes volverte invisible en la oscuridad." }
            ],
            17: [
                { nombre: "Oportunidad de Sombra", tipo: "combate", descripcion: "Puedes hacer un ataque adicional cuando alguien te ataca." }
            ]
        }
    },
    
    cuatro_elementos: {
        id: "cuatro_elementos",
        nombre: "Cuatro Elementos",
        clase_id: "monje",
        nivel_acceso: 3,
        descripcion: "El monje de los cuatro elementos controla el poder del fuego, agua, tierra y aire.",
        rasgos: {
            3: [
                { nombre: "Disciplina Elemental", tipo: "magia", descripcion: "Puedes gastar ki para lanzar efectos elementales." }
            ],
            6: [
                { nombre: "Disciplina Adicional", tipo: "eleccion", descripcion: "Aprendes otra técnica elemental." }
            ],
            11: [
                { nombre: "Disciplina Adicional", tipo: "eleccion", descripcion: "Aprendes otra técnica elemental." }
            ],
            17: [
                { nombre: "Maestro Elemental", tipo: "pasivo", descripcion: "Tus técnicas elementales son más poderosas." }
            ]
        }
    },

    // ========================================================================
    // BRUJO (Patrones)
    // ========================================================================
    archifey: {
        id: "archifey",
        nombre: "El Archifey",
        clase_id: "brujo",
        nivel_acceso: 1,
        descripcion: "Tu patrón es un poderoso ser del Plano Feérico, maestro de engaños, encantos y magia ilusoria.",
        rasgos: {
            1: [
                { nombre: "Magia del Archifey", tipo: "magia", descripcion: "Aprendes 'Hechizar persona' y 'Dormir' como conjuros adicionales." },
                { nombre: "Presencia Encantadora", tipo: "accion", descripcion: "Puedes hechizar a una criatura. Al fallar, queda encantada." }
            ],
            6: [
                { nombre: "Defensa Feérica", tipo: "reaccion", descripcion: "Cuando te atacan, puedes hacer que el atacante quede encantado." }
            ],
            10: [
                { nombre: "Huida Brumosa", tipo: "reaccion", descripcion: "Cuando recibes daño, puedes volverte invisible y teletransportarte." }
            ],
            14: [
                { nombre: "Glamour Salvaje", tipo: "accion", descripcion: "Creas un efecto de confusión en 10 pies." }
            ]
        }
    },
    
    infernal: {
        id: "infernal",
        nombre: "El Infernal",
        clase_id: "brujo",
        nivel_acceso: 1,
        descripcion: "Tu patrón es un poderoso señor infernal que te otorga poder a cambio de tu alma.",
        rasgos: {
            1: [
                { nombre: "Magia Infernal", tipo: "magia", descripcion: "Aprendes 'Mano ardiente' y 'Castigo ardiente' como conjuros adicionales." },
                { nombre: "Suerte Oscura", tipo: "recurso", descripcion: "Puedes añadir 1d10 a una tirada de habilidad o salvación." }
            ],
            6: [
                { nombre: "Resistencia Infernal", tipo: "pasivo", descripcion: "Cuando fallas una salvación, puedes elegir tener éxito y recibir daño en su lugar." }
            ],
            10: [
                { nombre: "Castigo Infernal", tipo: "reaccion", descripcion: "Cuando recibes daño, causas el mismo daño al atacante." }
            ],
            14: [
                { nombre: "Hoguera Infernal", tipo: "accion", descripcion: "Llamas envuelven a un enemigo, causando daño continuo." }
            ]
        }
    },
    
    gran_viejo: {
        id: "gran_viejo",
        nombre: "El Gran Viejo",
        clase_id: "brujo",
        nivel_acceso: 1,
        descripcion: "Tu patrón es una entidad cósmica incomprensible, cuyo poder corrompe la mente y la realidad.",
        rasgos: {
            1: [
                { nombre: "Magia del Vacío", tipo: "magia", descripcion: "Aprendes 'Susurros disonantes' y 'Ola atronadora' como conjuros adicionales." },
                { nombre: "Mente Despierta", tipo: "pasivo", descripcion: "Puedes comunicarte telepáticamente con criaturas que vean." }
            ],
            6: [
                { nombre: "Escudo de Pensamiento", tipo: "reaccion", descripcion: "Cuando te atacan, causas daño psíquico al atacante." }
            ],
            10: [
                { nombre: "Crear Esclavo", tipo: "recurso", descripcion: "Cuando matas a un humanoide, puedes devolverlo como esclavo por 24h." }
            ],
            14: [
                { nombre: "Horror Indescriptible", tipo: "accion", descripcion: "Una criatura queda asustada y recibe daño psíquico cada turno." }
            ]
        }
    },

    // ========================================================================
    // EXPLORADOR
    // ========================================================================
    cazador: {
        id: "cazador",
        nombre: "Cazador",
        clase_id: "explorador",
        nivel_acceso: 3,
        descripcion: "El cazador es especialista en rastrear y eliminar enemigos específicos, con tácticas de caza versátiles.",
        rasgos: {
            3: [
                { nombre: "Presas del Cazador", tipo: "eleccion", descripcion: "Elige: Matador de Colosos (más daño), Defensor contra Enjambres (daño en área), o Acosador (movilidad)." }
            ],
            7: [
                { nombre: "Tácticas Defensivas", tipo: "eleccion", descripcion: "Elige: Escapar de la Horda, Acero de Voluntad o Multiataque Defensivo." }
            ],
            11: [
                { nombre: "Multiataque", tipo: "eleccion", descripcion: "Elige: Ráfaga, Descarga o Ataque de Voluntad." }
            ],
            15: [
                { nombre: "Defensa Superior", tipo: "pasivo", descripcion: "Mejora tu táctica defensiva." }
            ]
        }
    },
    
    domador: {
        id: "domador",
        nombre: "Domador de Bestias",
        clase_id: "explorador",
        nivel_acceso: 3,
        descripcion: "El domador tiene un compañero animal que lucha a su lado, creando un vínculo único.",
        rasgos: {
            3: [
                { nombre: "Compañero Animal", tipo: "recurso", descripcion: "Tienes un compañero bestia de CR 1/4 que obedece tus órdenes." }
            ],
            7: [
                { nombre: "Ataque en Equipo", tipo: "combate", descripcion: "Cuando atacas, tu compañero puede reaccionar atacando." }
            ],
            11: [
                { nombre: "Compañero Mejorado", tipo: "pasivo", descripcion: "Tu compañero gana ataques adicionales." }
            ],
            15: [
                { nombre: "Vínculo Compartido", tipo: "pasivo", descripcion: "Tú y tu compañero compartís las salvaciones." }
            ]
        }
    },
    
    acechador: {
        id: "acechador",
        nombre: "Acechador Sombrio",
        clase_id: "explorador",
        nivel_acceso: 3,
        descripcion: "El acechador es un maestro del sigilo y las emboscadas, golpeando desde las sombras.",
        rasgos: {
            3: [
                { nombre: "Emboscador", tipo: "pasivo", descripcion: "+10 a iniciativa. En primer turno, +3m velocidad y +1 ataque." }
            ],
            7: [
                { nombre: "Magia de Acechador", tipo: "magia", descripcion: "Aprendes 'Invisibilidad' y 'Máscara de la naturaleza'." }
            ],
            11: [
                { nombre: "Ataque Furtivo", tipo: "combate", descripcion: "Cuando tienes ventaja, causas 1d8 extra." }
            ],
            15: [
                { nombre: "Emboscada Sombria", tipo: "pasivo", descripcion: "Puedes esconderte como acción bonus." }
            ]
        }
    }
};

if (typeof module !== 'undefined' && module.exports) module.exports = SUBCLASES;