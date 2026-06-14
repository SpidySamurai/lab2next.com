"use client";
import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "../atoms/button";

const WA_NUMBER = "529904147791";

interface Fields {
  nombre: string;
  laboratorio: string;
  telefono: string;
  mensaje: string;
}

const EMPTY: Fields = { nombre: "", laboratorio: "", telefono: "", mensaje: "" };

export function ColaboraForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFields(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hola, soy ${fields.nombre} de ${fields.laboratorio}.\nQuiero colaborar con Lab2Next: ${fields.mensaje}\nMi teléfono: ${fields.telefono}`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
  }

  const isValid = Object.values(fields).every(v => v.trim().length > 0);

  return (
    <form className="l-colabora-form" onSubmit={handleSubmit} noValidate>
      <div className="l-colabora-field">
        <label className="l-colabora-label" htmlFor="c-nombre">
          Nombre completo
        </label>
        <input
          id="c-nombre"
          name="nombre"
          type="text"
          required
          autoComplete="name"
          placeholder="Ej. María Pérez"
          className="l-colabora-input"
          value={fields.nombre}
          onChange={handleChange}
        />
      </div>

      <div className="l-colabora-field">
        <label className="l-colabora-label" htmlFor="c-laboratorio">
          Nombre del laboratorio
        </label>
        <input
          id="c-laboratorio"
          name="laboratorio"
          type="text"
          required
          autoComplete="organization"
          placeholder="Ej. Laboratorio San Ángel"
          className="l-colabora-input"
          value={fields.laboratorio}
          onChange={handleChange}
        />
      </div>

      <div className="l-colabora-field">
        <label className="l-colabora-label" htmlFor="c-telefono">
          Teléfono / WhatsApp
        </label>
        <input
          id="c-telefono"
          name="telefono"
          type="tel"
          required
          autoComplete="tel"
          placeholder="Ej. +52 55 1234 5678"
          className="l-colabora-input"
          value={fields.telefono}
          onChange={handleChange}
        />
      </div>

      <div className="l-colabora-field">
        <label className="l-colabora-label" htmlFor="c-mensaje">
          ¿Cómo quieres colaborar?
        </label>
        <textarea
          id="c-mensaje"
          name="mensaje"
          required
          placeholder="Cuéntanos qué tipo de colaboración te interesa o qué mejorarías de Lab2Next."
          className="l-colabora-textarea"
          value={fields.mensaje}
          onChange={handleChange}
        />
      </div>

      <Button
        type="submit"
        intent="teal"
        size="lg"
        disabled={!isValid}
        className="l-colabora-submit"
      >
        Enviar por WhatsApp →
      </Button>

      <div className="l-colabora-trust">
        <span><Check size={14} />Sin compromisos</span>
        <span><Check size={14} />Respondemos en menos de 24h</span>
        <span><Check size={14} />Precio preferencial para colaboradores</span>
      </div>
    </form>
  );
}
