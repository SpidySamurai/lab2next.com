"use client";

import { useForm } from "react-hook-form";
import { toast } from "sonner";

type ContactFormInputs = {
  name: string;
  email: string;
  sites: string;
  needs: string;
};

export function ContactCTA() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormInputs>({
    defaultValues: { name: "", email: "", sites: "", needs: "" },
  });

  const onSubmit = async (data: ContactFormInputs) => {
    try {
      const message = `Hola, me interesa Lab2Next.
      
*Nombre:* ${data.name}
*Correo:* ${data.email}
*Sedes:* ${data.sites}
*Retos:* ${data.needs}`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/529994875155?text=${encodedMessage}`;

      window.open(whatsappUrl, "_blank");
      reset();
    } catch (err) {
      toast.error(
        "Ocurrió un error. Intenta enviarnos un mensaje directamente.",
      );
    }
  };

  return (
    <section
      id="contacto"
      className="rounded-3xl border border-border bg-card p-8 shadow-sm scroll-mt-24"
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Agenda
          </p>
          <h2 className="text-2xl font-semibold text-foreground">
            Solicita una demo enfocada en tu operación
          </h2>
          <p className="text-sm text-muted-foreground">
            Cuéntanos tus sedes, roles y retos. Te mostramos cómo reducir
            fricción y acelerar entregas.
          </p>
          <div className="flex flex-col gap-2 text-sm text-card-foreground sm:flex-row sm:items-center sm:gap-4">
            <a
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              href="tel:+529994875155"
            >
              +52 999 487 5155
            </a>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 rounded-2xl border border-border bg-muted/30 p-6 text-sm"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2">
              <span className="text-muted-foreground">Nombre</span>
              <input
                {...register("name", { required: "Tu nombre es obligatorio" })}
                type="text"
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none ring-0 transition focus:border-primary"
                placeholder="Ana Torres"
              />
              {errors.name && (
                <p className="text-xs text-rose-600">{errors.name.message}</p>
              )}
            </label>
            <label className="space-y-2">
              <span className="text-muted-foreground">Correo de trabajo</span>
              <input
                {...register("email", {
                  required: "El correo es obligatorio",
                  pattern: {
                    value: /[^\s@]+@[^\s@]+\.[^\s@]+/,
                    message: "Correo no válido",
                  },
                })}
                type="email"
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none ring-0 transition focus:border-primary"
                placeholder="ana@laboratorio.com"
              />
              {errors.email && (
                <p className="text-xs text-rose-600">{errors.email.message}</p>
              )}
            </label>
          </div>
          <label className="space-y-2">
            <span className="text-muted-foreground">
              Sedes y flujo principal
            </span>
            <input
              {...register("sites", {
                required: "Describe tus sedes o flujos",
              })}
              type="text"
              className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none ring-0 transition focus:border-primary"
              placeholder="3 sedes • química clínica y hematología"
            />
            {errors.sites && (
              <p className="text-xs text-rose-600">{errors.sites.message}</p>
            )}
          </label>
          <label className="space-y-2">
            <span className="text-muted-foreground">¿Qué quieres mejorar?</span>
            <textarea
              {...register("needs", {
                required: "Cuéntanos qué necesitas mejorar",
              })}
              rows={3}
              className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none ring-0 transition focus:border-primary"
              placeholder="Permisos por rol, tiempos de entrega, reportes para médicos..."
            />
            {errors.needs && (
              <p className="text-xs text-rose-600">{errors.needs.message}</p>
            )}
          </label>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Abriendo WhatsApp..." : "Enviar por WhatsApp"}
          </button>
        </form>
      </div>
    </section>
  );
}
