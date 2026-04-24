"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type ContactFormInputs = {
  name: string;
  email: string;
  sites: string;
  needs: string;
};

function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(
      entries => { if (entries[0].isIntersecting) { setInView(true); io.disconnect(); } },
      { threshold: 0.1 }
    );
    io.observe(el); return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`l-reveal ${inView ? "in" : ""}`}>
      {children}
    </div>
  );
}

export function ContactCTA() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormInputs>({
    defaultValues: { name: "", email: "", sites: "", needs: "" },
  });

  const onSubmit = async (data: ContactFormInputs) => {
    try {
      const message = `Hola, me interesa Lab2Next.\n\n*Nombre:* ${data.name}\n*Correo:* ${data.email}\n*Sedes:* ${data.sites}\n*Retos:* ${data.needs}`;
      window.open(`https://wa.me/529994875155?text=${encodeURIComponent(message)}`, "_blank");
      reset();
    } catch {
      toast.error("Ocurrió un error. Intenta enviarnos un mensaje directamente.");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "12px 16px", borderRadius: 10,
    background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
    color: "var(--fg)", fontFamily: "inherit", fontSize: 14,
    outline: "none", transition: "border-color .2s",
  };
  const labelStyle: React.CSSProperties = {
    display: "flex", flexDirection: "column", gap: 6,
    fontSize: 12, color: "var(--fg-mute)", letterSpacing: "0.02em",
  };

  return (
    <section id="contacto" className="l-cta-final scroll-mt-24">
      <div className="l-container">
        <Reveal>
          <div className="l-cta-box">
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:48, alignItems:"start", textAlign:"left" }}>
              {/* Left */}
              <div>
                <h2 className="l-cta-title" style={{ textAlign:"left", fontSize:"clamp(28px,3.5vw,44px)", marginBottom:16 }}>
                  Solicita una demo enfocada en tu operación
                </h2>
                <p className="l-cta-sub" style={{ textAlign:"left", fontSize:16, marginBottom:0, maxWidth:"unset" }}>
                  Cuéntanos tus sedes, roles y retos. Te mostramos cómo reducir fricción y acelerar entregas.
                </p>
                <div style={{ marginTop:24, display:"flex", flexDirection:"column", gap:8 }}>
                  <a href="tel:+529994875155" style={{ color:"var(--primary-2)", textDecoration:"none", fontSize:14 }}>
                    +52 999 487 5155
                  </a>
                </div>
              </div>

              {/* Right — form */}
              <form onSubmit={handleSubmit(onSubmit)} style={{ display:"flex", flexDirection:"column", gap:14 }}>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
                  <label style={labelStyle}>
                    Nombre
                    <input {...register("name", { required: true })} type="text" placeholder="Ana Torres" style={inputStyle} />
                    {errors.name && <span style={{ color:"#F472B6", fontSize:11 }}>Obligatorio</span>}
                  </label>
                  <label style={labelStyle}>
                    Correo de trabajo
                    <input {...register("email", { required: true })} type="email" placeholder="ana@laboratorio.com" style={inputStyle} />
                    {errors.email && <span style={{ color:"#F472B6", fontSize:11 }}>Obligatorio</span>}
                  </label>
                </div>
                <label style={labelStyle}>
                  Sedes y flujo principal
                  <input {...register("sites", { required: true })} type="text" placeholder="3 sedes · química clínica y hematología" style={inputStyle} />
                </label>
                <label style={labelStyle}>
                  ¿Qué quieres mejorar?
                  <textarea {...register("needs", { required: true })} rows={3} placeholder="Permisos por rol, tiempos de entrega, reportes..." style={{ ...inputStyle, resize:"none" }} />
                </label>
                <button type="submit" disabled={isSubmitting} className="l-btn l-btn-white" style={{ justifyContent:"center", height:44 }}>
                  {isSubmitting ? "Abriendo WhatsApp..." : "Enviar por WhatsApp"}
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
