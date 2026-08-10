# Quilimbay Turismo - Landing Page Demo

Landing page de una sola página para Quilimbay Turismo, una agencia de viajes con enfoque en acompañamiento personalizado.

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
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## 🎯 Secciones de la página

1. **Header/Navbar** - Navegación fija con logo y enlaces
2. **Hero** - Título principal con collage de destinos
3. **Por qué Quilimbay** - 3 puntos de valor
4. **Destinos destacados** - Nacionales, internacionales y receptivo
5. **Testimonios** - Carrusel con reseñas de clientes
6. **Nosotros** - Historia y filosofía de la agencia
7. **Footer/Contacto** - Información de contacto y redes sociales

## 🎨 Paleta de colores

- Navy: `#0a1420`
- Navy Light: `#0d1b2a`
- Navy Lighter: `#1a2332`
- Gold: `#f0b429`
- Gold Dark: `#d4a017`

## 📝 Notas

- Los enlaces de WhatsApp apuntan a `https://wa.me/5492804581234` (placeholder)
- Las imágenes usan Unsplash y pravatar para la demo
- Los testimonios son contenido de ejemplo
- Es una demo estática, sin backend
