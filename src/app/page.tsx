import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Grid, Card } from "@/components/Cards";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section
        title="Destacados"
        subtitle="Selección reciente de coberturas, entrevistas y relatos"
      >
        <Grid>
          <Card>
            <span className="badge">Cobertura</span>
            <h3 className="mt-3" style={{ fontWeight: 800 }}>
              Previa Boca–River en Roma
            </h3>
            <p className="mt-1 subtle">
              Con corresponsal de C5N: voces de la comunidad y el clima del
              superclásico en Italia.
            </p>
          </Card>

          <Card>
            <span className="badge">Relato (Futsal)</span>
            <h3 className="mt-3" style={{ fontWeight: 800 }}>
              Highlights de narración
            </h3>
            <p className="mt-1 subtle">
              Ritmo, emoción y análisis en tiempo real en torneos locales.
            </p>
          </Card>

          <Card>
            <span className="badge">Entrevistas</span>
            <h3 className="mt-3" style={{ fontWeight: 800 }}>
              Consulado de Boca – Roma
            </h3>
            <p className="mt-1 subtle">
              Charlas con miembros del consulado: comunidad y cultura futbolera.
            </p>
          </Card>
        </Grid>
      </Section>

      <Section
        title="Locución"
        subtitle="Spots, intros de programas y voz en off"
      >
        <Grid>
          <Card>
            <h3 className="mt-1" style={{ fontWeight: 800 }}>
              Demo reel de locución
            </h3>
            <p className="mt-1 subtle">
              Muestra de registros: institucional, enérgico y narrativo.
            </p>
          </Card>
          <Card>
            <h3 className="mt-1" style={{ fontWeight: 800 }}>
              Spots radiales
            </h3>
            <p className="mt-1 subtle">
              Piezas cortas para eventos y programas deportivos.
            </p>
          </Card>
          <Card>
            <h3 className="mt-1" style={{ fontWeight: 800 }}>
              Voz en off
            </h3>
            <p className="mt-1 subtle">
              Clips para resúmenes, presentaciones y crónicas audiovisuales.
            </p>
          </Card>
        </Grid>
      </Section>

      {/* NUEVA SECCIÓN – STREAMING DEPORTIVO */}
      <Section
        title="Streaming deportivo en vivo"
        subtitle="Próximamente, transmisiones y análisis en directo"
      >
        <Grid>
          <Card>
            <span className="badge">Streaming</span>
            <h3 className="mt-3" style={{ fontWeight: 800 }}>
              Nuevo canal en vivo
            </h3>
            <p className="mt-1 subtle">
              Coberturas especiales, reacciones a partidos y conversación en
              directo con la audiencia.
            </p>
          </Card>

          <Card>
            <span className="badge">Formato</span>
            <h3 className="mt-3" style={{ fontWeight: 800 }}>
              Análisis, entrevistas y comunidad
            </h3>
            <p className="mt-1 subtle">
              Mesa deportiva, análisis de juego, mirada periodística y espacio
              para hinchas en el chat.
            </p>
          </Card>

          <Card>
            <span className="badge">Próximamente</span>
            <h3 className="mt-3" style={{ fontWeight: 800 }}>
              Lanzamiento del canal
            </h3>
            <p className="mt-1 subtle">
              Canal en preparación. Ideal para marcas y medios que quieran
              presencia en un espacio en vivo de deporte.
            </p>
          </Card>
        </Grid>
      </Section>

      <Section
        title={site.highlights.youtubeChannelName}
        subtitle="Viajes, historias y deporte desde Italia"
      >
        <Grid>
          <Card>
            <h3 className="mt-1" style={{ fontWeight: 800 }}>
              Últimos videos
            </h3>
            <p className="mt-1 subtle">
              Coberturas en ciudades italianas, entrevistas y vida en Roma.
            </p>
            <a
              href={site.socials.youtube}
              target="_blank"
              className="btn btn-primary mt-3"
            >
              Ver canal
            </a>
          </Card>
          <Card>
            <h3 className="mt-1" style={{ fontWeight: 800 }}>
              Producción
            </h3>
            <p className="mt-1 subtle">
              Guion, entrevista y conducción a dúo con enfoque humano y visual.
            </p>
          </Card>
          <Card>
            <h3 className="mt-1" style={{ fontWeight: 800 }}>
              Colaboraciones
            </h3>
            <p className="mt-1 subtle">
              Apertura a marcas y organizaciones deportivas para piezas
              especiales y futuras transmisiones en vivo.
            </p>
          </Card>
        </Grid>
      </Section>
    </>
  );
}
