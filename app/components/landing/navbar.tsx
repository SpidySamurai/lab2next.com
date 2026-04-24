"use client";

const WA_DEMO = "https://wa.me/529994875155?text=Hola,%20me%20gustar%C3%ADa%20solicitar%20una%20demo%20de%20Lab2Next";

export function Navbar() {
  return (
    <nav className="l-nav">
      <div className="l-container l-nav-inner">
        <div className="l-nav-left">
          <a href="#" className="l-logo">
            <span className="l-logo-mark" />
            <span>Lab2Next</span>
          </a>
          <div className="l-nav-links">
            <a href="#funcionalidades" className="l-nav-link">Características</a>
            <a href="#beneficios" className="l-nav-link">Beneficios</a>
            <a href="#paquetes" className="l-nav-link">Paquetes</a>
            <a href="#contacto" className="l-nav-link">Contacto</a>
          </div>
        </div>
        <div className="l-nav-right">
          <a href={WA_DEMO} target="_blank" rel="noopener noreferrer" className="l-btn l-btn-primary">
            Solicitar demo
          </a>
        </div>
      </div>
    </nav>
  );
}
