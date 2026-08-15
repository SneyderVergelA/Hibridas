# Registro de Mascotas - Veterinaria

App en React que captura los datos de una mascota (nombre, dueño, especie,
raza, edad y teléfono), los guarda en `localStorage` y los muestra en una
lista en pantalla, con alerta de confirmación al registrar.

## Estructura del proyecto

```
src/
├── componentes/
│   ├── FormularioMascota/       # formulario de registro (6 campos)
│   └── ListaMascotas/           # lista + tarjeta de cada mascota
├── hooks/
│   └── useMascotas.js           # useState + useEffect
├── servicios/
│   └── servicioMascotas.js      # acceso a datos (localStorage)
├── paginas/
│   └── Inicio.js                # página principal
├── App.js                       # define las rutas con react-router-dom
└── index.js                     # punto de entrada de React
```

## Cómo correrlo

```bash
npm install
npm start
```

Se abre en `http://localhost:3000`.
