# Diseño: Colabora con nosotros

**Fecha:** 2026-04-30  
**Branch:** feat/nosotros-page  
**Estado:** APROBADO

---

## Resumen

Sección en landing (`ColaboraPreview`) + página dedicada `/colabora` con formulario simple. Objetivo: capturar feedback, propuestas de mejora, beta testers, conexión con equipos de laboratorio, y precio preferencial para colaboradores. Audiencia mixta: usuarios actuales y laboratorios que aún no son clientes.

---

## Sección en Landing: `ColaboraPreview`

**Ubicación:** entre `ContactCTA` y `Footer` en `app/(landing)/page.tsx`.

**Background:** warm paper `#F7F4EF` — consistente con `Purpose` y `Roadmap`.

**Estructura:**

```
Section (bg="warm-paper")
  Container
    SectionHeader
      eyebrow: "Comunidad"
      title: "Construye Lab2Next con nosotros"
      subtitle: "Buscamos laboratorios que quieran mejorar la plataforma desde adentro."

    Grid 3 cols desktop / 1 col mobile
    (5 tarjetas: fila 1 = 3 cards, fila 2 = 2 cards centradas)
      FeatureCard × 5 (ícono + título + descripción)

    CTA centrado
      Button intent="teal" size="lg" href="/colabora"
      "Quiero colaborar →"
```

**5 tarjetas:**

| # | Título | Descripción | Ícono |
|---|--------|-------------|-------|
| 1 | Feedback directo | Tu experiencia diaria en el laboratorio es el mejor mapa de producto que existe. | `MessageSquare` |
| 2 | Propuestas de mejora | ¿Falta algo? Lo diseñamos juntos. Las mejores funciones vienen de los que las usan. | `Lightbulb` |
| 3 | Beta tester | Accede a nuevas funciones antes que nadie y ayúdanos a afinarlas. | `FlaskConical` |
| 4 | Conoce al equipo | Una llamada sin guión ni ventas. Solo conversamos sobre cómo trabajas. | `Users` |
| 5 | Precio preferencial | Los laboratorios que colaboran activamente acceden a planes especiales. | `BadgePercent` |

**Componentes reutilizados:** `Section`, `Container`, `SectionHeader`, `FeatureCard`, `Button`, `Reveal`.

---

## Página `/colabora`

**Ruta:** `app/colabora/page.tsx`

**Layout:** Hero compacto + formulario. Navbar y Footer vienen del root `app/layout.tsx` — no requieren implementación. Una columna centrada. Sin sidebar.

### Hero

Background: navy (`--navy-900`), mismo patrón que `ContactCTA`.

```
eyebrow: "Colaboración"
H1: "Forma parte del equipo que construye Lab2Next"
p: "Laboratorios independientes como el tuyo definen el rumbo de la plataforma.
    Comparte cómo trabajas, propón lo que necesitas, y accede a beneficios exclusivos."
```

### Formulario

White card, `shadow-md`, `radius-xl`, centrado, max-width ~560px.

**Campos:**
- Nombre completo (text, required)
- Nombre del laboratorio (text, required)
- Teléfono / WhatsApp (tel, required)
- ¿Cómo quieres colaborar? (textarea, required)

**Submit:** Button `intent="teal"` `size="lg"` — "Enviar por WhatsApp →"

**Comportamiento al submit:** construye URL `wa.me/529994875155` con parámetro `text` pre-armado:
```
Hola, soy {nombre} de {laboratorio}.
Quiero colaborar con Lab2Next: {mensaje}
Mi teléfono: {teléfono}
```
Abre en nueva pestaña. No hay backend, no hay validación de servidor.

**Trust signals** debajo del botón:
```
✓ Sin compromisos   ✓ Respondemos en menos de 24h   ✓ Precio preferencial para colaboradores
```

**Validación:** solo client-side. Todos los campos requeridos. Sin regex especial en teléfono.

---

## Nuevos archivos

| Archivo | Descripción |
|---------|-------------|
| `app/colabora/page.tsx` | Página `/colabora` |
| `app/components/landing/organisms/colabora-preview.tsx` | Sección para landing |
| `app/components/landing/organisms/colabora-form.tsx` | Formulario con lógica WhatsApp (`"use client"`) |
| `app/styles/colabora.css` | CSS `l-colabora-*` para hero y layout de página |

**Import en globals.css:** `@import "./styles/colabora.css";`

---

## Fuera de scope

- Backend / almacenamiento de submissions
- Email de confirmación
- Tracking / analytics de conversión
- Internacionalización (EN)
- Campos condicionales por tipo de colaboración
