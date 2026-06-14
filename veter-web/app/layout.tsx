import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Veter - Clínica Veterinaria",
  description: "Clínica veterinaria profesional. Cuidamos de tu mascota con el mejor equipo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={geist.className}>
        <header className="bg-white shadow-sm">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <span className="text-xl font-bold text-blue-600">Veter</span>
            <ul className="flex gap-6 text-sm font-medium text-gray-600">
              <li><a href="/">Inicio</a></li>
              <li><a href="/servicios">Servicios</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/equipo">Equipo</a></li>
              <li><a href="/contacto">Contacto</a></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-100 text-center text-sm text-gray-500 py-6 mt-12">
          © {new Date().getFullYear()} Veter - Clínica Veterinaria
        </footer>
      </body>
    </html>
  );
}