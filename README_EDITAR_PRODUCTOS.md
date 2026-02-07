# 📝 Cómo Editar Productos Rápidamente

## Opción 1: Editar productos.json (RECOMENDADO)

Para cambiar o agregar productos, solo edita el archivo:
```
src/data/products.json
```

**Estructura de cada producto:**
```json
{
  "id": 1,
  "name": "Nombre del Chile",
  "description": "Descripción del producto",
  "weight": "100g - 500g",
  "price": "$45,000 COP",
  "scoville": "1,000 - 2,000 SHU",
  "image": "/nombre-imagen.jpg",
  "featured": true
}
```

**Campos:**
- `id`: Número único para cada producto
- `name`: Nombre del chile
- `description`: Descripción 
- `weight`: Presentaciones disponibles
- `price`: Precio en pesos colombianos
- `scoville`: Nivel de picor
- `image`: Ruta de la imagen (en carpeta `public/`)
- `featured`: `true` para mostrar badge "Más Popular"

---

## Opción 2: Cambiar imágenes

### Método A: Imágenes locales (rápido)
1. Descarga tus imágenes
2. Colócalas en la carpeta `public/`
3. En `products.json` usa: `"/nombre-imagen.jpg"`

Ejemplo:
```
public/
├── chile-ancho.jpg
├── chile-guajillo.jpg
└── ...
```

### Método B: URLs externas (sin descargar)
Si quieres usar URLs directo desde internet (Unsplash, Cloudinary, etc):

```json
"image": "https://images.unsplash.com/photo-xxxxxx?w=500&h=500&fit=crop"
```

---

## ✅ Cambios rápidos más comunes

### Cambiar precio
```json
"price": "$50,000 COP"  ← Cambiar este número
```

### Cambiar featured
```json
"featured": true   ← true = muestra badge "Más Popular"
                   ← false = sin badge
```

### Cambiar descripción
```json
"description": "Nueva descripción aquí"
```

### Agregar nuevo producto
1. Copia un producto existente
2. Cambio `"id"` a un número nuevo (7, 8, 9...)
3. Completa los datos
4. No olvides agregar una imagen en `public/`

---

## 🔄 Después de editar

Guarda el archivo y:
- **Desarrollo**: F5 en el navegador (se actualiza automáticamente)
- **Producción**: Ejecuta `npm run build` y sube la carpeta `dist/`

---

## 📊 Ejemplo completo nuevo producto

```json
{
  "id": 7,
  "name": "Chile Serrano",
  "description": "Fresco y picante. Perfecto para salsas verdes.",
  "weight": "50g - 250g",
  "price": "$35,000 COP",
  "scoville": "10,000 - 25,000 SHU",
  "image": "/chile-serrano.jpg",
  "featured": false
}
```

No necesitas tocar React. ¡Todo es dinámico desde el JSON! 🚀
