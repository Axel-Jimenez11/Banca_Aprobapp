# Aprobapp

Landing page visual y educativa para un sistema de apoyo a la decisión en la aprobación de créditos. Esta etapa contiene únicamente estructura, contenido fijo e interacciones de interfaz.

## Requisitos

- Node.js 20.9 o superior
- npm

## Instalación y desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

## Otros comandos

```bash
npm run lint
npm run build
npm run start
```

## Organización

- `app/`: layout, metadata, página principal y estilos globales.
- `components/`: encabezado, iconos, secciones y acordeón de preguntas.
- `data/content.ts`: textos y datos fijos de ejemplo, listos para conectarse a una fuente real más adelante.

No se usan imágenes remotas, bases de datos, API, autenticación ni formularios con envío de datos.
