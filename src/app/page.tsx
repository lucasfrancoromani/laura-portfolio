import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Grid, Card } from "@/components/Cards";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Section title="Destacados" subtitle="Selección reciente de coberturas y entrevistas">
        <Grid>
          <Card>
            <span className="ribbon">Cobertura</span>
            <h3 className="mt-3" style={{fontWeight:700}}>Previa Boca–River en Roma</h3>
            <p className="mt-1" style={{color:"var(--muted)"}}>
              Con corresponsal de C5N: voces de la comunidad y el clima del superclásico en tierras italianas.
            </p>
          </Card>

          <Card>
            <span className="ribbon">Relato</span>
            <h3 className="mt-3" style={{fontWeight:700}}>Partidos de Futsal</h3>
            <p className="mt-1" style={{color:"var(--muted)"}}>
              Highlights y fragmentos de narración: ritmo, emoción y análisis en tiempo real.
            </p>
          </Card>

          <Card>
            <span className="ribbon">Entrevistas</span>
            <h3 className="mt-3" style={{fontWeight:700}}>Consulado de Boca en Roma</h3>
            <p className="mt-1" style={{color:"var(--muted)"}}>
              Charlas con miembros del consulado: comunidad, organización y cultura futbolera.
            </p>
          </Card>
        </Grid>
      </Section>
    </>
  );
}
