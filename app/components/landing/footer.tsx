export function Footer() {
  return (
    <footer className="l-footer">
      <div className="l-container l-footer-inner">
        <div style={{ display:"flex", alignItems:"center", gap:12 }}>
          <span className="l-logo-mark" style={{ width:20, height:20 }} />
          <span className="l-footer-copy">© {new Date().getFullYear()} Lab2Next — Software en la nube para laboratorios clínicos modernos.</span>
        </div>
        <div className="l-footer-links">
          <a href="tel:+529994875155">+52 999 487 5155</a>
          <a href="#contacto">Contacto</a>
        </div>
      </div>
    </footer>
  );
}
