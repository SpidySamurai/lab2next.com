import { Check, ArrowRight } from "lucide-react";
import { Reveal } from "../atoms/reveal";
import { Button } from "../atoms/button";
import { APP_URL } from "../domain/config";

const WA_DEMO = "https://wa.me/529904147791?text=Hola,%20me%20gustar%C3%ADa%20una%20demo%20de%20Lab2Next";

interface ContactCTAProps {
  guarantees: readonly string[];
}

export function ContactCTA({ guarantees }: ContactCTAProps) {
  return (
    <section className="l-section l-final-cta" id="demo">
      <div className="l-container l-final-cta-inner">
        <Reveal>
          <h2 className="l-final-cta-h2">
            Tu laboratorio merece operar en 2026, no en 1998.
          </h2>
          <p className="l-final-cta-p">
            Crea tu cuenta gratis en 2 minutos y empieza a operar hoy mismo.
            Sin instalar nada, sin esperar a nadie.
          </p>
          <div className="l-final-cta-actions">
            <Button as="a" href={`${APP_URL}/register`} intent="teal" size="lg">
              Crear cuenta gratis
              <ArrowRight size={18} />
            </Button>
            <Button
              as="a"
              href={WA_DEMO}
              target="_blank"
              rel="noopener noreferrer"
              intent="ghost-white"
              size="lg"
            >
              Prefiero una demo guiada
            </Button>
          </div>
          <div className="l-micro-guarantees">
            {guarantees.map((g) => (
              <span key={g}>
                <Check size={14} />
                {g}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
