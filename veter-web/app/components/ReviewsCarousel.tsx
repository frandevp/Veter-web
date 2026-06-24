"use client"

import { useState } from "react"

const reseñas = [
{
nombre: "Milou",
inicial: "M",
color: "#7c4dff",
tiempo: "hace 3 meses",
texto: "Celeste es una veterinaria tan implicada, cariñosa y, sobre todo, muy competente. Nos ayudó muchísimo con nuestra perra. Un trato excepcional y siempre con una sonrisa.",
},
{
nombre: "Raúl López",
inicial: "R",
color: "#1a73e8",
tiempo: "hace 4 meses",
texto: "Muy buen trato y atención de Celeste. Dedica el tiempo que requiere, con mucho tacto y paciencia. Se nota que le encanta su trabajo y que cuida de verdad a los animales.",
},
{
nombre: "Agnieszka Węgiel",
inicial: "A",
color: "#34a853",
tiempo: "hace 4 meses",
texto: "Celeste es una doctora maravillosa. Es muy cálida y comprensiva tanto con mi gato como conmigo. No cambiaría de clínica por nada. 100% recomendable.",
},
{
nombre: "Rocío Sanz",
inicial: "R",
color: "#ea4335",
tiempo: "hace 6 meses",
texto: "La atención que recibió mi perro fue excepcional. Profesionales increíbles, siempre pendientes de todo. El espacio es acogedor y se nota mucho el cariño que le tienen a los animales.",
},
{
nombre: "María García",
inicial: "M",
color: "#f9ab00",
tiempo: "hace 2 meses",
texto: "Llevamos años yendo a Veter y siempre hemos recibido un trato excelente. Celeste es muy profesional y cercana. Sin duda la mejor clínica de Rincón de la Victoria.",
},
{
nombre: "Carlos Fernández",
inicial: "C",
color: "#00897b",
tiempo: "hace 1 mes",
texto: "Atención rápida, profesional y muy humana. Nos atendieron de urgencia y en todo momento nos explicaron todo con claridad. Muy recomendable.",
},
]

// icono G de google
function GoogleIcon() {
return (
<svg width="20" height="20" viewBox="0 0 48 48">
<path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9 3.2l6.7-6.7C35.7 2.5 30.2 0 24 0 14.6 0 6.6 5.4 2.6 13.3l7.8 6C12.2 13 17.6 9.5 24 9.5z"/>
<path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.7c-.5 2.8-2.2 5.1-4.6 6.7l7.2 5.6c4.2-3.9 6.6-9.6 6.6-16.3z"/>
<path fill="#FBBC05" d="M10.4 28.7A14.6 14.6 0 0 1 9.5 24c0-1.6.3-3.2.8-4.7l-7.8-6A23.9 23.9 0 0 0 0 24c0 3.8.9 7.4 2.6 10.6l7.8-5.9z"/>
<path fill="#34A853" d="M24 48c6.2 0 11.4-2 15.2-5.5l-7.2-5.6c-2 1.4-4.6 2.2-8 2.2-6.4 0-11.8-4.3-13.7-10.2l-7.8 5.9C6.6 42.6 14.6 48 24 48z"/>
</svg>
)
}

function Estrellas() {
return (
<div className="flex gap-0.5 text-yellow-400 text-base">
{"★★★★★"}
</div>
)
}

export default function ReviewsCarousel() {
const [desde, setDesde] = useState(0)
const visibles = 3
const max = reseñas.length - visibles

function prev() { setDesde(i => Math.max(0, i - 1)) }
function next() { setDesde(i => Math.min(max, i + 1)) }

return (
<section className="py-20 px-4" style={{ backgroundColor: "#faf8f6" }}>
<div className="max-w-6xl mx-auto">
<p className="text-center text-sm font-bold uppercase tracking-widest mb-2" style={{ color: "#ea4f4e" }}>
¿Por qué los padres de mascotas aman a Veter?
</p>
<h2 className="text-4xl font-bold text-center mb-12" style={{ color: "#104766" }}>Testimonios</h2>

<div className="flex gap-8 items-start">
{/* panel izquierdo */}
<div className="hidden md:flex flex-col items-center shrink-0 w-44 text-center">
<div className="mb-3">
<img src="/images/logo-130-x-50-1.png" alt="Veter" className="h-12 w-auto" />
</div>
<p className="font-bold text-sm leading-tight mb-1" style={{ color: "#104766" }}>Veter Centro Veterinario</p>
<div className="flex gap-0.5 text-yellow-400 text-lg mb-1">★★★★★</div>
<p className="text-xs text-gray-500 mb-4">83 reseñas Google</p>
<a href="https://www.google.com/maps/place/Veter+Centro+Veterinario/@36.716649,-4.2850412,17z/data=!3m1!4b1!4m6!3m5!1s0xd725be46693659b:0xd3cefc9bdd109a91!8m2!3d36.7166447!4d-4.2824663!16s%2Fg%2F11vjnwcxk4?entry=ttu&g_ep=EgoyMDI2MDYyMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer"
className="border border-gray-300 text-sm px-4 py-2 rounded hover:bg-gray-100 transition"
style={{ color: "#104766" }}>
Escribe una reseña
</a>
</div>

{/* carousel */}
<div className="flex-1 relative overflow-hidden">
<div className="flex gap-4 transition-transform duration-300"
style={{ transform: `translateX(calc(-${desde * (100 / visibles)}% - ${desde * 16 / visibles}px))` }}>
{reseñas.map((r, i) => (
<div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 shrink-0"
style={{ width: `calc(${100 / visibles}% - ${(visibles - 1) * 16 / visibles}px)` }}>
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
style={{ backgroundColor: r.color }}>
{r.inicial}
</div>
<div>
<p className="font-semibold text-sm leading-tight">{r.nombre}</p>
<p className="text-xs text-gray-400">{r.tiempo}</p>
</div>
</div>
<GoogleIcon />
</div>
<Estrellas />
<p className="text-gray-600 text-sm mt-3 leading-relaxed line-clamp-4">{r.texto}</p>
</div>
))}
</div>

{/* flechas */}
<button onClick={prev} disabled={desde === 0}
className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-9 h-9 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition disabled:opacity-30"
style={{ color: "#104766" }}>
‹
</button>
<button onClick={next} disabled={desde >= max}
className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-9 h-9 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition disabled:opacity-30"
style={{ color: "#104766" }}>
›
</button>
</div>
</div>
</div>
</section>
)
}
