import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

const font = Montserrat({ subsets: ["latin"], weight: ["400", "600", "700"] })

export const metadata: Metadata = {
title: "Veter — Clínica Veterinaria en Rincón de la Victoria",
description: "Clínica veterinaria en Rincón de la Victoria, Málaga. Cuidamos de tu mascota con profesionalidad y cercanía.",
}

const links = [
{ href: "/", label: "Inicio" },
{ href: "/servicios", label: "Servicios" },
{ href: "/blog", label: "Blog" },
{ href: "/equipo", label: "Equipo" },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="es">
<body className={font.className}>
<header className="bg-white shadow-sm sticky top-0 z-10">
<nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
<a href="/" className="text-xl font-bold text-[#104766]">Veter</a>
<ul className="flex gap-6 text-sm font-medium text-gray-600 items-center">
{links.map(l => (
<li key={l.href}><a href={l.href} className="hover:text-[#104766] transition">{l.label}</a></li>
))}
<li>
<a href="/contacto" className="bg-[#ea4f4e] text-white px-4 py-2 rounded-full hover:bg-red-600 transition">
Contacto
</a>
</li>
</ul>
</nav>
</header>

<main>{children}</main>

<footer className="bg-[#104766] text-blue-200 text-sm text-center py-6 mt-12">
© {new Date().getFullYear()} Veter · Rincón de la Victoria, Málaga
</footer>
</body>
</html>
)
}
