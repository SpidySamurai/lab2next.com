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
          "l-chat-popover",
          "fixed bottom-24 right-7 z-50 w-80 overflow-hidden rounded-2xl bg-white",
          "transition-[opacity,transform] duration-200 ease-out origin-bottom-right",
          open ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none",
        ].join(" ")}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-4"
          style={{ background: "linear-gradient(135deg, #0A1F44 0%, #1E3A6F 100%)" }}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-500 text-lg">
              🤖
            </div>
            <div>
              <p className="text-sm font-bold text-white">Atención 24/7</p>
              <p className="flex items-center gap-1 text-[11px] text-white/55">
                <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
                Agente en construcción
              </p>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white transition-colors"
          >
            <X size={13} />
          </button>
        </div>

        {/* Body */}
        <div className="space-y-3 bg-ink-50 p-5">
          <div className="max-w-[88%] rounded-xl rounded-tl-sm bg-white p-3 shadow-card">
            <p className="text-[13px] leading-relaxed text-ink-700">
              ¡Hola! Estamos construyendo tu asistente de atención para Lab2Next.
            </p>
            <span
              className="mt-2 inline-flex items-center gap-1 rounded-full border border-teal-400/40 bg-teal-50 px-2 py-0.5 text-[11px] font-semibold text-teal-600"
            >
              🔧 En desarrollo
            </span>
          </div>
          <div className="max-w-[88%] rounded-xl rounded-tl-sm bg-white p-3 shadow-card">
            <p className="text-[13px] leading-relaxed text-ink-700">
              Pronto podrás resolver dudas, agendar demos y más, sin esperas.
            </p>
            <div className="mt-2 flex gap-1">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="inline-block h-1.5 w-1.5 animate-bounce rounded-full bg-ink-300"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-ink-100 bg-white px-4 pb-4 pt-3">
          <div className="flex gap-2">
            <input
              disabled
              placeholder="Próximamente disponible..."
              className="flex-1 cursor-not-allowed rounded-xl border border-ink-200 bg-ink-50 px-3 py-2.5 text-[13px] text-ink-400 outline-none"
            />
            <button
              disabled
              className="flex h-10 w-10 shrink-0 cursor-not-allowed items-center justify-center rounded-xl bg-ink-200"
            >
              <Send size={15} className="text-white" />
            </button>
          </div>
          <p className="mt-2 text-center text-[11px] text-ink-400">
            Agente de IA en construcción · Lab2Next
          </p>
        </div>
      </div>

      {/* FAB */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Cerrar chat" : "Abrir chat de atención"}
        className="l-chat-fab fixed bottom-7 right-7 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-teal-500 text-white transition-all duration-200 hover:scale-105"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </>
  );
}
