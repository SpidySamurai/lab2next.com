import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Section } from "../../components/landing/layout/section";
import { Container } from "../../components/landing/layout/container";

export const metadata: Metadata = {
  title: "Aviso de Privacidad · Lab2Next",
  description:
    "Aviso de privacidad integral de Lab2Next conforme a la LFPDPPP y su Reglamento.",
  alternates: { canonical: "/aviso-de-privacidad" },
};

const LAST_UPDATE = "30 de abril de 2025";

export default function AvisoPrivacidadPage() {
  if (process.env.NODE_ENV === "production") notFound();
  return (
    <>
      <header className="l-page-hero">
        <Container>
          <div className="l-page-hero-inner">
            <p className="l-eyebrow">Legal</p>
            <h1 className="l-page-hero-title">Aviso de Privacidad</h1>
            <p className="mt-3 text-base text-ink-500">Última actualización: {LAST_UPDATE}</p>
          </div>
        </Container>
      </header>

      <Section bg="paper">
        <Container size="narrow">
          <div className="prose-legal">

            <h2>1. Identidad y domicilio del Responsable</h2>
            <p>
              <strong>[Razón social del responsable]</strong>, con domicilio en
              <strong> [dirección completa, colonia, ciudad, estado, C.P., México]</strong>,
              es responsable del tratamiento de sus datos personales conforme a la
              Ley Federal de Protección de Datos Personales en Posesión de los
              Particulares (LFPDPPP) y su Reglamento.
            </p>
            <p>
              Correo de contacto para privacidad:{" "}
              <a href="mailto:privacidad@lab2next.com">privacidad@lab2next.com</a>
            </p>

            <h2>2. Datos personales que recabamos</h2>
            <p>Para la prestación de nuestros servicios recabamos las siguientes categorías:</p>
            <ul>
              <li>
                <strong>Datos de identificación:</strong> nombre completo, correo electrónico,
                teléfono de contacto.
              </li>
              <li>
                <strong>Datos del laboratorio:</strong> razón social o nombre comercial, RFC,
                domicilio fiscal, número de licencia sanitaria.
              </li>
              <li>
                <strong>Datos de pacientes (tratados por cuenta del laboratorio):</strong> nombre,
                fecha de nacimiento, sexo, CURP (opcional), resultados de análisis clínicos.
                Lab2Next actúa como encargado del tratamiento respecto de los datos de
                pacientes; el laboratorio es el responsable ante ellos.
              </li>
              <li>
                <strong>Datos de acceso:</strong> credenciales de usuario, dirección IP, registros
                de actividad (logs).
              </li>
              <li>
                <strong>Datos de pago:</strong> información de facturación. Los datos de tarjeta
                son procesados directamente por nuestro proveedor de pagos y no son
                almacenados en nuestros servidores.
              </li>
            </ul>
            <p>
              No recabamos datos personales sensibles en el sentido del artículo 3, fracción VI
              de la LFPDPPP, salvo los resultados de laboratorio clínico que, por su naturaleza
              médica, reciben un nivel de protección equivalente.
            </p>

            <h2>3. Finalidades del tratamiento</h2>
            <h3>Finalidades primarias (necesarias para la relación contractual)</h3>
            <ul>
              <li>Proveer y operar el servicio de gestión de laboratorio clínico (Lab2Next).</li>
              <li>Gestionar registros de pacientes, órdenes de trabajo y resultados.</li>
              <li>Enviar resultados a pacientes vía WhatsApp o correo electrónico.</li>
              <li>Emitir facturas y gestionar cobros.</li>
              <li>Brindar soporte técnico y atención al cliente.</li>
              <li>Cumplir obligaciones legales y regulatorias aplicables.</li>
            </ul>
            <h3>Finalidades secundarias (puede oponerse)</h3>
            <ul>
              <li>Enviar comunicaciones sobre nuevas funcionalidades, actualizaciones y ofertas.</li>
              <li>Realizar encuestas de satisfacción.</li>
              <li>Elaborar estadísticas agregadas y anónimas de uso del servicio.</li>
            </ul>
            <p>
              Para oponerse a las finalidades secundarias, envíe un correo a{" "}
              <a href="mailto:privacidad@lab2next.com">privacidad@lab2next.com</a> con el asunto
              "Oposición finalidades secundarias".
            </p>

            <h2>4. Transferencias de datos</h2>
            <p>
              Sus datos pueden ser transferidos a terceros en los siguientes supuestos:
            </p>
            <ul>
              <li>
                <strong>Proveedores de infraestructura (Amazon Web Services):</strong> alojamiento
                de datos en servidores con cifrado AES-256 en tránsito (TLS 1.3) y en reposo.
              </li>
              <li>
                <strong>Proveedor de pagos:</strong> exclusivamente datos de facturación necesarios
                para procesar cobros.
              </li>
              <li>
                <strong>Autoridades competentes:</strong> cuando así lo exija la ley.
              </li>
            </ul>
            <p>
              No vendemos, cedemos ni rentamos sus datos personales a terceros con fines
              publicitarios o comerciales propios de dichos terceros.
            </p>

            <h2>5. Derechos ARCO</h2>
            <p>
              Tiene derecho a <strong>Acceder, Rectificar, Cancelar u Oponerse</strong> al
              tratamiento de sus datos (derechos ARCO). Para ejercerlos:
            </p>
            <ol>
              <li>
                Envíe solicitud a{" "}
                <a href="mailto:privacidad@lab2next.com">privacidad@lab2next.com</a> con asunto
                "Ejercicio de Derechos ARCO".
              </li>
              <li>
                Incluya: nombre completo, correo registrado, descripción clara del derecho
                que desea ejercer y, si aplica, los datos a rectificar o cancelar.
              </li>
              <li>
                Adjunte copia de identificación oficial vigente.
              </li>
            </ol>
            <p>
              Responderemos en un plazo no mayor a <strong>20 días hábiles</strong> contados
              desde la recepción de la solicitud completa.
            </p>

            <h2>6. Revocación del consentimiento</h2>
            <p>
              Puede revocar el consentimiento otorgado para el tratamiento de sus datos en
              cualquier momento, siempre que no exista una obligación legal que lo impida. La
              revocación puede limitar o impedir la prestación del servicio. Para revocar,
              envíe solicitud a{" "}
              <a href="mailto:privacidad@lab2next.com">privacidad@lab2next.com</a>.
            </p>

            <h2>7. Uso de cookies y tecnologías de rastreo</h2>
            <p>
              La plataforma utiliza cookies de sesión necesarias para el funcionamiento del
              servicio (autenticación, preferencias de idioma) y cookies analíticas de terceros
              para medir el uso del sitio. Puede deshabilitar las cookies analíticas desde la
              configuración de su navegador sin afectar las funciones esenciales.
            </p>

            <h2>8. Seguridad de los datos</h2>
            <p>
              Implementamos medidas técnicas, administrativas y físicas de seguridad:
              cifrado AES-256 en reposo, TLS 1.3 en tránsito, acceso con autenticación
              multifactor para administradores, backups diarios con retención de 30 días y
              revisiones periódicas de seguridad.
            </p>

            <h2>9. Cambios al aviso de privacidad</h2>
            <p>
              Cualquier modificación será publicada en esta página con la fecha de actualización
              correspondiente. Le notificaremos por correo electrónico si los cambios son
              materiales. El uso continuado del servicio después de la notificación implica
              aceptación de las modificaciones.
            </p>

            <h2>10. Autoridad competente</h2>
            <p>
              Si considera que su derecho a la protección de datos ha sido vulnerado, puede
              presentar queja ante el Instituto Nacional de Transparencia, Acceso a la
              Información y Protección de Datos Personales (INAI):{" "}
              <a href="https://www.inai.org.mx" target="_blank" rel="noopener noreferrer">
                www.inai.org.mx
              </a>
              .
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
