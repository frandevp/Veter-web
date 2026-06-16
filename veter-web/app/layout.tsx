import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

const font = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export const metadata: Metadata = {
title: "Veter — Clínica Veterinaria en Rincón de la Victoria",
description: "Clínica veterinaria en Rincón de la Victoria, Málaga. Cuidamos de tu mascota con profesionalidad y cercanía.",
}

const navLinks = [
{ href: "/", label: "Home" },
{ href: "/equipo", label: "Equipo" },
{ href: "/servicios", label: "Consultas" },
{ href: "/blog", label: "Blog" },
{ href: "/contacto", label: "Contacto" },
]

const LOGO = "/images/cropped-Logo-Veter-Group-e1778144720121.png"

export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="es">
<body className={font.className}>

<header className="bg-white shadow-sm sticky top-0 z-50">
<div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
<a href="/">
<img src={LOGO} alt="Veter Group" className="h-12 w-auto" />
</a>
<nav>
<ul className="flex gap-7 text-sm font-semibold items-center" style={{ color: "#104766" }}>
{navLinks.map(l => (
<li key={l.href}>
<a href={l.href} className="hover:text-[#ea4f4e] transition">{l.label}</a>
</li>
))}
<li>
<a href="https://wa.me/message/QSHQLWTJJJYDI1"
target="_blank"
rel="noopener noreferrer"
className="text-white font-semibold px-5 py-2 rounded-full transition"
style={{ backgroundColor: "#ea4f4e" }}>
Hacer una Cita
</a>
</li>
</ul>
</nav>
</div>
</header>

<main>{children}</main>

<footer style={{ backgroundColor: "#104766" }} className="text-white mt-16">
<div className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

<div>
<img
src={LOGO}
alt="Veter"
className="h-10 mb-5"
style={{ filter: "brightness(0) invert(1)" }}
/>
<p className="text-blue-200 text-sm leading-relaxed mb-2">
<strong className="text-white">Teléfonos</strong><br />
+34 640 995 846<br />
+34 951 25 73 88
</p>
<p className="text-blue-200 text-sm leading-relaxed mb-2">
<strong className="text-white">Dirección</strong><br />
Plaza del señorío, local 3,<br />
Rincón de la Victoria, 29730
</p>
<p className="text-blue-200 text-sm">
<strong className="text-white">Email</strong><br />
hola@veter.es
</p>
</div>

<div>
<h3 className="text-white font-semibold mb-4">Navegación</h3>
<ul className="space-y-2 text-sm text-blue-200">
{navLinks.map(l => (
<li key={l.href}><a href={l.href} className="hover:text-white transition">{l.label}</a></li>
))}
</ul>
</div>

</div>

<div className="border-t border-blue-800 py-4 text-center text-xs text-blue-300">
© 2025 Veter Centro Veterinario · Rincón de la Victoria, Málaga
&nbsp;·&nbsp;
<a href="https://veter.es/politica-de-privacidad/" className="hover:text-white transition">Política de privacidad</a>
&nbsp;·&nbsp;
<a href="https://veter.es/politica-de-cookies/" className="hover:text-white transition">Cookies</a>
</div>
</footer>

</body>
</html>
)
}
