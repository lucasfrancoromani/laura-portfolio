"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

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
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm" style={{ color: "var(--muted)" }}>
            Nombre
          </label>
          <input
            className="mt-1 w-full rounded-[12px] p-3"
            style={{ border: "1px solid var(--line)", background: "#fff" }}
            placeholder="Tu nombre completo"
            required
          />
        </div>

        <div>
          <label className="block text-sm" style={{ color: "var(--muted)" }}>
            Email
          </label>
          <input
            type="email"
            className="mt-1 w-full rounded-[12px] p-3"
            style={{ border: "1px solid var(--line)", background: "#fff" }}
            placeholder="nombre@medio.com"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm" style={{ color: "var(--muted)" }}>
          Asunto
        </label>
        <select
          className="mt-1 w-full rounded-[12px] p-3 text-sm"
          style={{ border: "1px solid var(--line)", background: "#fff" }}
          defaultValue=""
          required
        >
          <option value="" disabled>
            Seleccioná el tipo de consulta
          </option>
          <option value="prensa">Prensa / medios</option>
          <option value="colaboracion">Colaboración / marca</option>
          <option value="streaming">Streaming / directos</option>
          <option value="otros">Otros</option>
        </select>
      </div>

      <div>
        <label className="block text-sm" style={{ color: "var(--muted)" }}>
          Mensaje
        </label>
        <textarea
          rows={5}
          className="mt-1 w-full rounded-[12px] p-3 text-sm"
          style={{ border: "1px solid var(--line)", background: "#fff" }}
          placeholder="Contame brevemente qué necesitás, fechas aproximadas y cualquier dato relevante."
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <button className="btn btn-primary w-max">Enviar mensaje</button>
        <p className="text-xs" style={{ color: "var(--muted)" }}>
          Las consultas se responden de forma personalizada. Si se trata de prensa o
          colaboraciones, podés incluir links de referencia.
        </p>
      </div>

      {status === "ok" && (
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          ¡Gracias! Tu mensaje fue registrado (simulado). Próximamente se activará el
          envío real desde este formulario.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          Ocurrió un error al enviar. Por favor intentá nuevamente en unos minutos.
        </p>
      )}
    </form>
  );
}
