import type { Metadata } from "next"; //TS define SEO
import { Geist } from "next/font/google"; //fuente tipográfica de google fonts
import "./globals.css"; //tailwind
import NavBar from "./components/NavBar";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = { //metadata SEO para buscador
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
        <NavBar />
        <main>{children}</main>
        <footer className="bg-gray-100 text-center text-sm text-gray-500 py-6 mt-12">
          © {new Date().getFullYear()} Veter - Clínica Veterinaria
        </footer>
      </body>
    </html>
  );
}