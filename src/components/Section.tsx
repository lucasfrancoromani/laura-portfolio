import { ReactNode } from "react";

export const Section = ({
  title, subtitle, children
}: { title: string; subtitle?: string; children: ReactNode }) => (
  <section className="mt-12 md:mt-16">
    <div className="flex items-end justify-between gap-4">
      <div>
        <h2 className="display-title" style={{fontSize:"clamp(1.8rem, 3vw, 2.4rem)"}}>{title}</h2>
        {subtitle && <p className="subtle mt-1">{subtitle}</p>}
      </div>
    </div>
    <div className="mt-6">{children}</div>
  </section>
);
