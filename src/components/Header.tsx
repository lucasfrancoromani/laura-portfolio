"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { site } from "@/lib/site";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container-app py-4 flex items-center justify-between">
        
        {/* LOGO + NOMBRE */}
        <Link href="/" className="flex items-center gap-3">
          <img 
            src="/logo-temp.svg" 
            alt="Logo" 
            className="h-9 w-9"
          />
          <div>
            <div 
              className="tracking-tight"
              style={{ 
                fontFamily: "var(--font-heading)", 
                fontWeight: 800,
                fontSize: "1.05rem"
              }}
            >
              {site.name}
            </div>
            <div className="text-[12px] subtle -mt-1">
              {site.role}
            </div>
          </div>
        </Link>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center gap-6">
          {site.nav.map((item) => {
            const isStreaming = item.href === "/streaming";

            // 🔴 STREAMING – estilo especial
            if (isStreaming) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold"
                  style={{
                    background: "rgba(209, 0, 31, 0.10)",
                    border: "1px solid rgba(209, 0, 31, 0.35)",
                    color: "var(--accent)",
                  }}
                >
                  {/* PUNTITO LIVE */}
                  <span className="inline-block h-2 w-2 rounded-full bg-red-600 animate-pulse"></span>
                  Streaming
                </Link>
              );
            }

            // Resto de los links normales
            return (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            );
          })}

          {/* BOTÓN CONTACTO */}
          <Link
            href="/contacto"
            className="btn btn-primary"
            style={{ paddingTop: ".55rem", paddingBottom: ".55rem" }}
          >
            Contactar
          </Link>
        </nav>

        {/* BOTÓN BURGER MOBILE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="Abrir menú"
        >
          <Menu color="var(--ink)" />
        </button>
      </div>

      {/* NAV MOBILE */}
      {open && (
        <div
          className="md:hidden border-t"
          style={{ borderColor: "var(--line)" }}
        >
          <div className="container-app py-3 flex flex-col gap-3">

            {site.nav.map((item) => {
              const isStreaming = item.href === "/streaming";

              if (isStreaming) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold w-fit"
                    style={{
                      background: "rgba(209, 0, 31, 0.10)",
                      border: "1px solid rgba(209, 0, 31, 0.35)",
                      color: "var(--accent)",
                    }}
                  >
                    <span className="inline-block h-2 w-2 rounded-full bg-red-600 animate-pulse"></span>
                    Streaming
                  </Link>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="nav-link"
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/contacto"
              className="btn btn-primary w-fit"
              onClick={() => setOpen(false)}
            >
              Contactar
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
