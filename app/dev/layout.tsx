"use client";

import { notFound } from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NAV_LINKS = [{ label: "Cards", href: "/dev/cards" }];

export default function DevLayout({ children }: { children: React.ReactNode }) {
  if (process.env.NODE_ENV !== "development") notFound();

  const pathname = usePathname();

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-ink-200 h-[52px] flex items-center px-6 justify-between"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <div className="flex items-center">
          <span className="rounded-full bg-amber-50 border border-amber-200 px-2.5 py-0.5 text-[11px] font-bold text-amber-700">
            DEV
          </span>
          <span className="ml-3 text-sm font-semibold text-navy-900">Lab2Next Dev</span>
          <span className="mx-3 text-ink-300">|</span>
          <span className="text-xs text-ink-400">Design Preview</span>
        </div>

        <div className="flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={[
                "px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-150",
                pathname === link.href
                  ? "bg-ink-100 text-navy-900"
                  : "text-ink-600 hover:bg-ink-50 hover:text-navy-900",
              ].join(" ")}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      <div className="pt-[52px]">{children}</div>
    </>
  );
}
