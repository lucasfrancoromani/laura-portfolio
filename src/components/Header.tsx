"use client";
import Link from "next/link";
import { site } from "@/lib/site";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-[#1f2a37]/60 bg-[#0b0f14]/70">
      <div className="container-app flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo-temp.svg" alt="Logo" className="h-8 w-8" />
          <div className="leading-tight">
            <div className="font-bold tracking-tight">{site.name}</div>
            <div className="text-xs text-white/60">{site.role}</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {site.nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm text-white/80 hover:text-white"
            >
              {n.label}
            </Link>
          ))}
          <Link href="/contacto" className="btn-primary">Contactar</Link>
        </nav>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <Menu />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#1f2a37]/60">
          <div className="container-app py-3 flex flex-col gap-3">
            {site.nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-white/80"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
