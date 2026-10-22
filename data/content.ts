export const navigation = {
  top: ["Oficiales de crédito", "Instituciones", "Equipo TACTIC-AI"],
  main: [
    { label: "Producto", href: "#producto" },
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Seguridad", href: "#seguridad" },
    { label: "Preguntas", href: "#preguntas" },
  ],
  productGroups: [
    {
      title: "La plataforma",
      links: ["Evaluación clara", "Explicaciones breves", "Decisión humana"],
    },
    {
      title: "Para tu equipo",
      links: ["Oficiales de crédito", "Instituciones", "Equipo TACTIC-AI"],
    },
    {
      title: "Conoce más",
      links: ["Cómo funciona", "Seguridad y transparencia", "Preguntas frecuentes"],
    },
  ],
};

export const quickLinks = [
  "Quiero evaluar una solicitud",
  "Quiero entender una calificación",
  "Quiero conocer la seguridad",
  "Quiero ver cómo se actualiza el modelo",
];

export const steps = [
  ["01", "Se recibe la solicitud", "La información llega al sistema para iniciar la evaluación.", "inbox"],
  ["02", "Se calcula la calificación de riesgo", "El modelo revisa las variables definidas por el equipo de riesgo.", "chart"],
  ["03", "Se muestra una explicación breve", "El oficial recibe una señal clara, acompañada de sus principales razones.", "message"],
  ["04", "El oficial de crédito decide", "La calificación apoya la conversación, pero la decisión final es humana.", "person"],
];

export const features = [
  ["Respuesta en segundos", "Obtén una señal inicial sin perder de vista el contexto de cada solicitud.", "bolt"],
  ["Explicaciones que se entienden", "Conoce los factores que más influyeron en el resultado, en lenguaje claro.", "spark"],
  ["La decisión final es humana", "Aprobapp acompaña al equipo; nunca reemplaza su criterio profesional.", "hand"],
];

export const securityCards = [
  ["Datos protegidos", "Diseñamos cada etapa pensando en la privacidad y el cuidado de la información.", "shield"],
  ["Copia original conservada", "Cada versión queda disponible para revisiones y auditorías posteriores.", "copy"],
  ["Decisiones explicables", "La calificación viene acompañada de razones que ayudan a conversar y decidir.", "eye"],
];

export const faqs = [
  ["¿Aprobapp aprueba o rechaza una solicitud?", "No. Aprobapp entrega una calificación de riesgo y una explicación breve para apoyar al oficial. La decisión final siempre corresponde a una persona."],
  ["¿Qué significa la calificación de riesgo?", "Es una señal de apoyo que resume el perfil de la solicitud con base en las variables definidas por el equipo de riesgo."],
  ["¿Cada cuánto se actualiza el modelo?", "El modelo se reentrena cada trimestre y cada nueva versión pasa por una aprobación manual antes de ponerse a disposición."],
  ["¿Puedo revisar versiones anteriores?", "Sí. La propuesta contempla conservar la versión original y permitir volver a una versión anterior cuando sea necesario."],
  ["¿Aprobapp sustituye la experiencia del equipo?", "No. El sistema está diseñado para acompañar la experiencia del equipo con información clara, consistente y revisable."],
];
