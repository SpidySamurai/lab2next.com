# Design

## Theme

Light. Warm paper (#F7F4EF) for editorial/journey sections. White for main content. Navy (#0A1F44) for hero and footer. Never pure black or white.

## Color Palette

| Role | Token | Hex |
|------|-------|-----|
| Brand dark | --navy-900 | #0A1F44 |
| Brand mid | --navy-800 | #142C5A |
| Accent strong | --teal-600 | #0284C7 |
| Accent default | --teal-500 | #0EA5E9 |
| Accent light | --teal-400 | #38BDF8 |
| Accent bg | --teal-50 | #E0F2FE |
| Body text | --ink-700 | #334155 |
| Muted text | --ink-500 | #64748B |
| Subtle text | --ink-400 | #94A3B8 |
| Border default | --ink-200 | #E2E8F0 |
| Surface alt | --ink-50 | #F8FAFC |
| Warm paper | (custom) | #F7F4EF |
| Success | --green-500 | #10B981 |

Color strategy: **Committed** — navy carries 40–60% of dark surfaces. Teal accent used for CTAs, progress, live indicators, and emphasis.

## Typography

- **Display / headings**: Plus Jakarta Sans (--font-jakarta), weight 800, tight letter-spacing (-0.03 to -0.035em)
- **Body**: Plus Jakarta Sans, weight 400–600, line-height 1.55–1.7
- **Mono / code**: JetBrains Mono (--font-mono), used for order IDs, technical labels
- Scale: `clamp(38px, 5–6vw, 62–72px)` for hero H1. Section titles ~32–40px. Body 15–19px.

## Elevation / Shadow

- xs: `0 1px 2px rgba(15,23,42,0.04)`
- sm: `0 1px 3px rgba(15,23,42,0.06), 0 1px 2px rgba(15,23,42,0.04)`
- md: `0 4px 12px rgba(15,23,42,0.06), 0 1px 3px rgba(15,23,42,0.04)`
- lg: `0 16px 40px rgba(10,31,68,0.10), 0 4px 12px rgba(10,31,68,0.06)`
- xl: `0 32px 64px rgba(10,31,68,0.14), 0 8px 24px rgba(10,31,68,0.08)`

## Radius

- sm: 6px | default: 10px | lg: 14px | xl: 20px | pill: 999px

## Motion

- Scroll-driven: roadmap path (strokeDashoffset), how-it-works steps (opacity + transform)
- Reveal: `.l-reveal` → IntersectionObserver → `opacity 0→1 + translateY 18px→0`, `0.55s cubic-bezier(0.16,1,0.3,1)`
- Micro: button hover `translateY(-1px)`, card hover `translateY(-2px) + shadow-lg`
- Pulse: green dot `box-shadow 0→6px`, roadmap rings `scale 0.85→1.6`
- prefers-reduced-motion: all animations disabled, states shown immediately

## Key Components

- **Navbar**: translucent white, blurs on scroll, teal active indicator
- **Buttons**: primary=navy, secondary=white+border, teal=teal-500, ghost=transparent; height 44px default, 52px large
- **Cards**: white bg, ink-200 border, radius-lg, shadow-sm; hover → shadow-lg + borderColor teal
- **Pricing cards**: featured card has teal ring + navy bg; side cards offset 36px down
- **Trust bar**: navy-900 bg with teal radial glow; pill badges with frosted glass effect
- **Roadmap**: SVG funnel path (width tapers top→bottom), gradient stroke navy→teal→slate, warm paper section bg with grain + dot grid
- **Tags/chips**: pill shape, status-colored (green=done, teal=current, slate=planned)

## Section Backgrounds (page order)

Hero → white+dot-grid | TrustBar → navy | Problem → ink-50 | Values → white | Modules → white | HowItWorks → white | Purpose → #F7F4EF warm paper | Pricing → ink-50 | FAQ → white | ContactCTA → navy | Footer → navy
