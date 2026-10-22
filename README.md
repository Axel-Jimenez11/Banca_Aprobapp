# Aprobapp

Aprobapp es un sistema de apoyo a la decisión para la aprobación de créditos. Para cada solicitud calcula una calificación de riesgo y la entrega junto con una explicación breve al oficial de crédito, quien siempre toma la decisión final.

Este es un proyecto para la materia de Ingeniería de Software 2026B, desarrollado en el Centro Universitario de Guadalajara (CUGDL), Universidad de Guadalajara, y basado en el caso de estudio de aprobación de créditos con el conjunto de datos German Credit.

Autor: Axel Salvador Jimenez Lopez.

## Qué problema resuelve

Evaluar una solicitud de crédito depende en gran medida de la experiencia de quien la revisa, lo que genera tiempos de respuesta distintos y criterios que cambian de una persona a otra. Aprobapp aporta un criterio adicional, basado en el comportamiento histórico de crédito, sin eliminar el juicio humano: el modelo apoya y la persona decide.

## Funciones principales

**1. Recepción de solicitudes.** Cada día, a las 6:00 a. m., el sistema recibe por lotes el archivo con las solicitudes nuevas que el equipo comercial capturó el día anterior. Además, atiende en el momento las solicitudes hechas en sucursal o desde la aplicación.

**2. Calificación de riesgo en línea.** Cuando un cliente solicita un crédito, el sistema calcula su calificación de riesgo y responde en segundos, porque el cliente está presente y la decisión no puede esperar a un proceso nocturno.

**3. Explicación de cada resultado.** La calificación se entrega con una explicación breve de los factores que más influyeron, para que el oficial de crédito entienda por qué el sistema sugiere aprobar o rechazar.

**4. Decisión final humana.** El oficial de crédito recibe la calificación y la explicación, y es quien aprueba o rechaza la solicitud. El modelo nunca decide por sí solo.

**5. Almacenamiento ordenado de datos.** El sistema conserva una copia original de cada archivo de solicitudes, sin modificar, como evidencia ante auditorías, y una versión revisada y limpia que alimenta tanto el entrenamiento del modelo como el servicio de calificación.

**6. Reentrenamiento trimestral.** Cada trimestre el modelo se entrena de nuevo con todos los datos acumulados. Se usa un modelo de complejidad media, por ejemplo un bosque de árboles, porque permite explicar sus resultados al personal de riesgo.

**7. Historial de entrenamientos.** Cada entrenamiento queda registrado con sus parámetros, su métrica de validación y la versión de datos que utilizó.

**8. Aprobación y reversión de modelos.** Una persona del equipo de riesgo aprueba manualmente cada nueva versión antes de que reemplace a la que está en producción. La versión anterior se conserva para poder regresar a ella si algo sale mal.

**9. Monitoreo continuo.** Todos los días se vigila que el servicio responda sin fallas. Cada semana se revisa si cambia el perfil de los solicitantes. La calidad real del modelo se mide meses después, cuando se conoce si el crédito fue pagado, entre 6 y 24 meses según el caso.

## Quién usa el sistema

| Usuario | Qué hace con Aprobapp |
| --- | --- |
| Oficial de crédito | Consulta la calificación y la explicación, y toma la decisión final. |
| Equipo de riesgo | Revisa y aprueba cada nueva versión del modelo. |
| Equipo comercial | Aporta las solicitudes nuevas de cada día. |
| Equipo técnico | Vigila la salud del servicio y los cambios en el perfil de los solicitantes. |

## Flujo de una solicitud

1. Se recibe la solicitud del cliente en sucursal o en la aplicación.
2. El sistema calcula la calificación de riesgo.
3. Se muestra el resultado con una explicación breve.
4. El oficial de crédito revisa la información y decide.
5. Con el tiempo, el resultado real del crédito se usa para evaluar y mejorar el modelo.

## Secciones de la página

La página principal presenta el sistema en este orden:

- Barra superior con accesos por tipo de usuario.
- Encabezado con menú de navegación y menú desplegable de producto.
- Aviso informativo.
- Portada con una maqueta de la tarjeta de resultado.
- Accesos rápidos según lo que necesita el usuario.
- Cómo funciona, en cuatro pasos.
- Tarjetas destacadas: respuesta en segundos, explicaciones claras y decisión final humana.
- Un modelo que se mantiene al día: reentrenamiento, aprobación de versiones y monitoreo.
- Seguridad y transparencia.
- Cifras destacadas.
- Preguntas frecuentes.
- Estamos a tu lado: canales de atención.
- Aviso de confidencialidad.
- Nota legal y pie de página.

## Tecnologías

- Next.js con App Router
- TypeScript
- Tailwind CSS
- Fuentes Libre Franklin y Source Serif 4 mediante next/font
- Iconos en SVG inline, sin librerías adicionales

## Estructura del proyecto

```
app/
  globals.css            Estilos globales y variables de color
  layout.tsx             Estructura base, metadatos y fuentes
  page.tsx               Ensambla los componentes de la página
components/
  Header.tsx             Barra superior, encabezado y menús
  Sections.tsx           Secciones de contenido de la página
  FAQ.tsx                Preguntas frecuentes en acordeón
  AvisoConfidencialidad.tsx   Aviso de confidencialidad
  Icon.tsx               Iconos SVG reutilizables
data/
  content.ts             Todos los textos de la página
```

Los textos viven en `data/content.ts`, de modo que se pueden editar sin tocar los componentes.

## Instalación y ejecución

Requiere Node.js 20.9 o superior.

```
git clone https://github.com/Axel-Jimenez11/Banca_Aprobapp.git
cd Banca_Aprobapp
npm install
npm run dev
```

Después abre http://localhost:3000 en el navegador.

Scripts disponibles:

| Comando | Función |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run build` | Genera la versión de producción. |
| `npm run start` | Sirve la versión de producción. |
| `npm run lint` | Revisa el código con ESLint. |

## Referencia de diseño

Con fines educativos, el diseño toma como referencia la estructura y el ambiente de sitios bancarios modernos. No incluye logotipos, imágenes ni textos de terceros.

## Estado actual

Esta versión es únicamente visual y no es funcional. Presenta la estructura y el diseño de la página con datos de ejemplo fijos. Todavía no existe cálculo de riesgo, base de datos, conexión con servicios, autenticación ni formularios que envíen información. Las funciones descritas en este documento corresponden a lo planeado para el sistema completo.