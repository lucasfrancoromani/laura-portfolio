import { Section } from "@/components/Section";

export default function SobrePage() {
  return (
    <>
      <Section title="Sobre mí" subtitle="Perfil, formación y enfoque de trabajo">
        <article className="card p-6 md:p-8 grid gap-5">
          <p>
            Soy <strong>Laura Lambert Cembellin</strong>, periodista deportiva formada en la
            <strong> Universidad Nacional de La Plata</strong>. Nací en Esquel, Chubut, y
            actualmente vivo en Roma, donde cubro deporte argentino e internacional con una
            mirada humana: no solo el resultado, sino las historias, emociones y contextos que
            acompañan a cada partido.
          </p>

          <p>
            Trabajé en radio, realicé <strong>relatos de futsal</strong>, coberturas de eventos
            deportivos y entrevistas a protagonistas, hinchas y comunicadores. Entre mis
            experiencias recientes se incluyen notas al <strong>Consulado de Boca Juniors en Roma</strong>,
            entrevistas a corresponsales de TV y coberturas de la comunidad argentina en Italia.
          </p>

          <p>
            Junto a mi pareja, producimos contenido para el canal{" "}
            <strong>“{`Crónicas de un viaje`}"</strong>, donde combinamos viajes, vida en Italia y
            deporte. Además, estoy desarrollando un <strong>formato de streaming deportivo</strong> con
            análisis, entrevistas y conversación en vivo con la audiencia, pensado para crear
            comunidad alrededor de la actualidad deportiva.
          </p>

          <p>
            Mi enfoque como periodista se apoya en tres ejes:
          </p>

          <ul className="list-disc pl-5 space-y-1 subtle">
            <li>
              <strong>Escucha activa:</strong> antes que una pregunta, hay una historia que merece ser contada.
            </li>
            <li>
              <strong>Claridad y ritmo:</strong> tanto en relato como en conducción, priorizo que la audiencia
              entienda y sienta el juego.
            </li>
            <li>
              <strong>Cercanía:</strong> el deporte es identidad, comunidad y memoria; busco transmitir eso en cada pieza.
            </li>
          </ul>

          <p style={{ color: "var(--muted)" }}>
            “Creo en un periodismo deportivo que acompaña, pregunta y refleja lo que pasa en la
            tribuna, en la cancha y fuera de cámara. El objetivo siempre es el mismo: que quien
            mira o escucha sienta que estuvo ahí.”
          </p>
        </article>
      </Section>
    </>
  );
}
