import { ImageResponse } from "next/og";

export const alt = "Lab2Next — LIS para laboratorios clínicos en México";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#0A1F44",
          fontFamily: "system-ui, -apple-system, sans-serif",
          overflow: "hidden",
        }}
      >
        {/* Radial glows */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(14,165,233,0.22) 0%, transparent 65%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "0px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(14,165,233,0.10) 0%, transparent 65%)",
          }}
        />

        {/* Grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Right side: abstract mockup blocks */}
        <div
          style={{
            position: "absolute",
            right: "80px",
            top: "80px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            opacity: 0.55,
          }}
        >
          {/* KPI row */}
          <div style={{ display: "flex", gap: "10px" }}>
            {[
              { label: "Órdenes hoy", value: "142" },
              { label: "Tiempo prom.", value: "3h 24m" },
              { label: "Facturado", value: "$48,290" },
            ].map((kpi) => (
              <div
                key={kpi.label}
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "10px",
                  padding: "14px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  minWidth: "130px",
                }}
              >
                <span
                  style={{
                    fontSize: "10px",
                    color: "rgba(255,255,255,0.5)",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {kpi.label}
                </span>
                <span
                  style={{
                    fontSize: "24px",
                    color: "white",
                    fontWeight: "800",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {kpi.value}
                </span>
                <span
                  style={{
                    fontSize: "11px",
                    color: "#10B981",
                    fontWeight: "600",
                  }}
                >
                  ↑ +18%
                </span>
              </div>
            ))}
          </div>

          {/* Order rows */}
          <div
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "10px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {[
              { id: "#L-1284", name: "García Ruiz, M.", status: "Entregado", color: "#10B981" },
              { id: "#L-1285", name: "Pérez Luna, C.", status: "En proceso", color: "#F59E0B" },
              { id: "#L-1286", name: "Torres Sánchez, R.", status: "Nueva", color: "#0EA5E9" },
            ].map((row, i) => (
              <div
                key={row.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "10px 16px",
                  borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
                }}
              >
                <span
                  style={{
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.45)",
                    fontWeight: "600",
                    minWidth: "60px",
                  }}
                >
                  {row.id}
                </span>
                <span
                  style={{
                    fontSize: "13px",
                    color: "white",
                    fontWeight: "600",
                    flex: 1,
                  }}
                >
                  {row.name}
                </span>
                <span
                  style={{
                    fontSize: "11px",
                    color: row.color,
                    fontWeight: "700",
                    background: `${row.color}20`,
                    padding: "3px 10px",
                    borderRadius: "999px",
                  }}
                >
                  {row.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Left side: brand + headline */}
        <div
          style={{
            position: "absolute",
            left: "80px",
            bottom: "72px",
            display: "flex",
            flexDirection: "column",
            maxWidth: "560px",
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "24px",
            }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                background: "linear-gradient(145deg, #1E3A6F, #0A1F44)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(14,165,233,0.35)",
                boxShadow: "0 0 20px rgba(14,165,233,0.25)",
                color: "white",
                fontSize: "16px",
                fontWeight: "800",
                letterSpacing: "-0.04em",
              }}
            >
              L2
            </div>
            <span
              style={{
                color: "rgba(255,255,255,0.9)",
                fontSize: "22px",
                fontWeight: "700",
                letterSpacing: "-0.03em",
              }}
            >
              Lab2Next
            </span>
          </div>

          {/* Headline */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "baseline",
              fontSize: "52px",
              fontWeight: "800",
              lineHeight: "1.06",
              letterSpacing: "-0.032em",
              marginBottom: "16px",
            }}
          >
            <span style={{ color: "white" }}>Tu laboratorio digital,&nbsp;</span>
            <span style={{ color: "#0EA5E9" }}>operando hoy.</span>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: "19px",
              color: "rgba(255,255,255,0.55)",
              fontWeight: "400",
              lineHeight: "1.5",
              letterSpacing: "-0.01em",
            }}
          >
            LIS en la nube para laboratorios clínicos en México.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
