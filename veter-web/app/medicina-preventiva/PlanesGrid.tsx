"use client"

import Image from "next/image"
import { useState } from "react"

const planes = [
{
titulo: "Primeros Cuidados para Cachorros",
especie: "Perros",
edad: "0 – 12 meses",
desc: "El primer año de un cachorro es el más determinante. Cubrimos todo lo que necesita desde las primeras semanas: vacunación primaria completa, desparasitaciones adaptadas a su desarrollo y microchip para que quede identificado desde el principio.",
img: "/images/perro1.jpeg",
acento: "#ea4f4e",
incluye: [
"Vacunación primaria completa (moquillo, parvovirus, hepatitis, leptospirosis)",
"Desparasitaciones internas y externas según edad",
"Microchip e identificación oficial",
"Cartilla sanitaria actualizada",
"Revisiones de seguimiento incluidas",
],
},
{
titulo: "Bienestar Adulto para Perros",
especie: "Perros",
edad: "1 – 7 años",
desc: "Mantener la inmunidad activa y controlar los parásitos no es un trámite, es parte del cuidado diario. Con el plan adulto tu perro tiene cubierto el mantenimiento preventivo anual sin tener que estar pendiente de cada cosa.",
img: "/images/perro2.jpeg",
acento: "#104766",
incluye: [
"Refuerzo vacunal anual (DHPPI + leptospirosis)",
"Desparasitación interna y externa semestral",
"Revisión general anual completa",
"Valoración del estado de salud y peso",
"Actualización de cartilla sanitaria",
],
},
{
titulo: "Cuidado Senior para Perros",
especie: "Perros",
edad: "A partir de 7 años",
desc: "Con la edad cambian las prioridades. Los perros mayores necesitan más atención, no menos. Aumentamos la frecuencia de las revisiones, añadimos analíticas de control y ajustamos los protocolos a lo que un animal senior realmente necesita.",
img: "/images/perro3.jpeg",
acento: "#ea4f4e",
incluye: [
"Revisiones clínicas cada 6 meses",
"Analítica de sangre y orina de control",
"Vacunación y desparasitación adaptadas",
"Control de peso y valoración geriátrica",
"Detección precoz de patologías crónicas",
],
},
{
titulo: "Primeros Cuidados para Gatitos",
especie: "Gatos",
edad: "0 – 12 meses",
desc: "Los gatitos necesitan un calendario preventivo específico desde las primeras semanas. Cubrimos las vacunas esenciales, la identificación y las desparasitaciones iniciales para que empiece su vida con una base sólida de salud.",
img: "/images/gato1.jpeg",
acento: "#104766",
incluye: [
"Vacunación primaria (triple felina: rinotraqueítis, calicivirus, panleucopenia)",
"Vacuna contra la leucemia felina (FeLV)",
"Desparasitación interna y externa",
"Microchip e identificación oficial",
"Cartilla sanitaria y primera revisión completa",
],
},
{
titulo: "Bienestar Adulto para Gatos",
especie: "Gatos",
edad: "1 – 8 años",
desc: "Un gato adulto sano sigue necesitando prevención activa. El plan adulto para gatos mantiene al día las vacunas y los tratamientos antiparasitarios, con una revisión anual para detectar cualquier cambio antes de que se convierta en un problema.",
img: "/images/gato2.jpeg",
acento: "#ea4f4e",
incluye: [
"Refuerzo vacunal anual (triple felina + FeLV)",
"Desparasitación interna y externa",
"Revisión general anual",
"Control de peso y valoración dental",
"Actualización de documentación sanitaria",
],
},
{
titulo: "Cuidado Senior para Gatos",
especie: "Gatos",
edad: "A partir de 8 años",
desc: "Los gatos mayores son más discretos con los síntomas, lo que hace que las revisiones periódicas sean aún más importantes. El plan senior incluye controles más frecuentes y analíticas para mantener una vigilancia real sobre su estado de salud.",
img: "/images/gato3.jpeg",
acento: "#104766",
incluye: [
"Revisiones clínicas cada 6 meses",
"Analítica de sangre y orina de control",
"Vacunación y desparasitación adaptadas a la edad",
"Valoración renal, hepática y tiroidea",
"Seguimiento de patologías crónicas frecuentes",
],
},
]

export default function PlanesGrid() {
const [lightbox, setLightbox] = useState<{ img: string; alt: string } | null>(null)

const perros = planes.filter(p => p.especie === "Perros")
const gatos = planes.filter(p => p.especie === "Gatos")

function PlanCard({ p }: { p: typeof planes[0] }) {
return (
<div
className="rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
style={{ border: "1px solid #e5e7eb" }}
onClick={() => setLightbox({ img: p.img, alt: p.titulo })}
>
<div className="relative w-full h-80 overflow-hidden" style={{ backgroundColor: "#f8fafc" }}>
<Image src={p.img} alt={p.titulo} fill className="object-contain transition-transform duration-300 group-hover:scale-105" />
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
style={{ backgroundColor: "rgba(16,71,102,0.18)" }}>
<span className="bg-white rounded-full px-4 py-2 text-sm font-semibold" style={{ color: "#104766" }}>
Ver imagen
</span>
</div>
<div className="absolute bottom-4 left-5">
<span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#104766", backgroundColor: "rgba(255,255,255,0.85)", padding: "2px 10px", borderRadius: "999px" }}>{p.edad}</span>
</div>
</div>
<div className="p-7 flex flex-col flex-1" style={{ borderTop: `4px solid ${p.acento}` }}>
<h3 className="text-xl font-extrabold mb-3" style={{ color: "#104766" }}>{p.titulo}</h3>
<p className="text-gray-500 text-sm leading-relaxed mb-5">{p.desc}</p>
<ul className="flex flex-col gap-2 mt-auto">
{p.incluye.map((item) => (
<li key={item} className="flex items-start gap-2 text-sm text-gray-600">
<span className="flex-shrink-0 font-bold mt-0.5" style={{ color: "#ea4f4e" }}>&#10003;</span>
<span>{item}</span>
</li>
))}
</ul>
</div>
</div>
)
}

return (
<>
{/* lightbox */}
{lightbox && (
<div
className="fixed inset-0 z-50 flex items-center justify-center p-4"
style={{ backgroundColor: "rgba(0,0,0,0.82)" }}
onClick={() => setLightbox(null)}
>
<div className="relative max-w-2xl w-full" onClick={e => e.stopPropagation()}>
<button
onClick={() => setLightbox(null)}
className="absolute -top-10 right-0 text-white text-2xl font-bold hover:opacity-60 transition"
aria-label="Cerrar"
>
✕
</button>
<div className="relative w-full" style={{ aspectRatio: "4/3" }}>
<Image
src={lightbox.img}
alt={lightbox.alt}
fill
className="object-contain rounded-2xl"
/>
</div>
</div>
</div>
)}

{/* perros */}
<div className="mb-4">
<p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#104766", opacity: 0.45 }}>Para perros</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
{perros.map(p => <PlanCard key={p.titulo} p={p} />)}
</div>

{/* gatos */}
<div className="mb-4">
<p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#104766", opacity: 0.45 }}>Para gatos</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{gatos.map(p => <PlanCard key={p.titulo} p={p} />)}
</div>
</>
)
}
