"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle"|"ok"|"error">("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // TODO: integrar envío real (Formspree/Resend/backend)
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className="card p-6 md:p-8 grid gap-4" onSubmit={onSubmit}>
      <div>
        <label className="block text-sm" style={{color:"var(--muted)"}}>Nombre</label>
        <input
          className="mt-1 w-full rounded-[12px] p-3"
          style={{border:"1px solid var(--line)", background:"#fff"}}
          required
        />
      </div>
      <div>
        <label className="block text-sm" style={{color:"var(--muted)"}}>Email</label>
        <input
          type="email"
          className="mt-1 w-full rounded-[12px] p-3"
          style={{border:"1px solid var(--line)", background:"#fff"}}
          required
        />
      </div>
      <div>
        <label className="block text-sm" style={{color:"var(--muted)"}}>Mensaje</label>
        <textarea
          rows={4}
          className="mt-1 w-full rounded-[12px] p-3"
          style={{border:"1px solid var(--line)", background:"#fff"}}
          required
        />
      </div>
      <button className="btn btn-primary w-max">Enviar</button>

      {status === "ok" && (
        <p className="text-sm" style={{color:"var(--muted)"}}>
          ¡Gracias! Tu mensaje fue registrado (simulado). Próximamente activamos el envío real.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm" style={{color:"var(--muted)"}}>
          Ocurrió un error. Intentá nuevamente.
        </p>
      )}
    </form>
  );
}
