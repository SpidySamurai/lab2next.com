import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white text-ink-900">
      <p className="text-6xl font-extrabold text-navy-900">404</p>
      <p className="text-lg text-ink-600">Página no encontrada</p>
      <Link href="/" className="mt-2 rounded-pill bg-navy-900 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-700">
        Volver al inicio
      </Link>
    </div>
  );
}
