export interface Destino {
  slug: string;
  nombre: string;
  categoria: 'nacional' | 'internacional' | 'receptivo';
  imagenPortada: string;
  descripcion: string[];
  queIncluye: {
    icono: string;
    texto: string;
  }[];
  mejorEpoca: string;
  galeria: string[];
}

export const destinos: Destino[] = [
  {
    slug: 'salta',
    nombre: 'Salta',
    categoria: 'nacional',
    imagenPortada: '/imagenes/Salta.jpg',
    descripcion: [
      'Salta te invita a descubrir paisajes únicos donde la naturaleza pinta con colores imposibles. La Quebrada de Humahuaca y el Cerro de los 14 Colores son postales vivientes que cambian con cada hora del día, mientras que los valles Calchaquíes ofrecen vinos de altura y pueblos que conservan la esencia del norte argentino.',
      'Cada rincón de Salta cuenta historias: desde las calles coloniales de la capital hasta las salinas de altura, pasando por Cafayate y sus bodegas boutique. Aquí el tiempo se toma con calma, los atardeceres son ceremonias diarias y cada comida es un encuentro con sabores ancestrales.',
      'Te acompañamos en cada paso: desde elegir la mejor ruta por los Valles hasta encontrar ese mirador secreto donde las montañas te abrazan. Porque conocer Salta es mucho más que recorrer lugares, es conectar con una tierra que late al ritmo de sus cerros.'
    ],
    queIncluye: [
      { icono: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', texto: 'Asesoramiento personalizado de rutas' },
      { icono: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', texto: 'Recomendaciones de alojamiento' },
      { icono: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', texto: 'Guías y tips de viajeros reales' },
      { icono: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z', texto: 'Lugares imperdibles mapeados' }
    ],
    mejorEpoca: 'De abril a noviembre es ideal: días soleados, noches frescas y paisajes en su máximo esplendor. Evitá enero-febrero si no te gusta el calor intenso y las lluvias ocasionales.',
    galeria: [
      'https://images.unsplash.com/photo-1580654712603-eb43273aff33?w=600&q=80',
      'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=600&q=80',
      'https://images.unsplash.com/photo-1590767950092-42b8362368da?w=600&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
      'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=600&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80'
    ]
  },
  {
    slug: 'cataratas-del-iguazu',
    nombre: 'Cataratas del Iguazú',
    categoria: 'nacional',
    imagenPortada: '/imagenes/Iguazu_Catarata.jpg.webp',
    descripcion: [
      'Las Cataratas del Iguazú no son solo agua cayendo: son 275 saltos que crean una sinfonía de rugidos, arcoíris y vida selvática. La Garganta del Diablo te deja sin palabras, mientras que los circuitos inferior y superior te regalan perspectivas únicas de esta maravilla natural.',
      'La selva misionera que las rodea es un universo en sí mismo: tucanes volando entre las pasarelas, coatíes curiosos, mariposas de colores imposibles. Cada recorrido es una experiencia sensorial completa donde el sonido del agua se mezcla con el canto de las aves.',
      'Te ayudamos a aprovechar cada minuto: cuándo ir para evitar multitudes, qué circuito hacer primero según la luz del día, dónde sentir la fuerza del agua de cerca. Porque visitar las Cataratas es algo que se vive, no solo se fotografía.'
    ],
    queIncluye: [
      { icono: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', texto: 'Planificación de circuitos óptimos' },
      { icono: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', texto: 'Mejor momento para cada recorrido' },
      { icono: 'M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z', texto: 'Mejores puntos fotográficos' },
      { icono: 'M13 10V3L4 14h7v7l9-11h-7z', texto: 'Tips para excursiones extra' }
    ],
    mejorEpoca: 'Todo el año tiene su encanto, pero marzo a mayo y agosto a octubre ofrecen temperaturas agradables y caudal abundante. Evitá enero si no te gusta el calor y humedad extremos.',
    galeria: [
      '/imagenes/Iguazu_Catarata.jpg.webp',
      '/imagenes/foz-do-iguacu.jpg',
      'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=600&q=80',
      'https://images.unsplash.com/photo-1580411741119-b91c18f0a75c?w=600&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80',
      'https://images.unsplash.com/photo-1601823984263-b07a70106d0b?w=600&q=80'
    ]
  },
  {
    slug: 'ushuaia',
    nombre: 'Ushuaia',
    categoria: 'nacional',
    imagenPortada: '/imagenes/ushua.jpg',
    descripcion: [
      'En el fin del mundo, donde la cordillera se encuentra con el mar, Ushuaia te espera con paisajes que cortan la respiración. El Canal Beagle, el Parque Nacional Tierra del Fuego, la Laguna Esmeralda: cada rincón es una postal que parece de otro planeta.',
      'Acá el invierno es pura magia con nieve y esquí, mientras que el verano ofrece días largos perfectos para trekkings y navegaciones. La historia se respira en cada puerto, en el antiguo presidio, en las historias de pioneros que eligieron quedarse en este extremo del continente.',
      'Te acompañamos a elegir las excursiones que realmente valen la pena, te contamos qué temporada es mejor según lo que busques, y te conectamos con la esencia de este lugar único. Porque Ushuaia no se visita: se vive con todos los sentidos.'
    ],
    queIncluye: [
      { icono: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', texto: 'Recomendaciones de excursiones' },
      { icono: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064', texto: 'Rutas de trekking sugeridas' },
      { icono: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', texto: 'Mejor época según actividad' },
      { icono: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', texto: 'Alojamiento según presupuesto' }
    ],
    mejorEpoca: 'Invierno (junio-septiembre) para nieve y esquí, verano (diciembre-marzo) para trekkings y navegación. Cada temporada tiene su propia magia patagónica.',
    galeria: [
      'https://images.unsplash.com/photo-1590767950092-42b8362368da?w=600&q=80',
      'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600&q=80',
      'https://images.unsplash.com/photo-1609198092357-863f0c0b7e64?w=600&q=80',
      'https://images.unsplash.com/photo-1605128015860-c1c8cbdda075?w=600&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80',
      'https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=600&q=80'
    ]
  },
  {
    slug: 'el-calafate',
    nombre: 'El Calafate',
    categoria: 'nacional',
    imagenPortada: '/imagenes/calafate.webp',
    descripcion: [
      'El Calafate es la puerta de entrada a uno de los espectáculos naturales más impresionantes del planeta: el Glaciar Perito Moreno. Ver el hielo milenario azulado, escuchar el crujido de sus paredes, presenciar el desprendimiento de bloques gigantes: es una experiencia que te marca para siempre.',
      'Pero Calafate es mucho más que el Perito Moreno. El Glaciar Upsala, la navegación por el Lago Argentino, los trekkings sobre hielo, y el pueblo mismo con su encanto patagónico te invitan a quedarte más días de los que planeabas.',
      'Te guiamos para que aproveches cada momento: qué glaciares visitar según tus días disponibles, cuándo ir a las pasarelas del Perito Moreno para verlo con la mejor luz, qué excursiones realmente valen la inversión. Porque conocer los glaciares requiere planificación para vivirlos en profundidad.'
    ],
    queIncluye: [
      { icono: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', texto: 'Planificación de visitas a glaciares' },
      { icono: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', texto: 'Mejor horario para cada excursión' },
      { icono: 'M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z', texto: 'Puntos fotográficos únicos' },
      { icono: 'M13 10V3L4 14h7v7l9-11h-7z', texto: 'Combos de excursiones optimizados' }
    ],
    mejorEpoca: 'Octubre a abril ofrece días más largos y clima más estable. El invierno (junio-agosto) tiene su encanto con menos turistas, pero puede ser muy frío y algunos servicios cierran.',
    galeria: [
      '/imagenes/calafate.webp',
      '/imagenes/calafate2.webp',
      'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=600&q=80',
      'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=600&q=80',
      'https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=600&q=80',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80'
    ]
  },
  {
    slug: 'mendoza',
    nombre: 'Mendoza',
    categoria: 'nacional',
    imagenPortada: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1200&q=80',
    descripcion: [
      'Mendoza es sinónimo de vino, montañas y sol durante casi todo el año. Las bodegas de Maipú y el Valle de Uco te esperan con degustaciones entre viñedos al pie de la Cordillera, mientras que el Aconcagua, el cerro más alto de América, se yergue imponente como guardián de la región.',
      'Aquí cada estación pinta un paisaje diferente: primavera con flores en las vides, verano con cosechas y fiestas, otoño con colores cálidos en los viñedos, invierno con nieve en Las Leñas. La propuesta gastronómica es de primer nivel, con restaurantes que fusionan productos locales y vinos de altura.',
      'Te ayudamos a armar tu ruta del vino perfecta, a elegir bodegas según tu estilo (boutique, grandes, orgánicas), y a combinar enoturismo con aventura en la montaña. Porque Mendoza se disfruta sin apuro, copa en mano y con las montañas de fondo.'
    ],
    queIncluye: [
      { icono: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', texto: 'Rutas del vino personalizadas' },
      { icono: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z', texto: 'Recomendación de bodegas' },
      { icono: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', texto: 'Mejor temporada para visitar' },
      { icono: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', texto: 'Alojamiento en zona vitivinícola' }
    ],
    mejorEpoca: 'Marzo-abril (vendimia y colores de otoño) y septiembre-noviembre (primavera) son ideales. Verano es intenso pero perfecto para alta montaña, invierno para esquí en Las Leñas.',
    galeria: [
      'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=600&q=80',
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80',
      'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=600&q=80',
      'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80',
      'https://images.unsplash.com/photo-1604656470952-6f5ffed7de37?w=600&q=80',
      'https://images.unsplash.com/photo-1526567471-22b2e16ff19b?w=600&q=80'
    ]
  },
  {
    slug: 'buenos-aires',
    nombre: 'Buenos Aires',
    categoria: 'nacional',
    imagenPortada: 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=1200&q=80',
    descripcion: [
      'Buenos Aires es una ciudad que te atrapa con su mezcla única de historia europea y alma latinoamericana. Caminar por San Telmo entre anticuarios y milongas, perderse en las calles coloridas de La Boca, sentir la sofisticación de Recoleta o la bohemia de Palermo: cada barrio es un mundo.',
      'La cultura pulsa en cada esquina: teatros, librerías icónicas, galerías de arte, shows de tango que te transportan a otra época. La gastronomía es de nivel mundial, con parrillas tradicionales y propuestas de vanguardia conviviendo en armonía.',
      'Te guiamos para que vivas Buenos Aires como un local: qué barrios recorrer según tus gustos, dónde comer el mejor asado sin caer en trampas turísticas, cuándo ver tango auténtico, y cómo moverte por la ciudad. Porque Buenos Aires se descubre caminando, conversando y dejándose sorprender.'
    ],
    queIncluye: [
      { icono: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', texto: 'Itinerarios por barrios' },
      { icono: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z', texto: 'Recomendaciones gastronómicas' },
      { icono: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', texto: 'Agenda cultural y shows' },
      { icono: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', texto: 'Alojamiento por zona' }
    ],
    mejorEpoca: 'Primavera (septiembre-noviembre) y otoño (marzo-mayo) ofrecen clima perfecto. Verano es caluroso pero con mucha vida nocturna. Invierno es ideal para museos y teatro.',
    galeria: [
      'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=600&q=80',
      'https://images.unsplash.com/photo-1544620282-5b47d57f4e8c?w=600&q=80',
      'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=600&q=80',
      'https://images.unsplash.com/photo-1558736923-a33f68b67f56?w=600&q=80',
      'https://images.unsplash.com/photo-1572721626468-e6c8cae946fa?w=600&q=80',
      'https://images.unsplash.com/photo-1601024968919-cf74b0f1b8c1?w=600&q=80'
    ]
  },
  {
    slug: 'caribe',
    nombre: 'Caribe',
    categoria: 'internacional',
    imagenPortada: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80',
    descripcion: [
      'El Caribe es el sueño de playas de arena blanca y aguas turquesas hecho realidad. Punta Cana, Cancún, Riviera Maya, las islas del Caribe: cada destino ofrece su propia versión del paraíso, con todo incluido que te permite relajarte sin preocuparte por nada.',
      'Más allá de las playas, el Caribe sorprende con cenotes, ruinas mayas, snorkel en arrecifes de coral, y gastronomía que mezcla sabores caribeños con influencias de todo el mundo. Es el equilibrio perfecto entre relax y aventura.',
      'Te ayudamos a elegir el destino caribeño perfecto según tu presupuesto y estilo: resorts familiares, hoteles solo adultos, beach clubs, o islas menos exploradas. Porque cada viaje al Caribe es único y merece ser diseñado a medida.'
    ],
    queIncluye: [
      { icono: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', texto: 'Selección de destinos caribeños' },
      { icono: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', texto: 'Hoteles y resorts recomendados' },
      { icono: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', texto: 'Mejor temporada para viajar' },
      { icono: 'M13 10V3L4 14h7v7l9-11h-7z', texto: 'Excursiones y actividades' }
    ],
    mejorEpoca: 'Noviembre a abril es temporada alta con clima perfecto. Mayo-octubre ofrece mejores precios pero riesgo de huracanes (especialmente agosto-octubre).',
    galeria: [
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80',
      'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=600&q=80',
      'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=600&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80',
      'https://images.unsplash.com/photo-1551244072-5d12893278ab?w=600&q=80',
      'https://images.unsplash.com/photo-1502933691298-84fc14542831?w=600&q=80'
    ]
  },
  {
    slug: 'europa',
    nombre: 'Europa',
    categoria: 'internacional',
    imagenPortada: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=80',
    descripcion: [
      'Europa es un continente para recorrer sin apuro: cada ciudad es un museo a cielo abierto, cada pueblo esconde historias milenarias, cada paisaje te roba el aliento. Desde las capitales icónicas hasta los rincones menos conocidos, hay una Europa para cada viajero.',
      'París, Roma, Barcelona, Londres: las grandes capitales te esperan con su arquitectura, museos y gastronomía. Pero también están las sorpresas: pueblos medievales, costas mediterráneas, castillos del Valle del Loira, fiordos noruegos. Europa es diversidad en cada kilómetro.',
      'Te asesoramos para armar tu recorrido ideal: qué ciudades combinar según tus días, cómo moverte entre países, cuándo ir a cada destino para evitar multitudes, y qué experiencias no podés perderte. Porque viajar a Europa requiere planificación para aprovechar cada momento.'
    ],
    queIncluye: [
      { icono: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', texto: 'Itinerarios multi-país' },
      { icono: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', texto: 'Planificación de tiempos' },
      { icono: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', texto: 'Alojamiento estratégico' },
      { icono: 'M13 10V3L4 14h7v7l9-11h-7z', texto: 'Imperdibles por ciudad' }
    ],
    mejorEpoca: 'Primavera (abril-junio) y otoño (septiembre-octubre) son ideales: buen clima y menos turistas. Verano tiene días largos pero multitudes. Invierno es mágico en mercados navideños.',
    galeria: [
      'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80',
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80',
      'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=600&q=80',
      'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=600&q=80',
      'https://images.unsplash.com/photo-1520986606214-8b456906c813?w=600&q=80',
      'https://images.unsplash.com/photo-1549144511-f099e773c147?w=600&q=80'
    ]
  },
  {
    slug: 'brasil',
    nombre: 'Brasil',
    categoria: 'internacional',
    imagenPortada: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&q=80',
    descripcion: [
      'Brasil es pura energía: Río con sus playas icónicas y el Cristo Redentor, las playas paradisíacas del nordeste, la Amazonia con su biodiversidad única, las cataratas de Foz do Iguaçu. Cada región es un país dentro del país, con su propia identidad y encanto.',
      'La cultura brasileña te abraza desde el primer momento: la música en las calles, la caipirinha en la playa, la feijoada compartida, el fútbol como religión. Es un destino que se vive con todos los sentidos, donde la alegría es contagiosa y la hospitalidad infinita.',
      'Te ayudamos a descubrir el Brasil que buscás: playas paradisíacas, aventura en la selva, cultura urbana en las metrópolis, o combinaciones de todo. Porque Brasil es tan grande y diverso que cada viaje puede ser completamente diferente.'
    ],
    queIncluye: [
      { icono: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', texto: 'Selección de regiones' },
      { icono: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', texto: 'Mejor época por destino' },
      { icono: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', texto: 'Recomendaciones de alojamiento' },
      { icono: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z', texto: 'Tips culturales y prácticos' }
    ],
    mejorEpoca: 'Depende de la región: Nordeste todo el año, Río y Sur de diciembre a marzo, Amazonia de abril a octubre. Evitá carnaval si no te gustan las multitudes (o buscalo si te encanta la fiesta).',
    galeria: [
      'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600&q=80',
      'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=600&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80',
      'https://images.unsplash.com/photo-1516150233506-e6c5c93cd9cb?w=600&q=80',
      'https://images.unsplash.com/photo-1516051662687-567d7c4e8f6a?w=600&q=80',
      'https://images.unsplash.com/photo-1587394319552-17d73c0b8525?w=600&q=80'
    ]
  },
  {
    slug: 'avistaje-de-ballenas',
    nombre: 'Avistaje de ballenas',
    categoria: 'receptivo',
    imagenPortada: '/imagenes/avistajeball.jpg',
    descripcion: [
      'Desde Puerto Madryn, la experiencia de ver ballenas francas australes en su hábitat natural es algo que no se olvida nunca. Estos gigantes marinos llegan cada año a la Península Valdés para reproducirse y criar a sus ballenatos, ofreciendo un espectáculo único en el mundo.',
      'La navegación sale de Puerto Pirámides y te lleva mar adentro a pocos metros de estos mamíferos de más de 15 metros. Ver cómo saltan, juegan con sus crías, y te miran con curiosidad desde el agua es una conexión con la naturaleza que te transforma.',
      'Te asesoramos sobre la mejor época para ir (agosto a diciembre), qué esperar de la experiencia, y cómo combinar el avistaje con otros atractivos de la península como elefantes marinos, pingüinos y orcas. Porque la Patagonia costera es un santuario de vida marina.'
    ],
    queIncluye: [
      { icono: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', texto: 'Info sobre temporada de ballenas' },
      { icono: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', texto: 'Mejor momento del día' },
      { icono: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', texto: 'Reserva de excursiones' },
      { icono: 'M13 10V3L4 14h7v7l9-11h-7z', texto: 'Combos con otros atractivos' }
    ],
    mejorEpoca: 'Agosto a diciembre, con pico en septiembre-octubre. Las ballenas llegan a reproducirse y se quedan varios meses. Es un espectáculo garantizado en esta temporada.',
    galeria: [
      '/imagenes/avistajeball.jpg',
      'https://images.unsplash.com/photo-1545450660-7ac0f5f49f47?w=600&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80'
    ]
  },
  {
    slug: 'punta-tombo',
    nombre: 'Punta Tombo',
    categoria: 'receptivo',
    imagenPortada: '/imagenes/puntatombo.jpg',
    descripcion: [
      'Punta Tombo alberga la colonia continental de pingüinos de Magallanes más grande del mundo. Caminar entre miles de estos animales mientras anidan, crían a sus pichones y se desplazan torpe mente por la playa es una experiencia única que solo se vive en la Patagonia costera.',
      'La excursión desde Trelew o Puerto Madryn te lleva por pasarelas entre la colonia, donde los pingüinos te miran con curiosidad mientras siguen con su rutina diaria. El sonido del mar, el viento patagónico, y la cercanía con estos animales hacen de Punta Tombo un lugar mágico.',
      'Te contamos cuándo ir para verlos en distintas etapas (llegada, reproducción, crianza, partida), qué llevar para estar cómodo, y cómo combinar la visita con otros puntos de la ruta costera. Porque compartir territorio con los pingüinos es un privilegio que hay que vivir con respeto y asombro.'
    ],
    queIncluye: [
      { icono: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', texto: 'Ciclo de vida de los pingüinos' },
      { icono: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', texto: 'Mejor época para visitar' },
      { icono: 'M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z', texto: 'Consejos para fotografiar' },
      { icono: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', texto: 'Organización de traslados' }
    ],
    mejorEpoca: 'Septiembre a marzo: llegan en septiembre, anidan en octubre-noviembre, crían pichones en diciembre-enero, parten en marzo. Cada momento tiene su encanto particular.',
    galeria: [
      '/imagenes/puntatombo.jpg',
      'https://images.unsplash.com/photo-1537420327992-d6e192287183?w=600&q=80',
      'https://images.unsplash.com/photo-1574192324001-ee83e13c2473?w=600&q=80',
      'https://images.unsplash.com/photo-1598439210625-5067c578f3f6?w=600&q=80',
      'https://images.unsplash.com/photo-1605108456389-1f0a6db42b05?w=600&q=80',
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&q=80'
    ]
  },
  {
    slug: 'te-gales-y-valle',
    nombre: 'Té Galés y Valle',
    categoria: 'receptivo',
    imagenPortada: '/imagenes/tegales.jpg',
    descripcion: [
      'El Valle 16 de Octubre y la experiencia del Té Galés son un viaje en el tiempo a la historia de la colonización galesa en la Patagonia. Casas de té que conservan recetas centenarias, tortas negras como las que hacían los colonos, y el paisaje del valle con sus álamos y chacras te transportan a otra época.',
      'La excursión desde Trelew recorre el valle mostrando capillas galesas, cementerios históricos, y llega a alguna de las tradicionales casas de té (Ty Te Caerdydd, Nain Maggie, Ty Gwyn) donde te reciben con té, scones, torta negra y toda la calidez de la tradición galesa patagónica.',
      'Te contamos la historia de los colonos galeses que llegaron en 1865, qué hace especial al valle, y cómo aprovechar la visita para entender esta identidad única que mezcla Gales con la estepa patagónica. Porque el Valle es memoria viva de una aventura pionera.'
    ],
    queIncluye: [
      { icono: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', texto: 'Historia de la colonización galesa' },
      { icono: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z', texto: 'Casas de té recomendadas' },
      { icono: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', texto: 'Reserva anticipada del té' },
      { icono: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', texto: 'Mejor horario para ir' }
    ],
    mejorEpoca: 'Todo el año, pero primavera (septiembre-noviembre) y otoño (marzo-mayo) ofrecen el valle con colores hermosos. Invierno es más frío pero el té caliente es más reconfortante.',
    galeria: [
      '/imagenes/tegales.jpg',
      'https://images.unsplash.com/photo-1573897426738-32d05e6c3f3c?w=600&q=80',
      'https://images.unsplash.com/photo-1556710807-f4b1625075b0?w=600&q=80',
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
      'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?w=600&q=80'
    ]
  }
];
