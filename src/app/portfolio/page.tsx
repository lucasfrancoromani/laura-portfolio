import { Section } from "@/components/Section";
import { Grid, Card } from "@/components/Cards";

export default function PortfolioPage() {
  return (
    <>
      {/* BLOQUE PRINCIPAL – VIDEOS DESTACADOS */}
      <Section
        title="Portfolio"
        subtitle="Selección audiovisual de entrevistas, coberturas y relato"
      >
        <Grid>
          <Card>
            <span className="ribbon">Entrevista</span>
            <h3 className="mt-3" style={{ fontWeight: 700 }}>
              Corresponsal de C5N – Roma
            </h3>
            <p className="mt-1" style={{ color: "var(--muted)" }}>
              Entrevista a corresponsal en Italia, con foco en la comunidad argentina,
              la actualidad deportiva y el vínculo emocional con el fútbol.
            </p>
            <div
              className="mt-3 rounded-[14px]"
              style={{ overflow: "hidden", border: "1px solid var(--line)" }}
            >
              <div className="relative" style={{ paddingTop: "56.25%" }}>
                <iframe
                  src="https://www.youtube.com/embed/VIDEO_ID_1"
                  title="Entrevista C5N – Roma"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
            </div>
          </Card>

          <Card>
            <span className="ribbon">Relato</span>
            <h3 className="mt-3" style={{ fontWeight: 700 }}>
              Futsal – Highlights de narración
            </h3>
            <p className="mt-1" style={{ color: "var(--muted)" }}>
              Fragmentos de relato de futsal: ritmo, claridad en las jugadas y conexión
              constante con la emoción del partido.
            </p>
            <div
              className="mt-3 rounded-[14px]"
              style={{ overflow: "hidden", border: "1px solid var(--line)" }}
            >
              <div className="relative" style={{ paddingTop: "56.25%" }}>
                <iframe
                  src="https://www.youtube.com/embed/VIDEO_ID_2"
                  title="Relato Futsal – Highlights"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
            </div>
          </Card>

          <Card>
            <span className="ribbon">Cobertura</span>
            <h3 className="mt-3" style={{ fontWeight: 700 }}>
              Consulado de Boca Juniors – Roma
            </h3>
            <p className="mt-1" style={{ color: "var(--muted)" }}>
              Cobertura de actividades del Consulado de Boca en Roma: clima de partido,
              entrevistas a hinchas y referentes de la comunidad.
            </p>
            <div
              className="mt-3 rounded-[14px]"
              style={{ overflow: "hidden", border: "1px solid var(--line)" }}
            >
              <div className="relative" style={{ paddingTop: "56.25%" }}>
                <iframe
                  src="https://www.youtube.com/embed/VIDEO_ID_3"
                  title="Cobertura Consulado Boca Juniors – Roma"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
            </div>
          </Card>
        </Grid>
      </Section>

      {/* BLOQUE EXTRA – STREAMING Y FORMATO EN VIVO */}
      <Section
        title="Streaming y formatos en vivo"
        subtitle="Proyectos en desarrollo y espacios pensados para la audiencia y marcas"
      >
        <Grid>
          <Card>
            <span className="ribbon">Streaming deportivo</span>
            <h3 className="mt-3" style={{ fontWeight: 700 }}>
              Canal de directos en preparación
            </h3>
            <p className="mt-1" style={{ color: "var(--muted)" }}>
              Formato de streaming deportivo con análisis de partidos, conversación en
              vivo y participación de la audiencia. Ideal para construir comunidad en
              torno a la actualidad del fútbol argentino e internacional.
            </p>
          </Card>

          <Card>
            <span className="ribbon">Formato</span>
            <h3 className="mt-3" style={{ fontWeight: 700 }}>
              Análisis, debate y entrevistas
            </h3>
            <p className="mt-1" style={{ color: "var(--muted)" }}>
              Transmisiones con bloques claros: previa de partido, análisis táctico,
              historias detrás de los protagonistas y espacio para preguntas de quienes
              siguen el vivo.
            </p>
          </Card>

          <Card>
            <span className="ribbon">Colaboraciones</span>
            <h3 className="mt-3" style={{ fontWeight: 700 }}>
              Espacios para medios y marcas
            </h3>
            <p className="mt-1" style={{ color: "var(--muted)" }}>
              Apertura a colaboraciones con medios, clubes y marcas interesadas en
              sumar presencia en coberturas, secciones del streaming o piezas
              audiovisuales específicas.
            </p>
          </Card>
        </Grid>
      </Section>
    </>
  );
}
