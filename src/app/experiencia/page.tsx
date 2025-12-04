import { Section } from "@/components/Section";
import { Grid, Card } from "@/components/Cards";

export default function ExperienciaPage() {
  return (
    <>
      <Section
        title="Experiencia"
        subtitle="Roles, formatos y proyectos en desarrollo"
      >
        <Grid>
          <Card>
            <span className="ribbon">Radio</span>
            <h3 className="mt-3" style={{ fontWeight: 700 }}>
              Columnas y entrevistas
            </h3>
            <p className="mt-1" style={{ color: "var(--muted)" }}>
              Participación en programas deportivos con foco en actualidad, análisis,
              testimonios y cobertura de la agenda diaria del deporte.
            </p>
          </Card>

          <Card>
            <span className="ribbon">Relato</span>
            <h3 className="mt-3" style={{ fontWeight: 700 }}>
              Futsal – partidos y highlights
            </h3>
            <p className="mt-1" style={{ color: "var(--muted)" }}>
              Narración en vivo y resúmenes: ritmo, claridad en la jugada y conexión
              constante con la emoción de la cancha y la tribuna.
            </p>
          </Card>

          <Card>
            <span className="ribbon">Coberturas</span>
            <h3 className="mt-3" style={{ fontWeight: 700 }}>
              Eventos y comunidad en Roma
            </h3>
            <p className="mt-1" style={{ color: "var(--muted)" }}>
              Previa Boca–River, actividades del Consulado de Boca Juniors en Roma y
              encuentros de la comunidad argentina en Italia.
            </p>
          </Card>

          <Card>
            <span className="ribbon">Entrevistas</span>
            <h3 className="mt-3" style={{ fontWeight: 700 }}>
              Protagonistas y corresponsales
            </h3>
            <p className="mt-1" style={{ color: "var(--muted)" }}>
              Diálogo con periodistas, hinchas y referentes. Preguntas que buscan
              contexto, historia y perspectiva detrás de cada testimonio.
            </p>
          </Card>

          <Card>
            <span className="ribbon">Streaming deportivo</span>
            <h3 className="mt-3" style={{ fontWeight: 700 }}>
              Proyecto de directos en desarrollo
            </h3>
            <p className="mt-1" style={{ color: "var(--muted)" }}>
              Formato de vivos enfocado en análisis, conversación con la audiencia y
              coberturas especiales, pensado como complemento al trabajo audiovisual.
            </p>
          </Card>

          <Card>
            <span className="ribbon">Contenido digital</span>
            <h3 className="mt-3" style={{ fontWeight: 700 }}>
              Crónicas de un viaje
            </h3>
            <p className="mt-1" style={{ color: "var(--muted)" }}>
              Producción y conducción de contenidos para el canal “Crónicas de un
              viaje”: viajes, fútbol, vida en Italia y relatos desde la experiencia
              de vivir el deporte lejos de casa.
            </p>
          </Card>
        </Grid>
      </Section>
    </>
  );
}
