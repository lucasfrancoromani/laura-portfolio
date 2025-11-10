"use client";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="hero-shell p-6 md:p-10">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <span className="ribbon">Cobertura • Entrevistas • Relato</span>
          <h1
            className="mt-4"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              fontSize: "clamp(2.2rem, 4.2vw, 3.6rem)",
              lineHeight: 1.1,
            }}
          >
            Historias que laten al ritmo del deporte.
          </h1>
          <p className="mt-4" style={{color:"var(--muted)"}}>
            Soy Laura Lambert Cembellin, periodista deportiva y locutora. Actualmente en Roma, cuento el juego desde adentro:
            entrevistas, coberturas y relatos que acercan la emoción de cada encuentro.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <Link href="/portfolio" className="btn btn-primary">Ver portfolio</Link>
            <Link href="/contacto" className="btn btn-outline">Contacto</Link>
          </div>
        </div>

        <div className="relative">
          <div
            className="relative rounded-[22px] overflow-hidden"
            style={{ border: "1px solid var(--line)", boxShadow:"0 10px 30px rgba(11,26,52,.12)" }}
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
          <div
            className="absolute -bottom-3 left-3 md:left-6 px-3 py-1.5 rounded-full"
            style={{ background:"#fff", border:"1px solid var(--line)", boxShadow:"0 6px 18px rgba(0,0,0,.08)" }}
          >
            <span style={{fontWeight:700, color:"var(--midnight)"}}>Roma</span>
            <span style={{margin:"0 .35rem", color:"var(--muted)"}}>•</span>
            <span style={{color:"var(--muted)"}}>Cobertura reciente</span>
          </div>
        </div>
      </div>
    </section>
  );
};
