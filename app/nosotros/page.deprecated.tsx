import type { Metadata } from "next";
import { Navbar } from "../components/landing/sections/navbar";
import { Footer } from "../components/landing/sections/footer";
import { NAV_LINKS } from "../components/landing/domain/navbar.content";
import { FOOTER_COLUMNS, FOOTER_MINI_BADGES } from "../components/landing/domain/footer.content";

export const metadata: Metadata = {
  title: "Nosotros — Lab2Next",
  description:
    "Conoce al equipo detrás de Lab2Next. Construimos el sistema que los laboratorios clínicos independientes en LATAM merecían desde hace años.",
};

// PLACEHOLDER team data — replace name/role/bio/initials before launch
const TEAM = [
  {
    initials: "[--]",
    name: "[Nombre Fundador]",
    role: "CEO & Co-fundador",
    bio: "Descripción breve del fundador: experiencia relevante, por qué construyó esto.",
  },
  {
    initials: "[--]",
    name: "[Nombre Co-fundador]",
    role: "CTO & Co-fundador",
    bio: "Descripción breve del co-fundador: experiencia en tecnología y salud.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <Navbar links={NAV_LINKS} />

      {/* ── Page header ─────────────────────────────── */}
      <section className="l-nos-header">
        <div className="l-container">
          <p className="l-eyebrow l-eyebrow-light">Quiénes somos</p>
          <h1 className="l-nos-h1">
            Construimos el sistema que los laboratorios independientes
            <br className="l-nos-break" /> merecían desde hace años.
          </h1>
        </div>
      </section>

      {/* ── Origen ──────────────────────────────────── */}
      <section className="l-section l-nos-origen">
        <div className="l-container l-nos-origen-inner">
          <div className="l-nos-origen-label">
            <span className="l-eyebrow">El origen</span>
          </div>
          <div className="l-nos-origen-body">
            <p className="l-nos-lead">
              Vimos de cerca cómo un laboratorio clínico independiente operaba
              con cuadernos, hojas de Excel y WhatsApp manual. El director llegaba
              a las 7am, recibía órdenes en papel, y a las 11pm todavía contestaba
              mensajes de pacientes preguntando por sus resultados.
            </p>
            <p className="l-nos-p">
              No era un problema de disciplina ni de presupuesto. Era un problema
              de acceso. Los grandes laboratorios tienen departamentos de TI,
              sistemas integrados y equipos dedicados. El laboratorio independiente
              tiene un director que también es técnico, recepcionista y gerente.
            </p>
            <p className="l-nos-p">
              Lab2Next nació de una pregunta simple: ¿por qué el laboratorio de
              la colonia no puede tener la misma tecnología que los grandes? No
              hay razón técnica. Solo había falta de voluntad para construirlo.
              Nosotros decidimos construirlo.
            </p>

            {/* Stat pull-quote */}
            <div className="l-nos-stat-row">
              <div className="l-nos-stat">
                <span className="l-nos-stat-n">+2&thinsp;000</span>
                <span className="l-nos-stat-l">laboratorios independientes<br />solo en México</span>
              </div>
              <div className="l-nos-stat">
                <span className="l-nos-stat-n">80%</span>
                <span className="l-nos-stat-l">siguen operando<br />en papel o Excel</span>
              </div>
              <div className="l-nos-stat">
                <span className="l-nos-stat-n">Día 1</span>
                <span className="l-nos-stat-l">capacidad de un gran laboratorio<br />sin IT interno</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Misión ──────────────────────────────────── */}
      <section className="l-section l-nos-mision">
        <div className="l-container l-nos-mision-inner">
          <span className="l-eyebrow">Nuestra misión</span>
          <blockquote className="l-nos-mision-q">
            Dar a cada laboratorio clínico independiente en LATAM la misma
            capacidad tecnológica que las grandes cadenas, sin IT interno,
            sin contratos de años y sin curvas de aprendizaje de meses.
          </blockquote>
        </div>
      </section>

      {/* ── Equipo ──────────────────────────────────── */}
      <section className="l-section l-nos-equipo">
        <div className="l-container">
          <span className="l-eyebrow">El equipo</span>
          <h2 className="l-section-title" style={{ marginTop: 12, marginBottom: 48 }}>
            Las personas detrás del sistema.
          </h2>
          <div className="l-nos-team-grid">
            {TEAM.map((m) => (
              <div key={m.name} className="l-nos-team-card">
                <div className="l-nos-team-avatar">{m.initials}</div>
                <div className="l-nos-team-info">
                  <span className="l-nos-team-name">{m.name}</span>
                  <span className="l-nos-team-role">{m.role}</span>
                  <p className="l-nos-team-bio">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────── */}
      <section className="l-nos-cta">
        <div className="l-container l-nos-cta-inner">
          <h2 className="l-nos-cta-h2">¿Tu laboratorio sigue en papel?</h2>
          <p className="l-nos-cta-p">
            Empieza gratis. Sin tarjeta, sin contrato, sin IT.
          </p>
          <div className="l-nos-cta-btns">
            <a
              href={`${process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"}/register`}
              className="l-btn l-btn-teal l-btn-lg"
            >
              Crear cuenta gratis
            </a>
            <a href="/roadmap" className="l-btn l-btn-ghost-white l-btn-lg">
              Ver roadmap →
            </a>
          </div>
        </div>
      </section>

      <Footer columns={FOOTER_COLUMNS} miniBadges={FOOTER_MINI_BADGES} />
    </>
  );
}
