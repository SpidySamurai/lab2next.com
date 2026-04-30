"use client";

import { useState, useEffect } from "react";
import { Bot, X, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

function BotAvatar() {
  return (
    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-teal-400">
      <Bot size={13} className="text-white" />
    </div>
  );
}

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
        <div className="l-chat-header flex items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            {/* Robot avatar */}
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-teal-400 shadow-lg ring-2 ring-white/20">
              <Bot size={20} className="text-white" />
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-navy-900 bg-green-400" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Nexus · Agente IA</p>
              <p className="flex items-center gap-1.5 text-[11px] text-white/55">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-400" />
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
          <div className="flex items-end gap-2">
            <BotAvatar />
            <div className="max-w-[85%] rounded-xl rounded-tl-sm bg-white p-3 shadow-card">
              <p className="text-[13px] leading-relaxed text-ink-700">
                Hola, soy <span className="font-semibold text-navy-900">Nexus</span>, el agente de Lab2Next. Pronto podré responder tus dudas, agendar demos y guiarte con tu laboratorio.
              </p>
            </div>
          </div>
          <div className="flex items-end gap-2">
            <BotAvatar />
            <div className="max-w-[85%] rounded-xl rounded-tl-sm bg-white p-3 shadow-card">
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
                  <FaWhatsapp size={14} />
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
        className="l-chat-fab fixed bottom-7 right-7 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-teal-400 text-white transition-[transform,box-shadow] duration-200 hover:scale-105"
      >
        <span className={`absolute inset-0 flex items-center justify-center transition-all duration-200 ${open ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}`}>
          <Bot size={24} />
        </span>
        <span className={`absolute inset-0 flex items-center justify-center transition-all duration-200 ${open ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}`}>
          <X size={22} />
        </span>
      </button>
    </>
  );
}
