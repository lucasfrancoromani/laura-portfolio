"use client";
import Link from "next/link";
import { site } from "@/lib/site";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container-app py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo-temp.svg" alt="Logo" className="h-9 w-9" />
          <div>
            <div className="tracking-tight" style={{fontFamily:"var(--font-heading)", fontWeight:800}}>
              {site.name}
            </div>
            <div className="text-[12px] subtle">{site.role}</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {site.nav.map((n) => (
            <Link key={n.href} href={n.href} className="nav-link">
              {n.label}
            </Link>
          ))}
          <Link href="/contacto" className="btn btn-primary">Contactar</Link>
        </nav>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Abrir menú">
          <Menu color="#E6E8EF" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t" style={{borderColor:"var(--line)"}}>
          <div className="container-app py-3 flex flex-col gap-3">
            {site.nav.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="nav-link">
                {n.label}
              </Link>
            ))}
            <Link href="/contacto" onClick={() => setOpen(false)} className="btn btn-primary w-max">Contactar</Link>
          </div>
        </div>
      )}
    </header>
  );
};
