import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import NavBar from "./components/NavBar"

const font = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export const metadata: Metadata = {
metadataBase: new URL("https://veter-web.vercel.app"),
title: {
default: "Veter — Clínica Veterinaria en Rincón de la Victoria",
template: "%s | Veter",
},
description: "Clínica veterinaria en Rincón de la Victoria, Málaga. Cuidamos de tu mascota con profesionalidad y cercanía.",
openGraph: {
type: "website",
locale: "es_ES",
siteName: "Veter Centro Veterinario",
},
}

const jsonLdLocal = {
"@context": "https://schema.org",
"@type": "VeterinaryCare",
name: "Veter Centro Veterinario",
url: "https://veter-web.vercel.app",
telephone: ["+34640995846", "+34951257388"],
email: "hola@veter.es",
address: {
"@type": "PostalAddress",
streetAddress: "Plaza del señorío, local 3",
addressLocality: "Rincón de la Victoria",
postalCode: "29730",
addressCountry: "ES",
addressRegion: "Málaga",
},
geo: {
"@type": "GeoCoordinates",
latitude: 36.7177,
longitude: -4.2792,
},
openingHoursSpecification: [
{
"@type": "OpeningHoursSpecification",
dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
opens: "09:00",
closes: "20:00",
},
],
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
<script
type="application/ld+json"
dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocal) }}
/>

<NavBar />

<main>{children}</main>

{/* boton flotante whatsapp */}
<a
href="https://wa.me/message/QSHQLWTJJJYDI1"
target="_blank"
rel="noopener noreferrer"
aria-label="Contactar por WhatsApp"
className="fixed bottom-6 right-6 z-50 flex items-center gap-2 text-white text-sm font-semibold px-4 py-3 rounded-full shadow-lg transition hover:opacity-90"
style={{ backgroundColor: "#25D366" }}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
<path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.41A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.958 7.958 0 01-4.073-1.115l-.291-.174-3.019.855.85-2.945-.19-.302A7.958 7.958 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8zm4.406-5.845c-.241-.12-1.428-.704-1.649-.785-.221-.08-.382-.12-.542.121-.16.241-.623.785-.764.946-.14.16-.281.181-.522.06-.241-.12-1.018-.375-1.939-1.196-.717-.639-1.201-1.428-1.342-1.669-.14-.241-.015-.372.106-.492.108-.108.241-.281.362-.422.12-.14.16-.241.241-.402.08-.16.04-.301-.02-.422-.06-.12-.542-1.308-.743-1.79-.196-.47-.395-.406-.542-.413l-.462-.008c-.16 0-.422.06-.643.301-.221.241-.843.824-.843 2.01 0 1.187.863 2.332.983 2.493.12.16 1.7 2.596 4.12 3.64.576.248 1.025.396 1.375.507.578.184 1.104.158 1.52.096.463-.069 1.428-.584 1.629-1.148.2-.563.2-1.045.14-1.148-.06-.1-.221-.16-.462-.28z"/>
</svg>
WhatsApp
</a>

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
<a href="/politica-de-privacidad" className="hover:text-white transition">Política de privacidad</a>
&nbsp;·&nbsp;
<a href="/politica-de-cookies" className="hover:text-white transition">Cookies</a>
</div>
</footer>

</body>
</html>
)
}
