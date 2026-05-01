import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Section } from "../../components/landing/layout/section";
import { Container } from "../../components/landing/layout/container";

export const metadata: Metadata = {
  title: "Términos de Servicio — Lab2Next",
  description:
    "Términos y condiciones de uso de Lab2Next, el sistema de gestión para laboratorios clínicos independientes.",
};

const LAST_UPDATE = "30 de abril de 2025";
const CONTACT_EMAIL = "legal@lab2next.com";

export default function TerminosPage() {
  if (process.env.NODE_ENV === "production") notFound();
  return (
    <>
      <header className="l-page-hero">
        <Container>
          <div className="l-page-hero-inner">
            <p className="l-eyebrow">Legal</p>
            <h1 className="l-page-hero-title">Términos de Servicio</h1>
            <p className="mt-3 text-base text-ink-500">Última actualización: {LAST_UPDATE}</p>
          </div>
        </Container>
      </header>

      <Section bg="paper">
        <Container size="narrow">
          <div className="prose-legal">

            <h2>1. Aceptación</h2>
            <p>
              Al crear una cuenta o utilizar Lab2Next (el "Servicio"), usted acepta estos
              Términos de Servicio ("Términos") en nombre propio y, si actúa en representación
              de una persona moral, declara tener facultades suficientes para obligarla. Si no
              acepta estos Términos, no use el Servicio.
            </p>
            <p>
              El Servicio es operado por <strong>[Razón social del responsable]</strong>
              ("Lab2Next", "nosotros").
            </p>

            <h2>2. Descripción del Servicio</h2>
            <p>
              Lab2Next es un sistema de información clínica en la nube diseñado para
              laboratorios clínicos independientes. Incluye gestión de órdenes, pacientes,
              resultados, facturación, inventario y comunicación con pacientes vía WhatsApp y
              correo electrónico.
            </p>

            <h2>3. Registro y cuenta</h2>
            <ul>
              <li>
                Debe proporcionar información veraz, completa y actualizada al registrarse.
              </li>
              <li>
                Es responsable de mantener la confidencialidad de sus credenciales y de toda
                actividad que ocurra bajo su cuenta.
              </li>
              <li>
                Debe notificarnos de inmediato cualquier uso no autorizado de su cuenta a
                través de <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
              </li>
              <li>
                Una cuenta corresponde a un laboratorio. El uso multi-laboratorio requiere
                una cuenta por establecimiento o un plan que lo contemple explícitamente.
              </li>
            </ul>

            <h2>4. Uso aceptable</h2>
            <p>Se compromete a no:</p>
            <ul>
              <li>
                Usar el Servicio para actividades ilegales o que infrinjan derechos de terceros.
              </li>
              <li>
                Cargar, transmitir o almacenar contenido malicioso (malware, phishing, spam).
              </li>
              <li>
                Intentar acceder sin autorización a sistemas, cuentas o datos de otros usuarios.
              </li>
              <li>
                Realizar ingeniería inversa, descompilar o desensamblar el Servicio.
              </li>
              <li>
                Revender o sublicenciar el Servicio sin autorización escrita previa.
              </li>
              <li>
                Introducir datos falsos de pacientes con fines distintos a pruebas internas
                debidamente identificadas.
              </li>
            </ul>

            <h2>5. Datos y privacidad</h2>
            <p>
              El tratamiento de datos personales se rige por nuestro{" "}
              <a href="/aviso-de-privacidad">Aviso de Privacidad</a>. Respecto de los datos de
              pacientes que usted carga en el Servicio:
            </p>
            <ul>
              <li>
                Usted es el responsable del tratamiento ante sus pacientes; Lab2Next actúa
                como encargado del tratamiento.
              </li>
              <li>
                Debe contar con el consentimiento o la base legal correspondiente para cargar
                y procesar los datos de cada paciente.
              </li>
              <li>
                Al terminar la relación contractual, puede exportar sus datos en formato
                estándar (CSV/PDF) dentro de los 30 días siguientes a la cancelación.
                Transcurrido ese plazo, los datos podrán ser eliminados de nuestros servidores.
              </li>
            </ul>

            <h2>6. Planes y pagos</h2>
            <ul>
              <li>
                Los precios vigentes se publican en la página de precios del sitio. Nos
                reservamos el derecho de modificarlos con al menos 30 días de aviso previo.
              </li>
              <li>
                Los cargos son recurrentes (mensual o anual según el plan elegido) y se
                cobran por adelantado.
              </li>
              <li>
                No hay reembolsos por períodos parciales, salvo que la ley aplicable lo exija.
              </li>
              <li>
                El impago puede resultar en la suspensión o cancelación de la cuenta tras
                aviso previo de 7 días.
              </li>
            </ul>

            <h2>7. Propiedad intelectual</h2>
            <p>
              Lab2Next y todos sus componentes (software, diseño, marca, documentación) son
              propiedad exclusiva de Lab2Next o sus licenciantes. Estos Términos no le otorgan
              ningún derecho sobre la propiedad intelectual del Servicio más allá del acceso
              de uso limitado, no exclusivo e intransferible descrito aquí.
            </p>
            <p>
              Usted conserva todos los derechos sobre los datos e información que carga en el
              Servicio. Nos otorga una licencia limitada para alojar y procesar dichos datos
              exclusivamente con el fin de prestar el Servicio.
            </p>

            <h2>8. Disponibilidad y soporte</h2>
            <p>
              Nos esforzamos por mantener una disponibilidad del Servicio de al menos 99.5%
              mensual. Realizamos mantenimientos programados con aviso previo. No garantizamos
              disponibilidad ininterrumpida ni libre de errores.
            </p>

            <h2>9. Limitación de responsabilidad</h2>
            <p>
              En la medida que lo permita la ley aplicable, Lab2Next no será responsable
              por daños indirectos, incidentales, especiales, consecuentes o punitivos, incluyendo
              pérdida de beneficios, datos o clientela, derivados del uso o imposibilidad de uso
              del Servicio.
            </p>
            <p>
              La responsabilidad máxima acumulada de Lab2Next ante usted no excederá el monto
              pagado por el Servicio en los 12 meses previos al evento que dio origen a la
              reclamación.
            </p>

            <h2>10. Terminación</h2>
            <p>
              Puede cancelar su cuenta en cualquier momento desde la configuración de la
              plataforma o contactándonos. Lab2Next puede suspender o cancelar su cuenta con
              aviso previo en caso de incumplimiento de estos Términos, o de inmediato en
              casos graves (actividad ilegal, riesgo de seguridad).
            </p>

            <h2>11. Modificaciones a los Términos</h2>
            <p>
              Podemos actualizar estos Términos periódicamente. Le notificaremos por correo
              electrónico con al menos 15 días de anticipación cuando los cambios sean
              materiales. El uso continuado del Servicio después de la fecha de vigencia
              constituye aceptación de los nuevos Términos.
            </p>

            <h2>12. Ley aplicable y jurisdicción</h2>
            <p>
              Estos Términos se rigen por las leyes de los Estados Unidos Mexicanos. Para
              cualquier controversia, las partes se someten a la jurisdicción de los tribunales
              competentes de la Ciudad de México, renunciando a cualquier otro fuero que pudiera
              corresponderles por razón de sus domicilios presentes o futuros.
            </p>

            <h2>13. Contacto</h2>
            <p>
              Dudas sobre estos Términos:{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
