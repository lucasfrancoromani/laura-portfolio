import { Section } from "@/components/Section";
import { Grid, Card } from "@/components/Cards";

export default function PortfolioPage() {
  return (
    <>
      <Section title="Portfolio" subtitle="Selección audiovisual">
        <Grid>
          <Card>
            <span className="ribbon">Entrevista</span>
            <h3 className="mt-3" style={{fontWeight:700}}>Corresponsal C5N – Roma</h3>
            <div className="mt-3 rounded-[14px]" style={{overflow:"hidden", border:"1px solid var(--line)"}}>
              <div className="relative" style={{paddingTop:"56.25%"}}>
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Entrevista C5N"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{position:"absolute", inset:0, width:"100%", height:"100%"}}
                />
              </div>
            </div>
          </Card>

          <Card>
            <span className="ribbon">Relato</span>
            <h3 className="mt-3" style={{fontWeight:700}}>Futsal – Highlights</h3>
            <div className="mt-3 rounded-[14px]" style={{overflow:"hidden", border:"1px solid var(--line)"}}>
              <div className="relative" style={{paddingTop:"56.25%"}}>
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Relato Futsal"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{position:"absolute", inset:0, width:"100%", height:"100%"}}
                />
              </div>
            </div>
          </Card>

          <Card>
            <span className="ribbon">Cobertura</span>
            <h3 className="mt-3" style={{fontWeight:700}}>Consulado de Boca – Roma</h3>
            <div className="mt-3 rounded-[14px]" style={{overflow:"hidden", border:"1px solid var(--line)"}}>
              <div className="relative" style={{paddingTop:"56.25%"}}>
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Cobertura Consulado Boca"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{position:"absolute", inset:0, width:"100%", height:"100%"}}
                />
              </div>
            </div>
          </Card>
        </Grid>
      </Section>
    </>
  );
}
