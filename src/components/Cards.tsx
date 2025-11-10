import { ReactNode } from "react";

export const Grid = ({ children }: { children: ReactNode }) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{children}</div>
);

export const Card = ({ children }: { children: ReactNode }) => (
  <article className="card p-5">
    {children}
  </article>
);
