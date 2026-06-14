"use client"

import { useState, useEffect } from "react"

// las imagenes del slider original de veter.es
const slides = [
{ src: "/images/Diseno-sin-titulo-2-1.png", alt: "Veter Centro Veterinario" },
{ src: "/images/Diseno-sin-titulo-2.png", alt: "La salud de tu mascota" },
{ src: "/images/menu.png", alt: "Your pet is always better with Veter" },
]

export default function HeroSlider() {
const [actual, setActual] = useState(0)

useEffect(() => {
const t = setInterval(() => {
setActual(i => (i + 1) % slides.length)
}, 5000)
return () => clearInterval(t)
}, [])

return (
<section className="relative w-full overflow-hidden" style={{ minHeight: "520px" }}>
{slides.map((slide, i) => (
<img
key={slide.src}
src={slide.src}
alt={slide.alt}
className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
style={{ opacity: i === actual ? 1 : 0 }}
/>
))}

{/* puntitos */}
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
{slides.map((_, i) => (
<button key={i} onClick={() => setActual(i)}
className="w-2.5 h-2.5 rounded-full transition-all"
style={{ backgroundColor: i === actual ? "#ea4f4e" : "rgba(255,255,255,0.6)" }} />
))}
</div>
</section>
)
}
