"use client";

import { useState } from "react";
import { faqs } from "@/data/content";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return <div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${open === index ? "is-open" : ""}`} key={question}><button type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? null : index)}><span>{question}</span><span className="faq-plus">{open === index ? "−" : "+"}</span></button><div className="faq-answer"><p>{answer}</p></div></div>)}</div>;
}
