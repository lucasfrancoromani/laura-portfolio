import { ReactNode } from "react";

export const Grid = ({ children }: { children: ReactNode }) => (
  <div className="card-grid">
    {children}
  </div>
);

export const Card = ({ children }: { children: ReactNode }) => (
  <article className="card p-5 md:p-6">
    {children}
  </article>
);
