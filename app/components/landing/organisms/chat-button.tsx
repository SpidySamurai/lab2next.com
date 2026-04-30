"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export function ChatButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Popover */}
      <div
        className={[
          "fixed bottom-24 right-7 z-50 w-80 overflow-hidden rounded-2xl bg-white",
          "transition-all duration-200 origin-bottom-right",
          open ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none",
        ].join(" ")}
        style={{ boxShadow: "0 24px 64px rgba(10,31,68,0.18), 0 4px 16px rgba(10,31,68,0.08)" }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-4"
          style={{ background: "linear-gradient(135deg, #0A1F44 0%, #1E3A6F 100%)" }}
        >
          <div className="flex items-center gap-3">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-full text-lg"
              style={{ backgroundColor: "var(--color-teal-500)" }}
            >
              🤖
            </div>
            <div>
              <p className="text-sm font-bold text-white">Atención 24/7</p>
              <p className="flex items-center gap-1 text-[11px]" style={{ color: "rgba(255,255,255,0.55)" }}>
                <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: "#10B981" }} />
                Agente en construcción
              </p>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="flex h-7 w-7 items-center justify-center rounded-full text-white transition-colors"
            style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
          >
            <X size={13} />
          </button>
        </div>

        {/* Body */}
        <div className="space-y-3 p-5" style={{ backgroundColor: "var(--color-ink-50)" }}>
          <div className="max-w-[88%] rounded-xl rounded-tl-sm bg-white p-3 shadow-card">
            <p className="text-[13px] leading-relaxed" style={{ color: "var(--color-ink-700)" }}>
              ¡Hola! Estamos construyendo tu asistente de atención para Lab2Next.
            </p>
            <span
              className="mt-2 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold"
              style={{
                border: "1px solid rgba(56,189,248,0.4)",
                backgroundColor: "var(--color-teal-50)",
                color: "var(--color-teal-600)",
              }}
            >
              🔧 En desarrollo
            </span>
          </div>
          <div className="max-w-[88%] rounded-xl rounded-tl-sm bg-white p-3 shadow-card">
            <p className="text-[13px] leading-relaxed" style={{ color: "var(--color-ink-700)" }}>
              Pronto podrás resolver dudas, agendar demos y más, sin esperas.
            </p>
            <div className="mt-2 flex gap-1">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="inline-block h-1.5 w-1.5 animate-bounce rounded-full"
                  style={{ backgroundColor: "var(--color-ink-300)", animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white px-4 pb-4 pt-3" style={{ borderTop: "1px solid var(--color-ink-100)" }}>
          <div className="flex gap-2">
            <input
              disabled
              placeholder="Próximamente disponible..."
              className="flex-1 cursor-not-allowed rounded-xl px-3 py-2.5 text-[13px] outline-none"
              style={{
                border: "1px solid var(--color-ink-200)",
                backgroundColor: "var(--color-ink-50)",
                color: "var(--color-ink-400)",
              }}
            />
            <button
              disabled
              className="flex h-10 w-10 shrink-0 cursor-not-allowed items-center justify-center rounded-xl"
              style={{ backgroundColor: "var(--color-ink-200)" }}
            >
              <Send size={15} className="text-white" />
            </button>
          </div>
          <p className="mt-2 text-center text-[11px]" style={{ color: "var(--color-ink-400)" }}>
            Agente de IA en construcción · Lab2Next
          </p>
        </div>
      </div>

      {/* FAB */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Cerrar chat" : "Abrir chat de atención"}
        className="fixed bottom-7 right-7 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white transition-all duration-200 hover:scale-105"
        style={{
          backgroundColor: "var(--color-teal-500)",
          boxShadow: "0 8px 32px rgba(14,165,233,0.45)",
        }}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </>
  );
}
