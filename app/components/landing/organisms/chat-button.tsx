"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export function ChatButton() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Popover */}
      <div
        role="dialog"
        aria-label="Chat de atención"
        aria-hidden={!open}
        className={[
          "l-chat-popover",
          "fixed bottom-24 right-7 z-50 w-80 overflow-hidden rounded-2xl bg-white",
          "origin-bottom-right",
          open ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none",
        ].join(" ")}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-4"
          style={{ background: "linear-gradient(135deg, #0A1F44 0%, #1E3A6F 100%)" }}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-500">
              <MessageCircle size={16} className="text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Atención 24/7</p>
              <p className="flex items-center gap-1.5 text-[11px] text-white/55">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500" />
                Pronto disponible
              </p>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Cerrar chat"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X size={13} />
          </button>
        </div>

        {/* Body */}
        <div className="space-y-3 bg-ink-50 p-5">
          <div className="max-w-[88%] rounded-xl rounded-tl-sm bg-white p-3 shadow-card">
            <p className="text-[13px] leading-relaxed text-ink-700">
              Hola, soy el asistente de Lab2Next. Pronto podré responder tus dudas, agendar demos y guiarte con tu laboratorio.
            </p>
          </div>
          <div className="max-w-[88%] rounded-xl rounded-tl-sm bg-white p-3 shadow-card">
            <p className="text-[13px] leading-relaxed text-ink-700">
              Mientras tanto, escríbenos directo o agenda una llamada.
            </p>
            <div className="mt-3 flex gap-2">
              <a
                href="https://wa.me/521XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-green-500 px-3 py-1.5 text-[12px] font-semibold text-white transition-colors hover:bg-green-600"
              >
                WhatsApp
              </a>
              <a
                href="mailto:hola@lab2next.com"
                className="inline-flex items-center gap-1.5 rounded-lg border border-ink-200 bg-white px-3 py-1.5 text-[12px] font-semibold text-ink-700 transition-colors hover:bg-ink-50"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-ink-100 bg-white px-4 pb-4 pt-3">
          <div className="flex gap-2">
            <input
              disabled
              placeholder="Agente de IA en construcción…"
              className="flex-1 cursor-not-allowed rounded-xl border border-ink-200 bg-ink-50 px-3 py-2.5 text-[13px] text-ink-400 outline-none"
            />
            <button
              disabled
              aria-label="Enviar mensaje"
              className="flex h-10 w-10 shrink-0 cursor-not-allowed items-center justify-center rounded-xl bg-ink-100"
            >
              <Send size={15} className="text-ink-400" />
            </button>
          </div>
          <p className="mt-2 text-center text-[11px] text-ink-400">
            Lab2Next · Soporte para laboratorios clínicos
          </p>
        </div>
      </div>

      {/* FAB */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="chat-popover"
        aria-label={open ? "Cerrar chat" : "Abrir chat de atención"}
        className="l-chat-fab fixed bottom-7 right-7 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-teal-500 text-white transition-[transform,box-shadow] duration-200 hover:scale-105 hover:bg-teal-600"
      >
        <span className={open ? "hidden" : "block"}><MessageCircle size={22} /></span>
        <span className={open ? "block" : "hidden"}><X size={22} /></span>
      </button>
    </>
  );
}
