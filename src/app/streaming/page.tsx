import { Section } from "@/components/Section";
import { Grid, Card } from "@/components/Cards";

export default function StreamingPage() {
  return (
    <>
      {/* BLOQUE 1 – INTRO */}
      <Section
        title="Streaming deportivo"
        subtitle="Directos en preparación: análisis, comunidad y conversación en vivo"
      >
        <article className="card p-6 md:p-8 grid gap-4">
          <p>
            El proyecto de <strong>streaming deportivo</strong> nace como complemento al trabajo
            periodístico y audiovisual: un espacio en vivo para analizar partidos, conversar con
            la audiencia y darle continuidad a las historias que empiezan en las coberturas
            y entrevistas.
          </p>
          <p>
            La idea es combinar <strong>análisis de juego, contexto humano y participación del chat</strong>,
            con momentos de previa, postpartido y secciones especiales dedicadas a fútbol argentino,
            ligas europeas y la experiencia de vivir el deporte desde Italia.
          </p>
          <p style={{ color: "var(--muted)" }}>
            Es un formato en construcción, ideal para que hinchas, comunidad y marcas encuentren un
            lugar donde el deporte se hable en serio, pero con cercanía.
          </p>
        </article>
      </Section>

      {/* BLOQUE 2 – FORMATOS DE DIRECTO */}
      <Section
        title="Formatos de los directos"
        subtitle="Estructura pensada para que la audiencia sepa qué esperar en cada vivo"
      >
        <Grid>
          <Card>
            <span className="ribbon">Previa de partido</span>
            <h3 className="mt-3" style={{ fontWeight: 700 }}>
              Clave táctica y clima de hinchada
            </h3>
            <p className="mt-1" style={{ color: "var(--muted)" }}>
              Análisis previo del encuentro: contexto del partido, posibles formaciones, puntos
              claves, historia entre los equipos y sensaciones de la hinchada.
            </p>
          </Card>

          <Card>
            <span className="ribbon">Postpartido</span>
            <h3 className="mt-3" style={{ fontWeight: 700 }}>
              Lectura del juego y reacciones
            </h3>
            <p className="mt-1" style={{ color: "var(--muted)" }}>
              Comentario en caliente con mirada periodística: qué dejó el partido, decisiones
              arbitrales, rendimiento de las figuras y participación del chat con opiniones y
              preguntas.
            </p>
          </Card>

          <Card>
            <span className="ribbon">Charlas y especiales</span>
            <h3 className="mt-3" style={{ fontWeight: 700 }}>
              Entrevistas y temas de fondo
            </h3>
            <p className="mt-1" style={{ color: "var(--muted)" }}>
              Directos dedicados a entrevistas, historias de hinchas en el exterior, fútbol
              femenino, inferiores, y temas que no siempre entran en el minuto a minuto de la
              actualidad.
            </p>
          </Card>
        </Grid>
      </Section>

      {/* BLOQUE 3 – COMUNIDAD Y MARCAS */}
      <Section
        title="Comunidad y colaboraciones"
        subtitle="Un espacio en vivo pensado para crecer junto a la audiencia y aliados"
      >
        <Grid>
          <Card>
            <span className="ribbon">Comunidad</span>
            <h3 className="mt-3" style={{ fontWeight: 700 }}>
              Hinchas, chat y participación activa
            </h3>
            <p className="mt-1" style={{ color: "var(--muted)" }}>
              El objetivo del streaming es construir una comunidad donde la gente pueda opinar,
              debatir y sentirse parte del programa. El chat en vivo tiene un rol central en
              cada transmisión.
            </p>
          </Card>

          <Card>
            <span className="ribbon">Plataformas</span>
            <h3 className="mt-3" style={{ fontWeight: 700 }}>
              Canal en lanzamiento
            </h3>
            <p className="mt-1" style={{ color: "var(--muted)" }}>
              El canal de directos se encuentra en etapa de preparación: ajustes técnicos, gráfica,
              identidad del programa y calendario de transmisiones. Una vez activo, se integrará
              aquí el enlace directo a los vivos.
            </p>
          </Card>

          <Card>
            <span className="ribbon">Marcas y medios</span>
            <h3 className="mt-3" style={{ fontWeight: 700 }}>
              Espacios para colaboraciones
            </h3>
            <p className="mt-1" style={{ color: "var(--muted)" }}>
              Apertura a acuerdos con medios, clubes y marcas que quieran presencia en secciones
              específicas del streaming, menciones o activaciones especiales ligadas a la audiencia
              deportiva.
            </p>
          </Card>
        </Grid>
      </Section>
    </>
  );
}
