export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-10 mt-12">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col items-center md:items-start space-y-2">
          <span className="text-xl font-bold text-primary">Lab2Next</span>
          <p className="text-sm text-muted-foreground">
            Software en la nube para laboratorios clínicos modernos.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end space-y-2 text-sm text-muted-foreground">
          <a
            href="tel:+529994875155"
            className="hover:text-primary transition-colors"
          >
            +52 999 487 5155
          </a>
          <p>
            © {new Date().getFullYear()} Lab2Next. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
