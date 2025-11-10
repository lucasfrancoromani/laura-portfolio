import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Grid, Card } from "@/components/Cards";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Section title="Destacados" subtitle="Coberturas y entrevistas recientes">
        <Grid>
          <Card>
            <h3 className="font-semibold">Cobertura Superclásico – Roma</h3>
            <p className="text-sm text-white/70 mt-1">Previa Boca-River en Roma con corresponsal de C5N.</p>
          </Card>
          <Card>
            <h3 className="font-semibold">Relato – Futsal</h3>
            <p className="text-sm text-white/70 mt-1">Narración en vivo de partidos de futsal.</p>
          </Card>
          <Card>
            <h3 className="font-semibold">Entrevistas – Consulado de Boca</h3>
            <p className="text-sm text-white/70 mt-1">Diálogos con miembros del consulado en Roma.</p>
          </Card>
        </Grid>
      </Section>
    </>
  );
}
