// datos_bestiario.js - Bestiario completo de D&D 5e
const BESTIARIO = {
    aboleth: {
        id: "aboleth",
        nombre: "Aboleth",
        cr: "10",
        tipo: "Aberración",
        tamaño: "Grande",
        alineamiento: "Legal Malvado",
        stats: { fuerza: 21, destreza: 9, constitucion: 15, inteligencia: 18, sabiduria: 15, carisma: 18 },
        ca: 17,
        pg: "135 (18d10+36)",
        velocidad: "10 pies, nadando 40 pies",
        salvaciones: { constitucion: +6, inteligencia: +8, sabiduria: +6 },
        habilidades: { historia: +12, percepcion: +10 },
        sentidos: "Visión en la oscuridad 120 pies, Percepción pasiva 20",
        idiomas: ["Profundo", "Telepatía 120 pies"],
        rasgos: [
            { nombre: "Telepatía Acuática", descripcion: "El aboleth puede comunicarse telepáticamente con criaturas dentro de 120 pies que hablen un idioma. La telepatía del aboleth no se limita a una criatura a la vez." },
            { nombre: "Anfibio", descripcion: "El aboleth puede respirar aire y agua." },
            { nombre: "Niebla Mucosa", descripcion: "Bajo el agua, el aboleth está rodeado por una nube de mucosidad transformadora. Una criatura que toque el aboleth o lo golpee con un ataque cuerpo a cuerpo mientras está dentro de 5 pies debe hacer una tirada de salvación de Constitución CD 14. En caso de fallo, la criatura es maldecida. La criatura maldita solo puede respirar agua." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El aboleth realiza tres ataques de tentáculo." },
            { nombre: "Tentáculo", descripcion: "Ataque de arma cuerpo a cuerpo: +9 al golpe, alcance 10 pies, un objetivo. Impacto: 12 (2d6+5) de daño contundente. Si el objetivo es una criatura, debe superar una tirada de salvación de Destreza CD 14 o se enferma. La enfermedad dura 1 minuto. Mientras está enferma, el objetivo tiene veneno y no puede curarse." },
            { nombre: "Esclavizar", descripcion: "El aboleth apunta a una criatura enferma que pueda ver. El objetivo debe superar una tirada de salvación de Sabiduría CD 14 o ser encantado por el aboleth. Mientras está encantado, el aboleth puede comunicarse telepáticamente con el objetivo mientras ambos estén en el mismo plano de existencia." }
        ],
        reacciones: []
    },
    acolito: {
        id: "acolito",
        nombre: "Acólito",
        cr: "1/4",
        tipo: "Humanoide",
        tamaño: "Mediano",
        alineamiento: "Cualquier alineamiento",
        stats: { fuerza: 10, destreza: 10, constitucion: 10, inteligencia: 10, sabiduria: 14, carisma: 11 },
        ca: 10,
        pg: "9 (2d8)",
        velocidad: "30 pies",
        salvaciones: {},
        habilidades: { medicina: +4, religion: +2 },
        sentidos: "Percepción pasiva 12",
        idiomas: ["Común"],
        rasgos: [
            { nombre: "Lanzamiento de conjuros", descripcion: "El acólito es un lanzador de conjuros de nivel 1. Su característica para lanzar conjuros es Sabiduría (salvación de conjuro CD 12, +4 al golpe). Tiene los siguientes conjuros de clérigo preparados: Trucos: luz, llama sagrada, taumaturgia; Nivel 1 (3 espacios): bendecir, curar heridas, santuario." }
        ],
        acciones: [
            { nombre: "Porra", descripcion: "Ataque de arma cuerpo a cuerpo: +2 al golpe, alcance 5 pies, un objetivo. Impacto: 2 (1d4) de daño contundente." }
        ],
        reacciones: []
    },
    adult_black_dragon: {
        id: "adult_black_dragon",
        nombre: "Dragón Negro Adulto",
        cr: "14",
        tipo: "Dragón",
        tamaño: "Enorme",
        alineamiento: "Caótico Malvado",
        stats: { fuerza: 23, destreza: 14, constitucion: 21, inteligencia: 14, sabiduria: 13, carisma: 17 },
        ca: 19,
        pg: "195 (17d12+85)",
        velocidad: "40 pies, volando 80 pies, nadando 40 pies",
        salvaciones: { destreza: +7, constitucion: +10, sabiduria: +6, carisma: +8 },
        habilidades: { percepcion: +11, sigilo: +7 },
        sentidos: "Vista ciega 60 pies, Visión en la oscuridad 120 pies, Percepción pasiva 21",
        idiomas: ["Común", "Dragón"],
        rasgos: [
            { nombre: "Anfibio", descripcion: "El dragón puede respirar aire y agua." },
            { nombre: "Resistencia Legendaria (3/Día)", descripcion: "Si el dragón falla una tirada de salvación, puede elegir tener éxito en su lugar." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El dragón puede usar su Presencia Pavorosa. Luego realiza tres ataques: uno con su mordisco y dos con sus garras." },
            { nombre: "Mordisco", descripcion: "Ataque de arma cuerpo a cuerpo: +11 al golpe, alcance 10 pies, un objetivo. Impacto: 17 (2d10+6) de daño perforante más 4 (1d8) de daño por ácido." },
            { nombre: "Garra", descripcion: "Ataque de arma cuerpo a cuerpo: +11 al golpe, alcance 5 pies, un objetivo. Impacto: 13 (2d6+6) de daño cortante." },
            { nombre: "Cola", descripcion: "Ataque de arma cuerpo a cuerpo: +11 al golpe, alcance 15 pies, un objetivo. Impacto: 15 (2d8+6) de daño contundente." },
            { nombre: "Presencia Pavorosa", descripcion: "Todas las criaturas elegidas por el dragón que se encuentren a 120 pies o menos y sean conscientes de su presencia deben superar una tirada de salvación de Sabiduría CD 16 o estar asustadas durante 1 minuto." },
            { nombre: "Aliento de Ácido (Recarga 5-6)", descripcion: "El dragón exhala ácido en una línea de 60 pies que tiene 5 pies de ancho. Toda criatura en esa línea debe realizar una tirada de salvación de Destreza CD 18. Recibe 54 (12d8) de daño por ácido si falla, o la mitad si tiene éxito." }
        ],
        reacciones: []
    },
    air_elemental: {
        id: "air_elemental",
        nombre: "Elemental de Aire",
        cr: "5",
        tipo: "Elemental",
        tamaño: "Grande",
        alineamiento: "Neutral",
        stats: { fuerza: 14, destreza: 20, constitucion: 14, inteligencia: 6, sabiduria: 10, carisma: 6 },
        ca: 15,
        pg: "90 (12d10+24)",
        velocidad: "Volando 90 pies",
        salvaciones: {},
        habilidades: { percepcion: +3 },
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 13",
        idiomas: ["Aire"],
        rasgos: [
            { nombre: "Forma de Aire", descripcion: "El elemental puede entrar en el espacio de una criatura hostil y detenerse allí. Puede moverse a través de una abertura de 1 pulgada de ancho sin apretujarse." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El elemental realiza dos ataques de ráfaga." },
            { nombre: "Ráfaga", descripcion: "Ataque de arma cuerpo a cuerpo: +8 al golpe, alcance 5 pies, un objetivo. Impacto: 14 (2d8+5) de daño contundente." },
            { nombre: "Torbellino (Recarga 4-6)", descripcion: "Todas las criaturas en el espacio del elemental deben realizar una tirada de salvación de Fuerza CD 13. Si fallan, reciben 15 (3d8+2) de daño contundente y son lanzadas a 20 pies en dirección aleatoria." }
        ],
        reacciones: []
    },
    androsphinx: {
        id: "androsphinx",
        nombre: "Androesfinge",
        cr: "17",
        tipo: "Monstruosidad",
        tamaño: "Grande",
        alineamiento: "Legal Neutral",
        stats: { fuerza: 22, destreza: 10, constitucion: 20, inteligencia: 16, sabiduria: 18, carisma: 23 },
        ca: 17,
        pg: "199 (19d10+95)",
        velocidad: "40 pies, volando 60 pies",
        salvaciones: { destreza: +6, constitucion: +11, inteligencia: +9, sabiduria: +10 },
        habilidades: { arcana: +9, historia: +9, percepcion: +10, religion: +15 },
        sentidos: "Vista verdadera 120 pies, Percepción pasiva 20",
        idiomas: ["Común", "Esfinge"],
        rasgos: [
            { nombre: "Armas Mágicas", descripcion: "Los ataques de arma de la esfinge son mágicos." },
            { nombre: "Lanzamiento de conjuros", descripcion: "La esfinge es lanzadora de conjuros de nivel 12. Su característica es Carisma (salvación CD 19). Tiene los siguientes conjuros: Trucos: detectar magia, luz, taumaturgia; Nivel 1: bendecir, detectar el bien y el mal, orden imperiosa, santuario; Nivel 2: inmovilizar persona, restauración menor, espejo; Nivel 3: disipar magia, hablar con los muertos, remover maldición; Nivel 4: libertad de movimiento, adivinación, conjurar seres del bosque." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "La esfinge realiza dos ataques de garra." },
            { nombre: "Garra", descripcion: "Ataque de arma cuerpo a cuerpo: +12 al golpe, alcance 5 pies, un objetivo. Impacto: 17 (2d10+6) de daño cortante." },
            { nombre: "Rugido (3/Día)", descripcion: "La esfinge emite un rugido mágico. El primer rugido afecta a criaturas en un cono de 30 pies. Las criaturas asustadas deben superar una salvación de Sabiduría CD 19." }
        ],
        reacciones: []
    }
,
    angel_deva: {
        id: "angel_deva",
        nombre: "Deva",
        cr: "10",
        tipo: "Celestial",
        tamaño: "Mediano",
        alineamiento: "Legal Bueno",
        stats: { fuerza: 18, destreza: 18, constitucion: 18, inteligencia: 17, sabiduria: 20, carisma: 20 },
        ca: 17,
        pg: "136 (16d8+64)",
        velocidad: "30 pies, volando 90 pies",
        salvaciones: { sabiduria: +9, carisma: +9 },
        habilidades: { percepcion: +9, perspicacia: +9 },
        sentidos: "Visión en la oscuridad 120 pies, Percepción pasiva 19",
        idiomas: ["Común", "Celestial", "Telepatía 120 pies"],
        rasgos: [
            { nombre: "Armas Mágicas", descripcion: "Los ataques de arma del deva son mágicos." },
            { nombre: "Resistencia a la Redención", descripcion: "El deva tiene ventaja en las tiradas de salvación contra hechizos y efectos mágicos." },
            { nombre: "Lanzamiento de conjuros innato", descripcion: "La característica para lanzar conjuros del deva es Carisma (salvación CD 17). Puede lanzar los siguientes conjuros de forma innata sin necesidad de componentes materiales: A voluntad: detectar el bien y el mal; 3/día cada uno: bendecir, curar heridas (3er nivel), disipar el bien y el mal; 1/día: comunión, levantar muerto." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El deva realiza dos ataques cuerpo a cuerpo." },
            { nombre: "Maza", descripcion: "Ataque de arma cuerpo a cuerpo: +8 al golpe, alcance 5 pies, un objetivo. Impacto: 7 (1d6+4) de daño contundente más 18 (4d8) de daño radiante." },
            { nombre: "Toque Sanador", descripcion: "El deva toca a otra criatura. El objetivo recupera 20 (4d8+2) puntos de golpe mágicamente." },
            { nombre: "Cambiar Forma", descripcion: "El deva se transforma mágicamente en cualquier bestia o humanoide con un valor de desafío igual o inferior al suyo." }
        ],
        reacciones: []
    },
    ankheg: {
        id: "ankheg",
        nombre: "Ankheg",
        cr: "2",
        tipo: "Monstruosidad",
        tamaño: "Grande",
        alineamiento: "No alineado",
        stats: { fuerza: 17, destreza: 11, constitucion: 13, inteligencia: 1, sabiduria: 13, carisma: 6 },
        ca: 14,
        pg: "39 (6d10+6)",
        velocidad: "30 pies, excavando 10 pies",
        salvaciones: {},
        habilidades: {},
        sentidos: "Visión en la oscuridad 60 pies, Sentido sísmico 60 pies, Percepción pasiva 11",
        idiomas: [],
        rasgs: [
            { nombre: "Cargar", descripcion: "Si el ankheg se mueve al menos 20 pies en línea recta hacia un objetivo y luego le impacta con un ataque de mordisco en el mismo turno, el objetivo recibe 3 (1d6) de daño cortante adicional." }
        ],
        acciones: [
            { nombre: "Mordisco", descripcion: "Ataque de arma cuerpo a cuerpo: +5 al golpe, alcance 5 pies, un objetivo. Impacto: 10 (2d6+3) de daño cortante más 3 (1d6) de daño por ácido. Si el objetivo es Mediano o más pequeño, queda agarrado (escape CD 13)." },
            { nombre: "Rociadura de Ácido (Recarga 6)", descripcion: "El ankheg escupe ácido en una línea de 30 pies. Toda criatura en esa línea debe realizar una tirada de salvación de Destreza CD 13. Recibe 10 (3d6) de daño por ácido si falla, o la mitad si tiene éxito." }
        ],
        reacciones: []
    },
    arcanaloth: {
        id: "arcanaloth",
        nombre: "Arcanaloth",
        cr: "12",
        tipo: "Infernal",
        tamaño: "Mediano",
        alineamiento: "Neutral Malvado",
        stats: { fuerza: 17, destreza: 12, constitucion: 18, inteligencia: 20, sabiduria: 16, carisma: 17 },
        ca: 17,
        pg: "104 (16d8+32)",
        velocidad: "30 pies, volando 30 pies",
        salvaciones: { destreza: +6, inteligencia: +10, sabiduria: +8 },
        habilidades: { arcana: +14, enganio: +9, percepcion: +8, sigilo: +6 },
        sentidos: "Visión verdadera 120 pies, Percepción pasiva 18",
        idiomas: ["Común", "Infernal", "Telepatía 120 pies"],
        rasgos: [
            { nombre: "Resistencia Mágica", descripcion: "El arcanaloth tiene ventaja en las tiradas de salvación contra hechizos y efectos mágicos." },
            { nombre: "Armas Mágicas", descripcion: "Los ataques de arma del arcanaloth son mágicos." },
            { nombre: "Lanzamiento de conjuros innato", descripcion: "La característica para lanzar conjuros del arcanaloth es Carisma (salvación CD 17). Puede lanzar los siguientes conjuros de forma innata: A voluntad: alterar apariencia, detectar magia, disfrazarse, imagen silenciosa; 2/día cada uno: oscuridad, invisibilidad, misil mágico; 1/día cada uno: puerta dimensional, muro de fuerza, teletransporte." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El arcanaloth realiza dos ataques con sus garras o dos ataques con arco." },
            { nombre: "Garra", descripcion: "Ataque de arma cuerpo a cuerpo: +7 al golpe, alcance 5 pies, un objetivo. Impacto: 9 (2d4+3) de daño cortante." },
            { nombre: "Arco largo", descripcion: "Ataque de arma a distancia: +6 al golpe, alcance 150/600 pies, un objetivo. Impacto: 6 (1d8+1) de daño perforante." }
        ],
        reacciones: []
    },
    archmage: {
        id: "archmage",
        nombre: "Archimago",
        cr: "12",
        tipo: "Humanoide",
        tamaño: "Mediano",
        alineamiento: "Cualquier alineamiento",
        stats: { fuerza: 10, destreza: 14, constitucion: 12, inteligencia: 20, sabiduria: 15, carisma: 16 },
        ca: 12,
        pg: "99 (18d8+18)",
        velocidad: "30 pies",
        salvaciones: { inteligencia: +9, sabiduria: +6 },
        habilidades: { arcana: +13, historia: +13 },
        sentidos: "Percepción pasiva 12",
        idiomas: ["Común", "Draconico", "Elfico", "Gigante"],
        rasgos: [
            { nombre: "Lanzamiento de conjuros", descripcion: "El archimago es lanzador de conjuros de nivel 18. Su característica es Inteligencia (salvación CD 17). Tiene los siguientes conjuros preparados: Trucos: fuego artificial, luz, mano de mago, rayo de escarcha; Nivel 1: detección de magia, escudo, proyectil mágico; Nivel 2: imagen especular, invisibilidad; Nivel 3: bola de fuego, contramagia; Nivel 4: escudo de fuego, puerta dimensional; Nivel 5: cono de frío, muro de fuerza; Nivel 6: esfera resistente; Nivel 7: teleportación; Nivel 8: palabra de poder aturdidora; Nivel 9: parar el tiempo." },
            { nombre: "Resistencia Mágica", descripcion: "El archimago tiene ventaja en las tiradas de salvación contra hechizos y efectos mágicos." }
        ],
        acciones: [
            { nombre: "Daga", descripcion: "Ataque de arma cuerpo a cuerpo o a distancia: +6 al golpe, alcance 5 pies o 20/60 pies, un objetivo. Impacto: 4 (1d4+2) de daño perforante." }
        ],
        reacciones: []
    },
    assassin: {
        id: "assassin",
        nombre: "Asesino",
        cr: "8",
        tipo: "Humanoide",
        tamaño: "Mediano",
        alineamiento: "Cualquier no bueno",
        stats: { fuerza: 11, destreza: 16, constitucion: 14, inteligencia: 13, sabiduria: 11, carisma: 10 },
        ca: 15,
        pg: "78 (12d8+24)",
        velocidad: "30 pies",
        salvaciones: { destreza: +6, inteligencia: +4 },
        habilidades: { acrobacias: +6, enganio: +3, percepcion: +3, sigilo: +9 },
        sentidos: "Percepción pasiva 13",
        idiomas: ["Común", "Ladrón"],
        rasgos: [
            { nombre: "Ataque Furtivo", descripcion: "Una vez por turno, el asesino inflige 14 (4d6) de daño adicional cuando golpea a un objetivo con ventaja." },
            { nombre: "Evasion", descripcion: "Si el asesino está sujeto a un efecto que le permita realizar una tirada de salvación de Destreza para recibir la mitad del daño, no recibe daño si tiene éxito y la mitad si falla." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El asesino realiza dos ataques con espada corta." },
            { nombre: "Espada corta", descripcion: "Ataque de arma cuerpo a cuerpo: +6 al golpe, alcance 5 pies, un objetivo. Impacto: 6 (1d6+3) de daño perforante." },
            { nombre: "Ballesta ligera", descripcion: "Ataque de arma a distancia: +6 al golpe, alcance 80/320 pies, un objetivo. Impacto: 7 (1d8+3) de daño perforante." }
        ],
        reacciones: [
            { nombre: "Parada", descripcion: "El asesino añade 3 a su CA contra un ataque cuerpo a cuerpo que le impactaría." }
        ]
    },
    balor: {
        id: "balor",
        nombre: "Balor",
        cr: "19",
        tipo: "Infernal",
        tamaño: "Grande",
        alineamiento: "Caótico Malvado",
        stats: { fuerza: 26, destreza: 15, constitucion: 22, inteligencia: 20, sabiduria: 16, carisma: 22 },
        ca: 19,
        pg: "262 (21d10+147)",
        velocidad: "40 pies, volando 80 pies",
        salvaciones: { fuerza: +14, constitucion: +12, sabiduria: +9, carisma: +12 },
        habilidades: {},
        sentidos: "Vista verdadera 120 pies, Percepción pasiva 13",
        idiomas: ["Abismal", "Telepatía 120 pies"],
        rasgos: [
            { nombre: "Aura de Fuego", descripcion: "Al inicio del turno de cada criatura dentro de 5 pies del balor, esa criatura recibe 10 (3d6) de daño por fuego." },
            { nombre: "Muerte Explosiva", descripcion: "Cuando el balor muere, explota. Todas las criaturas en un radio de 30 pies deben realizar una tirada de salvación de Destreza CD 20. Reciben 70 (20d6) de daño por fuego si fallan, o la mitad si tienen éxito." },
            { nombre: "Resistencia Mágica", descripcion: "El balor tiene ventaja en las tiradas de salvación contra hechizos y efectos mágicos." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El balor realiza dos ataques: uno con su espada larga y otro con su látigo." },
            { nombre: "Espada larga", descripcion: "Ataque de arma cuerpo a cuerpo: +14 al golpe, alcance 10 pies, un objetivo. Impacto: 21 (3d8+8) de daño cortante más 13 (3d8) de daño por relámpago." },
            { nombre: "Látigo", descripcion: "Ataque de arma cuerpo a cuerpo: +14 al golpe, alcance 30 pies, un objetivo. Impacto: 15 (2d6+8) de daño cortante más 10 (3d6) de daño por fuego." },
            { nombre: "Teleportación", descripcion: "El balor se teleporta mágicamente a un lugar desocupado que pueda ver dentro de 120 pies." }
        ],
        reacciones: []
    },
    bandit: {
        id: "bandit",
        nombre: "Bandido",
        cr: "1/8",
        tipo: "Humanoide",
        tamaño: "Mediano",
        alineamiento: "Cualquier no legal",
        stats: { fuerza: 11, destreza: 12, constitucion: 12, inteligencia: 10, sabiduria: 10, carisma: 10 },
        ca: 12,
        pg: "11 (2d8+2)",
        velocidad: "30 pies",
        salvaciones: {},
        habilidades: {},
        sentidos: "Percepción pasiva 10",
        idiomas: ["Común"],
        rasgos: [],
        acciones: [
            { nombre: "Espada corta", descripcion: "Ataque de arma cuerpo a cuerpo: +3 al golpe, alcance 5 pies, un objetivo. Impacto: 4 (1d6+1) de daño perforante." },
            { nombre: "Ballesta ligera", descripcion: "Ataque de arma a distancia: +3 al golpe, alcance 80/320 pies, un objetivo. Impacto: 5 (1d8+1) de daño perforante." }
        ],
        reacciones: []
    },
    banshee: {
        id: "banshee",
        nombre: "Banshee",
        cr: "4",
        tipo: "No muerto",
        tamaño: "Mediano",
        alineamiento: "Caótico Malvado",
        stats: { fuerza: 1, destreza: 14, constitucion: 10, inteligencia: 12, sabiduria: 11, carisma: 17 },
        ca: 12,
        pg: "58 (13d8)",
        velocidad: "40 pies",
        salvaciones: { sabiduria: +2, carisma: +5 },
        habilidades: {},
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 10",
        idiomas: ["Común", "Elfico"],
        rasgos: [
            { nombre: "Grito Desgarrador", descripcion: "La banshee puede usar su acción para gemir. Todas las criaturas dentro de 30 pies que puedan oírla deben realizar una tirada de salvación de Constitución CD 13." },
            { nombre: "Toque Mortal", descripcion: "Ataque de arma cuerpo a cuerpo: +4 al golpe, alcance 5 pies, un objetivo. Impacto: 9 (3d6) de daño necrótico." }
        ],
        acciones: [
            { nombre: "Gemido", descripcion: "La banshee gime. Las criaturas en un radio de 30 pies deben superar una salvación de Constitución CD 13 o caer a 0 puntos de golpe." },
            { nombre: "Toque Corruptor", descripcion: "Ataque de arma cuerpo a cuerpo: +4 al golpe, alcance 5 pies, un objetivo. Impacto: 12 (3d8) de daño necrótico." }
        ],
        reacciones: []
    }
,
    basilisk: {
        id: "basilisk",
        nombre: "Basilisco",
        cr: "3",
        tipo: "Monstruosidad",
        tamaño: "Mediano",
        alineamiento: "No alineado",
        stats: { fuerza: 16, destreza: 8, constitucion: 15, inteligencia: 2, sabiduria: 8, carisma: 7 },
        ca: 15,
        pg: "52 (7d8+21)",
        velocidad: "20 pies",
        salvaciones: {},
        habilidades: { sigilo: +3 },
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 9",
        idiomas: [],
        rasgos: [
            { nombre: "Mirada Petrificante", descripcion: "Si una criatura comienza su turno dentro de 30 pies del basilisco y ambos pueden verse, el basilisco puede forzar a la criatura a realizar una tirada de salvación de Constitución CD 12. Si falla, comienza a convertirse en piedra." }
        ],
        acciones: [
            { nombre: "Mordisco", descripcion: "Ataque de arma cuerpo a cuerpo: +5 al golpe, alcance 5 pies, un objetivo. Impacto: 10 (2d6+3) de daño perforante más 7 (2d6) de daño por veneno." }
        ],
        reacciones: []
    },
    behir: {
        id: "behir",
        nombre: "Behir",
        cr: "11",
        tipo: "Monstruosidad",
        tamaño: "Enorme",
        alineamiento: "Neutral Malvado",
        stats: { fuerza: 23, destreza: 16, constitucion: 21, inteligencia: 7, sabiduria: 14, carisma: 12 },
        ca: 17,
        pg: "168 (16d12+64)",
        velocidad: "50 pies, trepar 40 pies",
        salvaciones: { destreza: +7, constitucion: +9, sabiduria: +6 },
        habilidades: { percepcion: +6, sigilo: +7 },
        sentidos: "Visión en la oscuridad 90 pies, Percepción pasiva 16",
        idiomas: ["Dragón"],
        rasgos: [
            { nombre: "Tragar Entero", descripcion: "El behir intenta tragar a una criatura Mediana o más pequeña que tenga agarrada." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El behir realiza dos ataques: uno con su mordisco y uno para constreñir." },
            { nombre: "Mordisco", descripcion: "Ataque de arma cuerpo a cuerpo: +10 al golpe, alcance 10 pies, un objetivo. Impacto: 22 (3d10+6) de daño perforante." },
            { nombre: "Constreñir", descripcion: "Ataque de arma cuerpo a cuerpo: +10 al golpe, alcance 5 pies, una criatura Grande o más pequeña. Impacto: 17 (2d10+6) de daño contundente más 17 (2d10+6) de daño cortante." },
            { nombre: "Aliento de Relámpago (Recarga 5-6)", descripcion: "El behir exhala un rayo en una línea de 20 pies. Toda criatura en esa línea debe realizar una tirada de salvación de Destreza CD 16. Recibe 66 (12d10) de daño por relámpago si falla, o la mitad si tiene éxito." }
        ],
        reacciones: []
    },
    beholder: {
        id: "beholder",
        nombre: "Beholder",
        cr: "13",
        tipo: "Aberración",
        tamaño: "Grande",
        alineamiento: "Legal Malvado",
        stats: { fuerza: 10, destreza: 14, constitucion: 18, inteligencia: 17, sabiduria: 15, carisma: 17 },
        ca: 18,
        pg: "180 (19d10+76)",
        velocidad: "0 pies, volando 20 pies",
        salvaciones: { inteligencia: +8, sabiduria: +7, carisma: +8 },
        habilidades: { percepcion: +12 },
        sentidos: "Visión en la oscuridad 120 pies, Percepción pasiva 22",
        idiomas: ["Profundo", "Común"],
        rasgos: [
            { nombre: "Campo Antimagia", descripcion: "El ojo central del beholder crea un área de antimagia en un cono de 150 pies." },
            { nombre: "Rayo del Ojo", descripcion: "El beholder dispara tres rayos mágicos de sus ojos al azar." }
        ],
        acciones: [
            { nombre: "Mordisco", descripcion: "Ataque de arma cuerpo a cuerpo: +5 al golpe, alcance 5 pies, un objetivo. Impacto: 14 (4d6) de daño perforante." },
            { nombre: "Rayo del Ojo", descripcion: "El beholder elige tres objetivos y dispara rayos: 1. Encantar: CD 15 Sabiduría; 2. Paralizar: CD 15 Constitución; 3. Miedo: CD 15 Sabiduría; 4. Ralentizar: CD 15 Sabiduría; 5. Desintegrar: CD 15 Destreza; 6. Muerte: CD 15 Constitución." }
        ],
        reacciones: []
    },
    berserker: {
        id: "berserker",
        nombre: "Berserker",
        cr: "2",
        tipo: "Humanoide",
        tamaño: "Mediano",
        alineamiento: "Cualquier caótico",
        stats: { fuerza: 16, destreza: 12, constitucion: 17, inteligencia: 9, sabiduria: 11, carisma: 9 },
        ca: 13,
        pg: "67 (9d8+27)",
        velocidad: "40 pies",
        salvaciones: {},
        habilidades: { percepcion: +2 },
        sentidos: "Percepción pasiva 12",
        idiomas: ["Común"],
        rasgos: [
            { nombre: "Frenesí", descripcion: "El berserker tiene ventaja en las tiradas de ataque cuerpo a cuerpo mientras esté por debajo de la mitad de sus puntos de golpe." }
        ],
        acciones: [
            { nombre: "Hacha grande", descripcion: "Ataque de arma cuerpo a cuerpo: +5 al golpe, alcance 5 pies, un objetivo. Impacto: 9 (1d12+3) de daño cortante." }
        ],
        reacciones: []
    },
    black_bear: {
        id: "black_bear",
        nombre: "Oso Negro",
        cr: "1/2",
        tipo: "Bestia",
        tamaño: "Mediano",
        alineamiento: "No alineado",
        stats: { fuerza: 15, destreza: 10, constitucion: 14, inteligencia: 2, sabiduria: 12, carisma: 7 },
        ca: 11,
        pg: "19 (3d8+6)",
        velocidad: "40 pies, trepar 30 pies",
        salvaciones: {},
        habilidades: { percepcion: +3 },
        sentidos: "Percepción pasiva 13",
        idiomas: [],
        rasgos: [
            { nombre: "Olfato Agudo", descripcion: "El oso tiene ventaja en las pruebas de Sabiduría (Percepción) que dependan del olfato." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El oso realiza dos ataques: uno con su mordisco y uno con sus garras." },
            { nombre: "Mordisco", descripcion: "Ataque de arma cuerpo a cuerpo: +4 al golpe, alcance 5 pies, un objetivo. Impacto: 5 (1d6+2) de daño perforante." },
            { nombre: "Garras", descripcion: "Ataque de arma cuerpo a cuerpo: +4 al golpe, alcance 5 pies, un objetivo. Impacto: 7 (2d4+2) de daño cortante." }
        ],
        reacciones: []
    },
    blink_dog: {
        id: "blink_dog",
        nombre: "Perro Parpadeante",
        cr: "1/4",
        tipo: "Fey",
        tamaño: "Mediano",
        alineamiento: "Legal Bueno",
        stats: { fuerza: 12, destreza: 17, constitucion: 12, inteligencia: 10, sabiduria: 13, carisma: 11 },
        ca: 13,
        pg: "22 (4d8+4)",
        velocidad: "40 pies",
        salvaciones: {},
        habilidades: { percepcion: +5, sigilo: +5 },
        sentidos: "Percepción pasiva 15",
        idiomas: ["Élfico", "Silvano"],
        rasgos: [
            { nombre: "Teleportación", descripcion: "El perro parpadeante puede teleportarse mágicamente a un lugar desocupado que pueda ver dentro de 40 pies." }
        ],
        acciones: [
            { nombre: "Mordisco", descripcion: "Ataque de arma cuerpo a cuerpo: +3 al golpe, alcance 5 pies, un objetivo. Impacto: 4 (1d6+1) de daño perforante." },
            { nombre: "Teleportación (Recarga 4-6)", descripcion: "El perro parpadeante se teleporta y luego puede realizar un ataque de mordisco." }
        ],
        reacciones: []
    },
    bone_devil: {
        id: "bone_devil",
        nombre: "Diablo de Huesos",
        cr: "9",
        tipo: "Infernal",
        tamaño: "Grande",
        alineamiento: "Legal Malvado",
        stats: { fuerza: 18, destreza: 16, constitucion: 18, inteligencia: 13, sabiduria: 14, carisma: 16 },
        ca: 12,
        pg: "142 (15d10+60)",
        velocidad: "40 pies, volando 40 pies",
        salvaciones: { inteligencia: +5, sabiduria: +6, carisma: +7 },
        habilidades: { enganio: +7, perspicacia: +6 },
        sentidos: "Visión en la oscuridad 120 pies, Percepción pasiva 12",
        idiomas: ["Infernal", "Telepatía 120 pies"],
        rasgos: [
            { nombre: "Vista de Diablo", descripcion: "El diablo de huesos puede ver en la oscuridad mágica." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El diablo de huesos realiza dos ataques: uno con su aguijón y uno con sus garras." },
            { nombre: "Garras", descripcion: "Ataque de arma cuerpo a cuerpo: +8 al golpe, alcance 10 pies, un objetivo. Impacto: 8 (1d8+4) de daño cortante." },
            { nombre: "Aguijón", descripcion: "Ataque de arma cuerpo a cuerpo: +8 al golpe, alcance 10 pies, un objetivo. Impacto: 13 (2d8+4) de daño perforante más veneno." }
        ],
        reacciones: []
    },
    bugbear: {
        id: "bugbear",
        nombre: "Bugbear",
        cr: "1",
        tipo: "Humanoide",
        tamaño: "Mediano",
        alineamiento: "Caótico Malvado",
        stats: { fuerza: 15, destreza: 14, constitucion: 13, inteligencia: 8, sabiduria: 11, carisma: 9 },
        ca: 16,
        pg: "27 (5d8+5)",
        velocidad: "30 pies",
        salvaciones: {},
        habilidades: { sigilo: +6 },
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 10",
        idiomas: ["Común", "Goblin"],
        rasgos: [
            { nombre: "Ataque Sorpresa", descripcion: "Si el bugbear sorprende a una criatura y la golpea con un ataque en el primer turno, el objetivo recibe 7 (2d6) de daño adicional." },
            { nombre: "Asesino Sigiloso", descripcion: "El bugbear tiene ventaja en las pruebas de Destreza (Sigilo) para esconderse." }
        ],
        acciones: [
            { nombre: "Jabalina", descripcion: "Ataque de arma cuerpo a cuerpo o a distancia: +4 al golpe, alcance 5 pies o 30/120 pies, un objetivo. Impacto: 5 (1d6+2) de daño perforante." },
            { nombre: "Mayal", descripcion: "Ataque de arma cuerpo a cuerpo: +4 al golpe, alcance 5 pies, un objetivo. Impacto: 6 (1d8+2) de daño contundente." }
        ],
        reacciones: []
    },
    bulette: {
        id: "bulette",
        nombre: "Bulette",
        cr: "5",
        tipo: "Monstruosidad",
        tamaño: "Grande",
        alineamiento: "No alineado",
        stats: { fuerza: 19, destreza: 11, constitucion: 21, inteligencia: 2, sabiduria: 10, carisma: 5 },
        ca: 17,
        pg: "94 (9d10+45)",
        velocidad: "40 pies, excavando 40 pies",
        salvaciones: {},
        habilidades: { percepcion: +6 },
        sentidos: "Visión en la oscuridad 60 pies, Sentido sísmico 60 pies, Percepción pasiva 16",
        idiomas: [],
        rasgos: [
            { nombre: "Salto Mortal", descripcion: "Si la bulette se mueve al menos 20 pies hacia un objetivo y lo golpea, puede realizar un ataque de mordisco adicional." }
        ],
        acciones: [
            { nombre: "Mordisco", descripcion: "Ataque de arma cuerpo a cuerpo: +7 al golpe, alcance 5 pies, un objetivo. Impacto: 30 (4d12+4) de daño perforante." }
        ],
        reacciones: []
    },
    cambion: {
        id: "cambion",
        nombre: "Cambion",
        cr: "5",
        tipo: "Infernal",
        tamaño: "Mediano",
        alineamiento: "Cualquier malvado",
        stats: { fuerza: 18, destreza: 18, constitucion: 16, inteligencia: 14, sabiduria: 12, carisma: 16 },
        ca: 19,
        pg: "82 (11d8+33)",
        velocidad: "30 pies, volando 60 pies",
        salvaciones: { fuerza: +7, constitucion: +6, inteligencia: +5, carisma: +6 },
        habilidades: { enganio: +6, intimidacion: +6, percepcion: +4, sigilo: +7 },
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 14",
        idiomas: ["Común", "Infernal"],
        rasgos: [
            { nombre: "Resistencia Mágica", descripcion: "El cambion tiene ventaja en las tiradas de salvación contra hechizos." },
            { nombre: "Armas Mágicas", descripcion: "Los ataques de arma del cambion son mágicos." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El cambion realiza dos ataques cuerpo a cuerpo o dos ataques a distancia." },
            { nombre: "Lanza", descripcion: "Ataque de arma cuerpo a cuerpo o a distancia: +7 al golpe, alcance 5 pies o 20/60 pies, un objetivo. Impacto: 7 (1d6+4) de daño perforante." },
            { nombre: "Toque de Fuego", descripcion: "Ataque de arma cuerpo a cuerpo: +7 al golpe, alcance 5 pies, un objetivo. Impacto: 11 (2d6+4) de daño por fuego." }
        ],
        reacciones: []
    }
,
    carrion_crawler: {
        id: "carrion_crawler",
        nombre: "Rastreador de Carroña",
        cr: "2",
        tipo: "Monstruosidad",
        tamaño: "Grande",
        alineamiento: "No alineado",
        stats: { fuerza: 14, destreza: 13, constitucion: 16, inteligencia: 1, sabiduria: 12, carisma: 5 },
        ca: 13,
        pg: "51 (6d10+18)",
        velocidad: "30 pies, trepar 30 pies",
        salvaciones: {},
        habilidades: { percepcion: +3 },
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 13",
        idiomas: [],
        rasgos: [
            { nombre: "Olfato Agudo", descripcion: "El rastreador tiene ventaja en las pruebas de Sabiduría (Percepción) que dependan del olfato." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El rastreador realiza dos ataques: uno con sus tentáculos y uno con su mordisco." },
            { nombre: "Tentáculos", descripcion: "Ataque de arma cuerpo a cuerpo: +4 al golpe, alcance 10 pies, una criatura. Impacto: 7 (2d6) de daño por veneno y el objetivo debe superar una CD 13 de Constitución o quedar envenenado." },
            { nombre: "Mordisco", descripcion: "Ataque de arma cuerpo a cuerpo: +4 al golpe, alcance 5 pies, un objetivo. Impacto: 7 (2d4+2) de daño perforante." }
        ],
        reacciones: []
    },
    centaur: {
        id: "centaur",
        nombre: "Centauro",
        cr: "2",
        tipo: "Monstruosidad",
        tamaño: "Grande",
        alineamiento: "Neutral Bueno",
        stats: { fuerza: 18, destreza: 14, constitucion: 14, inteligencia: 9, sabiduria: 13, carisma: 11 },
        ca: 12,
        pg: "45 (6d10+12)",
        velocidad: "50 pies",
        salvaciones: {},
        habilidades: { atletismo: +6, percepcion: +3, supervivencia: +3 },
        sentidos: "Percepción pasiva 13",
        idiomas: ["Común", "Élfico", "Silvano"],
        rasgos: [
            { nombre: "Carga", descripcion: "Si el centauro se mueve al menos 30 pies en línea recta hacia un objetivo y lo golpea con un ataque de lanza, el objetivo recibe 10 (3d6) de daño perforante adicional." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El centauro realiza dos ataques: uno con su lanza y uno con sus cascos." },
            { nombre: "Lanza", descripcion: "Ataque de arma cuerpo a cuerpo o a distancia: +6 al golpe, alcance 5 pies o 20/60 pies, un objetivo. Impacto: 7 (1d6+4) de daño perforante." },
            { nombre: "Cascos", descripcion: "Ataque de arma cuerpo a cuerpo: +6 al golpe, alcance 5 pies, un objetivo. Impacto: 9 (2d4+4) de daño contundente." }
        ],
        reacciones: []
    },
    chimera: {
        id: "chimera",
        nombre: "Quimera",
        cr: "6",
        tipo: "Monstruosidad",
        tamaño: "Grande",
        alineamiento: "Caótico Malvado",
        stats: { fuerza: 19, destreza: 11, constitucion: 19, inteligencia: 3, sabiduria: 14, carisma: 10 },
        ca: 14,
        pg: "114 (12d10+48)",
        velocidad: "30 pies, volando 60 pies",
        salvaciones: {},
        habilidades: { percepcion: +8 },
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 18",
        idiomas: ["Dragón"],
        rasgos: [],
        acciones: [
            { nombre: "Multiataque", descripcion: "La quimera realiza tres ataques: uno con su mordisco, uno con sus garras y uno con sus cuernos." },
            { nombre: "Mordisco", descripcion: "Ataque de arma cuerpo a cuerpo: +7 al golpe, alcance 5 pies, un objetivo. Impacto: 11 (2d6+4) de daño perforante." },
            { nombre: "Garras", descripcion: "Ataque de arma cuerpo a cuerpo: +7 al golpe, alcance 5 pies, un objetivo. Impacto: 11 (2d6+4) de daño cortante." },
            { nombre: "Cuernos", descripcion: "Ataque de arma cuerpo a cuerpo: +7 al golpe, alcance 5 pies, un objetivo. Impacto: 10 (1d12+4) de daño contundente." },
            { nombre: "Aliento de Fuego (Recarga 5-6)", descripcion: "La cabeza de dragón exhala fuego en un cono de 15 pies. Toda criatura en esa área debe realizar una tirada de salvación de Destreza CD 15. Recibe 31 (7d8) de daño por fuego si falla, o la mitad si tiene éxito." }
        ],
        reacciones: []
    },
    chuul: {
        id: "chuul",
        nombre: "Chuul",
        cr: "4",
        tipo: "Aberración",
        tamaño: "Grande",
        alineamiento: "Caótico Malvado",
        stats: { fuerza: 19, destreza: 10, constitucion: 16, inteligencia: 5, sabiduria: 11, carisma: 5 },
        ca: 16,
        pg: "93 (11d10+33)",
        velocidad: "30 pies, nadando 30 pies",
        salvaciones: {},
        habilidades: { percepcion: +4 },
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 14",
        idiomas: ["Profundo"],
        rasgos: [
            { nombre: "Anfibio", descripcion: "El chuul puede respirar aire y agua." },
            { nombre: "Sentir Magia", descripcion: "El chuul puede sentir la magia a 120 pies." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El chuul realiza dos ataques con sus pinzas." },
            { nombre: "Pinza", descripcion: "Ataque de arma cuerpo a cuerpo: +6 al golpe, alcance 10 pies, un objetivo. Impacto: 11 (2d6+4) de daño contundente. Si el objetivo es Grande o más pequeño, queda agarrado (escape CD 14)." },
            { nombre: "Parálisis", descripcion: "El chuul libera un gas paralizante sobre una criatura agarrada. El objetivo debe superar una CD 13 de Constitución o quedar paralizado." }
        ],
        reacciones: []
    },
    clay_golem: {
        id: "clay_golem",
        nombre: "Gólem de Arcilla",
        cr: "9",
        tipo: "Constructo",
        tamaño: "Grande",
        alineamiento: "No alineado",
        stats: { fuerza: 20, destreza: 9, constitucion: 18, inteligencia: 3, sabiduria: 8, carisma: 1 },
        ca: 14,
        pg: "133 (14d10+56)",
        velocidad: "20 pies",
        salvaciones: {},
        habilidades: {},
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 9",
        idiomas: [],
        rasgos: [
            { nombre: "Absorción de Ácido", descripcion: "Si el gólem recibe daño por ácido, no recibe daño y en su lugar recupera puntos de golpe iguales al daño que habría recibido." },
            { nombre: "Inmunidad a Armas no Mágicas", descripcion: "El gólem es inmune al daño de armas no mágicas que no sean de adamantina." },
            { nombre: "Maldición de la Criatura de Barro", descripcion: "Cuando el gólem golpea a una criatura, el objetivo debe superar una CD 17 de Constitución o su máximo de puntos de golpe se reduce." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El gólem realiza dos ataques de puñetazo." },
            { nombre: "Puñetazo", descripcion: "Ataque de arma cuerpo a cuerpo: +8 al golpe, alcance 5 pies, un objetivo. Impacto: 16 (2d10+5) de daño contundente." },
            { nombre: "Haste (Recarga 5-6)", descripcion: "Hasta el final de su siguiente turno, el gólem gana +2 a CA, ventaja en Destreza y una acción adicional." }
        ],
        reacciones: []
    },
    cloaker: {
        id: "cloaker",
        nombre: "Cloaker",
        cr: "8",
        tipo: "Aberración",
        tamaño: "Grande",
        alineamiento: "Caótico Neutral",
        stats: { fuerza: 17, destreza: 15, constitucion: 12, inteligencia: 13, sabiduria: 12, carisma: 14 },
        ca: 14,
        pg: "78 (12d10+12)",
        velocidad: "10 pies, volando 40 pies",
        salvaciones: {},
        habilidades: { sigilo: +5 },
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 11",
        idiomas: ["Profundo"],
        rasgos: [
            { nombre: "Mimetismo", descripcion: "El cloaker puede imitar una capa colgada en la pared." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El cloaker realiza dos ataques: uno con su mordisco y uno con su cola." },
            { nombre: "Mordisco", descripcion: "Ataque de arma cuerpo a cuerpo: +6 al golpe, alcance 5 pies, un objetivo. Impacto: 10 (2d6+3) de daño perforante." },
            { nombre: "Cola", descripcion: "Ataque de arma cuerpo a cuerpo: +6 al golpe, alcance 10 pies, un objetivo. Impacto: 7 (1d8+3) de daño cortante." },
            { nombre: "Finta", descripcion: "El cloaker crea una imagen ilusoria que asusta a las criaturas en un radio de 60 pies." }
        ],
        reacciones: []
    },
    cloud_giant: {
        id: "cloud_giant",
        nombre: "Gigante de las Nubes",
        cr: "9",
        tipo: "Gigante",
        tamaño: "Enorme",
        alineamiento: "Neutral Malvado",
        stats: { fuerza: 27, destreza: 10, constitucion: 22, inteligencia: 12, sabiduria: 16, carisma: 16 },
        ca: 14,
        pg: "200 (16d12+96)",
        velocidad: "40 pies",
        salvaciones: { constitucion: +10, sabiduria: +7, carisma: +7 },
        habilidades: { perspicacia: +7, percepcion: +7 },
        sentidos: "Percepción pasiva 17",
        idiomas: ["Común", "Gigante"],
        rasgos: [
            { nombre: "Olfato Agudo", descripcion: "El gigante tiene ventaja en las pruebas de Sabiduría (Percepción) que dependan del olfato." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El gigante realiza dos ataques con su espada o dos con su roca." },
            { nombre: "Espada", descripcion: "Ataque de arma cuerpo a cuerpo: +12 al golpe, alcance 10 pies, un objetivo. Impacto: 21 (3d8+8) de daño cortante." },
            { nombre: "Roca", descripcion: "Ataque de arma a distancia: +12 al golpe, alcance 60/240 pies, un objetivo. Impacto: 30 (4d10+8) de daño contundente." }
        ],
        reacciones: []
    },
    cockatrice: {
        id: "cockatrice",
        nombre: "Cockatrice",
        cr: "1/2",
        tipo: "Monstruosidad",
        tamaño: "Pequeño",
        alineamiento: "No alineado",
        stats: { fuerza: 6, destreza: 12, constitucion: 12, inteligencia: 2, sabiduria: 13, carisma: 5 },
        ca: 11,
        pg: "27 (6d6+6)",
        velocidad: "20 pies, volando 40 pies",
        salvaciones: {},
        habilidades: {},
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 11",
        idiomas: [],
        rasgos: [],
        acciones: [
            { nombre: "Mordisco", descripcion: "Ataque de arma cuerpo a cuerpo: +3 al golpe, alcance 5 pies, un objetivo. Impacto: 3 (1d4+1) de daño perforante. El objetivo debe superar una CD 11 de Constitución o comenzar a petrificarse." }
        ],
        reacciones: []
    },
    couatl: {
        id: "couatl",
        nombre: "Couatl",
        cr: "4",
        tipo: "Celestial",
        tamaño: "Mediano",
        alineamiento: "Legal Bueno",
        stats: { fuerza: 16, destreza: 20, constitucion: 17, inteligencia: 18, sabiduria: 20, carisma: 18 },
        ca: 19,
        pg: "97 (13d8+39)",
        velocidad: "30 pies, volando 90 pies",
        salvaciones: { constitucion: +5, sabiduria: +7, carisma: +6 },
        habilidades: {},
        sentidos: "Vista verdadera 120 pies, Percepción pasiva 15",
        idiomas: ["Común", "Celestial", "Telepatía 120 pies"],
        rasgos: [
            { nombre: "Armas Mágicas", descripcion: "Los ataques de arma del couatl son mágicos." },
            { nombre: "Escudo Mental", descripcion: "El couatl es inmune a la adivinación y a la lectura de pensamientos." }
        ],
        acciones: [
            { nombre: "Mordisco", descripcion: "Ataque de arma cuerpo a cuerpo: +8 al golpe, alcance 5 pies, un objetivo. Impacto: 8 (1d6+5) de daño perforante más 10 (3d6) de daño por veneno." },
            { nombre: "Constreñir", descripcion: "Ataque de arma cuerpo a cuerpo: +6 al golpe, alcance 10 pies, un objetivo. Impacto: 9 (2d4+3) de daño contundente." },
            { nombre: "Cambiar Forma", descripcion: "El couatl se transforma en cualquier bestia de CR 4 o menos." }
        ],
        reacciones: []
    },
    crocodile: {
        id: "crocodile",
        nombre: "Cocodrilo",
        cr: "1/2",
        tipo: "Bestia",
        tamaño: "Grande",
        alineamiento: "No alineado",
        stats: { fuerza: 15, destreza: 10, constitucion: 13, inteligencia: 2, sabiduria: 10, carisma: 5 },
        ca: 12,
        pg: "19 (3d10+3)",
        velocidad: "20 pies, nadando 30 pies",
        salvaciones: {},
        habilidades: { sigilo: +2 },
        sentidos: "Percepción pasiva 10",
        idiomas: [],
        rasgos: [
            { nombre: "Contención", descripcion: "El cocodrilo puede contener la respiración durante 15 minutos." }
        ],
        acciones: [
            { nombre: "Mordisco", descripcion: "Ataque de arma cuerpo a cuerpo: +4 al golpe, alcance 5 pies, un objetivo. Impacto: 7 (1d10+2) de daño perforante. El objetivo queda agarrado (escape CD 12)." }
        ],
        reacciones: []
    }
,
    cyclops: {
        id: "cyclops",
        nombre: "Cíclope",
        cr: "6",
        tipo: "Gigante",
        tamaño: "Enorme",
        alineamiento: "Caótico Neutral",
        stats: { fuerza: 22, destreza: 11, constitucion: 20, inteligencia: 8, sabiduria: 6, carisma: 10 },
        ca: 14,
        pg: "138 (12d12+60)",
        velocidad: "40 pies",
        salvaciones: {},
        habilidades: {},
        sentidos: "Percepción pasiva 8",
        idiomas: ["Gigante"],
        rasgos: [
            { nombre: "Mala Vista", descripcion: "El cíclope tiene desventaja en las pruebas de Percepción que dependan de la vista." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El cíclope realiza dos ataques de gran garrote." },
            { nombre: "Gran garrote", descripcion: "Ataque de arma cuerpo a cuerpo: +9 al golpe, alcance 10 pies, un objetivo. Impacto: 19 (3d8+6) de daño contundente." },
            { nombre: "Roca", descripcion: "Ataque de arma a distancia: +9 al golpe, alcance 30/120 pies, un objetivo. Impacto: 28 (4d10+6) de daño contundente." }
        ],
        reacciones: []
    },
    darkmantle: {
        id: "darkmantle",
        nombre: "Darkmantle",
        cr: "1/2",
        tipo: "Monstruosidad",
        tamaño: "Pequeño",
        alineamiento: "No alineado",
        stats: { fuerza: 16, destreza: 12, constitucion: 13, inteligencia: 2, sabiduria: 10, carisma: 5 },
        ca: 11,
        pg: "22 (5d6+5)",
        velocidad: "10 pies, volando 30 pies",
        salvaciones: {},
        habilidades: { sigilo: +3 },
        sentidos: "Visión ciega 60 pies, Percepción pasiva 10",
        idiomas: [],
        rasgos: [
            { nombre: "Camuflaje en la Oscuridad", descripcion: "El darkmantle tiene ventaja en sigilo en la oscuridad." }
        ],
        acciones: [
            { nombre: "Golpe", descripcion: "Ataque de arma cuerpo a cuerpo: +5 al golpe, alcance 5 pies, un objetivo. Impacto: 6 (1d6+3) de daño contundente." },
            { nombre: "Oscuridad (1/día)", descripcion: "El darkmantle crea una esfera de oscuridad mágica de 15 pies." }
        ],
        reacciones: []
    },
    death_knight: {
        id: "death_knight",
        nombre: "Caballero de la Muerte",
        cr: "17",
        tipo: "No muerto",
        tamaño: "Mediano",
        alineamiento: "Caótico Malvado",
        stats: { fuerza: 20, destreza: 11, constitucion: 20, inteligencia: 12, sabiduria: 16, carisma: 18 },
        ca: 20,
        pg: "180 (19d8+95)",
        velocidad: "30 pies",
        salvaciones: { destreza: +6, sabiduria: +9, carisma: +10 },
        habilidades: { intimidacion: +10, percepcion: +9 },
        sentidos: "Visión en la oscuridad 120 pies, Percepción pasiva 19",
        idiomas: ["Abismal", "Común"],
        rasgos: [
            { nombre: "Armas Mágicas", descripcion: "Los ataques de arma del caballero de la muerte son mágicos." },
            { nombre: "Aura de Odio", descripcion: "El caballero y los no muertos aliados dentro de 30 pies tienen ventaja en las tiradas de ataque." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El caballero realiza tres ataques con su espada larga." },
            { nombre: "Espada larga", descripcion: "Ataque de arma cuerpo a cuerpo: +11 al golpe, alcance 5 pies, un objetivo. Impacto: 9 (1d8+5) de daño cortante más 18 (4d8) de daño necrótico." },
            { nombre: "Golpe de Fuego Infernal", descripcion: "El caballero golpea el suelo creando fuego infernal en un radio de 20 pies." }
        ],
        reacciones: [
            { nombre: "Parada", descripcion: "El caballero añade 5 a su CA contra un ataque cuerpo a cuerpo." }
        ]
    },
    death_tyrant: {
        id: "death_tyrant",
        nombre: "Tirano de la Muerte",
        cr: "14",
        tipo: "No muerto",
        tamaño: "Grande",
        alineamiento: "Legal Malvado",
        stats: { fuerza: 10, destreza: 14, constitucion: 18, inteligencia: 17, sabiduria: 15, carisma: 19 },
        ca: 19,
        pg: "187 (25d10+50)",
        velocidad: "0 pies, volando 20 pies",
        salvaciones: { destreza: +7, constitucion: +9, inteligencia: +8, sabiduria: +7, carisma: +9 },
        habilidades: { percepcion: +12 },
        sentidos: "Visión en la oscuridad 120 pies, Percepción pasiva 22",
        idiomas: ["Profundo", "Común"],
        rasgos: [
            { nombre: "Ojo Negativo", descripcion: "El ojo central crea un cono de energía negativa que anula la curación." }
        ],
        acciones: [
            { nombre: "Mordisco", descripcion: "Ataque de arma cuerpo a cuerpo: +5 al golpe, alcance 5 pies, un objetivo. Impacto: 14 (4d6) de daño perforante." },
            { nombre: "Rayos de Ojo", descripcion: "El tirano dispara tres rayos al azar: 1. Rayo paralizante; 2. Rayo de miedo; 3. Rayo de energía negativa." }
        ],
        reacciones: []
    },
    deep_gnome: {
        id: "deep_gnome",
        nombre: "Gnomo Profundo",
        cr: "1/2",
        tipo: "Humanoide",
        tamaño: "Pequeño",
        alineamiento: "Neutral Bueno",
        stats: { fuerza: 15, destreza: 14, constitucion: 14, inteligencia: 12, sabiduria: 10, carisma: 9 },
        ca: 15,
        pg: "16 (3d6+6)",
        velocidad: "20 pies",
        salvaciones: {},
        habilidades: { sigilo: +4, investigacion: +3, percepcion: +2 },
        sentidos: "Visión en la oscuridad 120 pies, Percepción pasiva 12",
        idiomas: ["Común", "Gnomo", "Terran"],
        rasgos: [
            { nombre: "Camuflaje en la Piedra", descripcion: "El gnomo tiene ventaja en Sigilo en entornos rocosos." }
        ],
        acciones: [
            { nombre: "Pico de guerra", descripcion: "Ataque de arma cuerpo a cuerpo: +4 al golpe, alcance 5 pies, un objetivo. Impacto: 6 (1d8+2) de daño perforante." },
            { nombre: "Ballesta de mano", descripcion: "Ataque de arma a distancia: +4 al golpe, alcance 30/120 pies, un objetivo. Impacto: 5 (1d6+2) de daño perforante." }
        ],
        reacciones: []
    },
    demilich: {
        id: "demilich",
        nombre: "Demilich",
        cr: "18",
        tipo: "No muerto",
        tamaño: "Diminuto",
        alineamiento: "Neutral Malvado",
        stats: { fuerza: 1, destreza: 20, constitucion: 10, inteligencia: 20, sabiduria: 17, carisma: 20 },
        ca: 20,
        pg: "80 (32d4)",
        velocidad: "0 pies, volando 30 pies",
        salvaciones: { constitucion: +6, inteligencia: +11, sabiduria: +9, carisma: +11 },
        habilidades: {},
        sentidos: "Vista verdadera 120 pies, Percepción pasiva 13",
        idiomas: [],
        rasgos: [
            { nombre: "Inmunidad a Armas no Mágicas", descripcion: "El demilich es inmune al daño de armas no mágicas." },
            { nombre: "Grito", descripcion: "Las criaturas que comiencen su turno dentro de 30 pies deben superar una CD 15 de Constitución o quedar aturdidas." }
        ],
        acciones: [
            { nombre: "Toque", descripcion: "Ataque de arma cuerpo a cuerpo: +11 al golpe, alcance 5 pies, un objetivo. Impacto: 21 (6d6) de daño necrótico." },
            { nombre: "Alma Devorada", descripcion: "El demilich apunta a una criatura dentro de 30 pies. El objetivo debe superar una CD 19 de Constitución o su máximo de puntos de golpe se reduce." }
        ],
        reacciones: []
    },
    demon_balor: {
        id: "demon_balor",
        nombre: "Balor",
        cr: "19",
        tipo: "Infernal",
        tamaño: "Grande",
        alineamiento: "Caótico Malvado",
        stats: { fuerza: 26, destreza: 15, constitucion: 22, inteligencia: 20, sabiduria: 16, carisma: 22 },
        ca: 19,
        pg: "262 (21d10+147)",
        velocidad: "40 pies, volando 80 pies",
        salvaciones: { fuerza: +14, constitucion: +12, sabiduria: +9, carisma: +12 },
        habilidades: {},
        sentidos: "Vista verdadera 120 pies, Percepción pasiva 13",
        idiomas: ["Abismal", "Telepatía 120 pies"],
        rasgos: [
            { nombre: "Aura de Fuego", descripcion: "Al inicio del turno de cada criatura dentro de 5 pies, esa criatura recibe 10 (3d6) de daño por fuego." },
            { nombre: "Muerte Explosiva", descripcion: "Cuando el balor muere, explota causando 70 (20d6) de daño por fuego." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El balor realiza dos ataques: uno con su espada larga y otro con su látigo." },
            { nombre: "Espada larga", descripcion: "Ataque de arma cuerpo a cuerpo: +14 al golpe, alcance 10 pies, un objetivo. Impacto: 21 (3d8+8) de daño cortante más 13 (3d8) de daño por relámpago." },
            { nombre: "Látigo", descripcion: "Ataque de arma cuerpo a cuerpo: +14 al golpe, alcance 30 pies, un objetivo. Impacto: 15 (2d6+8) de daño cortante más 10 (3d6) de daño por fuego." }
        ],
        reacciones: []
    },
    displacer_beast: {
        id: "displacer_beast",
        nombre: "Bestia Desplazadora",
        cr: "3",
        tipo: "Monstruosidad",
        tamaño: "Grande",
        alineamiento: "Legal Malvado",
        stats: { fuerza: 18, destreza: 15, constitucion: 16, inteligencia: 6, sabiduria: 12, carisma: 8 },
        ca: 13,
        pg: "85 (10d10+30)",
        velocidad: "40 pies",
        salvaciones: {},
        habilidades: { sigilo: +6 },
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 11",
        idiomas: [],
        rasgos: [
            { nombre: "Desplazamiento", descripcion: "La bestia proyecta una ilusión que la hace parecer estar a 5 pies de su posición real." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "La bestia realiza dos ataques con sus tentáculos." },
            { nombre: "Tentáculo", descripcion: "Ataque de arma cuerpo a cuerpo: +6 al golpe, alcance 10 pies, un objetivo. Impacto: 7 (1d6+4) de daño contundente." },
            { nombre: "Mordisco", descripcion: "Ataque de arma cuerpo a cuerpo: +6 al golpe, alcance 5 pies, un objetivo. Impacto: 8 (1d8+4) de daño perforante." }
        ],
        reacciones: []
    },
    djinni: {
        id: "djinni",
        nombre: "Djinni",
        cr: "11",
        tipo: "Elemental",
        tamaño: "Grande",
        alineamiento: "Caótico Bueno",
        stats: { fuerza: 21, destreza: 15, constitucion: 22, inteligencia: 15, sabiduria: 16, carisma: 20 },
        ca: 17,
        pg: "161 (14d10+84)",
        velocidad: "30 pies, volando 90 pies",
        salvaciones: { destreza: +6, sabiduria: +7, carisma: +9 },
        habilidades: {},
        sentidos: "Visión en la oscuridad 120 pies, Percepción pasiva 13",
        idiomas: ["Aire", "Común"],
        rasgos: [
            { nombre: "Resistencia Mágica", descripcion: "El djinni tiene ventaja en las tiradas de salvación contra hechizos." },
            { nombre: "Vuelo Elemental", descripcion: "El djinni puede volar y flotar sin esfuerzo." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El djinni realiza tres ataques con su cimitarra." },
            { nombre: "Cimitarra", descripcion: "Ataque de arma cuerpo a cuerpo: +9 al golpe, alcance 5 pies, un objetivo. Impacto: 12 (2d6+5) de daño cortante más 3 (1d6) de daño por trueno." },
            { nombre: "Crear Viento", descripcion: "El djinni crea una ráfaga de viento que derriba a las criaturas." }
        ],
        reacciones: []
    }
,
    doppelganger: {
        id: "doppelganger",
        nombre: "Doppelganger",
        cr: "3",
        tipo: "Monstruosidad",
        tamaño: "Mediano",
        alineamiento: "Neutral",
        stats: { fuerza: 11, destreza: 18, constitucion: 14, inteligencia: 11, sabiduria: 12, carisma: 14 },
        ca: 14,
        pg: "52 (8d8+16)",
        velocidad: "30 pies",
        salvaciones: {},
        habilidades: { enganio: +6, perspicacia: +3 },
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 11",
        idiomas: ["Común"],
        rasgos: [
            { nombre: "Cambiaformas", descripcion: "El doppelganger puede usar su acción para transformarse en cualquier humanoide Mediano o Pequeño." },
            { nombre: "Ataque Furtivo", descripcion: "Una vez por turno, el doppelganger inflige 10 (3d6) de daño adicional." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El doppelganger realiza dos ataques cuerpo a cuerpo." },
            { nombre: "Puñetazo", descripcion: "Ataque de arma cuerpo a cuerpo: +6 al golpe, alcance 5 pies, un objetivo. Impacto: 7 (1d6+4) de daño contundente." },
            { nombre: "Leer Pensamientos", descripcion: "El doppelganger lee los pensamientos superficiales de una criatura." }
        ],
        reacciones: []
    },
    dragon_turtle: {
        id: "dragon_turtle",
        nombre: "Tortuga Dragón",
        cr: "17",
        tipo: "Dragón",
        tamaño: "Gigantesco",
        alineamiento: "Neutral",
        stats: { fuerza: 25, destreza: 10, constitucion: 20, inteligencia: 10, sabiduria: 12, carisma: 12 },
        ca: 20,
        pg: "341 (22d20+110)",
        velocidad: "20 pies, nadando 40 pies",
        salvaciones: { destreza: +6, constitucion: +11, sabiduria: +7 },
        habilidades: {},
        sentidos: "Visión en la oscuridad 120 pies, Percepción pasiva 11",
        idiomas: ["Común", "Dragón"],
        rasgos: [
            { nombre: "Anfibio", descripcion: "La tortuga dragón puede respirar aire y agua." },
            { nombre: "Caparazón", descripcion: "Mientras está retraída, la tortuga tiene CA 22 y ventaja en salvaciones." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "La tortuga realiza tres ataques: uno con su mordisco y dos con sus garras." },
            { nombre: "Mordisco", descripcion: "Ataque de arma cuerpo a cuerpo: +13 al golpe, alcance 15 pies, un objetivo. Impacto: 26 (3d12+7) de daño perforante." },
            { nombre: "Garra", descripcion: "Ataque de arma cuerpo a cuerpo: +13 al golpe, alcance 10 pies, un objetivo. Impacto: 16 (2d8+7) de daño cortante." },
            { nombre: "Aliento de Vapor (Recarga 5-6)", descripcion: "La tortuga exhala vapor en un cono de 60 pies. Toda criatura en esa área debe realizar una tirada de salvación de Constitución CD 18. Recibe 52 (15d6) de daño por fuego si falla, o la mitad si tiene éxito." }
        ],
        reacciones: []
    },
    drider: {
        id: "drider",
        nombre: "Drider",
        cr: "6",
        tipo: "Monstruosidad",
        tamaño: "Grande",
        alineamiento: "Caótico Malvado",
        stats: { fuerza: 16, destreza: 16, constitucion: 18, inteligencia: 13, sabiduria: 14, carisma: 12 },
        ca: 19,
        pg: "123 (13d10+52)",
        velocidad: "30 pies, trepar 30 pies",
        salvaciones: {},
        habilidades: { percepcion: +5, sigilo: +9 },
        sentidos: "Visión en la oscuridad 120 pies, Percepción pasiva 15",
        idiomas: ["Élfico", "Subcomún"],
        rasgos: [
            { nombre: "Caminar por Telarañas", descripcion: "El drider ignora las restricciones de movimiento causadas por telarañas." },
            { nombre: "Trepar", descripcion: "El drider puede trepar por superficies difíciles." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El drider realiza tres ataques: uno con su espada larga y dos con su arco largo." },
            { nombre: "Espada larga", descripcion: "Ataque de arma cuerpo a cuerpo: +6 al golpe, alcance 5 pies, un objetivo. Impacto: 7 (1d8+3) de daño cortante." },
            { nombre: "Arco largo", descripcion: "Ataque de arma a distancia: +6 al golpe, alcance 150/600 pies, un objetivo. Impacto: 7 (1d8+3) de daño perforante más 7 (2d6) de daño por veneno." }
        ],
        reacciones: []
    },
    dryad: {
        id: "dryad",
        nombre: "Dríada",
        cr: "1",
        tipo: "Fey",
        tamaño: "Mediano",
        alineamiento: "Neutral",
        stats: { fuerza: 10, destreza: 12, constitucion: 11, inteligencia: 14, sabiduria: 15, carisma: 18 },
        ca: 11,
        pg: "22 (5d8)",
        velocidad: "30 pies",
        salvaciones: {},
        habilidades: { percepcion: +4, sigilo: +3 },
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 14",
        idiomas: ["Común", "Élfico", "Silvano"],
        rasgos: [
            { nombre: "Comunión con la Naturaleza", descripcion: "La dríada puede comunicarse con bestias y plantas." }
        ],
        acciones: [
            { nombre: "Maza de club", descripcion: "Ataque de arma cuerpo a cuerpo: +2 al golpe, alcance 5 pies, un objetivo. Impacto: 2 (1d4) de daño contundente." },
            { nombre: "Encantar", descripcion: "La dríada apunta a una criatura dentro de 30 pies. El objetivo debe superar una CD 14 de Sabiduría o quedar encantado." },
            { nombre: "Invisibilidad", descripcion: "La dríada se vuelve invisible hasta que ataque o se concentre." }
        ],
        reacciones: []
    },
    duergar: {
        id: "duergar",
        nombre: "Duergar",
        cr: "1",
        tipo: "Humanoide",
        tamaño: "Mediano",
        alineamiento: "Legal Malvado",
        stats: { fuerza: 14, destreza: 11, constitucion: 14, inteligencia: 11, sabiduria: 10, carisma: 9 },
        ca: 16,
        pg: "26 (4d8+8)",
        velocidad: "25 pies",
        salvaciones: {},
        habilidades: {},
        sentidos: "Visión en la oscuridad 120 pies, Percepción pasiva 10",
        idiomas: ["Común", "Enano"],
        rasgos: [
            { nombre: "Resistencia Duergar", descripcion: "El duergar tiene ventaja en las tiradas de salvación contra veneno y hechizos." },
            { nombre: "Agrandar (Recarga 5-6)", descripcion: "El duergar se agranda mágicamente durante 1 minuto." }
        ],
        acciones: [
            { nombre: "Pico de guerra", descripcion: "Ataque de arma cuerpo a cuerpo: +4 al golpe, alcance 5 pies, un objetivo. Impacto: 6 (1d8+2) de daño perforante." },
            { nombre: "Jabalina", descripcion: "Ataque de arma a distancia: +4 al golpe, alcance 30/120 pies, un objetivo. Impacto: 5 (1d6+2) de daño perforante." },
            { nombre: "Invisibilidad", descripcion: "El duergar se vuelve invisible hasta que ataque o se concentre." }
        ],
        reacciones: []
    },
    earth_elemental: {
        id: "earth_elemental",
        nombre: "Elemental de Tierra",
        cr: "5",
        tipo: "Elemental",
        tamaño: "Grande",
        alineamiento: "Neutral",
        stats: { fuerza: 20, destreza: 8, constitucion: 20, inteligencia: 5, sabiduria: 10, carisma: 5 },
        ca: 17,
        pg: "126 (12d10+60)",
        velocidad: "30 pies, excavando 30 pies",
        salvaciones: {},
        habilidades: { percepcion: +3 },
        sentidos: "Visión en la oscuridad 60 pies, Sentido sísmico 60 pies, Percepción pasiva 13",
        idiomas: ["Terran"],
        rasgos: [
            { nombre: "Atravesar Tierra", descripcion: "El elemental puede moverse a través de tierra y piedra sin dejar rastro." },
            { nombre: "Sitio", descripcion: "El elemental inflige doble daño a objetos y estructuras." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El elemental realiza dos ataques de puñetazo." },
            { nombre: "Puñetazo", descripcion: "Ataque de arma cuerpo a cuerpo: +8 al golpe, alcance 10 pies, un objetivo. Impacto: 14 (2d8+5) de daño contundente." }
        ],
        reacciones: []
    },
    efreeti: {
        id: "efreeti",
        nombre: "Efreeti",
        cr: "11",
        tipo: "Elemental",
        tamaño: "Grande",
        alineamiento: "Legal Malvado",
        stats: { fuerza: 22, destreza: 12, constitucion: 24, inteligencia: 16, sabiduria: 15, carisma: 16 },
        ca: 17,
        pg: "200 (16d10+112)",
        velocidad: "40 pies, volando 60 pies",
        salvaciones: { inteligencia: +7, sabiduria: +6, carisma: +7 },
        habilidades: {},
        sentidos: "Visión en la oscuridad 120 pies, Percepción pasiva 12",
        idiomas: ["Común", "Ígneo"],
        rasgos: [
            { nombre: "Resistencia Mágica", descripcion: "El efreeti tiene ventaja en las tiradas de salvación contra hechizos." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El efreeti realiza dos ataques con su cimitarra o dos con su ataque de fuego." },
            { nombre: "Cimitarra", descripcion: "Ataque de arma cuerpo a cuerpo: +10 al golpe, alcance 5 pies, un objetivo. Impacto: 13 (2d6+6) de daño cortante más 7 (2d6) de daño por fuego." },
            { nombre: "Piroquinesis", descripcion: "El efreeti crea una pared de fuego de 60 pies." }
        ],
        reacciones: []
    },
    ettin: {
        id: "ettin",
        nombre: "Ettin",
        cr: "4",
        tipo: "Gigante",
        tamaño: "Grande",
        alineamiento: "Caótico Malvado",
        stats: { fuerza: 21, destreza: 8, constitucion: 17, inteligencia: 6, sabiduria: 10, carisma: 8 },
        ca: 12,
        pg: "85 (10d10+30)",
        velocidad: "40 pies",
        salvaciones: {},
        habilidades: { percepcion: +4 },
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 14",
        idiomas: ["Común", "Gigante"],
        rasgos: [
            { nombre: "Dos Cabezas", descripcion: "El ettin tiene ventaja en las pruebas de Percepción y en las tiradas de salvación contra ser cegado, ensordecido, aturdido o puesto inconsciente." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El ettin realiza dos ataques: uno con su hacha de batalla y otro con su mayal." },
            { nombre: "Hacha de batalla", descripcion: "Ataque de arma cuerpo a cuerpo: +7 al golpe, alcance 5 pies, un objetivo. Impacto: 14 (2d8+5) de daño cortante." },
            { nombre: "Mayal", descripcion: "Ataque de arma cuerpo a cuerpo: +7 al golpe, alcance 5 pies, un objetivo. Impacto: 14 (2d8+5) de daño contundente." }
        ],
        reacciones: []
    },
    fire_elemental: {
        id: "fire_elemental",
        nombre: "Elemental de Fuego",
        cr: "5",
        tipo: "Elemental",
        tamaño: "Grande",
        alineamiento: "Neutral",
        stats: { fuerza: 10, destreza: 17, constitucion: 16, inteligencia: 6, sabiduria: 10, carisma: 7 },
        ca: 13,
        pg: "102 (12d10+36)",
        velocidad: "50 pies",
        salvaciones: {},
        habilidades: {},
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 10",
        idiomas: ["Ígneo"],
        rasgos: [
            { nombre: "Forma de Fuego", descripcion: "El elemental puede moverse a través de un espacio de 1 pulgada." },
            { nombre: "Iluminación", descripcion: "El elemental arroja luz brillante en un radio de 30 pies." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El elemental realiza dos ataques de toque." },
            { nombre: "Toque", descripcion: "Ataque de arma cuerpo a cuerpo: +6 al golpe, alcance 5 pies, un objetivo. Impacto: 10 (2d6+3) de daño por fuego. Si el objetivo es una criatura u objeto inflamable, se prende fuego." }
        ],
        reacciones: []
    }
,
    flesh_golem: {
        id: "flesh_golem",
        nombre: "Gólem de Carne",
        cr: "5",
        tipo: "Constructo",
        tamaño: "Mediano",
        alineamiento: "No alineado",
        stats: { fuerza: 19, destreza: 9, constitucion: 18, inteligencia: 6, sabiduria: 10, carisma: 5 },
        ca: 9,
        pg: "93 (11d8+44)",
        velocidad: "30 pies",
        salvaciones: {},
        habilidades: {},
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 10",
        idiomas: [],
        rasgos: [
            { nombre: "Absorción de Rayo", descripcion: "Si el gólem recibe daño por rayo, no recibe daño y en su lugar recupera puntos de golpe iguales al daño." },
            { nombre: "Inmunidad a Armas no Mágicas", descripcion: "El gólem es inmune al daño de armas no mágicas." },
            { nombre: "Furia (Recarga 4-6)", descripcion: "Cuando el gólem recibe daño, entra en furia." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El gólem realiza dos ataques de puñetazo." },
            { nombre: "Puñetazo", descripcion: "Ataque de arma cuerpo a cuerpo: +7 al golpe, alcance 5 pies, un objetivo. Impacto: 13 (2d8+4) de daño contundente." }
        ],
        reacciones: []
    },
    frost_giant: {
        id: "frost_giant",
        nombre: "Gigante de Escarcha",
        cr: "8",
        tipo: "Gigante",
        tamaño: "Enorme",
        alineamiento: "Neutral Malvado",
        stats: { fuerza: 23, destreza: 9, constitucion: 21, inteligencia: 9, sabiduria: 10, carisma: 12 },
        ca: 15,
        pg: "138 (12d12+60)",
        velocidad: "40 pies",
        salvaciones: { constitucion: +8, sabiduria: +3, carisma: +4 },
        habilidades: { atletismo: +9, percepcion: +3 },
        sentidos: "Percepción pasiva 13",
        idiomas: ["Común", "Gigante"],
        rasgos: [],
        acciones: [
            { nombre: "Multiataque", descripcion: "El gigante realiza dos ataques con su hacha de batalla." },
            { nombre: "Hacha de batalla", descripcion: "Ataque de arma cuerpo a cuerpo: +9 al golpe, alcance 10 pies, un objetivo. Impacto: 19 (3d8+6) de daño cortante más 5 (1d6) de daño por frío." },
            { nombre: "Roca", descripcion: "Ataque de arma a distancia: +9 al golpe, alcance 60/240 pies, un objetivo. Impacto: 28 (4d10+6) de daño contundente." }
        ],
        reacciones: []
    },
    gargoyle: {
        id: "gargoyle",
        nombre: "Gárgola",
        cr: "2",
        tipo: "Elemental",
        tamaño: "Mediano",
        alineamiento: "Caótico Malvado",
        stats: { fuerza: 15, destreza: 11, constitucion: 16, inteligencia: 6, sabiduria: 11, carisma: 7 },
        ca: 15,
        pg: "52 (7d8+21)",
        velocidad: "30 pies, volando 60 pies",
        salvaciones: {},
        habilidades: {},
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 10",
        idiomas: ["Terran"],
        rasgos: [
            { nombre: "Falsa Apariencia", descripcion: "Mientras la gárgola permanezca quieta, es indistinguible de una estatua inanimada." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "La gárgola realiza dos ataques: uno con su mordisco y uno con sus garras." },
            { nombre: "Mordisco", descripcion: "Ataque de arma cuerpo a cuerpo: +4 al golpe, alcance 5 pies, un objetivo. Impacto: 5 (1d6+2) de daño perforante." },
            { nombre: "Garras", descripcion: "Ataque de arma cuerpo a cuerpo: +4 al golpe, alcance 5 pies, un objetivo. Impacto: 5 (1d6+2) de daño cortante." }
        ],
        reacciones: []
    },
    ghost: {
        id: "ghost",
        nombre: "Fantasma",
        cr: "4",
        tipo: "No muerto",
        tamaño: "Mediano",
        alineamiento: "Cualquier alineamiento",
        stats: { fuerza: 7, destreza: 13, constitucion: 10, inteligencia: 10, sabiduria: 12, carisma: 17 },
        ca: 11,
        pg: "45 (10d8)",
        velocidad: "0 pies, volando 40 pies",
        salvaciones: {},
        habilidades: {},
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 11",
        idiomas: ["Común"],
        rasgos: [
            { nombre: "Etherealidad", descripcion: "El fantasma puede moverse entre planos etéreo y material." },
            { nombre: "Posesión", descripcion: "El fantasma intenta poseer a una criatura." }
        ],
        acciones: [
            { nombre: "Toque", descripcion: "Ataque de arma cuerpo a cuerpo: +5 al golpe, alcance 5 pies, un objetivo. Impacto: 17 (4d6+3) de daño necrótico." },
            { nombre: "Envejecimiento", descripcion: "El fantasma apunta a una criatura. El objetivo envejece 1d4 x 10 años." },
            { nombre: "Gemido", descripcion: "El fantasma gime. Todas las criaturas dentro de 30 pies deben superar una CD 13 de Sabiduría o quedar asustadas." }
        ],
        reacciones: []
    },
    ghoul: {
        id: "ghoul",
        nombre: "Ghoul",
        cr: "1",
        tipo: "No muerto",
        tamaño: "Mediano",
        alineamiento: "Caótico Malvado",
        stats: { fuerza: 13, destreza: 15, constitucion: 10, inteligencia: 7, sabiduria: 10, carisma: 6 },
        ca: 12,
        pg: "22 (5d8)",
        velocidad: "30 pies",
        salvaciones: {},
        habilidades: {},
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 10",
        idiomas: ["Común"],
        rasgos: [],
        acciones: [
            { nombre: "Mordisco", descripcion: "Ataque de arma cuerpo a cuerpo: +2 al golpe, alcance 5 pies, un objetivo. Impacto: 9 (2d6+2) de daño perforante." },
            { nombre: "Garras", descripcion: "Ataque de arma cuerpo a cuerpo: +4 al golpe, alcance 5 pies, un objetivo. Impacto: 7 (2d4+2) de daño cortante. Si el objetivo es una criatura que no sea un no muerto, debe superar una CD 10 de Constitución o quedar paralizado." }
        ],
        reacciones: []
    },
    giant_ape: {
        id: "giant_ape",
        nombre: "Gorila Gigante",
        cr: "7",
        tipo: "Bestia",
        tamaño: "Enorme",
        alineamiento: "No alineado",
        stats: { fuerza: 23, destreza: 14, constitucion: 18, inteligencia: 7, sabiduria: 12, carisma: 7 },
        ca: 12,
        pg: "157 (15d12+60)",
        velocidad: "40 pies, trepar 40 pies",
        salvaciones: { fuerza: +9, constitucion: +7, sabiduria: +4 },
        habilidades: { atletismo: +9, percepcion: +4 },
        sentidos: "Percepción pasiva 14",
        idiomas: [],
        rasgos: [],
        acciones: [
            { nombre: "Multiataque", descripcion: "El gorila realiza dos ataques con sus puños." },
            { nombre: "Puño", descripcion: "Ataque de arma cuerpo a cuerpo: +9 al golpe, alcance 10 pies, un objetivo. Impacto: 22 (3d10+6) de daño contundente." },
            { nombre: "Roca", descripcion: "Ataque de arma a distancia: +9 al golpe, alcance 50/100 pies, un objetivo. Impacto: 30 (4d10+8) de daño contundente." }
        ],
        reacciones: []
    },
    giant_spider: {
        id: "giant_spider",
        nombre: "Araña Gigante",
        cr: "1",
        tipo: "Bestia",
        tamaño: "Grande",
        alineamiento: "No alineado",
        stats: { fuerza: 14, destreza: 16, constitucion: 12, inteligencia: 2, sabiduria: 11, carisma: 4 },
        ca: 14,
        pg: "26 (4d10+4)",
        velocidad: "30 pies, trepar 30 pies",
        salvaciones: {},
        habilidades: { sigilo: +7 },
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 10",
        idiomas: [],
        rasgos: [
            { nombre: "Caminar por Telarañas", descripcion: "La araña ignora las restricciones de movimiento causadas por telarañas." },
            { nombre: "Trepar", descripcion: "La araña puede trepar por superficies difíciles." }
        ],
        acciones: [
            { nombre: "Mordisco", descripcion: "Ataque de arma cuerpo a cuerpo: +5 al golpe, alcance 5 pies, un objetivo. Impacto: 7 (1d8+3) de daño perforante más 7 (2d6) de daño por veneno. El objetivo debe superar una CD 11 de Constitución o quedar envenenado." },
            { nombre: "Telaraña (Recarga 5-6)", descripcion: "La araña dispara telaraña a un objetivo. El objetivo debe superar una CD 12 de Destreza o quedar atrapado." }
        ],
        reacciones: []
    },
    glabrezu: {
        id: "glabrezu",
        nombre: "Glabrezu",
        cr: "9",
        tipo: "Infernal",
        tamaño: "Grande",
        alineamiento: "Caótico Malvado",
        stats: { fuerza: 20, destreza: 15, constitucion: 21, inteligencia: 19, sabiduria: 17, carisma: 16 },
        ca: 17,
        pg: "157 (15d10+75)",
        velocidad: "40 pies",
        salvaciones: { fuerza: +9, constitucion: +9, sabiduria: +7, carisma: +7 },
        habilidades: { enganio: +9, sigilo: +6 },
        sentidos: "Vista verdadera 120 pies, Percepción pasiva 13",
        idiomas: ["Abismal", "Telepatía 120 pies"],
        rasgos: [
            { nombre: "Resistencia Mágica", descripcion: "El glabrezu tiene ventaja en las tiradas de salvación contra hechizos." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El glabrezu realiza cuatro ataques: dos con sus pinzas y dos con sus puños." },
            { nombre: "Pinza", descripcion: "Ataque de arma cuerpo a cuerpo: +9 al golpe, alcance 10 pies, un objetivo. Impacto: 16 (2d10+5) de daño contundente." },
            { nombre: "Puño", descripcion: "Ataque de arma cuerpo a cuerpo: +9 al golpe, alcance 5 pies, un objetivo. Impacto: 7 (2d4+2) de daño contundente." }
        ],
        reacciones: []
    }
,
    gnoll: {
        id: "gnoll",
        nombre: "Gnoll",
        cr: "1/2",
        tipo: "Humanoide",
        tamaño: "Mediano",
        alineamiento: "Caótico Malvado",
        stats: { fuerza: 14, destreza: 12, constitucion: 11, inteligencia: 6, sabiduria: 10, carisma: 7 },
        ca: 15,
        pg: "22 (5d8)",
        velocidad: "30 pies",
        salvaciones: {},
        habilidades: {},
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 10",
        idiomas: ["Gnoll"],
        rasgos: [
            { nombre: "Rastro de Sangre", descripcion: "El gnoll tiene ventaja en los ataques cuerpo a cuerpo contra una criatura que no tenga todos sus puntos de golpe." }
        ],
        acciones: [
            { nombre: "Mordisco", descripcion: "Ataque de arma cuerpo a cuerpo: +4 al golpe, alcance 5 pies, un objetivo. Impacto: 4 (1d4+2) de daño perforante." },
            { nombre: "Lanza", descripcion: "Ataque de arma cuerpo a cuerpo o a distancia: +4 al golpe, alcance 5 pies o 20/60 pies, un objetivo. Impacto: 5 (1d6+2) de daño perforante." }
        ],
        reacciones: []
    },
    goblin: {
        id: "goblin",
        nombre: "Goblin",
        cr: "1/4",
        tipo: "Humanoide",
        tamaño: "Pequeño",
        alineamiento: "Neutral Malvado",
        stats: { fuerza: 8, destreza: 14, constitucion: 10, inteligencia: 10, sabiduria: 8, carisma: 8 },
        ca: 15,
        pg: "7 (2d6)",
        velocidad: "30 pies",
        salvaciones: {},
        habilidades: { sigilo: +6 },
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 9",
        idiomas: ["Común", "Goblin"],
        rasgos: [
            { nombre: "Huida Astuta", descripcion: "El goblin puede esconderse o retirarse como acción adicional." }
        ],
        acciones: [
            { nombre: "Espada corta", descripcion: "Ataque de arma cuerpo a cuerpo: +4 al golpe, alcance 5 pies, un objetivo. Impacto: 5 (1d6+2) de daño perforante." },
            { nombre: "Arco corto", descripcion: "Ataque de arma a distancia: +4 al golpe, alcance 80/320 pies, un objetivo. Impacto: 5 (1d6+2) de daño perforante." }
        ],
        reacciones: []
    },
    golem_iron: {
        id: "golem_iron",
        nombre: "Gólem de Hierro",
        cr: "16",
        tipo: "Constructo",
        tamaño: "Grande",
        alineamiento: "No alineado",
        stats: { fuerza: 24, destreza: 9, constitucion: 20, inteligencia: 3, sabiduria: 11, carisma: 1 },
        ca: 20,
        pg: "210 (20d10+100)",
        velocidad: "30 pies",
        salvaciones: {},
        habilidades: {},
        sentidos: "Visión en la oscuridad 120 pies, Percepción pasiva 10",
        idiomas: [],
        rasgos: [
            { nombre: "Armas Mágicas", descripcion: "Los ataques de arma del gólem son mágicos." },
            { nombre: "Absorción de Fuego", descripcion: "Si el gólem recibe daño por fuego, no recibe daño y en su lugar recupera puntos de golpe iguales al daño." },
            { nombre: "Inmunidad a Armas no Mágicas", descripcion: "El gólem es inmune al daño de armas no mágicas." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El gólem realiza dos ataques de espada." },
            { nombre: "Espada", descripcion: "Ataque de arma cuerpo a cuerpo: +13 al golpe, alcance 10 pies, un objetivo. Impacto: 20 (3d10+7) de daño cortante." },
            { nombre: "Aliento de Veneno (Recarga 5-6)", descripcion: "El gólem exhala gas venenoso en un cono de 15 pies. Toda criatura en esa área debe realizar una tirada de salvación de Constitución CD 19. Recibe 45 (10d8) de daño por veneno si falla, o la mitad si tiene éxito." }
        ],
        reacciones: []
    },
    gorgon: {
        id: "gorgon",
        nombre: "Gorgona",
        cr: "5",
        tipo: "Monstruosidad",
        tamaño: "Grande",
        alineamiento: "No alineado",
        stats: { fuerza: 20, destreza: 11, constitucion: 18, inteligencia: 2, sabiduria: 12, carisma: 7 },
        ca: 19,
        pg: "114 (12d10+48)",
        velocidad: "40 pies",
        salvaciones: {},
        habilidades: { percepcion: +4 },
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 14",
        idiomas: [],
        rasgos: [
            { nombre: "Carga", descripcion: "Si la gorgona se mueve al menos 20 pies hacia un objetivo y lo golpea, el objetivo recibe 9 (2d8) de daño adicional." }
        ],
        acciones: [
            { nombre: "Cornada", descripcion: "Ataque de arma cuerpo a cuerpo: +8 al golpe, alcance 5 pies, un objetivo. Impacto: 18 (2d12+5) de daño perforante." },
            { nombre: "Aliento Petrificante (Recarga 5-6)", descripcion: "La gorgona exhala gas petrificante en un cono de 30 pies. Toda criatura en esa área debe realizar una tirada de salvación de Constitución CD 13. Si falla, comienza a convertirse en piedra." }
        ],
        reacciones: []
    },
    gray_ooze: {
        id: "gray_ooze",
        nombre: "Moho Gris",
        cr: "1/2",
        tipo: "Moho",
        tamaño: "Mediano",
        alineamiento: "No alineado",
        stats: { fuerza: 12, destreza: 6, constitucion: 16, inteligencia: 1, sabiduria: 6, carisma: 2 },
        ca: 8,
        pg: "22 (3d8+9)",
        velocidad: "10 pies, trepar 10 pies",
        salvaciones: {},
        habilidades: { sigilo: +2 },
        sentidos: "Visión ciega 60 pies, Percepción pasiva 8",
        idiomas: [],
        rasgos: [
            { nombre: "Falsa Apariencia", descripcion: "Mientras el moho permanezca quieto, es indistinguible de una superficie húmeda." },
            { nombre: "Corrosión", descripcion: "Cualquier arma no mágica que golpee al moho se corroe." }
        ],
        acciones: [
            { nombre: "Pseudópodo", descripcion: "Ataque de arma cuerpo a cuerpo: +3 al golpe, alcance 5 pies, un objetivo. Impacto: 4 (1d6+1) de daño contundente más 7 (2d6) de daño por ácido." }
        ],
        reacciones: []
    },
    green_hag: {
        id: "green_hag",
        nombre: "Bruja Verde",
        cr: "3",
        tipo: "Fey",
        tamaño: "Mediano",
        alineamiento: "Neutral Malvado",
        stats: { fuerza: 18, destreza: 12, constitucion: 16, inteligencia: 13, sabiduria: 14, carisma: 14 },
        ca: 17,
        pg: "82 (11d8+33)",
        velocidad: "30 pies",
        salvaciones: {},
        habilidades: { arcana: +3, enganio: +4, percepcion: +4, sigilo: +3 },
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 14",
        idiomas: ["Común", "Draconico", "Silvano"],
        rasgos: [
            { nombre: "Imitar Voces", descripcion: "La bruja puede imitar voces humanoides." },
            { nombre: "Invisibilidad", descripcion: "La bruja puede volverse invisible." }
        ],
        acciones: [
            { nombre: "Garras", descripcion: "Ataque de arma cuerpo a cuerpo: +6 al golpe, alcance 5 pies, un objetivo. Impacto: 13 (2d8+4) de daño cortante." },
            { nombre: "Mirada Aterradora", descripcion: "La bruja apunta a una criatura dentro de 30 pies. El objetivo debe superar una CD 14 de Sabiduría o quedar asustado." }
        ],
        reacciones: []
    },
    grick: {
        id: "grick",
        nombre: "Grick",
        cr: "2",
        tipo: "Monstruosidad",
        tamaño: "Mediano",
        alineamiento: "Neutral",
        stats: { fuerza: 14, destreza: 14, constitucion: 11, inteligencia: 3, sabiduria: 14, carisma: 5 },
        ca: 14,
        pg: "27 (6d8)",
        velocidad: "30 pies, trepar 30 pies",
        salvaciones: {},
        habilidades: {},
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 12",
        idiomas: [],
        rasgos: [
            { nombre: "Camuflaje en la Roca", descripcion: "El grick tiene ventaja en Sigilo en entornos rocosos." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El grick realiza un ataque con sus tentáculos y uno con su mordisco." },
            { nombre: "Tentáculos", descripcion: "Ataque de arma cuerpo a cuerpo: +4 al golpe, alcance 10 pies, un objetivo. Impacto: 9 (2d6+2) de daño cortante." },
            { nombre: "Mordisco", descripcion: "Ataque de arma cuerpo a cuerpo: +4 al golpe, alcance 5 pies, un objetivo. Impacto: 5 (1d6+2) de daño perforante." }
        ],
        reacciones: []
    },
    griffon: {
        id: "griffon",
        nombre: "Grifo",
        cr: "2",
        tipo: "Monstruosidad",
        tamaño: "Grande",
        alineamiento: "No alineado",
        stats: { fuerza: 18, destreza: 15, constitucion: 16, inteligencia: 2, sabiduria: 13, carisma: 8 },
        ca: 12,
        pg: "59 (7d10+21)",
        velocidad: "30 pies, volando 80 pies",
        salvaciones: {},
        habilidades: { percepcion: +5 },
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 15",
        idiomas: [],
        rasgos: [
            { nombre: "Vista Aguileña", descripcion: "El grifo tiene ventaja en las pruebas de Percepción que dependan de la vista." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El grifo realiza dos ataques: uno con su pico y uno con sus garras." },
            { nombre: "Pico", descripcion: "Ataque de arma cuerpo a cuerpo: +6 al golpe, alcance 5 pies, un objetivo. Impacto: 8 (1d8+4) de daño perforante." },
            { nombre: "Garras", descripcion: "Ataque de arma cuerpo a cuerpo: +6 al golpe, alcance 5 pies, un objetivo. Impacto: 11 (2d6+4) de daño cortante." }
        ],
        reacciones: []
    },
    guardian_naga: {
        id: "guardian_naga",
        nombre: "Naga Guardián",
        cr: "10",
        tipo: "Monstruosidad",
        tamaño: "Grande",
        alineamiento: "Legal Bueno",
        stats: { fuerza: 19, destreza: 18, constitucion: 16, inteligencia: 16, sabiduria: 19, carisma: 18 },
        ca: 18,
        pg: "127 (15d10+45)",
        velocidad: "40 pies",
        salvaciones: { destreza: +8, constitucion: +7, inteligencia: +7, sabiduria: +8, carisma: +8 },
        habilidades: {},
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 14",
        idiomas: ["Celestial", "Común"],
        rasgos: [
            { nombre: "Lanzamiento de conjuros", descripcion: "La naga es lanzadora de conjuros de nivel 11. Su característica es Sabiduría (salvación CD 16). Tiene los siguientes conjuros: Trucos: llama sagrada, luz, taumaturgia; Nivel 1: bendecir, curar heridas, santuario; Nivel 2: castigo, restauración menor; Nivel 3: luz diurna, revivir; Nivel 4: libertad de movimiento, guardianes; Nivel 5: curar heridas en grupo." }
        ],
        acciones: [
            { nombre: "Mordisco", descripcion: "Ataque de arma cuerpo a cuerpo: +8 al golpe, alcance 10 pies, un objetivo. Impacto: 9 (1d8+5) de daño perforante más 10 (3d6) de daño por veneno." },
            { nombre: "Escupir Veneno", descripcion: "Ataque de arma a distancia: +8 al golpe, alcance 15/30 pies, un objetivo. Impacto: 21 (6d6) de daño por veneno." }
        ],
        reacciones: []
    }
,
    harpy: {
        id: "harpy",
        nombre: "Arpía",
        cr: "1",
        tipo: "Monstruosidad",
        tamaño: "Mediano",
        alineamiento: "Caótico Malvado",
        stats: { fuerza: 12, destreza: 13, constitucion: 12, inteligencia: 7, sabiduria: 10, carisma: 13 },
        ca: 11,
        pg: "38 (7d8+7)",
        velocidad: "20 pies, volando 40 pies",
        salvaciones: {},
        habilidades: {},
        sentidos: "Percepción pasiva 10",
        idiomas: ["Común"],
        rasgos: [],
        acciones: [
            { nombre: "Multiataque", descripcion: "La arpía realiza dos ataques: uno con sus garras y uno con su club." },
            { nombre: "Garras", descripcion: "Ataque de arma cuerpo a cuerpo: +3 al golpe, alcance 5 pies, un objetivo. Impacto: 6 (2d4+1) de daño cortante." },
            { nombre: "Club", descripcion: "Ataque de arma cuerpo a cuerpo: +3 al golpe, alcance 5 pies, un objetivo. Impacto: 3 (1d4+1) de daño contundente." },
            { nombre: "Canto Atrayente", descripcion: "La arpía canta. Todas las criaturas dentro de 300 pies que puedan oírla deben superar una CD 11 de Sabiduría o quedar encantadas." }
        ],
        reacciones: []
    },
    hell_hound: {
        id: "hell_hound",
        nombre: "Sabueso Infernal",
        cr: "3",
        tipo: "Infernal",
        tamaño: "Mediano",
        alineamiento: "Legal Malvado",
        stats: { fuerza: 17, destreza: 12, constitucion: 14, inteligencia: 6, sabiduria: 13, carisma: 6 },
        ca: 15,
        pg: "45 (7d8+14)",
        velocidad: "50 pies",
        salvaciones: {},
        habilidades: { percepcion: +5 },
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 15",
        idiomas: ["Infernal"],
        rasgos: [
            { nombre: "Olfato Agudo", descripcion: "El sabueso tiene ventaja en las pruebas de Percepción que dependan del olfato." }
        ],
        acciones: [
            { nombre: "Mordisco", descripcion: "Ataque de arma cuerpo a cuerpo: +5 al golpe, alcance 5 pies, un objetivo. Impacto: 7 (1d8+3) de daño perforante más 7 (2d6) de daño por fuego." },
            { nombre: "Aliento de Fuego (Recarga 5-6)", descripcion: "El sabueso exhala fuego en un cono de 15 pies. Toda criatura en esa área debe realizar una tirada de salvación de Destreza CD 12. Recibe 21 (6d6) de daño por fuego si falla, o la mitad si tiene éxito." }
        ],
        reacciones: []
    },
    hezrou: {
        id: "hezrou",
        nombre: "Hezrou",
        cr: "8",
        tipo: "Infernal",
        tamaño: "Grande",
        alineamiento: "Caótico Malvado",
        stats: { fuerza: 19, destreza: 17, constitucion: 20, inteligencia: 5, sabiduria: 12, carisma: 13 },
        ca: 16,
        pg: "136 (13d10+65)",
        velocidad: "30 pies",
        salvaciones: { fuerza: +7, constitucion: +8, sabiduria: +4 },
        habilidades: {},
        sentidos: "Visión en la oscuridad 120 pies, Percepción pasiva 11",
        idiomas: ["Abismal", "Telepatía 120 pies"],
        rasgos: [
            { nombre: "Resistencia Mágica", descripcion: "El hezrou tiene ventaja en las tiradas de salvación contra hechizos." },
            { nombre: "Apestoso", descripcion: "Cualquier criatura que comience su turno dentro de 10 pies del hezrou debe superar una CD 14 de Constitución o quedar envenenada." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El hezrou realiza tres ataques: uno con su mordisco y dos con sus garras." },
            { nombre: "Mordisco", descripcion: "Ataque de arma cuerpo a cuerpo: +7 al golpe, alcance 5 pies, un objetivo. Impacto: 15 (2d10+4) de daño perforante." },
            { nombre: "Garra", descripcion: "Ataque de arma cuerpo a cuerpo: +7 al golpe, alcance 5 pies, un objetivo. Impacto: 11 (2d6+4) de daño cortante." }
        ],
        reacciones: []
    },
    hill_giant: {
        id: "hill_giant",
        nombre: "Gigante de las Colinas",
        cr: "5",
        tipo: "Gigante",
        tamaño: "Enorme",
        alineamiento: "Caótico Malvado",
        stats: { fuerza: 21, destreza: 8, constitucion: 19, inteligencia: 5, sabiduria: 9, carisma: 6 },
        ca: 13,
        pg: "105 (10d12+40)",
        velocidad: "40 pies",
        salvaciones: {},
        habilidades: { percepcion: +2 },
        sentidos: "Percepción pasiva 12",
        idiomas: ["Gigante"],
        rasgos: [],
        acciones: [
            { nombre: "Multiataque", descripcion: "El gigante realiza dos ataques con su gran garrote." },
            { nombre: "Gran garrote", descripcion: "Ataque de arma cuerpo a cuerpo: +8 al golpe, alcance 10 pies, un objetivo. Impacto: 18 (3d8+5) de daño contundente." },
            { nombre: "Roca", descripcion: "Ataque de arma a distancia: +8 al golpe, alcance 60/240 pies, un objetivo. Impacto: 21 (3d10+5) de daño contundente." }
        ],
        reacciones: []
    },
    hippogriff: {
        id: "hippogriff",
        nombre: "Hipogrifo",
        cr: "1",
        tipo: "Monstruosidad",
        tamaño: "Grande",
        alineamiento: "No alineado",
        stats: { fuerza: 17, destreza: 13, constitucion: 13, inteligencia: 2, sabiduria: 12, carisma: 8 },
        ca: 11,
        pg: "19 (3d10+3)",
        velocidad: "40 pies, volando 60 pies",
        salvaciones: {},
        habilidades: { percepcion: +5 },
        sentidos: "Percepción pasiva 15",
        idiomas: [],
        rasgos: [],
        acciones: [
            { nombre: "Multiataque", descripcion: "El hipogrifo realiza dos ataques: uno con su pico y uno con sus garras." },
            { nombre: "Pico", descripcion: "Ataque de arma cuerpo a cuerpo: +5 al golpe, alcance 5 pies, un objetivo. Impacto: 8 (1d10+3) de daño perforante." },
            { nombre: "Garras", descripcion: "Ataque de arma cuerpo a cuerpo: +5 al golpe, alcance 5 pies, un objetivo. Impacto: 10 (2d6+3) de daño cortante." }
        ],
        reacciones: []
    },
    hobgoblin: {
        id: "hobgoblin",
        nombre: "Hobgoblin",
        cr: "1/2",
        tipo: "Humanoide",
        tamaño: "Mediano",
        alineamiento: "Legal Malvado",
        stats: { fuerza: 13, destreza: 12, constitucion: 12, inteligencia: 11, sabiduria: 10, carisma: 9 },
        ca: 18,
        pg: "11 (2d8+2)",
        velocidad: "30 pies",
        salvaciones: {},
        habilidades: {},
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 10",
        idiomas: ["Común", "Goblin"],
        rasgos: [
            { nombre: "Ventaja Marcial", descripcion: "Una vez por turno, el hobgoblin inflige 7 (2d6) de daño adicional cuando golpea a un objetivo con un aliado." }
        ],
        acciones: [
            { nombre: "Espada larga", descripcion: "Ataque de arma cuerpo a cuerpo: +3 al golpe, alcance 5 pies, un objetivo. Impacto: 5 (1d8+1) de daño cortante." },
            { nombre: "Arco largo", descripcion: "Ataque de arma a distancia: +3 al golpe, alcance 150/600 pies, un objetivo. Impacto: 5 (1d8+1) de daño perforante." }
        ],
        reacciones: []
    },
    homunculus: {
        id: "homunculus",
        nombre: "Homúnculo",
        cr: "0",
        tipo: "Constructo",
        tamaño: "Diminuto",
        alineamiento: "Neutral",
        stats: { fuerza: 4, destreza: 15, constitucion: 11, inteligencia: 10, sabiduria: 10, carisma: 7 },
        ca: 13,
        pg: "5 (2d4)",
        velocidad: "20 pies, volando 40 pies",
        salvaciones: {},
        habilidades: {},
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 10",
        idiomas: ["Común"],
        rasgos: [
            { nombre: "Vínculo Telepático", descripcion: "El homúnculo comparte un vínculo telepático con su creador." }
        ],
        acciones: [
            { nombre: "Mordisco", descripcion: "Ataque de arma cuerpo a cuerpo: +4 al golpe, alcance 5 pies, un objetivo. Impacto: 1 de daño perforante más 5 (2d4) de daño por veneno." }
        ],
        reacciones: []
    },
    hydra: {
        id: "hydra",
        nombre: "Hidra",
        cr: "8",
        tipo: "Monstruosidad",
        tamaño: "Enorme",
        alineamiento: "No alineado",
        stats: { fuerza: 20, destreza: 12, constitucion: 20, inteligencia: 2, sabiduria: 10, carisma: 7 },
        ca: 15,
        pg: "172 (15d12+75)",
        velocidad: "30 pies, nadando 30 pies",
        salvaciones: {},
        habilidades: { percepcion: +6 },
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 16",
        idiomas: [],
        rasgos: [
            { nombre: "Cabezas", descripcion: "La hidra tiene cinco cabezas. Mientras tenga más de una, tiene ventaja en las tiradas de salvación." },
            { nombre: "Regeneración de Cabezas", descripcion: "Al final de su turno, la hidra recupera una cabeza por cada 25 puntos de daño que haya recibido." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "La hidra realiza tantos ataques de mordisco como cabezas tenga." },
            { nombre: "Mordisco", descripcion: "Ataque de arma cuerpo a cuerpo: +8 al golpe, alcance 10 pies, un objetivo. Impacto: 10 (1d10+5) de daño perforante." }
        ],
        reacciones: []
    },
    invisible_stalker: {
        id: "invisible_stalker",
        nombre: "Acechador Invisible",
        cr: "6",
        tipo: "Elemental",
        tamaño: "Mediano",
        alineamiento: "Neutral",
        stats: { fuerza: 16, destreza: 19, constitucion: 14, inteligencia: 10, sabiduria: 15, carisma: 11 },
        ca: 14,
        pg: "104 (16d8+32)",
        velocidad: "50 pies, volando 50 pies",
        salvaciones: {},
        habilidades: { percepcion: +8, sigilo: +10 },
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 18",
        idiomas: ["Aire", "Común"],
        rasgos: [
            { nombre: "Invisibilidad", descripcion: "El acechador es invisible mágicamente." },
            { nombre: "Rastreo Implacable", descripcion: "El acechador conoce la dirección de su presa designada." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El acechador realiza dos ataques con sus garras." },
            { nombre: "Garra", descripcion: "Ataque de arma cuerpo a cuerpo: +6 al golpe, alcance 5 pies, un objetivo. Impacto: 14 (2d8+3) de daño cortante." }
        ],
        reacciones: []
    }
,
    iron_golem: {
        id: "iron_golem",
        nombre: "Gólem de Hierro",
        cr: "16",
        tipo: "Constructo",
        tamaño: "Grande",
        alineamiento: "No alineado",
        stats: { fuerza: 24, destreza: 9, constitucion: 20, inteligencia: 3, sabiduria: 11, carisma: 1 },
        ca: 20,
        pg: "210 (20d10+100)",
        velocidad: "30 pies",
        salvaciones: {},
        habilidades: {},
        sentidos: "Visión en la oscuridad 120 pies, Percepción pasiva 10",
        idiomas: [],
        rasgos: [
            { nombre: "Armas Mágicas", descripcion: "Los ataques de arma del gólem son mágicos." },
            { nombre: "Absorción de Fuego", descripcion: "Si el gólem recibe daño por fuego, no recibe daño y en su lugar recupera puntos de golpe iguales al daño." },
            { nombre: "Inmunidad a Armas no Mágicas", descripcion: "El gólem es inmune al daño de armas no mágicas." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El gólem realiza dos ataques de espada." },
            { nombre: "Espada", descripcion: "Ataque de arma cuerpo a cuerpo: +13 al golpe, alcance 10 pies, un objetivo. Impacto: 20 (3d10+7) de daño cortante." },
            { nombre: "Aliento de Veneno (Recarga 5-6)", descripcion: "El gólem exhala gas venenoso en un cono de 15 pies. Toda criatura en esa área debe realizar una tirada de salvación de Constitución CD 19. Recibe 45 (10d8) de daño por veneno si falla, o la mitad si tiene éxito." }
        ],
        reacciones: []
    },
    kobold: {
        id: "kobold",
        nombre: "Kobold",
        cr: "1/8",
        tipo: "Humanoide",
        tamaño: "Pequeño",
        alineamiento: "Legal Malvado",
        stats: { fuerza: 7, destreza: 15, constitucion: 9, inteligencia: 8, sabiduria: 7, carisma: 8 },
        ca: 12,
        pg: "5 (2d6-2)",
        velocidad: "30 pies",
        salvaciones: {},
        habilidades: {},
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 8",
        idiomas: ["Común", "Draconico"],
        rasgos: [
            { nombre: "Sensibilidad a la Luz Solar", descripcion: "El kobold tiene desventaja en las tiradas de ataque bajo la luz solar." },
            { nombre: "Trabajo en Equipo", descripcion: "El kobold tiene ventaja en las tiradas de ataque cuando tiene un aliado a 5 pies del objetivo." }
        ],
        acciones: [
            { nombre: "Daga", descripcion: "Ataque de arma cuerpo a cuerpo: +4 al golpe, alcance 5 pies, un objetivo. Impacto: 4 (1d4+2) de daño perforante." },
            { nombre: "Honda", descripcion: "Ataque de arma a distancia: +4 al golpe, alcance 30/120 pies, un objetivo. Impacto: 4 (1d4+2) de daño contundente." }
        ],
        reacciones: []
    },
    kraken: {
        id: "kraken",
        nombre: "Kraken",
        cr: "23",
        tipo: "Monstruosidad",
        tamaño: "Gigantesco",
        alineamiento: "Caótico Malvado",
        stats: { fuerza: 30, destreza: 11, constitucion: 25, inteligencia: 22, sabiduria: 18, carisma: 20 },
        ca: 18,
        pg: "472 (27d20+189)",
        velocidad: "20 pies, nadando 60 pies",
        salvaciones: { fuerza: +17, destreza: +7, constitucion: +14, inteligencia: +13, sabiduria: +11 },
        habilidades: {},
        sentidos: "Vista verdadera 120 pies, Percepción pasiva 14",
        idiomas: ["Común", "Infernal"],
        rasgos: [
            { nombre: "Anfibio", descripcion: "El kraken puede respirar aire y agua." },
            { nombre: "Resistencia Legendaria (3/Día)", descripcion: "Si el kraken falla una tirada de salvación, puede elegir tener éxito en su lugar." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El kraken realiza tres ataques: uno con su mordisco y dos con sus tentáculos." },
            { nombre: "Mordisco", descripcion: "Ataque de arma cuerpo a cuerpo: +17 al golpe, alcance 10 pies, un objetivo. Impacto: 23 (3d8+10) de daño perforante." },
            { nombre: "Tentáculo", descripcion: "Ataque de arma cuerpo a cuerpo: +17 al golpe, alcance 30 pies, un objetivo. Impacto: 20 (3d6+10) de daño contundente." },
            { nombre: "Tormenta", descripcion: "El kraken crea una tormenta en un radio de 1 milla." }
        ],
        reacciones: []
    },
    lamia: {
        id: "lamia",
        nombre: "Lamia",
        cr: "4",
        tipo: "Monstruosidad",
        tamaño: "Grande",
        alineamiento: "Caótico Malvado",
        stats: { fuerza: 16, destreza: 13, constitucion: 15, inteligencia: 14, sabiduria: 15, carisma: 16 },
        ca: 13,
        pg: "97 (13d10+26)",
        velocidad: "30 pies",
        salvaciones: {},
        habilidades: { enganio: +7, perspicacia: +4, sigilo: +3 },
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 12",
        idiomas: ["Abismal", "Común"],
        rasgos: [
            { nombre: "Lanzamiento de conjuros innato", descripcion: "La lamia puede lanzar los siguientes conjuros de forma innata: A voluntad: disfrazarse, imagen silenciosa; 3/día: encantar persona, hipnotizar; 1/día: geas, sueño." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "La lamia realiza dos ataques: uno con sus garras y uno con su daga." },
            { nombre: "Garras", descripcion: "Ataque de arma cuerpo a cuerpo: +5 al golpe, alcance 5 pies, un objetivo. Impacto: 13 (2d8+4) de daño cortante." },
            { nombre: "Daga", descripcion: "Ataque de arma cuerpo a cuerpo o a distancia: +5 al golpe, alcance 5 pies o 20/60 pies, un objetivo. Impacto: 5 (1d4+3) de daño perforante." }
        ],
        reacciones: []
    },
    lich: {
        id: "lich",
        nombre: "Lich",
        cr: "21",
        tipo: "No muerto",
        tamaño: "Mediano",
        alineamiento: "Cualquier malvado",
        stats: { fuerza: 11, destreza: 16, constitucion: 16, inteligencia: 20, sabiduria: 14, carisma: 16 },
        ca: 17,
        pg: "135 (18d8+54)",
        velocidad: "30 pies",
        salvaciones: { constitucion: +10, inteligencia: +12, sabiduria: +9 },
        habilidades: { arcana: +19, historia: +12, percepcion: +9, sigilo: +10 },
        sentidos: "Vista verdadera 120 pies, Percepción pasiva 19",
        idiomas: ["Común", "Draconico"],
        rasgos: [
            { nombre: "Resistencia Legendaria (3/Día)", descripcion: "Si el lich falla una tirada de salvación, puede elegir tener éxito en su lugar." },
            { nombre: "Lanzamiento de conjuros", descripcion: "El lich es lanzador de conjuros de nivel 18. Su característica es Inteligencia (salvación CD 20). Tiene los siguientes conjuros preparados: Trucos: toque helado, luz, mano de mago, rayo de escarcha; Nivel 1: detección de magia, escudo, proyectil mágico; Nivel 2: imagen especular, invisibilidad; Nivel 3: bola de fuego, contramagia; Nivel 4: puerta dimensional, muro de fuego; Nivel 5: cono de frío, escudriñar; Nivel 6: desintegrar; Nivel 7: dedo de la muerte; Nivel 8: palabra de poder aturdidora; Nivel 9: parar el tiempo." }
        ],
        acciones: [
            { nombre: "Toque Paralizante", descripcion: "Ataque de arma cuerpo a cuerpo: +12 al golpe, alcance 5 pies, un objetivo. Impacto: 10 (3d6) de daño por frío. El objetivo debe superar una CD 18 de Constitución o quedar paralizado." }
        ],
        reacciones: []
    },
    lizardfolk: {
        id: "lizardfolk",
        nombre: "Hombre Lagarto",
        cr: "1/2",
        tipo: "Humanoide",
        tamaño: "Mediano",
        alineamiento: "Neutral",
        stats: { fuerza: 15, destreza: 10, constitucion: 13, inteligencia: 7, sabiduria: 12, carisma: 7 },
        ca: 15,
        pg: "22 (4d8+4)",
        velocidad: "30 pies, nadando 30 pies",
        salvaciones: {},
        habilidades: { percepcion: +3, sigilo: +4, supervivencia: +5 },
        sentidos: "Percepción pasiva 13",
        idiomas: ["Dragón"],
        rasgos: [
            { nombre: "Contener Respiración", descripcion: "El hombre lagarto puede contener la respiración durante 15 minutos." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El hombre lagarto realiza dos ataques: uno con su mordisco y uno con su garrote." },
            { nombre: "Mordisco", descripcion: "Ataque de arma cuerpo a cuerpo: +4 al golpe, alcance 5 pies, un objetivo. Impacto: 5 (1d6+2) de daño perforante." },
            { nombre: "Garrote", descripcion: "Ataque de arma cuerpo a cuerpo: +4 al golpe, alcance 5 pies, un objetivo. Impacto: 5 (1d6+2) de daño contundente." }
        ],
        reacciones: []
    },
    manticore: {
        id: "manticore",
        nombre: "Mantícora",
        cr: "3",
        tipo: "Monstruosidad",
        tamaño: "Grande",
        alineamiento: "Legal Malvado",
        stats: { fuerza: 17, destreza: 16, constitucion: 17, inteligencia: 7, sabiduria: 12, carisma: 8 },
        ca: 14,
        pg: "68 (8d10+24)",
        velocidad: "30 pies, volando 50 pies",
        salvaciones: {},
        habilidades: {},
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 11",
        idiomas: ["Común"],
        rasgos: [],
        acciones: [
            { nombre: "Multiataque", descripcion: "La mantícora realiza tres ataques: uno con su mordisco y dos con sus garras, o tres con sus púas." },
            { nombre: "Mordisco", descripcion: "Ataque de arma cuerpo a cuerpo: +5 al golpe, alcance 5 pies, un objetivo. Impacto: 7 (1d8+3) de daño perforante." },
            { nombre: "Garra", descripcion: "Ataque de arma cuerpo a cuerpo: +5 al golpe, alcance 5 pies, un objetivo. Impacto: 6 (1d6+3) de daño cortante." },
            { nombre: "Púa", descripcion: "Ataque de arma a distancia: +5 al golpe, alcance 100/200 pies, un objetivo. Impacto: 7 (1d8+3) de daño perforante." }
        ],
        reacciones: []
    },
    medusa: {
        id: "medusa",
        nombre: "Medusa",
        cr: "6",
        tipo: "Monstruosidad",
        tamaño: "Mediano",
        alineamiento: "Legal Malvado",
        stats: { fuerza: 10, destreza: 15, constitucion: 16, inteligencia: 12, sabiduria: 13, carisma: 15 },
        ca: 15,
        pg: "127 (17d8+51)",
        velocidad: "30 pies",
        salvaciones: {},
        habilidades: { enganio: +5, perspicacia: +4, percepcion: +4, sigilo: +5 },
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 14",
        idiomas: ["Común"],
        rasgos: [
            { nombre: "Mirada Petrificante", descripcion: "Si una criatura comienza su turno dentro de 30 pies de la medusa y puede verla, debe realizar una tirada de salvación de Constitución CD 14. Si falla, comienza a convertirse en piedra." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "La medusa realiza tres ataques: uno con su cabello de serpiente y dos con su espada corta." },
            { nombre: "Cabello de serpiente", descripcion: "Ataque de arma cuerpo a cuerpo: +5 al golpe, alcance 5 pies, un objetivo. Impacto: 4 (1d4+2) de daño perforante más 10 (3d6) de daño por veneno." },
            { nombre: "Espada corta", descripcion: "Ataque de arma cuerpo a cuerpo: +5 al golpe, alcance 5 pies, un objetivo. Impacto: 5 (1d6+2) de daño perforante." },
            { nombre: "Arco largo", descripcion: "Ataque de arma a distancia: +5 al golpe, alcance 150/600 pies, un objetivo. Impacto: 6 (1d8+2) de daño perforante." }
        ],
        reacciones: []
    }
,
    mummy: {
        id: "mummy",
        nombre: "Momia",
        cr: "3",
        tipo: "No muerto",
        tamaño: "Mediano",
        alineamiento: "Legal Malvado",
        stats: { fuerza: 16, destreza: 8, constitucion: 15, inteligencia: 6, sabiduria: 10, carisma: 12 },
        ca: 11,
        pg: "58 (9d8+18)",
        velocidad: "20 pies",
        salvaciones: { sabiduria: +2 },
        habilidades: {},
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 10",
        idiomas: ["Común"],
        rasgos: [
            { nombre: "Maldición de la Momia", descripcion: "La momia maldice a la criatura que la golpea." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "La momia puede usar su Mirada Aterradora y realizar un ataque de puñetazo." },
            { nombre: "Puñetazo", descripcion: "Ataque de arma cuerpo a cuerpo: +5 al golpe, alcance 5 pies, un objetivo. Impacto: 11 (2d6+4) de daño contundente más 10 (3d6) de daño necrótico." },
            { nombre: "Mirada Aterradora", descripcion: "La momia apunta a una criatura dentro de 60 pies. El objetivo debe superar una CD 11 de Sabiduría o quedar asustado." }
        ],
        reacciones: []
    },
    mummy_lord: {
        id: "mummy_lord",
        nombre: "Señor de las Momias",
        cr: "15",
        tipo: "No muerto",
        tamaño: "Mediano",
        alineamiento: "Legal Malvado",
        stats: { fuerza: 18, destreza: 10, constitucion: 17, inteligencia: 11, sabiduria: 18, carisma: 16 },
        ca: 17,
        pg: "97 (13d8+39)",
        velocidad: "20 pies",
        salvaciones: { constitucion: +8, inteligencia: +5, sabiduria: +9, carisma: +8 },
        habilidades: { historia: +5, religion: +5 },
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 14",
        idiomas: ["Común"],
        rasgos: [
            { nombre: "Resistencia Mágica", descripcion: "El señor de las momias tiene ventaja en las tiradas de salvación contra hechizos." },
            { nombre: "Lanzamiento de conjuros", descripcion: "El señor de las momias es lanzador de conjuros de nivel 10. Su característica es Sabiduría (salvación CD 17)." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El señor de las momias puede usar su Mirada Aterradora y realizar un ataque de puñetazo." },
            { nombre: "Puñetazo", descripcion: "Ataque de arma cuerpo a cuerpo: +9 al golpe, alcance 5 pies, un objetivo. Impacto: 14 (3d6+4) de daño contundente más 21 (6d6) de daño necrótico." }
        ],
        reacciones: []
    },
    night_hag: {
        id: "night_hag",
        nombre: "Bruja Nocturna",
        cr: "5",
        tipo: "Infernal",
        tamaño: "Mediano",
        alineamiento: "Neutral Malvado",
        stats: { fuerza: 18, destreza: 15, constitucion: 16, inteligencia: 16, sabiduria: 14, carisma: 16 },
        ca: 17,
        pg: "112 (15d8+45)",
        velocidad: "30 pies",
        salvaciones: { constitucion: +6, sabiduria: +5, carisma: +6 },
        habilidades: { enganio: +6, perspicacia: +5, percepcion: +5, sigilo: +5 },
        sentidos: "Visión en la oscuridad 120 pies, Percepción pasiva 15",
        idiomas: ["Abismal", "Común", "Infernal"],
        rasgos: [
            { nombre: "Resistencia Mágica", descripcion: "La bruja tiene ventaja en las tiradas de salvación contra hechizos." },
            { nombre: "Etherealidad", descripcion: "La bruja puede moverse entre planos etéreo y material." }
        ],
        acciones: [
            { nombre: "Garras", descripcion: "Ataque de arma cuerpo a cuerpo: +7 al golpe, alcance 5 pies, un objetivo. Impacto: 13 (2d8+4) de daño cortante." },
            { nombre: "Cambio de Forma", descripcion: "La bruja se transforma en un humanoide." },
            { nombre: "Pesadilla", descripcion: "La bruja visita los sueños de una criatura." }
        ],
        reacciones: []
    },
    ogre: {
        id: "ogre",
        nombre: "Ogro",
        cr: "2",
        tipo: "Gigante",
        tamaño: "Grande",
        alineamiento: "Caótico Malvado",
        stats: { fuerza: 19, destreza: 8, constitucion: 16, inteligencia: 5, sabiduria: 7, carisma: 7 },
        ca: 11,
        pg: "59 (7d10+21)",
        velocidad: "40 pies",
        salvaciones: {},
        habilidades: {},
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 8",
        idiomas: ["Común", "Gigante"],
        rasgos: [],
        acciones: [
            { nombre: "Gran garrote", descripcion: "Ataque de arma cuerpo a cuerpo: +6 al golpe, alcance 5 pies, un objetivo. Impacto: 13 (2d8+4) de daño contundente." },
            { nombre: "Jabalina", descripcion: "Ataque de arma cuerpo a cuerpo o a distancia: +6 al golpe, alcance 5 pies o 30/120 pies, un objetivo. Impacto: 11 (2d6+4) de daño perforante." }
        ],
        reacciones: []
    },
    orc: {
        id: "orc",
        nombre: "Orco",
        cr: "1/2",
        tipo: "Humanoide",
        tamaño: "Mediano",
        alineamiento: "Caótico Malvado",
        stats: { fuerza: 16, destreza: 12, constitucion: 16, inteligencia: 7, sabiduria: 11, carisma: 10 },
        ca: 13,
        pg: "15 (2d8+6)",
        velocidad: "30 pies",
        salvaciones: {},
        habilidades: { intimidacion: +2 },
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 10",
        idiomas: ["Común", "Orco"],
        rasgos: [
            { nombre: "Agresivo", descripcion: "El orco puede moverse hacia un enemigo como acción adicional." }
        ],
        acciones: [
            { nombre: "Hacha de batalla", descripcion: "Ataque de arma cuerpo a cuerpo: +5 al golpe, alcance 5 pies, un objetivo. Impacto: 9 (1d12+3) de daño cortante." },
            { nombre: "Jabalina", descripcion: "Ataque de arma cuerpo a cuerpo o a distancia: +5 al golpe, alcance 5 pies o 30/120 pies, un objetivo. Impacto: 8 (1d6+3) de daño perforante." }
        ],
        reacciones: []
    },
    owlbear: {
        id: "owlbear",
        nombre: "Owlbear",
        cr: "3",
        tipo: "Monstruosidad",
        tamaño: "Grande",
        alineamiento: "No alineado",
        stats: { fuerza: 20, destreza: 12, constitucion: 17, inteligencia: 3, sabiduria: 12, carisma: 7 },
        ca: 13,
        pg: "59 (7d10+21)",
        velocidad: "40 pies",
        salvaciones: {},
        habilidades: { percepcion: +3 },
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 13",
        idiomas: [],
        rasgos: [
            { nombre: "Olfato Agudo", descripcion: "El owlbear tiene ventaja en las pruebas de Percepción que dependan del olfato." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El owlbear realiza dos ataques: uno con su pico y uno con sus garras." },
            { nombre: "Pico", descripcion: "Ataque de arma cuerpo a cuerpo: +7 al golpe, alcance 5 pies, un objetivo. Impacto: 10 (1d10+5) de daño perforante." },
            { nombre: "Garras", descripcion: "Ataque de arma cuerpo a cuerpo: +7 al golpe, alcance 5 pies, un objetivo. Impacto: 14 (2d8+5) de daño cortante." }
        ],
        reacciones: []
    },
    pegasus: {
        id: "pegasus",
        nombre: "Pegaso",
        cr: "2",
        tipo: "Celestial",
        tamaño: "Grande",
        alineamiento: "Caótico Bueno",
        stats: { fuerza: 18, destreza: 15, constitucion: 16, inteligencia: 10, sabiduria: 15, carisma: 13 },
        ca: 12,
        pg: "59 (7d10+21)",
        velocidad: "60 pies, volando 90 pies",
        salvaciones: { destreza: +4, sabiduria: +4, carisma: +3 },
        habilidades: { percepcion: +6 },
        sentidos: "Percepción pasiva 16",
        idiomas: ["Celestial", "Común"],
        rasgos: [],
        acciones: [
            { nombre: "Cascos", descripcion: "Ataque de arma cuerpo a cuerpo: +6 al golpe, alcance 5 pies, un objetivo. Impacto: 11 (2d6+4) de daño contundente." }
        ],
        reacciones: []
    },
    purple_worm: {
        id: "purple_worm",
        nombre: "Gusano Púrpura",
        cr: "15",
        tipo: "Monstruosidad",
        tamaño: "Gigantesco",
        alineamiento: "No alineado",
        stats: { fuerza: 28, destreza: 7, constitucion: 22, inteligencia: 1, sabiduria: 8, carisma: 4 },
        ca: 18,
        pg: "247 (15d20+90)",
        velocidad: "50 pies, excavando 30 pies",
        salvaciones: { constitucion: +11, sabiduria: +4 },
        habilidades: {},
        sentidos: "Visión ciega 30 pies, Sentido sísmico 60 pies, Percepción pasiva 9",
        idiomas: [],
        rasgos: [],
        acciones: [
            { nombre: "Mordisco", descripcion: "Ataque de arma cuerpo a cuerpo: +14 al golpe, alcance 10 pies, un objetivo. Impacto: 22 (3d8+9) de daño perforante. Si el objetivo es Grande o más pequeño, debe superar una CD 19 de Destreza o ser tragado." },
            { nombre: "Aguijón", descripcion: "Ataque de arma cuerpo a cuerpo: +14 al golpe, alcance 10 pies, un objetivo. Impacto: 19 (3d6+9) de daño perforante más 42 (12d6) de daño por veneno." }
        ],
        reacciones: []
    },
    rak_shasa: {
        id: "rak_shasa",
        nombre: "Rakshasa",
        cr: "13",
        tipo: "Infernal",
        tamaño: "Mediano",
        alineamiento: "Legal Malvado",
        stats: { fuerza: 14, destreza: 17, constitucion: 18, inteligencia: 16, sabiduria: 13, carisma: 20 },
        ca: 16,
        pg: "110 (13d8+52)",
        velocidad: "40 pies",
        salvaciones: {},
        habilidades: { enganio: +10, perspicacia: +6 },
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 11",
        idiomas: ["Común", "Infernal"],
        rasgos: [
            { nombre: "Resistencia Mágica", descripcion: "El rakshasa tiene ventaja en las tiradas de salvación contra hechizos." },
            { nombre: "Limitación Mágica", descripcion: "El rakshasa es inmune a los conjuros de nivel 6 o inferior." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El rakshasa realiza dos ataques de garra." },
            { nombre: "Garra", descripcion: "Ataque de arma cuerpo a cuerpo: +7 al golpe, alcance 5 pies, un objetivo. Impacto: 9 (2d4+4) de daño cortante." }
        ],
        reacciones: []
    },
    remorhaz: {
        id: "remorhaz",
        nombre: "Remorhaz",
        cr: "11",
        tipo: "Monstruosidad",
        tamaño: "Enorme",
        alineamiento: "No alineado",
        stats: { fuerza: 24, destreza: 13, constitucion: 21, inteligencia: 4, sabiduria: 10, carisma: 5 },
        ca: 17,
        pg: "195 (17d12+85)",
        velocidad: "30 pies, excavando 20 pies",
        salvaciones: {},
        habilidades: {},
        sentidos: "Visión en la oscuridad 60 pies, Sentido sísmico 60 pies, Percepción pasiva 10",
        idiomas: [],
        rasgos: [
            { nombre: "Cuerpo Caliente", descripcion: "Una criatura que toque al remorhaz o lo golpee con un ataque cuerpo a cuerpo recibe 10 (3d6) de daño por fuego." }
        ],
        acciones: [
            { nombre: "Mordisco", descripcion: "Ataque de arma cuerpo a cuerpo: +11 al golpe, alcance 10 pies, un objetivo. Impacto: 40 (6d10+7) de daño perforante más 10 (3d6) de daño por fuego." }
        ],
        reacciones: []
    }
,
    roc: {
        id: "roc",
        nombre: "Roc",
        cr: "11",
        tipo: "Monstruosidad",
        tamaño: "Gigantesco",
        alineamiento: "No alineado",
        stats: { fuerza: 28, destreza: 10, constitucion: 20, inteligencia: 3, sabiduria: 10, carisma: 9 },
        ca: 15,
        pg: "248 (16d20+80)",
        velocidad: "20 pies, volando 120 pies",
        salvaciones: { destreza: +4, constitucion: +9, sabiduria: +4, carisma: +3 },
        habilidades: { percepcion: +4 },
        sentidos: "Percepción pasiva 14",
        idiomas: [],
        rasgos: [
            { nombre: "Vista Aguileña", descripcion: "El roc tiene ventaja en las pruebas de Percepción que dependan de la vista." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El roc realiza dos ataques: uno con su pico y uno con sus garras." },
            { nombre: "Pico", descripcion: "Ataque de arma cuerpo a cuerpo: +13 al golpe, alcance 10 pies, un objetivo. Impacto: 27 (4d8+9) de daño perforante." },
            { nombre: "Garras", descripcion: "Ataque de arma cuerpo a cuerpo: +13 al golpe, alcance 5 pies, un objetivo. Impacto: 23 (4d6+9) de daño cortante." }
        ],
        reacciones: []
    },
    salamander: {
        id: "salamander",
        nombre: "Salamandra",
        cr: "5",
        tipo: "Elemental",
        tamaño: "Grande",
        alineamiento: "Neutral Malvado",
        stats: { fuerza: 18, destreza: 14, constitucion: 15, inteligencia: 11, sabiduria: 10, carisma: 12 },
        ca: 15,
        pg: "90 (12d10+24)",
        velocidad: "30 pies",
        salvaciones: {},
        habilidades: {},
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 10",
        idiomas: ["Ígneo"],
        rasgos: [
            { nombre: "Cuerpo Caliente", descripcion: "Una criatura que toque a la salamandra o la golpee con un ataque cuerpo a cuerpo recibe 7 (2d6) de daño por fuego." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "La salamandra realiza dos ataques: uno con su lanza y otro con su cola." },
            { nombre: "Lanza", descripcion: "Ataque de arma cuerpo a cuerpo o a distancia: +7 al golpe, alcance 5 pies o 20/60 pies, un objetivo. Impacto: 11 (2d6+4) de daño perforante más 3 (1d6) de daño por fuego." },
            { nombre: "Cola", descripcion: "Ataque de arma cuerpo a cuerpo: +7 al golpe, alcance 10 pies, un objetivo. Impacto: 11 (2d6+4) de daño contundente más 7 (2d6) de daño por fuego." }
        ],
        reacciones: []
    },
    satyr: {
        id: "satyr",
        nombre: "Sátiro",
        cr: "1/2",
        tipo: "Fey",
        tamaño: "Mediano",
        alineamiento: "Caótico Neutral",
        stats: { fuerza: 12, destreza: 16, constitucion: 11, inteligencia: 12, sabiduria: 10, carisma: 14 },
        ca: 14,
        pg: "22 (5d8)",
        velocidad: "40 pies",
        salvaciones: {},
        habilidades: { percepcion: +2, sigilo: +5, interpretacion: +6 },
        sentidos: "Percepción pasiva 12",
        idiomas: ["Común", "Élfico", "Silvano"],
        rasgos: [
            { nombre: "Resistencia Mágica", descripcion: "El sátiro tiene ventaja en las tiradas de salvación contra hechizos." }
        ],
        acciones: [
            { nombre: "Cornada", descripcion: "Ataque de arma cuerpo a cuerpo: +3 al golpe, alcance 5 pies, un objetivo. Impacto: 6 (2d4+1) de daño contundente." },
            { nombre: "Espada corta", descripcion: "Ataque de arma cuerpo a cuerpo: +5 al golpe, alcance 5 pies, un objetivo. Impacto: 6 (1d6+3) de daño perforante." },
            { nombre: "Arco corto", descripcion: "Ataque de arma a distancia: +5 al golpe, alcance 80/320 pies, un objetivo. Impacto: 6 (1d6+3) de daño perforante." }
        ],
        reacciones: []
    },
    skeleton: {
        id: "skeleton",
        nombre: "Esqueleto",
        cr: "1/4",
        tipo: "No muerto",
        tamaño: "Mediano",
        alineamiento: "Legal Malvado",
        stats: { fuerza: 10, destreza: 14, constitucion: 15, inteligencia: 6, sabiduria: 8, carisma: 5 },
        ca: 13,
        pg: "13 (2d8+4)",
        velocidad: "30 pies",
        salvaciones: {},
        habilidades: {},
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 9",
        idiomas: ["Común"],
        rasgos: [],
        acciones: [
            { nombre: "Espada corta", descripcion: "Ataque de arma cuerpo a cuerpo: +4 al golpe, alcance 5 pies, un objetivo. Impacto: 5 (1d6+2) de daño perforante." },
            { nombre: "Arco corto", descripcion: "Ataque de arma a distancia: +4 al golpe, alcance 80/320 pies, un objetivo. Impacto: 5 (1d6+2) de daño perforante." }
        ],
        reacciones: []
    },
    spectral_cloud: {
        id: "spectral_cloud",
        nombre: "Nube Espectral",
        cr: "13",
        tipo: "No muerto",
        tamaño: "Grande",
        alineamiento: "Neutral Malvado",
        stats: { fuerza: 1, destreza: 14, constitucion: 14, inteligencia: 12, sabiduria: 10, carisma: 11 },
        ca: 14,
        pg: "127 (17d8+51)",
        velocidad: "0 pies, volando 60 pies",
        salvaciones: {},
        habilidades: {},
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 10",
        idiomas: ["Común"],
        rasgos: [
            { nombre: "Etherealidad", descripcion: "La nube espectral puede moverse entre planos." }
        ],
        acciones: [
            { nombre: "Toque", descripcion: "Ataque de arma cuerpo a cuerpo: +7 al golpe, alcance 5 pies, un objetivo. Impacto: 21 (6d6) de daño necrótico." }
        ],
        reacciones: []
    },
    tarrasque: {
        id: "tarrasque",
        nombre: "Tarrasque",
        cr: "30",
        tipo: "Monstruosidad",
        tamaño: "Gigantesco",
        alineamiento: "No alineado",
        stats: { fuerza: 30, destreza: 11, constitucion: 30, inteligencia: 3, sabiduria: 11, carisma: 11 },
        ca: 25,
        pg: "676 (33d20+330)",
        velocidad: "40 pies",
        salvaciones: { inteligencia: +5, sabiduria: +9, carisma: +9 },
        habilidades: {},
        sentidos: "Visión ciega 120 pies, Percepción pasiva 10",
        idiomas: [],
        rasgos: [
            { nombre: "Resistencia Legendaria (3/Día)", descripcion: "Si el tarrasque falla una tirada de salvación, puede elegir tener éxito en su lugar." },
            { nombre: "Reflejos", descripcion: "Si el tarrasque es objetivo de un efecto de área y tiene éxito en su salvación, no recibe daño." },
            { nombre: "Inmunidad a Armas no Mágicas", descripcion: "El tarrasque es inmune al daño de armas no mágicas." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El tarrasque puede usar su Presencia Aterradora y realizar cinco ataques: uno con su mordisco, dos con sus garras, uno con sus cuernos y uno con su cola." },
            { nombre: "Mordisco", descripcion: "Ataque de arma cuerpo a cuerpo: +19 al golpe, alcance 10 pies, un objetivo. Impacto: 36 (4d12+10) de daño perforante. Si el objetivo es una criatura, es tragada." },
            { nombre: "Garra", descripcion: "Ataque de arma cuerpo a cuerpo: +19 al golpe, alcance 15 pies, un objetivo. Impacto: 28 (4d8+10) de daño cortante." },
            { nombre: "Cuernos", descripcion: "Ataque de arma cuerpo a cuerpo: +19 al golpe, alcance 10 pies, un objetivo. Impacto: 32 (4d10+10) de daño perforante." },
            { nombre: "Cola", descripcion: "Ataque de arma cuerpo a cuerpo: +19 al golpe, alcance 20 pies, un objetivo. Impacto: 24 (4d6+10) de daño contundente." },
            { nombre: "Presencia Aterradora", descripcion: "Todas las criaturas elegidas por el tarrasque dentro de 120 pies deben superar una CD 17 de Sabiduría o quedar asustadas." }
        ],
        reacciones: []
    },
    treant: {
        id: "treant",
        nombre: "Treant",
        cr: "9",
        tipo: "Planta",
        tamaño: "Enorme",
        alineamiento: "Caótico Bueno",
        stats: { fuerza: 23, destreza: 8, constitucion: 21, inteligencia: 12, sabiduria: 16, carisma: 12 },
        ca: 16,
        pg: "138 (12d12+60)",
        velocidad: "30 pies",
        salvaciones: {},
        habilidades: {},
        sentidos: "Percepción pasiva 13",
        idiomas: ["Común", "Drúidico", "Silvano"],
        rasgos: [
            { nombre: "Falsa Apariencia", descripcion: "Mientras el treant permanezca quieto, es indistinguible de un árbol." },
            { nombre: "Sembrar", descripcion: "El treant puede sembrar un árbol que se convierte en un treant." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El treant realiza dos ataques de puñetazo." },
            { nombre: "Puñetazo", descripcion: "Ataque de arma cuerpo a cuerpo: +10 al golpe, alcance 5 pies, un objetivo. Impacto: 16 (3d6+6) de daño contundente." },
            { nombre: "Roca", descripcion: "Ataque de arma a distancia: +10 al golpe, alcance 60/180 pies, un objetivo. Impacto: 24 (4d8+6) de daño contundente." },
            { nombre: "Animar Árboles", descripcion: "El treant anima hasta dos árboles." }
        ],
        reacciones: []
    },
    troll: {
        id: "troll",
        nombre: "Troll",
        cr: "5",
        tipo: "Gigante",
        tamaño: "Grande",
        alineamiento: "Caótico Malvado",
        stats: { fuerza: 18, destreza: 13, constitucion: 20, inteligencia: 7, sabiduria: 9, carisma: 7 },
        ca: 15,
        pg: "84 (8d10+40)",
        velocidad: "30 pies",
        salvaciones: {},
        habilidades: { percepcion: +2 },
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 12",
        idiomas: ["Gigante"],
        rasgos: [
            { nombre: "Regeneración", descripcion: "El troll recupera 10 puntos de golpe al inicio de su turno. Si recibe daño por ácido o fuego, no se regenera." },
            { nombre: "Olfato Agudo", descripcion: "El troll tiene ventaja en las pruebas de Percepción que dependan del olfato." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El troll realiza tres ataques: uno con su mordisco y dos con sus garras." },
            { nombre: "Mordisco", descripcion: "Ataque de arma cuerpo a cuerpo: +7 al golpe, alcance 5 pies, un objetivo. Impacto: 7 (1d6+4) de daño perforante." },
            { nombre: "Garra", descripcion: "Ataque de arma cuerpo a cuerpo: +7 al golpe, alcance 5 pies, un objetivo. Impacto: 11 (2d6+4) de daño cortante." }
        ],
        reacciones: []
    },
    unicorn: {
        id: "unicorn",
        nombre: "Unicornio",
        cr: "5",
        tipo: "Celestial",
        tamaño: "Grande",
        alineamiento: "Legal Bueno",
        stats: { fuerza: 18, destreza: 14, constitucion: 15, inteligencia: 11, sabiduria: 17, carisma: 16 },
        ca: 12,
        pg: "67 (9d10+18)",
        velocidad: "50 pies",
        salvaciones: {},
        habilidades: {},
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 13",
        idiomas: ["Celestial", "Común", "Silvano"],
        rasgos: [
            { nombre: "Resistencia Mágica", descripcion: "El unicornio tiene ventaja en las tiradas de salvación contra hechizos." },
            { nombre: "Toque Sanador", descripcion: "El unicornio puede curar a una criatura con su toque." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El unicornio realiza dos ataques: uno con su cuerno y otro con sus cascos." },
            { nombre: "Cuerno", descripcion: "Ataque de arma cuerpo a cuerpo: +7 al golpe, alcance 5 pies, un objetivo. Impacto: 8 (1d8+4) de daño perforante más 7 (2d6) de daño radiante." },
            { nombre: "Cascos", descripcion: "Ataque de arma cuerpo a cuerpo: +7 al golpe, alcance 5 pies, un objetivo. Impacto: 9 (2d4+4) de daño contundente." },
            { nombre: "Teleportación", descripcion: "El unicornio se teleporta mágicamente a un lugar que pueda ver dentro de 120 pies." }
        ],
        reacciones: []
    },
    vampire: {
        id: "vampire",
        nombre: "Vampiro",
        cr: "13",
        tipo: "No muerto",
        tamaño: "Mediano",
        alineamiento: "Legal Malvado",
        stats: { fuerza: 18, destreza: 18, constitucion: 18, inteligencia: 17, sabiduria: 15, carisma: 18 },
        ca: 16,
        pg: "144 (17d8+68)",
        velocidad: "30 pies",
        salvaciones: { destreza: +9, sabiduria: +7, carisma: +9 },
        habilidades: { percepcion: +7, sigilo: +9 },
        sentidos: "Visión en la oscuridad 120 pies, Percepción pasiva 17",
        idiomas: ["Común"],
        rasgos: [
            { nombre: "Regeneración", descripcion: "El vampiro recupera 20 puntos de golpe al inicio de su turno si tiene al menos 1 punto de golpe." },
            { nombre: "Debilidades", descripcion: "El vampiro tiene las siguientes debilidades: agua corriente, ajo, estaca, luz solar." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El vampiro realiza dos ataques." },
            { nombre: "Mordisco", descripcion: "Ataque de arma cuerpo a cuerpo: +9 al golpe, alcance 5 pies, una criatura voluntaria o agarrada. Impacto: 7 (1d6+4) de daño perforante más 10 (3d6) de daño necrótico. El máximo de puntos de golpe del objetivo se reduce." },
            { nombre: "Garras", descripcion: "Ataque de arma cuerpo a cuerpo: +9 al golpe, alcance 5 pies, un objetivo. Impacto: 8 (1d8+4) de daño cortante." },
            { nombre: "Encantar", descripcion: "El vampiro apunta a un humanoide que pueda ver. El objetivo debe superar una CD 17 de Sabiduría o quedar encantado." }
        ],
        reacciones: []
    },
    wraith: {
        id: "wraith",
        nombre: "Espectro",
        cr: "5",
        tipo: "No muerto",
        tamaño: "Mediano",
        alineamiento: "Neutral Malvado",
        stats: { fuerza: 6, destreza: 16, constitucion: 16, inteligencia: 12, sabiduria: 14, carisma: 15 },
        ca: 13,
        pg: "67 (9d8+27)",
        velocidad: "0 pies, volando 60 pies",
        salvaciones: {},
        habilidades: {},
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 12",
        idiomas: ["Común"],
        rasgos: [
            { nombre: "Incorpóreo", descripcion: "El espectro puede moverse a través de criaturas y objetos." }
        ],
        acciones: [
            { nombre: "Toque", descripcion: "Ataque de arma cuerpo a cuerpo: +6 al golpe, alcance 5 pies, un objetivo. Impacto: 21 (4d8+3) de daño necrótico." }
        ],
        reacciones: []
    },
    wyvern: {
        id: "wyvern",
        nombre: "Wyvern",
        cr: "6",
        tipo: "Dragón",
        tamaño: "Grande",
        alineamiento: "No alineado",
        stats: { fuerza: 19, destreza: 10, constitucion: 16, inteligencia: 5, sabiduria: 12, carisma: 6 },
        ca: 13,
        pg: "110 (13d10+39)",
        velocidad: "20 pies, volando 80 pies",
        salvaciones: {},
        habilidades: { percepcion: +4 },
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 14",
        idiomas: [],
        rasgos: [],
        acciones: [
            { nombre: "Multiataque", descripcion: "El wyvern realiza dos ataques: uno con su mordisco y uno con su aguijón." },
            { nombre: "Mordisco", descripcion: "Ataque de arma cuerpo a cuerpo: +7 al golpe, alcance 10 pies, un objetivo. Impacto: 11 (2d6+4) de daño perforante." },
            { nombre: "Aguijón", descripcion: "Ataque de arma cuerpo a cuerpo: +7 al golpe, alcance 10 pies, un objetivo. Impacto: 13 (2d8+4) de daño perforante más 24 (7d6) de daño por veneno." }
        ],
        reacciones: []
    },
    xorn: {
        id: "xorn",
        nombre: "Xorn",
        cr: "5",
        tipo: "Elemental",
        tamaño: "Mediano",
        alineamiento: "Neutral",
        stats: { fuerza: 17, destreza: 10, constitucion: 22, inteligencia: 11, sabiduria: 10, carisma: 11 },
        ca: 19,
        pg: "73 (7d8+42)",
        velocidad: "20 pies, excavando 20 pies",
        salvaciones: {},
        habilidades: { percepcion: +6, sigilo: +3 },
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 16",
        idiomas: ["Terran"],
        rasgos: [
            { nombre: "Camuflaje en la Piedra", descripcion: "El xorn tiene ventaja en Sigilo en entornos rocosos." },
            { nombre: "Trepar", descripcion: "El xorn puede trepar por superficies de piedra." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El xorn realiza tres ataques con sus garras y uno con su mordisco." },
            { nombre: "Garra", descripcion: "Ataque de arma cuerpo a cuerpo: +6 al golpe, alcance 5 pies, un objetivo. Impacto: 6 (1d6+3) de daño cortante." },
            { nombre: "Mordisco", descripcion: "Ataque de arma cuerpo a cuerpo: +6 al golpe, alcance 5 pies, un objetivo. Impacto: 13 (3d6+3) de daño perforante." }
        ],
        reacciones: []
    },
    yeti: {
        id: "yeti",
        nombre: "Yeti",
        cr: "3",
        tipo: "Monstruosidad",
        tamaño: "Grande",
        alineamiento: "Caótico Malvado",
        stats: { fuerza: 18, destreza: 13, constitucion: 16, inteligencia: 8, sabiduria: 12, carisma: 7 },
        ca: 12,
        pg: "51 (6d10+18)",
        velocidad: "40 pies, trepar 40 pies",
        salvaciones: {},
        habilidades: { percepcion: +3, sigilo: +3 },
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 13",
        idiomas: ["Yeti"],
        rasgos: [
            { nombre: "Miedo al Fuego", descripcion: "Si el yeti recibe daño por fuego, tiene desventaja en las tiradas de ataque." },
            { nombre: "Olfato Agudo", descripcion: "El yeti tiene ventaja en las pruebas de Percepción que dependan del olfato." }
        ],
        acciones: [
            { nombre: "Multiataque", descripcion: "El yeti puede usar su Mirada Gélida y realiza dos ataques de garra." },
            { nombre: "Garra", descripcion: "Ataque de arma cuerpo a cuerpo: +6 al golpe, alcance 5 pies, un objetivo. Impacto: 7 (1d6+4) de daño cortante más 3 (1d6) de daño por frío." },
            { nombre: "Mirada Gélida", descripcion: "El yeti apunta a una criatura dentro de 30 pies. El objetivo debe superar una CD 13 de Constitución o recibir 10 (3d6) de daño por frío y quedar paralizado." }
        ],
        reacciones: []
    },
    zombie: {
        id: "zombie",
        nombre: "Zombi",
        cr: "1/4",
        tipo: "No muerto",
        tamaño: "Mediano",
        alineamiento: "Neutral Malvado",
        stats: { fuerza: 13, destreza: 6, constitucion: 16, inteligencia: 3, sabiduria: 6, carisma: 5 },
        ca: 8,
        pg: "22 (3d8+9)",
        velocidad: "20 pies",
        salvaciones: { sabiduria: +0 },
        habilidades: {},
        sentidos: "Visión en la oscuridad 60 pies, Percepción pasiva 8",
        idiomas: ["Común"],
        rasgos: [
            { nombre: "Resistencia No muerta", descripcion: "Si el zombi recibe daño que lo reduciría a 0 puntos de golpe, puede hacer una tirada de salvación de Constitución CD 5+el daño recibido para reducirse a 1 punto de golpe." }
        ],
        acciones: [
            { nombre: "Puñetazo", descripcion: "Ataque de arma cuerpo a cuerpo: +3 al golpe, alcance 5 pies, un objetivo. Impacto: 4 (1d6+1) de daño contundente." }
        ],
        reacciones: []
    }
};

if (typeof module !== 'undefined' && module.exports) module.exports = BESTIARIO;