"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Package, MessageCircle } from "lucide-react";
import { ThemeToggle } from "../../../components/theme-toggle";

export function Hero() {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-border/70 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 sm:px-8">
          <Link
            href="#"
            className="text-lg font-semibold text-primary"
            aria-label="Lab2Next"
          >
            Lab2Next
          </Link>
          <nav className="hidden gap-6 text-sm font-medium text-muted-foreground sm:flex">
            <a
              href="#funcionalidades"
              className="group flex items-center gap-1.5 transition-colors hover:text-primary"
            >
              <Sparkles className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
              Características
            </a>
            <a
              href="#paquetes"
              className="group flex items-center gap-1.5 transition-colors hover:text-primary"
            >
              <Package className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
              Paquetes
            </a>
            <a
              href="#contacto"
              className="group flex items-center gap-1.5 transition-colors hover:text-primary"
            >
              <MessageCircle className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
              Contacto
            </a>
          </nav>
          <div className="hidden sm:flex sm:items-center sm:gap-4">
            <ThemeToggle />
            <a
              href="https://wa.me/529994875155?text=Hola,%20me%20gustar%C3%ADa%20solicitar%20una%20demo%20de%20Lab2Next"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90 transition"
            >
              Solicitar demo
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <motion.section
        className="mx-auto max-w-3xl text-center space-y-6 pt-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Software para laboratorios clínicos
          </p>
          <h1 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Gestiona pacientes, estudios y reportes en una sola plataforma.
          </h1>
          <p className="text-lg text-muted-foreground">
            Reduce errores, acelera entregas y gana trazabilidad total con
            flujos clínicos guiados, seguridad de nivel empresarial y soporte
            especializado.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
            <a
              href="https://wa.me/529994875155?text=Hola,%20me%20gustar%C3%ADa%20solicitar%20una%20demo%20de%20Lab2Next"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow hover:-translate-y-0.5 hover:bg-primary/90 transition"
            >
              Solicitar demo gratis
            </a>
            <a
              href="#paquetes"
              className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary hover:-translate-y-0.5 hover:bg-muted transition"
            >
              Ver paquetes
            </a>
          </div>
        </div>
      </motion.section>
    </>
  );
}
