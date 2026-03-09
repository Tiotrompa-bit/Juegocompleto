// datos_trasfondos.js - Versión ampliada con descripciones y más opciones
const TRASFONDOS = {
    soldado: { 
        id: "soldado", 
        nombre: "Soldado",
        descripcion: "Has entrenado en guerra y batalla, aprendiendo a seguir órdenes y a sobrevivir en el campo de batalla. La jerarquía y la disciplina son tu segunda naturaleza.",
        competencias: {
            habilidades: ["Atletismo", "Intimidación"],
            herramientas: ["Vehículos (terrestre)"]
        },
        equipo: [
            { id_objeto: "insignia_rango", cantidad: 1 },
            { id_objeto: "trofeo_enemigo", cantidad: 1 },
            { id_objeto: "bolsa", cantidad: 1 }
        ],
        rasgos: [
            { nombre: "Rango Militar", descripcion: "Tu rango militar te permite ejercer autoridad sobre soldados de menor rango y acceder a instalaciones militares." }
        ]
    },
    
    criminal: { 
        id: "criminal", 
        nombre: "Criminal",
        descripcion: "Has vivido al margen de la ley, sobreviviendo en los bajos fondos. Conoces el mundo del crimen y tienes contactos en el hampa.",
        competencias: {
            habilidades: ["Sigilo", "Engaño"],
            herramientas: ["Herramientas de ladrón", "Kit de juego"]
        },
        equipo: [
            { id_objeto: "palanca", cantidad: 1 },
            { id_objeto: "ropa_oscura", cantidad: 1 },
            { id_objeto: "bolsa", cantidad: 1 }
        ],
        rasgos: [
            { nombre: "Contacto Criminal", descripcion: "Tienes un contacto fiable que actúa como tu enlace con una red de criminales." }
        ]
    },
    
    sabio: { 
        id: "sabio", 
        nombre: "Sabio",
        descripcion: "Has dedicado años al estudio y la investigación. Posees un conocimiento profundo sobre un área específica del saber.",
        competencias: {
            habilidades: ["Arcano", "Historia"],
            herramientas: []
        },
        equipo: [
            { id_objeto: "tinta", cantidad: 1 },
            { id_objeto: "pluma", cantidad: 1 },
            { id_objeto: "pergamino", cantidad: 10 },
            { id_objeto: "bolsa", cantidad: 1 }
        ],
        rasgos: [
            { nombre: "Investigador", descripcion: "Puedes recordar o deducir información relevante sobre tu área de estudio con facilidad." }
        ]
    },
    
    acrobata: { 
        id: "acrobata", 
        nombre: "Acróbata",
        descripcion: "Has pasado tu vida entre espectáculos, circo y entretenimiento. Eres ágil y sabes cómo cautivar a una audiencia.",
        competencias: {
            habilidades: ["Acrobacias", "Actuación"],
            herramientas: []
        },
        equipo: [
            { id_objeto: "utiles_acrobaticos", cantidad: 1 },
            { id_objeto: "bolsa", cantidad: 1 }
        ],
        rasgos: [
            { nombre: "Por los Pelos", descripcion: "Cuando fallas por poco un chequeo de Acrobacias o Actuación, puedes repetirlo." }
        ]
    },
    
    ermitano: {
        id: "ermitano",
        nombre: "Ermitaño",
        descripcion: "Has vivido en aislamiento, meditando y descubriendo verdades ocultas. Tu retiro te ha dado una perspectiva única.",
        competencias: {
            habilidades: ["Medicina", "Religión"],
            herramientas: ["Kit de herborista"]
        },
        equipo: [
            { id_objeto: "manta", cantidad: 1 },
            { id_objeto: "kit_herborista", cantidad: 1 },
            { id_objeto: "bolsa", cantidad: 1 }
        ],
        rasgos: [
            { nombre: "Descubrimiento", descripcion: "Has hecho un descubrimiento único durante tu retiro (una verdad religiosa, un secreto natural, etc.)." }
        ]
    },
    
    noble: {
        id: "noble",
        nombre: "Noble",
        descripcion: "Nacido en la cuna de la riqueza y el poder, estás familiarizado con los entresijos de la política y la alta sociedad.",
        competencias: {
            habilidades: ["Historia", "Persuasión"],
            herramientas: ["Un juego de mesa"]
        },
        equipo: [
            { id_objeto: "ropa_fina", cantidad: 1 },
            { id_objeto: "sello", cantidad: 1 },
            { id_objeto: "pergamino", cantidad: 5 },
            { id_objeto: "bolsa", cantidad: 1 }
        ],
        rasgos: [
            { nombre: "Posición de Privilegio", descripcion: "Gracias a tu cuna, eres bienvenido en la alta sociedad y puedes conseguir audiencia con otros nobles." }
        ]
    },
    
    heroe_popular: {
        id: "heroe_popular",
        nombre: "Héroe Popular",
        descripcion: "Vienes de orígenes humildes, pero tus acciones te han ganado el cariño y la admiración de la gente común.",
        competencias: {
            habilidades: ["Trato con Animales", "Supervivencia"],
            herramientas: ["Vehículos (terrestre)"]
        },
        equipo: [
            { id_objeto: "herramientas_carpintero", cantidad: 1 },
            { id_objeto: "pala", cantidad: 1 },
            { id_objeto: "olla_hierro", cantidad: 1 },
            { id_objeto: "bolsa", cantidad: 1 }
        ],
        rasgos: [
            { nombre: "Corazón de Héroe", descripcion: "La gente común te ofrece refugio y protección, ya que te consideran uno de los suyos." }
        ]
    },
    
    forastero: {
        id: "forastero",
        nombre: "Forastero",
        descripcion: "Creciste en las tierras salvajes, lejos de la civilización. Eres un experto superviviente y conoces los secretos de la naturaleza.",
        competencias: {
            habilidades: ["Atletismo", "Supervivencia"],
            herramientas: ["Flauta", "Kit de herborista"]
        },
        equipo: [
            { id_objeto: "baston", cantidad: 1 },
            { id_objeto: "trampa_caza", cantidad: 1 },
            { id_objeto: "trofeo_caza", cantidad: 1 },
            { id_objeto: "bolsa", cantidad: 1 }
        ],
        rasgos: [
            { nombre: "Errante", descripcion: "Tienes una memoria excelente para mapas y geografía, y siempre puedes recordar el camino que has recorrido." }
        ]
    },
    
    artesano_gremio: {
        id: "artesano_gremio",
        nombre: "Artesano de Gremio",
        descripcion: "Perteneces a un poderoso gremio de artesanos. Tu habilidad con un oficio te ha dado estatus y contactos.",
        competencias: {
            habilidades: ["Perspicacia", "Persuasión"],
            herramientas: ["Herramientas de artesano (a elegir)"]
        },
        equipo: [
            { id_objeto: "herramientas_artesano", cantidad: 1 },
            { id_objeto: "carta_recomendacion", cantidad: 1 },
            { id_objeto: "ropa_viaje", cantidad: 1 },
            { id_objeto: "bolsa", cantidad: 1 }
        ],
        rasgos: [
            { nombre: "Membresía del Gremio", descripcion: "Puedes acceder a instalaciones del gremio y recibir ayuda de otros miembros." }
        ]
    },
    
    marinero: {
        id: "marinero",
        nombre: "Marinero",
        descripcion: "Has navegado por mares y océanos, sobreviviendo a tormentas y monstruos marinos. El barco es tu hogar.",
        competencias: {
            habilidades: ["Atletismo", "Percepción"],
            herramientas: ["Vehículos (marítimos)"]
        },
        equipo: [
            { id_objeto: "cuerda", cantidad: 1 },
            { id_objeto: "amuleto_suerte", cantidad: 1 },
            { id_objeto: "ropa_impermeable", cantidad: 1 },
            { id_objeto: "bolsa", cantidad: 1 }
        ],
        rasgos: [
            { nombre: "Pie Marino", descripcion: "Puedes manejar cualquier tipo de embarcación y tienes ventaja en chequeos relacionados con la navegación." }
        ]
    },
    
    erudito: {
        id: "erudito",
        nombre: "Erudito",
        descripcion: "Tu sed de conocimiento te ha llevado a bibliotecas olvidadas y ruinas antiguas. Dominas varios idiomas y campos del saber.",
        competencias: {
            habilidades: ["Arcano", "Historia"],
            herramientas: []
        },
        equipo: [
            { id_objeto: "tinta", cantidad: 2 },
            { id_objeto: "pluma", cantidad: 2 },
            { id_objeto: "pergamino", cantidad: 20 },
            { id_objeto: "bolsa", cantidad: 1 },
            { id_objeto: "libro", cantidad: 1 }
        ],
        rasgos: [
            { nombre: "Conocimiento Enciclopédico", descripcion: "Puedes recordar información relevante sobre casi cualquier tema con una tirada de Inteligencia." }
        ]
    },
    
    granjero: {
        id: "granjero",
        nombre: "Granjero",
        descripcion: "Has pasado la mayor parte de tu vida trabajando la tierra, cuidando animales y llevando una vida sencilla pero dura. El trabajo físico te ha hecho fuerte y resistente.",
        competencias: {
            habilidades: ["Atletismo", "Trato con Animales"],
            herramientas: ["Vehículos (terrestre)", "Herramientas de carpintero"]
        },
        equipo: [
            { id_objeto: "herramientas_carpintero", cantidad: 1 },
            { id_objeto: "pala", cantidad: 1 },
            { id_objeto: "ropa_trabajo", cantidad: 1 },
            { id_objeto: "bolsa", cantidad: 1 }
        ],
        rasgos: [
            { nombre: "Duro", descripcion: "Tu vida de trabajo te ha dado una resistencia excepcional. Tus puntos de golpe máximos aumentan en 1 por cada nivel." }
        ]
    },
    
    acolito: {
        id: "acolito",
        nombre: "Acólito",
        descripcion: "Has servido en un templo, aprendiendo los rituales y la fe que guían a los creyentes. La comunidad religiosa es tu familia.",
        competencias: {
            habilidades: ["Perspicacia", "Religión"],
            herramientas: []
        },
        equipo: [
            { id_objeto: "simbolo_sagrado", cantidad: 1 },
            { id_objeto: "libro_oracion", cantidad: 1 },
            { id_objeto: "incienso", cantidad: 5 },
            { id_objeto: "ropa_ceremonial", cantidad: 1 },
            { id_objeto: "bolsa", cantidad: 1 }
        ],
        rasgos: [
            { nombre: "Refugio del Fiel", descripcion: "Puedes encontrar refugio y curación en los templos de tu fe. Los clérigos te ayudarán." }
        ]
    },
    
    embaucador: {
        id: "embaucador",
        nombre: "Charlatán",
        descripcion: "Ganas tu vida engañando a los incautos. Eres un maestro del disfraz, la mentira y la estafa.",
        competencias: {
            habilidades: ["Engaño", "Juego de Manos"],
            herramientas: ["Kit de disfraz", "Kit de falsificación"]
        },
        equipo: [
            { id_objeto: "ropa_disfraz", cantidad: 1 },
            { id_objeto: "herramientas_falsificacion", cantidad: 1 },
            { id_objeto: "bolsa", cantidad: 1 }
        ],
        rasgos: [
            { nombre: "Identidad Falsa", descripcion: "Has creado una segunda identidad con documentos y contactos que la respaldan." }
        ]
    }
};

if (typeof module !== 'undefined' && module.exports) module.exports = TRASFONDOS;