import { ReactNode } from "react";

export const Grid = ({ children }: { children: ReactNode }) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{children}</div>
);

export const Card = ({ children }: { children: ReactNode }) => (
  <div className="card p-5 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.35),_0_12px_36px_rgba(34,211,238,0.18)] transition">
    {children}
  </div>
);
