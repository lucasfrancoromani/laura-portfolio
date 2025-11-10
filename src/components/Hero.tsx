"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-[#1f2a37]/50 bg-gradient-to-br from-[#0f141a] via-[#11161d] to-[#0b0f14]">
      <div className="grid md:grid-cols-2 gap-6 p-6 md:p-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Laura Lambert
            <span className="block text-[#22d3ee]">Periodista Deportiva</span>
          </h1>
          <p className="mt-4 text-white/80 max-w-prose">
            Cobertura, entrevistas y relatos con pasión por el deporte. Basada en Roma, con experiencia en radio, futsal
            y eventos internacionales.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <Link href="/portfolio" className="btn-primary">Ver portfolio</Link>
            <Link href="/contacto" className="inline-flex items-center rounded-xl px-5 py-3 border border-[#1f2a37]/60 hover:bg-white/5">
              Contacto
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative h-64 md:h-auto"
        >
          <Image src="/laura-hero.jpg" alt="Laura Lambert" fill className="object-cover rounded-2xl" />
          <div className="absolute inset-0 ring-1 ring-inset ring-[#1f2a37]/50 rounded-2xl" />
        </motion.div>
      </div>
    </section>
  );
};
