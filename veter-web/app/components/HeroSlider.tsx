"use client"

import { useState, useEffect } from "react"

const fotos = [
"/images/home-1-01.jpg",
"/images/perro1.jpeg",
"/images/gato1.jpeg",
"/images/home-1-14.jpg",
"/images/perro2.jpeg",
"/images/gato2.jpeg",
]

const LOGO = "/images/cropped-Logo-Veter-Group-e1778144720121.png"

export default function HeroSlider() {
const [actual, setActual] = useState(0)

useEffect(() => {
const t = setInterval(() => {
setActual(i => (i + 1) % fotos.length)
}, 4000)
return () => clearInterval(t)
}, [])

return (
<section className="relative text-white min-h-screen flex items-center overflow-hidden">
{/* imagenes apiladas, solo la activa es visible */}
{fotos.map((src, i) => (
<div key={src}
className="absolute inset-0 transition-opacity duration-1000"
style={{
backgroundImage: `url(${src})`,
backgroundSize: "cover",
backgroundPosition: "center",
opacity: i === actual ? 1 : 0,
}} />
))}

{/* overlay azul */}
<div className="absolute inset-0" style={{ backgroundColor: "rgba(16, 71, 102, 0.72)" }} />

<div className="relative max-w-5xl mx-auto px-6 py-28 flex flex-col items-start">
<img src={LOGO} alt="Veter Group" className="h-14 mb-10"
style={{ filter: "brightness(0) invert(1)" }} />
<h1 className="text-white text-5xl md:text-6xl font-bold mb-6 max-w-xl leading-tight">
Your Pets it&apos;s always better with Veter
</h1>
<p className="text-blue-200 text-lg mb-10 max-w-md">
Clínica veterinaria en Rincón de la Victoria, Málaga. Profesionalidad y cercanía desde 2010.
</p>
<div className="flex flex-wrap gap-4">
<a href="https://wa.me/message/QSHQLWTJJJYDI1" target="_blank" rel="noopener noreferrer"
className="text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition"
style={{ backgroundColor: "#ea4f4e" }}>
Hacer una Cita
</a>
<a href="/servicios"
className="bg-white font-semibold px-8 py-3 rounded-full hover:bg-blue-50 transition"
style={{ color: "#104766" }}>
Ver servicios
</a>
</div>

{/* puntitos indicadores */}
<div className="flex gap-2 mt-10">
{fotos.map((_, i) => (
<button key={i} onClick={() => setActual(i)}
className="w-2 h-2 rounded-full transition-all"
style={{ backgroundColor: i === actual ? "#ea4f4e" : "rgba(255,255,255,0.5)" }} />
))}
</div>
</div>
</section>
)
}
