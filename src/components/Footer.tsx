import Link from "next/link";
import { site } from "@/lib/site";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{ borderTop: "1px solid var(--line)" }}
      className="mt-12"
    >
      <div className="container-app py-8 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-xs md:text-sm" style={{ color: "var(--muted)" }}>
          © {year} {site.name}. Todos los derechos reservados.
        </div>

        <div className="flex items-center gap-4">
          <Link
            href={site.socials.instagram}
            target="_blank"
            className="nav-link"
          >
            Instagram
          </Link>
          <Link
            href={site.socials.youtube}
            target="_blank"
            className="nav-link"
          >
            YouTube
          </Link>
          <Link
            href={site.socials.linkedin}
            target="_blank"
            className="nav-link"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
};
