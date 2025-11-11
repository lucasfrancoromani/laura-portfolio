import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";

const display = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const text = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: `${site.name} – ${site.role}`,
  description: site.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${display.variable} ${text.variable} darkneo`}>
        <Header />
        <main className="container-app py-10 md:py-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
