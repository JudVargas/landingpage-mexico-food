# �️ Chile México Premium - Landing Page

Landing page profesional para importación y venta de chiles mexicanos premium en Colombia. Desarrollada en React + Vite, con diseño moderno y responsive, lista para desplegar en cualquier hosting estático.

## 📋 Características

- ✅ **Catálogo de Chiles Premium**: Sección con chiles mexicanos auténticos y sus características
- ✅ **Sobre Nosotros**: Historia de importación y valores de la empresa
- ✅ **Contacto Profesional**: Formulario de cotización e información de contacto
- ✅ **Mapa Interactivo**: Integración con Google Maps mostrando ubicación en Bogotá
- ✅ **Botón WhatsApp Flotante**: Con tooltip animado para contacto directo
- ✅ **Diseño Profesional**: Tipografías modernas (Inter + Playfair Display)
- ✅ **100% Responsive**: Optimizado para móviles, tablets y desktop
- ✅ **Build Optimizado**: Genera archivos HTML/CSS/JS estáticos listos para desplegar

## 🎨 Diseño Moderno

- **Tipografías**: Inter (UI) + Playfair Display (títulos)
- **Paleta de colores profesional**: Rojos y verdes mexicanos modernizados
- **Animaciones sutiles**: Hover effects y transiciones suaves
- **Sombras y bordes**: Diseño limpio con profundidad visual
- **Badges y tooltips**: Elementos interactivos profesionales

## 🚀 Instalación y Uso

### Requisitos Previos
- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

```bash
# Instalar dependencias
npm install
```

### Comandos Disponibles

```bash
# Modo desarrollo - Servidor con hot reload en http://localhost:5173
npm run dev

# Compilar para producción - Genera carpeta 'dist' con archivos HTML
npm run build

# Vista previa del build de producción
npm run preview
```

## 📁 Estructura del Proyecto

```
Mexico-food/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navegación y hero section moderno
│   │   ├── Header.css
│   │   ├── Products.jsx        # Grid de chiles con badges
│   │   ├── Products.css
│   │   ├── About.jsx           # Historia de importación
│   │   ├── About.css
│   │   ├── Contact.jsx         # Formulario de cotización
│   │   ├── Contact.css
│   │   ├── Map.jsx             # Google Maps Bogotá
│   │   ├── Map.css
│   │   ├── WhatsAppButton.jsx  # Botón flotante con tooltip
│   │   └── WhatsAppButton.css
│   ├── App.jsx                 # Componente principal con footer
│   ├── App.css                 # Estilos globales + variables CSS
│   ├── main.jsx                # Punto de entrada
│   └── index.css
├── index.html                   # Template con Google Fonts
├── package.json
├── vite.config.js
└── README.md
```

## 🌶️ Productos Incluidos

El catálogo incluye 6 tipos de chiles mexicanos premium:

1. **Chile Ancho** - Ideal para moles (1,000-2,000 SHU)
2. **Chile Guajillo** - Perfecto para salsas (2,500-5,000 SHU)
3. **Chile Chipotle Meco** - Ahumado intenso (5,000-10,000 SHU)
4. **Chile de Árbol** - Picante brillante (15,000-30,000 SHU)
5. **Chile Pasilla** - Notas de chocolate (1,000-2,500 SHU)
6. **Chile Cascabel** - Sabor a nuez (1,500-2,500 SHU)

Cada producto muestra:
- Descripción detallada
- Presentaciones disponibles
- Nivel de picor (Escala Scoville)
- Badge "Más Popular" para productos destacados

## 🎨 Personalización

### Cambiar Número de WhatsApp

Edita el archivo [src/components/WhatsAppButton.jsx](src/components/WhatsAppButton.jsx):

```javascript
const phoneNumber = '573104567890' // Formato: 57 + 10 dígitos (Colombia)
const message = encodeURIComponent('Tu mensaje personalizado')
```

### Cambiar Ubicación del Mapa

Edita el archivo [src/components/Map.jsx](src/components/Map.jsx):

1. Ve a [Google Maps](https://www.google.com/maps)
2. Busca tu ubicación
3. Haz clic en "Compartir" → "Insertar un mapa"
4. Copia el código de inserción
5. Reemplaza la URL en `mapUrl`
6. Actualiza también la dirección física en el componente

### Modificar Productos (Chiles)

Edita el array `products` en [src/components/Products.jsx](src/components/Products.jsx):

```javascript
const products = [
  {
    id: 1,
    name: 'Nombre del Chile',
    description: 'Descripción detallada',
    weight: '100g - 500g',
    scoville: '1,000 - 2,000 SHU',
    emoji: '🌶️',
    featured: true  // true para mostrar badge "Más Popular"
  },
  // Agregar más chiles...
]
```

### Personalizar Colores

Modifica las variables CSS en [src/App.css](src/App.css):

```css
:root {
  --primary-color: #D32F2F;      /* Rojo principal */
  --primary-dark: #B71C1C;       /* Rojo oscuro */
  --secondary-color: #2E7D32;    /* Verde */
  --accent-color: #F57C00;       /* Naranja */
  --dark-color: #212121;         /* Negro/gris oscuro */
  --gray-color: #757575;         /* Gris medio */
  --gray-light: #F5F5F5;        /* Gris claro */
}
```

### Cambiar Tipografías

Las fuentes se cargan desde Google Fonts en [index.html](index.html). Para cambiar:

1. Ve a [Google Fonts](https://fonts.google.com/)
2. Selecciona tus fuentes
3. Copia el link de importación
4. Actualiza las referencias en `App.css` y `Header.css`

## 🌐 Desplegar a Producción

### Paso 1: Generar Build

```bash
npm run build
```

Esto genera la carpeta `dist/` con todos los archivos HTML, CSS y JavaScript optimizados y minificados.

### Paso 2: Subir a Hosting

La carpeta `dist/` contiene todo el sitio listo para desplegar. Puedes subirla a:

#### Netlify (Recomendado - Gratis)
1. Ve a [netlify.com](https://www.netlify.com/)
2. Arrastra la carpeta `dist/` a [netlify.com/drop](https://app.netlify.com/drop)
3. ¡Tu sitio está en línea en segundos!

O usando CLI:
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

#### Vercel (Gratis)
```bash
npm i -g vercel
vercel --prod
```

#### GitHub Pages (Gratis)
1. Sube el proyecto a GitHub
2. Ve a Settings → Pages
3. Selecciona la rama y carpeta `/dist` o usa GitHub Actions
4. Tu sitio estará en `https://usuario.github.io/mexico-food`

#### Hosting Tradicional (cPanel, FTP, etc.)
1. Comprime la carpeta `dist/` en un archivo .zip
2. Súbela vía FTP al directorio `public_html` o `www`
3. Descomprime en el servidor
4. Tu sitio está listo

### Configuración de URL Base

Si tu sitio NO está en la raíz del dominio (ej: `midominio.com/chiles`), edita [vite.config.js](vite.config.js):

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/chiles/'  // Cambiar según tu ruta
})
```

Luego vuelve a ejecutar `npm run build`.

## 📱 Navegación

El sitio incluye navegación suave (smooth scroll) a secciones:

- **Productos**: `#productos` - Catálogo de chiles
- **Nosotros**: `#nosotros` - Historia e importación
- **Contacto**: `#contacto` - Formulario de cotización
- **Ubicación**: `#ubicacion` - Mapa de Bogotá

## 🛠️ Tecnologías Utilizadas

- **React 18.3** - Biblioteca de UI moderna
- **Vite 6** - Build tool ultrarrápido con HMR
- **CSS3 Moderno** - Variables CSS, Grid, Flexbox, animaciones
- **Google Fonts** - Inter + Playfair Display
- **Google Maps Embed API** - Mapa interactivo (sin API key requerida)
- **WhatsApp Business API** - Integración directa

## ✨ Características de Diseño

- **Responsive Design**: Mobile-first approach
- **Smooth Animations**: Transiciones suaves y hover effects
- **Modern Typography**: Combinación profesional de fuentes
- **Color Psychology**: Colores mexicanos profesionalizados
- **Micro-interactions**: Tooltips, badges, pulsos animados
- **Accessibility**: Semantic HTML y ARIA labels

## 📝 Notas Importantes

- **Mapa**: Usa iframe embed de Google Maps (no requiere API key)
- **WhatsApp**: Abre la app o web con mensaje predefinido
- **Formulario**: Solo UI - necesita backend (Formspree, EmailJS, etc.)
- **Iconos**: Emojis nativos (sin librería externa)
- **Fonts**: Cargadas desde Google Fonts CDN
- **Build**: Optimizado con code-splitting automático



## 🤝 Soporte

Para dudas o problemas:
- Revisa la documentación de [Vite](https://vitejs.dev/)
- Consulta la [documentación de React](https://react.dev/)
- Documentación de [Google Fonts](https://fonts.google.com/)

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso personal y comercial.

---

**¡Listo para desplegar!** 🚀 

Ejecuta `npm run build` y sube la carpeta `dist/` a tu hosting favorito.

**Diseño moderno, profesional y 100% responsive para tu negocio de chiles mexicanos en Colombia** 🌶️🇲🇽🇨🇴
