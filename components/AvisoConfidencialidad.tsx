import { confidentialityNotice } from "@/data/content";

export function AvisoConfidencialidad() {
  return (
    <section className="confidentiality-section section-gray" id="aviso-confidencialidad">
      <div className="container confidentiality-grid">
        <div className="confidentiality-heading">
          <p className="eyebrow">{confidentialityNotice.eyebrow}</p>
          <h2>{confidentialityNotice.title}</h2>
          <p className="section-lead">
            Conoce cómo procuramos cuidar la información de las personas solicitantes durante el proceso.
          </p>
        </div>
        <article className="confidentiality-card">
          {confidentialityNotice.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <p className="confidentiality-updated">{confidentialityNotice.updatedAt}</p>
        </article>
      </div>
    </section>
  );
}
