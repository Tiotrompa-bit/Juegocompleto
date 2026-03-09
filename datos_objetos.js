// datos_objetos.js - Versión 6.0 (CON CATEGORÍAS Y RAREZAS)
// Basada en las reglas de D&D 5e 2024

const OBJETOS = {
    // =========================================================================
    // ARMAS SIMPLES (Cuerpo a cuerpo y a distancia)
    // =========================================================================
    garrote: {
        id: "garrote", nombre: "Garrote", tipo: "Simple", daño: "1d4", tipo_daño: "contundente",
        categoria: "Arma", rareza: "Común", sintonizacion: false,
        peso: 2, propiedades: ["Ligera"], maestria: "Ralentizar"
    },
    daga: {
        id: "daga", nombre: "Daga", tipo: "Simple", daño: "1d4", tipo_daño: "perforante",
        categoria: "Arma", rareza: "Común", sintonizacion: false,
        peso: 1, propiedades: ["Ligera", "Arrojadiza", "Sutil"], maestria: "Muesca"
    },
    gran_hacha: {
        id: "gran_hacha", nombre: "Gran Hacha", tipo: "Simple", daño: "1d12", tipo_daño: "cortante",
        categoria: "Arma", rareza: "Común", sintonizacion: false,
        peso: 7, propiedades: ["A dos manos", "Pesada"], maestria: "Hendidura"
    },
    martillo_ligero: {
        id: "martillo_ligero", nombre: "Martillo Ligero", tipo: "Simple", daño: "1d4", tipo_daño: "contundente",
        categoria: "Arma", rareza: "Común", sintonizacion: false,
        peso: 2, propiedades: ["Ligera", "Arrojadiza"], maestria: "Muesca"
    },
    maza: {
        id: "maza", nombre: "Maza", tipo: "Simple", daño: "1d6", tipo_daño: "contundente",
        categoria: "Arma", rareza: "Común", sintonizacion: false,
        peso: 4, propiedades: [], maestria: "Debilitar"
    },
    baston: {
        id: "baston", nombre: "Bastón", tipo: "Simple", daño: "1d6", tipo_daño: "contundente",
        categoria: "Arma", rareza: "Común", sintonizacion: false,
        peso: 4, propiedades: ["Versátil"], maestria: "Derribo"
    },
    hacha_mano: {
        id: "hacha_mano", nombre: "Hacha de Mano", tipo: "Simple", daño: "1d6", tipo_daño: "cortante",
        categoria: "Arma", rareza: "Común", sintonizacion: false,
        peso: 2, propiedades: ["Ligera", "Arrojadiza"], maestria: "Vejar"
    },
    jabalina: {
        id: "jabalina", nombre: "Jabalina", tipo: "Simple", daño: "1d6", tipo_daño: "perforante",
        categoria: "Arma", rareza: "Común", sintonizacion: false,
        peso: 2, propiedades: ["Arrojadiza"], maestria: "Ralentizar"
    },
    ballesta_ligera: {
        id: "ballesta_ligera", nombre: "Ballesta Ligera", tipo: "Simple", daño: "1d8", tipo_daño: "perforante",
        categoria: "Arma", rareza: "Común", sintonizacion: false,
        peso: 5, propiedades: ["A dos manos", "Carga", "Munición"], maestria: "Ralentizar"
    },
    dardo: {
        id: "dardo", nombre: "Dardo", tipo: "Simple", daño: "1d4", tipo_daño: "perforante",
        categoria: "Arma", rareza: "Común", sintonizacion: false,
        peso: 0.25, propiedades: ["Arrojadiza"], maestria: "Ralentizar"
    },
    honda: {
        id: "honda", nombre: "Honda", tipo: "Simple", daño: "1d4", tipo_daño: "contundente",
        categoria: "Arma", rareza: "Común", sintonizacion: false,
        peso: 0, propiedades: ["Munición"], maestria: "Ralentizar"
    },
    lanza: {
        id: "lanza", nombre: "Lanza", tipo: "Simple", daño: "1d6", tipo_daño: "perforante",
        categoria: "Arma", rareza: "Común", sintonizacion: false,
        peso: 3, propiedades: ["Arrojadiza", "Versátil"], maestria: "Debilitar"
    },
    hoz: {
        id: "hoz", nombre: "Hoz", tipo: "Simple", daño: "1d4", tipo_daño: "cortante",
        categoria: "Arma", rareza: "Común", sintonizacion: false,
        peso: 1, propiedades: ["Ligera"], maestria: "Muesca"
    },

    // =========================================================================
    // ARMAS MARCIALES
    // =========================================================================
    espada_larga: {
        id: "espada_larga", nombre: "Espada Larga", tipo: "Marcial", daño: "1d8", tipo_daño: "cortante",
        categoria: "Arma", rareza: "Común", sintonizacion: false,
        peso: 3, propiedades: ["Versátil"], maestria: "Debilitar"
    },
    espada_corta: {
        id: "espada_corta", nombre: "Espada Corta", tipo: "Marcial", daño: "1d6", tipo_daño: "perforante",
        categoria: "Arma", rareza: "Común", sintonizacion: false,
        peso: 2, propiedades: ["Ligera", "Sutil"], maestria: "Vejar"
    },
    estoque: {
        id: "estoque", nombre: "Estoque", tipo: "Marcial", daño: "1d8", tipo_daño: "perforante",
        categoria: "Arma", rareza: "Común", sintonizacion: false,
        peso: 2, propiedades: ["Sutil"], maestria: "Vejar"
    },
    cimitarra: {
        id: "cimitarra", nombre: "Cimitarra", tipo: "Marcial", daño: "1d6", tipo_daño: "cortante",
        categoria: "Arma", rareza: "Común", sintonizacion: false,
        peso: 3, propiedades: ["Ligera", "Sutil"], maestria: "Rasguño"
    },
    hacha_gran: {
        id: "hacha_gran", nombre: "Hacha Grande", tipo: "Marcial", daño: "1d12", tipo_daño: "cortante",
        categoria: "Arma", rareza: "Común", sintonizacion: false,
        peso: 7, propiedades: ["A dos manos", "Pesada"], maestria: "Hendidura"
    },
    martillo_guerra: {
        id: "martillo_guerra", nombre: "Martillo de Guerra", tipo: "Marcial", daño: "1d8", tipo_daño: "contundente",
        categoria: "Arma", rareza: "Común", sintonizacion: false,
        peso: 5, propiedades: ["Versátil"], maestria: "Empujón"
    },
    maza_pesada: {
        id: "maza_pesada", nombre: "Maza Pesada", tipo: "Marcial", daño: "2d6", tipo_daño: "contundente",
        categoria: "Arma", rareza: "Común", sintonizacion: false,
        peso: 10, propiedades: ["A dos manos", "Pesada"], maestria: "Hendidura"
    },
    lanza_caballeria: {
        id: "lanza_caballeria", nombre: "Lanza de Caballería", tipo: "Marcial", daño: "1d12", tipo_daño: "perforante",
        categoria: "Arma", rareza: "Común", sintonizacion: false,
        peso: 6, propiedades: ["A dos manos", "Pesada", "Alcance"], maestria: "Derribo"
    },
    pica: {
        id: "pica", nombre: "Pica", tipo: "Marcial", daño: "1d10", tipo_daño: "perforante",
        categoria: "Arma", rareza: "Común", sintonizacion: false,
        peso: 18, propiedades: ["A dos manos", "Pesada", "Alcance"], maestria: "Hendidura"
    },
    alabarda: {
        id: "alabarda", nombre: "Alabarda", tipo: "Marcial", daño: "1d10", tipo_daño: "cortante",
        categoria: "Arma", rareza: "Común", sintonizacion: false,
        peso: 6, propiedades: ["A dos manos", "Pesada", "Alcance"], maestria: "Hendidura"
    },
    guja: {
        id: "guja", nombre: "Guja", tipo: "Marcial", daño: "1d10", tipo_daño: "cortante",
        categoria: "Arma", rareza: "Común", sintonizacion: false,
        peso: 6, propiedades: ["A dos manos", "Pesada", "Alcance"], maestria: "Hendidura"
    },
    tridente: {
        id: "tridente", nombre: "Tridente", tipo: "Marcial", daño: "1d6", tipo_daño: "perforante",
        categoria: "Arma", rareza: "Común", sintonizacion: false,
        peso: 4, propiedades: ["Arrojadiza", "Versátil"], maestria: "Derribo"
    },
    mangual: {
        id: "mangual", nombre: "Mangual", tipo: "Marcial", daño: "1d8", tipo_daño: "contundente",
        categoria: "Arma", rareza: "Común", sintonizacion: false,
        peso: 2, propiedades: [], maestria: "Debilitar"
    },
    mayal: {
        id: "mayal", nombre: "Mayal", tipo: "Marcial", daño: "1d8", tipo_daño: "contundente",
        categoria: "Arma", rareza: "Común", sintonizacion: false,
        peso: 2, propiedades: [], maestria: "Ralentizar"
    },
    cuchillo_lanzar: {
        id: "cuchillo_lanzar", nombre: "Cuchillo de Lanzar", tipo: "Marcial", daño: "1d4", tipo_daño: "perforante",
        categoria: "Arma", rareza: "Común", sintonizacion: false,
        peso: 1, propiedades: ["Ligera", "Arrojadiza", "Sutil"], maestria: "Muesca"
    },
    arco_largo: {
        id: "arco_largo", nombre: "Arco Largo", tipo: "Marcial", daño: "1d8", tipo_daño: "perforante",
        categoria: "Arma", rareza: "Común", sintonizacion: false,
        peso: 2, propiedades: ["A dos manos", "Munición"], maestria: "Ralentizar"
    },
    arco_corto: {
        id: "arco_corto", nombre: "Arco Corto", tipo: "Marcial", daño: "1d6", tipo_daño: "perforante",
        categoria: "Arma", rareza: "Común", sintonizacion: false,
        peso: 2, propiedades: ["A dos manos", "Munición"], maestria: "Vejar"
    },
    ballesta_mano: {
        id: "ballesta_mano", nombre: "Ballesta de Mano", tipo: "Marcial", daño: "1d6", tipo_daño: "perforante",
        categoria: "Arma", rareza: "Común", sintonizacion: false,
        peso: 3, propiedades: ["Ligera", "Carga", "Munición"], maestria: "Vejar"
    },
    ballesta_pesada: {
        id: "ballesta_pesada", nombre: "Ballesta Pesada", tipo: "Marcial", daño: "1d10", tipo_daño: "perforante",
        categoria: "Arma", rareza: "Común", sintonizacion: false,
        peso: 18, propiedades: ["A dos manos", "Carga", "Munición", "Pesada"], maestria: "Empujón"
    },
    cerbatana: {
        id: "cerbatana", nombre: "Cerbatana", tipo: "Marcial", daño: "1", tipo_daño: "perforante",
        categoria: "Arma", rareza: "Común", sintonizacion: false,
        peso: 1, propiedades: ["Munición", "Carga"], maestria: "Vejar"
    },
    sable: {
        id: "sable", nombre: "Sable", tipo: "Marcial", daño: "1d6", tipo_daño: "cortante",
        categoria: "Arma", rareza: "Común", sintonizacion: false,
        peso: 3, propiedades: ["Ligera", "Sutil"], maestria: "Rasguño"
    },

    // =========================================================================
    // ARMADURAS
    // =========================================================================
    cuero: { 
        id: "cuero", nombre: "Armadura de Cuero", tipo: "Ligera", ca_base: 11, 
        categoria: "Armadura", rareza: "Común", sintonizacion: false,
        peso: 10 
    },
    cuero_tachonado: { 
        id: "cuero_tachonado", nombre: "Cuero Tachonado", tipo: "Ligera", ca_base: 12, 
        categoria: "Armadura", rareza: "Común", sintonizacion: false,
        peso: 13 
    },
    pieles: { 
        id: "pieles", nombre: "Armadura de Pieles", tipo: "Media", ca_base: 12, 
        categoria: "Armadura", rareza: "Común", sintonizacion: false,
        peso: 12 
    },
    cota_mallas: { 
        id: "cota_mallas", nombre: "Cota de Mallas", tipo: "Pesada", ca_base: 16, 
        categoria: "Armadura", rareza: "Común", sintonizacion: false,
        peso: 55, req_fuerza: 13, desventaja_sigilo: true 
    },
    armadura_placas: { 
        id: "armadura_placas", nombre: "Armadura de Placas", tipo: "Pesada", ca_base: 18, 
        categoria: "Armadura", rareza: "Común", sintonizacion: false,
        peso: 65, req_fuerza: 15, desventaja_sigilo: true 
    },
    escudo: { 
        id: "escudo", nombre: "Escudo", tipo: "Escudo", ca_bonus: 2, 
        categoria: "Armadura", rareza: "Común", sintonizacion: false,
        peso: 6 
    },

    // =========================================================================
    // OBJETOS MÁGICOS (NUEVOS)
    // =========================================================================
    espada_llameante: {
        id: "espada_llameante", nombre: "Espada Llameante", tipo: "Marcial", daño: "1d8+2d6", tipo_daño: "cortante + fuego",
        categoria: "Arma Mágica", rareza: "Raro", sintonizacion: true,
        peso: 3, propiedades: ["Versátil"], maestria: "Vejar",
        descripcion: "Esta espada larga emite una luz brillante en un radio de 15 pies. Al impactar, causa 2d6 adicionales de daño por fuego."
    },
    anillo_proteccion: {
        id: "anillo_proteccion", nombre: "Anillo de Protección", 
        categoria: "Anillo", rareza: "Raro", sintonizacion: true,
        peso: 0,
        descripcion: "Otorga un bonificador de +1 a la CA y a las tiradas de salvación mientras lo llevas puesto."
    },
    capa_elfica: {
        id: "capa_elfica", nombre: "Capa Élfica", 
        categoria: "Objeto Maravilloso", rareza: "Poco común", sintonizacion: true,
        peso: 1,
        descripcion: "Mientras llevas esta capa con la capucha puesta, tienes ventaja en pruebas de Destreza (Sigilo)."
    },
    pocion_curacion: {
        id: "pocion_curacion", nombre: "Poción de Curación", 
        categoria: "Poción", rareza: "Común", sintonizacion: false,
        peso: 0.5,
        descripcion: "Recuperas 2d4 + 2 puntos de golpe al beberla."
    },
    baston_de_los_bosques: {
        id: "baston_bosques", nombre: "Bastón de los Bosques", tipo: "Simple", daño: "1d6", tipo_daño: "contundente",
        categoria: "Bastón Mágico", rareza: "Raro", sintonizacion: true,
        peso: 4, propiedades: ["Versátil"],
        descripcion: "Este bastón puede ser utilizado como un foco druídico. Tiene 10 cargas. Puedes gastar 1 carga para lanzar 'Amistad con los Animales' o 2 cargas para lanzar 'Invocar Animales'."
    },
    varita_de_descargas: {
        id: "varita_descargas", nombre: "Varita de Descargas Ígneas", 
        categoria: "Varita", rareza: "Poco común", sintonizacion: true,
        peso: 1,
        descripcion: "Esta varita tiene 7 cargas. Mientras la sostienes, puedes gastar 1 carga para lanzar el truco 'Descarga Ígnea' (con CD 13). La varita recupera 1d6+1 cargas cada amanecer."
    },
    botas_de_velocidad: {
        id: "botas_velocidad", nombre: "Botas de Velocidad", 
        categoria: "Objeto Maravilloso", rareza: "Raro", sintonizacion: true,
        peso: 1,
        descripcion: "Mientras llevas estas botas, puedes usar una acción bonus para activarlas. Durante 10 minutos, tu velocidad se duplica y los ataques de oportunidad contra ti tienen desventaja. No se pueden volver a usar hasta después de un descanso largo."
    },

    // =========================================================================
    // KITS Y PAQUETES DE EQUIPO (Equipment Packs)
    // =========================================================================
    kit_explorador: {
        id: "kit_explorador", nombre: "Kit de Explorador", tipo: "Equipo",
        categoria: "Kit", rareza: "Común", sintonizacion: false,
        descripcion: "Incluye mochila, saco de dormir, cocina de campaña, yesca, 10 antorchas, 10 días de raciones y un odre.",
        peso: 30
    },
    kit_ladron: {
        id: "kit_ladron", nombre: "Kit de Ladrón", tipo: "Equipo",
        categoria: "Kit", rareza: "Común", sintonizacion: false,
        descripcion: "Incluye mochila, palanca, 10 pitos, 10 bolsas de arena, vela, ganzúas y herramientas de ladrón.",
        peso: 20
    },
    kit_diplomatico: {
        id: "kit_diplomatico", nombre: "Kit de Diplomático", tipo: "Equipo",
        categoria: "Kit", rareza: "Común", sintonizacion: false,
        descripcion: "Incluye ropa fina, perfume, escribanía (tinta, pluma, pergamino), 10 velas, jabón y un espejo pequeño.",
        peso: 8
    },
    kit_sacerdote: {
        id: "kit_sacerdote", nombre: "Kit de Sacerdote", tipo: "Equipo",
        categoria: "Kit", rareza: "Común", sintonizacion: false,
        descripcion: "Incluye ropa ceremonial, 10 velas, incienso, crisol, incensario, agua bendita y un libro de oraciones.",
        peso: 10
    },
    kit_estudioso: {
        id: "kit_estudioso", nombre: "Kit de Estudioso", tipo: "Equipo",
        categoria: "Kit", rareza: "Común", sintonizacion: false,
        descripcion: "Incluye ropa de viaje, escribanía, 10 velas, una manta, un libro de texto y un rollo de pergamino.",
        peso: 12
    },
    kit_artesano: {
        id: "kit_artesano", nombre: "Kit de Artesano", tipo: "Equipo",
        categoria: "Kit", rareza: "Común", sintonizacion: false,
        descripcion: "Incluye ropa de trabajo, herramientas de artesano, una linterna sorda, 5 frascos de aceite, un mazo y 10 pitos.",
        peso: 25
    },
    kit_aventurero: {
        id: "kit_aventurero", nombre: "Kit de Aventurero", tipo: "Equipo",
        categoria: "Kit", rareza: "Común", sintonizacion: false,
        descripcion: "Incluye mochila, saco de dormir, cocina de campaña, yesca, 10 antorchas, 10 días de raciones, odre y 50 pies de cuerda de cáñamo.",
        peso: 35
    },

    // =========================================================================
    // HERRAMIENTAS
    // =========================================================================
    herramientas_ladron: { 
        id: "herramientas_ladron", nombre: "Herramientas de Ladrón", 
        categoria: "Herramienta", rareza: "Común", sintonizacion: false,
        peso: 1, descripcion: "Para abrir cerraduras y desarmar trampas" 
    },
    instrumento_musical: { 
        id: "instrumento_musical", nombre: "Instrumento Musical", 
        categoria: "Herramienta", rareza: "Común", sintonizacion: false,
        peso: 2, descripcion: "Laúd, flauta o similar" 
    },
    herramientas_artesano: { 
        id: "herramientas_artesano", nombre: "Herramientas de Artesano", 
        categoria: "Herramienta", rareza: "Común", sintonizacion: false,
        peso: 5, descripcion: "Según el oficio" 
    },
    kit_herborista: { 
        id: "kit_herborista", nombre: "Kit de herborista", 
        categoria: "Herramienta", rareza: "Común", sintonizacion: false,
        peso: 3, descripcion: "Para crear pociones" 
    },
    kit_disfraz: { 
        id: "kit_disfraz", nombre: "Kit de disfraz", 
        categoria: "Herramienta", rareza: "Común", sintonizacion: false,
        peso: 3, descripcion: "Para cambiar de apariencia" 
    },
    kit_falsificacion: { 
        id: "kit_falsificacion", nombre: "Kit de falsificación", 
        categoria: "Herramienta", rareza: "Común", sintonizacion: false,
        peso: 2, descripcion: "Para falsificar documentos" 
    },
    herramientas_carpintero: { 
        id: "herramientas_carpintero", nombre: "Herramientas de carpintero", 
        categoria: "Herramienta", rareza: "Común", sintonizacion: false,
        peso: 6, descripcion: "Martillo, sierra, etc." 
    },
    
    // =========================================================================
    // OBJETOS GENERALES (ya existían, ahora con categoría)
    // =========================================================================
    bolsa: { 
        id: "bolsa", nombre: "Bolsa", 
        categoria: "Equipo General", rareza: "Común", sintonizacion: false,
        peso: 0.5, descripcion: "Pequeña bolsa de cuero" 
    },
    mochila: { 
        id: "mochila", nombre: "Mochila", 
        categoria: "Equipo General", rareza: "Común", sintonizacion: false,
        peso: 5, descripcion: "Mochila de cuero" 
    },
    palanca: { 
        id: "palanca", nombre: "Palanca", 
        categoria: "Equipo General", rareza: "Común", sintonizacion: false,
        peso: 5, descripcion: "Útil para abrir puertas" 
    },
    tinta: { 
        id: "tinta", nombre: "Tintero", 
        categoria: "Equipo General", rareza: "Común", sintonizacion: false,
        peso: 0.1, descripcion: "Frasco de tinta negra" 
    },
    pluma: { 
        id: "pluma", nombre: "Pluma", 
        categoria: "Equipo General", rareza: "Común", sintonizacion: false,
        peso: 0, descripcion: "Pluma para escribir" 
    },
    pergamino: { 
        id: "pergamino", nombre: "Pergamino", 
        categoria: "Equipo General", rareza: "Común", sintonizacion: false,
        peso: 0, descripcion: "Hoja de pergamino" 
    },
    manta: { 
        id: "manta", nombre: "Manta", 
        categoria: "Equipo General", rareza: "Común", sintonizacion: false,
        peso: 3, descripcion: "Manta de lana" 
    },
    insignia_rango: { 
        id: "insignia_rango", nombre: "Insignia de rango", 
        categoria: "Equipo General", rareza: "Común", sintonizacion: false,
        peso: 0, descripcion: "Identificación militar" 
    },
    trofeo_enemigo: { 
        id: "trofeo_enemigo", nombre: "Trofeo de enemigo", 
        categoria: "Equipo General", rareza: "Común", sintonizacion: false,
        peso: 0.5, descripcion: "Recuerdo de batalla" 
    },
    ropa_oscura: { 
        id: "ropa_oscura", nombre: "Ropa oscura", 
        categoria: "Equipo General", rareza: "Común", sintonizacion: false,
        peso: 3, descripcion: "Para pasar desapercibido" 
    },
    utiles_acrobaticos: { 
        id: "utiles_acrobaticos", nombre: "Útiles acrobáticos", 
        categoria: "Equipo General", rareza: "Común", sintonizacion: false,
        peso: 5, descripcion: "Pelotas, aros, etc." 
    },
    ropa_fina: { 
        id: "ropa_fina", nombre: "Ropa fina", 
        categoria: "Equipo General", rareza: "Común", sintonizacion: false,
        peso: 3, descripcion: "Ropa de alta calidad" 
    },
    sello: { 
        id: "sello", nombre: "Sello personal", 
        categoria: "Equipo General", rareza: "Común", sintonizacion: false,
        peso: 0, descripcion: "Anillo o sello con tu insignia" 
    },
    pala: { 
        id: "pala", nombre: "Pala", 
        categoria: "Equipo General", rareza: "Común", sintonizacion: false,
        peso: 5, descripcion: "Herramienta para cavar" 
    },
    olla_hierro: { 
        id: "olla_hierro", nombre: "Olla de hierro", 
        categoria: "Equipo General", rareza: "Común", sintonizacion: false,
        peso: 4, descripcion: "Para cocinar" 
    },
    trampa_caza: { 
        id: "trampa_caza", nombre: "Trampa de caza", 
        categoria: "Equipo General", rareza: "Común", sintonizacion: false,
        peso: 2, descripcion: "Trampa para animales pequeños" 
    },
    trofeo_caza: { 
        id: "trofeo_caza", nombre: "Trofeo de caza", 
        categoria: "Equipo General", rareza: "Común", sintonizacion: false,
        peso: 0.5, descripcion: "Colmillo o garra de animal" 
    },
    carta_recomendacion: { 
        id: "carta_recomendacion", nombre: "Carta de recomendación", 
        categoria: "Equipo General", rareza: "Común", sintonizacion: false,
        peso: 0, descripcion: "Del gremio" 
    },
    ropa_viaje: { 
        id: "ropa_viaje", nombre: "Ropa de viaje", 
        categoria: "Equipo General", rareza: "Común", sintonizacion: false,
        peso: 3, descripcion: "Práctica y resistente" 
    },
    cuerda: { 
        id: "cuerda", nombre: "Cuerda", 
        categoria: "Equipo General", rareza: "Común", sintonizacion: false,
        peso: 5, descripcion: "50 pies de cuerda de cáñamo" 
    },
    amuleto_suerte: { 
        id: "amuleto_suerte", nombre: "Amuleto de suerte", 
        categoria: "Equipo General", rareza: "Común", sintonizacion: false,
        peso: 0, descripcion: "Pequeño amuleto" 
    },
    ropa_impermeable: { 
        id: "ropa_impermeable", nombre: "Ropa impermeable", 
        categoria: "Equipo General", rareza: "Común", sintonizacion: false,
        peso: 4, descripcion: "Para la lluvia" 
    },
    libro: { 
        id: "libro", nombre: "Libro", 
        categoria: "Equipo General", rareza: "Común", sintonizacion: false,
        peso: 2, descripcion: "Libro de consulta" 
    },
    ropa_trabajo: { 
        id: "ropa_trabajo", nombre: "Ropa de trabajo", 
        categoria: "Equipo General", rareza: "Común", sintonizacion: false,
        peso: 3, descripcion: "Sencilla y resistente" 
    },
    simbolo_sagrado: { 
        id: "simbolo_sagrado", nombre: "Símbolo sagrado", 
        categoria: "Equipo General", rareza: "Común", sintonizacion: false,
        peso: 0.5, descripcion: "De tu deidad" 
    },
    libro_oracion: { 
        id: "libro_oracion", nombre: "Libro de oración", 
        categoria: "Equipo General", rareza: "Común", sintonizacion: false,
        peso: 1, descripcion: "Textos sagrados" 
    },
    incienso: { 
        id: "incienso", nombre: "Incienso", 
        categoria: "Equipo General", rareza: "Común", sintonizacion: false,
        peso: 0.1, descripcion: "Barra de incienso" 
    },
    ropa_ceremonial: { 
        id: "ropa_ceremonial", nombre: "Ropa ceremonial", 
        categoria: "Equipo General", rareza: "Común", sintonizacion: false,
        peso: 4, descripcion: "Para rituales" 
    },
    ropa_disfraz: { 
        id: "ropa_disfraz", nombre: "Ropa de disfraz", 
        categoria: "Equipo General", rareza: "Común", sintonizacion: false,
        peso: 3, descripcion: "Para camuflarse" 
    }
};

if (typeof module !== 'undefined' && module.exports) module.exports = OBJETOS;