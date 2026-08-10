# Quilimbay Turismo - Landing Page Demo

Landing page de una sola página para Quilimbay Turismo, una agencia de viajes con enfoque en acompañamiento personalizado, con páginas individuales de detalle por cada destino.

## 🚀 Stack tecnológico

- **Astro** - Framework para sitios web estáticos
- **React** - Para componentes interactivos (carrusel, menú mobile)
- **Tailwind CSS** - Estilos
- **TypeScript** - Tipado

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de producción
npm run preview
```

## 🎨 Características

- Diseño responsive mobile-first
- Navegación fija con menú hamburguesa en mobile
- Hero con collage de imágenes en desktop
- Sección de destinos (nacionales, internacionales, receptivo patagónico)
- **Páginas individuales para cada destino** con información detallada
- Carrusel de testimonios interactivo
- Integración con WhatsApp
- Paleta navy/dorado premium
- Tipografía Playfair Display + Inter

## 📁 Estructura

```
quilimbayDemo/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── MobileMenu.tsx
│   │   ├── Navbar.tsx
│   │   └── TestimonialsCarousel.tsx
│   ├── data/
│   │   └── destinos.ts          # Datos de todos los destinos
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro          # Landing principal
│   │   └── destinos/
│   │       └── [slug].astro     # Página dinámica de destinos
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## 🎯 Secciones de la landing page

1. **Header/Navbar** - Navegación fija con logo y enlaces
2. **Hero** - Título principal con collage de destinos
3. **Por qué Quilimbay** - 3 puntos de valor
4. **Destinos destacados** - Nacionales, internacionales y receptivo (cada uno con link a su página de detalle)
5. **Testimonios** - Carrusel con reseñas de clientes
6. **Nosotros** - Historia y filosofía de la agencia
7. **Footer/Contacto** - Información de contacto y redes sociales

## 📄 Páginas de destinos

Cada destino tiene su propia página en `/destinos/[slug]` con:

- **Header** con imagen de portada grande y breadcrumb
- **Descripción detallada** del destino (2-3 párrafos)
- **Qué incluye** - Lista de asesoramientos y servicios
- **Mejor época para viajar** - Recomendaciones de temporada
- **Galería** - 6 fotos del destino
- **Panel sticky** (desktop) / botón flotante (mobile) con CTA de WhatsApp
- **Sección "Te puede interesar"** con destinos relacionados

### Destinos disponibles:

**Nacionales:**
- Salta (`/destinos/salta`)
- Cataratas del Iguazú (`/destinos/cataratas-del-iguazu`)
- Ushuaia (`/destinos/ushuaia`)
- El Calafate (`/destinos/el-calafate`)
- Mendoza (`/destinos/mendoza`)
- Buenos Aires (`/destinos/buenos-aires`)

**Internacionales:**
- Caribe (`/destinos/caribe`)
- Europa (`/destinos/europa`)
- Brasil (`/destinos/brasil`)

**Turismo Receptivo Patagonia:**
- Avistaje de ballenas (`/destinos/avistaje-de-ballenas`)
- Punta Tombo (`/destinos/punta-tombo`)
- Té Galés y Valle (`/destinos/te-gales-y-valle`)

## 🎨 Paleta de colores

- Navy: `#0a1420`
- Navy Light: `#0d1b2a`
- Navy Lighter: `#1a2332`
- Gold: `#f0b429`
- Gold Dark: `#d4a017`

## 📝 Notas

- Los enlaces de WhatsApp incluyen mensajes prellenados específicos por destino
- Las imágenes usan Unsplash para la demo
- El contenido de texto es genérico pero creíble para la demo
- Es una demo estática, sin backend
- Las páginas de destinos se generan estáticamente en build time usando `getStaticPaths`
