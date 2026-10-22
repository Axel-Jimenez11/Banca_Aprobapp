"use client";

import { useState } from "react";
import { navigation } from "@/data/content";
import { Icon } from "./Icon";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar-inner">
          <nav aria-label="Audiencias">
            {navigation.top.map((item) => <a href="#" key={item}>{item}</a>)}
          </nav>
          <div className="topbar-actions"><a href="#">Acceso</a><a className="button button-small button-aqua" href="#contacto">Solicitar demo</a></div>
        </div>
      </div>
      <div className="nav-wrap">
        <div className="container main-nav">
          <a className="brand" href="#" aria-label="Aprobapp, inicio"><span className="brand-mark">A</span><span>Aprobapp</span></a>
          <nav className={`main-links ${mobileOpen ? "is-open" : ""}`} aria-label="Navegación principal">
            <div className="product-nav">
              <button className="nav-link product-toggle" type="button" aria-expanded={productOpen} onClick={() => setProductOpen(!productOpen)}>Producto <Icon name="chevron" size={16} /></button>
              <div className={`product-menu ${productOpen ? "is-open" : ""}`}>
                {navigation.productGroups.map((group) => <div key={group.title}><p>{group.title}</p>{group.links.map((link) => <a href="#producto" key={link} onClick={() => { setProductOpen(false); setMobileOpen(false); }}>{link}</a>)}</div>)}
              </div>
            </div>
            {navigation.main.slice(1).map((item) => <a className="nav-link" href={item.href} key={item.label} onClick={() => setMobileOpen(false)}>{item.label}</a>)}
            <a className="button button-primary mobile-demo" href="#contacto" onClick={() => setMobileOpen(false)}>Solicitar demo</a>
          </nav>
          <div className="nav-actions"><button className="icon-button" type="button" aria-label="Buscar"><Icon name="search" size={21} /></button><a className="button button-primary desktop-demo" href="#contacto">Solicitar demo</a><button className="icon-button menu-button" type="button" aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}><Icon name="menu" size={25} /></button></div>
        </div>
      </div>
    </header>
  );
}
