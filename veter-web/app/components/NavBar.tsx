"use client"
import { useState } from "react"

const navLinks = [
{ href: "/", label: "Home" },
{ href: "/equipo", label: "Equipo" },
{ href: "/servicios", label: "Consultas" },
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
<div className="md:hidden bg-white border-t border-gray-100 px-4 py-5">
<ul className="flex flex-col gap-3 text-sm font-semibold" style={{ color: "#104766" }}>
{navLinks.map(l => (
<li key={l.href}>
<a href={l.href} onClick={() => setOpen(false)}
className="hover:text-[#ea4f4e] transition block py-1.5 border-b border-gray-50">
{l.label}
</a>
</li>
))}
<li className="pt-2">
<a href="https://wa.me/message/QSHQLWTJJJYDI1"
target="_blank" rel="noopener noreferrer"
className="text-white font-semibold px-5 py-2.5 rounded-full inline-block transition"
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
