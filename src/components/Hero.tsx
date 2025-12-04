"use client";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export const Hero = () => {
  return (
    <section className="hero-shell p-6 md:p-10">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Columna de texto */}
        <div>
          <span className="badge">Periodismo • Locución • Streaming</span>

          <h1
            className="display-title mt-4"
            style={{ fontSize: "clamp(2.2rem, 4.2vw, 3.6rem)" }}
          >
            Voz, cámara y{" "}
            <span className="gradient-text">deporte en primera persona</span>.
          </h1>

          <p className="mt-4 subtle">
            Soy Laura Lambert, <strong>periodista deportiva, locutora y host de
            streaming</strong> con base en Roma. Entrevistas, coberturas, relatos
            de futsal y contenidos para el canal{" "}
            <strong>{site.highlights.youtubeChannelName}</strong>, además de
            nuevos formatos en vivo pensados para la comunidad.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link href="/portfolio" className="btn btn-primary">
              Ver portfolio
            </Link>
            <Link href="/contacto" className="btn btn-ghost">
              Contacto
            </Link>
            <Link
              href={site.socials.youtube}
              target="_blank"
              className="btn btn-ghost"
              aria-label="YouTube"
            >
              YouTube
            </Link>
          </div>
        </div>

        {/* Columna imagen */}
        <div className="relative">
          <div
            className="relative rounded-[22px] overflow-hidden"
            style={{
              border: "1px solid var(--line)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
            }}
          >
            <Image
              src="/laura-hero.png"
              alt="Laura Lambert entrevistando"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Chip Roma • Cobertura reciente con fondo sólido */}
          <div
            className="absolute -bottom-3 left-3 md:left-6 px-3 py-1.5 rounded-full flex items-center"
            style={{
              background: "rgba(255,255,255,0.96)",
              border: "1px solid var(--line)",
              boxShadow: "0 8px 18px rgba(0,0,0,0.15)",
            }}
          >
            <span style={{ fontWeight: 800, color: "var(--ink)" }}>Roma</span>
            <span style={{ margin: "0 .35rem", color: "var(--muted)" }}>•</span>
            <span className="subtle" style={{ fontSize: ".85rem" }}>
              Cobertura reciente
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
