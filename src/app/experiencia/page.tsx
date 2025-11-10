import { Section } from "@/components/Section";
import { Grid, Card } from "@/components/Cards";

export default function ExperienciaPage() {
  return (
    <>
      <Section title="Experiencia" subtitle="Roles y formatos">
        <Grid>
          <Card>
            <span className="ribbon">Radio</span>
            <h3 className="mt-3" style={{fontWeight:700}}>Columnas y entrevistas</h3>
            <p className="mt-1" style={{color:"var(--muted)"}}>
              Participación en programas deportivos con enfoque en actualidad, análisis y testimonios.
            </p>
          </Card>

          <Card>
            <span className="ribbon">Relato</span>
            <h3 className="mt-3" style={{fontWeight:700}}>Futsal</h3>
            <p className="mt-1" style={{color:"var(--muted)"}}>
              Narración en vivo y highlights. Ritmo, claridad y conexión con la audiencia.
            </p>
          </Card>

          <Card>
            <span className="ribbon">Coberturas</span>
            <h3 className="mt-3" style={{fontWeight:700}}>Eventos en Roma</h3>
            <p className="mt-1" style={{color:"var(--muted)"}}>
              Previa Boca–River, comunidad argentina, notas y color desde la ciudad.
            </p>
          </Card>
        </Grid>
      </Section>
    </>
  );
}
