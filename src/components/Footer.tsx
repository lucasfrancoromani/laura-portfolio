import Link from "next/link";
import { site } from "@/lib/site";

export const Footer = () => {
  return (
    <footer className="border-t border-[#1f2a37]/60 mt-10">
      <div className="container-app py-8 text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>© {new Date().getFullYear()} {site.name}. Todos los derechos reservados.</div>
        <div className="flex items-center gap-4">
          <Link href={site.socials.instagram} target="_blank" className="hover:text-white">Instagram</Link>
          <Link href={site.socials.youtube}   target="_blank" className="hover:text-white">YouTube</Link>
          <Link href={site.socials.linkedin}  target="_blank" className="hover:text-white">LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
};
