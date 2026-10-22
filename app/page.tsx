import { FAQ } from "@/components/FAQ";
import { Header } from "@/components/Header";
import { FeatureCards, Hero, InfoBanner, ModelSection, QuickAccess, Security, Stats, Steps, Support } from "@/components/Sections";
import { Icon } from "@/components/Icon";

export default function Home() {
  return <><a className="skip-link" href="#contenido">Saltar al contenido</a><Header /><main id="contenido"><InfoBanner /><Hero /><QuickAccess /><Steps /><FeatureCards /><ModelSection /><Security /><Stats /><section className="faq-section section-white" id="preguntas"><div className="container faq-grid"><div><p className="eyebrow">Resolvemos tus dudas</p><h2>Preguntas frecuentes</h2><p className="section-lead">Un punto de partida para conocer mejor cómo funciona Aprobapp.</p><a className="text-link" href="#contacto">¿Tienes otra pregunta? <Icon name="arrow" size={17} /></a></div><FAQ /></div></section><Support /><aside className="legal-note"><div className="container"><Icon name="shield" size={18} /><p>La calificación es un apoyo para la decisión y no constituye una aprobación de crédito.</p></div></aside></main><Footer /></>;
}

function Footer() {
  const columns = [["Producto", "Cómo funciona", "Calificación de riesgo", "Explicaciones"], ["Proyecto", "Nuestra visión", "Equipo TACTIC-AI", "Actualizaciones"], ["Ayuda", "Preguntas frecuentes", "Contacto", "Acceso"], ["Legal", "Aviso de privacidad", "Términos de uso", "Transparencia"]];
  return <footer className="footer"><div className="container"><div className="footer-top"><div className="footer-brand"><a className="brand brand-light" href="#"><span className="brand-mark">A</span><span>Aprobapp</span></a><p>Decisiones de crédito más claras y consistentes.</p></div><div className="footer-columns">{columns.map(([title, ...links]) => <div key={title}><h3>{title}</h3>{links.map((link) => <a href="#" key={link}>{link}</a>)}</div>)}</div></div><div className="footer-bottom"><span>© 2026 Aprobapp. Proyecto académico.</span><span>Hecho para decidir con claridad.</span></div></div></footer>;
}
