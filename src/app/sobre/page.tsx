import { Section } from "@/components/Section";

export default function SobrePage() {
  return (
    <>
      <Section title="Sobre mí" subtitle="Formación y enfoque">
        <article className="card p-6 md:p-8 grid gap-4">
          <p>
            Soy <strong>Laura Lambert</strong>, periodista deportiva formada en la Universidad Nacional de La Plata.
            Nací en Esquel, Chubut, y hoy estoy basada en Roma. Cubro el deporte desde una mirada humana:
            entrevistas, relatos y crónicas que acercan la emoción y el contexto detrás de cada encuentro.
          </p>
          <p>
            Experiencia en radio, relato de futsal y coberturas en Italia, incluyendo notas a miembros del
            Consulado de Boca Juniors en Roma y entrevistas a corresponsales de TV.
          </p>
          <p style={{color:"var(--muted)"}}>
            “Las historias deportivas importan porque nos muestran cómo late una comunidad.”
          </p>
        </article>
      </Section>
    </>
  );
}
