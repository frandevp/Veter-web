"use client"
import { useState } from "react"

const navLinks = [
{ href: "/", label: "Home" },
{ href: "/equipo", label: "Equipo" },
{ href: "/servicios", label: "Consultas" },
{ href: "/cirugia-general", label: "Cirugía General" },
{ href: "/medicina-preventiva", label: "Medicina Preventiva" },
{ href: "/tienda", label: "Tienda" },
{ href: "/blog", label: "Blog" },
{ href: "/contacto", label: "Contacto" },
]

const LOGO = "/images/cropped-Logo-Veter-Group-e1778144720121.png"

export default function NavBar() {
const [open, setOpen] = useState(false)
return (
<header className="bg-white shadow-sm sticky top-0 z-50">
<div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
<a href="/"><img src={LOGO} alt="Veter Group" className="h-12 w-auto" /></a>

{/* desktop */}
<nav className="hidden md:flex">
<ul className="flex gap-7 text-sm font-semibold items-center" style={{ color: "#104766" }}>
{navLinks.map(l => (
<li key={l.href}>
<a href={l.href} className="hover:text-[#ea4f4e] transition">{l.label}</a>
</li>
))}
<li>
<a href="https://wa.me/message/QSHQLWTJJJYDI1"
target="_blank" rel="noopener noreferrer"
className="text-white font-semibold px-5 py-2 rounded-full transition"
style={{ backgroundColor: "#ea4f4e" }}>
Hacer una Cita
</a>
</li>
</ul>
</nav>

{/* hamburger */}
<button
className="md:hidden flex flex-col justify-center gap-1.5 p-2"
onClick={() => setOpen(!open)}
aria-label="Abrir menú"
aria-expanded={open}>
<span className={`block w-6 h-0.5 bg-[#104766] transition-transform duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
<span className={`block w-6 h-0.5 bg-[#104766] transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
<span className={`block w-6 h-0.5 bg-[#104766] transition-transform duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
</button>
</div>

{/* mobile menu */}
{open && (
<div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
<ul className="flex flex-col text-sm font-semibold" style={{ color: "#104766" }}>
{navLinks.map(l => (
<li key={l.href}>
<a href={l.href} onClick={() => setOpen(false)}
className="hover:bg-gray-50 hover:text-[#ea4f4e] transition flex items-center px-5 py-3.5 border-b border-gray-100">
{l.label}
</a>
</li>
))}
<li className="px-5 py-4">
<a href="https://wa.me/message/QSHQLWTJJJYDI1"
target="_blank" rel="noopener noreferrer"
className="text-white font-semibold px-5 py-3 rounded-full inline-block transition w-full text-center"
style={{ backgroundColor: "#ea4f4e" }}>
Hacer una Cita
</a>
</li>
</ul>
</div>
)}
</header>
)
}
