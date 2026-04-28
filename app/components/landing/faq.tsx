"use client";

import { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";

const FAQ_ITEMS = [
  {
    q: "¿Necesito instalar algo o tener un servidor en mi laboratorio?",
    a: "No. Lab2Next es 100% en la nube. Te registras desde cualquier navegador con internet, sigues el onboarding guiado y empiezas a operar. Sin instalaciones, sin servidor en sitio, sin técnico.",
  },
  {
    q: "¿Tienen prueba gratuita?",
    a: "Sí. Creas tu cuenta sin tarjeta de crédito y tienes 14 días de prueba completa. Si decides quedarte, eliges tu plan y listo. Si no, exportas tus datos y se acabó — sin penalizaciones ni letras chicas.",
  },
  {
    q: "¿Cómo funciona el portal de resultados por WhatsApp?",
    a: "Cuando los resultados de una orden están listos, el staff envía el enlace al paciente desde la orden con un solo clic. El paciente recibe el mensaje de WhatsApp y accede a su portal seguro con código QR — sin instalar ninguna app.",
  },
  {
    q: "¿Pueden migrar la información de mi sistema actual?",
    a: "Sí. Podemos ayudarte a migrar tu base de pacientes, catálogo de estudios y precios desde Excel, Access o exportaciones de otros sistemas. El alcance lo definimos juntos antes de contratar.",
  },
  {
    q: "¿Cuánto tiempo necesita mi equipo para aprender el sistema?",
    a: "La interfaz está pensada para personal de laboratorio, no programadores. La mayoría del equipo opera con autonomía desde el primer día. Tienes tutoriales en la plataforma y soporte en español si te atascas.",
  },
  {
    q: "¿Qué pasa con mis datos si decido cancelar?",
    a: "Tus datos son tuyos. Antes de cancelar puedes exportar toda tu información (pacientes, órdenes, resultados) en formato estándar. No te retenemos los datos ni hay penalización por cancelar.",
  },
];

function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) { setInView(true); io.disconnect(); } },
      { threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`l-reveal ${inView ? "in" : ""}`}>
      {children}
    </div>
  );
}

export function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="l-section" id="faq">
      <div className="l-container">
        <Reveal>
          <div
            className="l-section-head"
            style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto", maxWidth: 760 }}
          >
            <div className="l-eyebrow" style={{ justifyContent: "center" }}>
              Preguntas frecuentes
            </div>
            <h2 className="l-section-title" style={{ margin: "0 auto" }}>
              Lo que los directores preguntan antes de registrarse.
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="l-faq-grid">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className={`l-faq-item ${open === i ? "open" : ""}`}>
                <button
                  className="l-faq-q"
                  onClick={() => setOpen(open === i ? -1 : i)}
                  aria-expanded={open === i}
                >
                  <span>{item.q}</span>
                  <span className="l-faq-icon">
                    <Plus size={16} />
                  </span>
                </button>
                <div className="l-faq-a">{item.a}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
