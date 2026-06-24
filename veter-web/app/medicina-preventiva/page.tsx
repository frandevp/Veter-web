import type { Metadata } from "next"
import Image from "next/image"
import PlanesGrid from "./PlanesGrid"

export const metadata: Metadata = {
title: "Medicina Preventiva Veterinaria | Veter Centro Veterinario Rincón de la Victoria",
description: "Vacunas, desparasitaciones y planes de salud personalizados para tu mascota en Rincón de la Victoria, Málaga. Prevenir es la mejor forma de cuidar.",
openGraph: {
title: "Medicina Preventiva | Veter Centro Veterinario",
description: "Protocolos de vacunación, desparasitación interna y externa, y revisiones periódicas adaptadas a cada mascota en Veter, Rincón de la Victoria.",
},
}

const servicios = [
{
nombre: "Vacunación en cachorros",
desc: "Diseñamos el calendario vacunal desde las primeras semanas de vida. Cubrimos moquillo, parvovirus, hepatitis y leptospirosis, adaptando cada pauta a la edad del cachorro y a su ritmo de desarrollo.",
icono: (
<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
</svg>
),
},
{
nombre: "Vacunación en adultos",
desc: "Los refuerzos anuales de DHPPI y leptospirosis mantienen la inmunidad activa. También valoramos vacunas adicionales como la de la tos de las perreras si el perro tiene contacto frecuente con otros animales.",
icono: (
<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
<polyline points="22 4 12 14.01 9 11.01"/>
</svg>
),
},
{
nombre: "Vacuna contra la leishmaniosis",
desc: "Trabajamos con Letifemd y Neoleish, dos opciones eficaces frente a una enfermedad endémica en nuestra zona. Te explicamos cuál encaja mejor con cada perro y cómo integrarla en el protocolo preventivo.",
icono: (
<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
<circle cx="12" cy="12" r="10"/>
<line x1="12" y1="8" x2="12" y2="12"/>
<line x1="12" y1="16" x2="12.01" y2="16"/>
</svg>
),
},
{
nombre: "Desparasitación interna",
desc: "Lombrices, tenias y otros parásitos intestinales se tratan con productos como Advocate o Nexgard Spectra. La frecuencia depende del estilo de vida del animal y del riesgo al que está expuesto.",
icono: (
<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
<path d="M8 12s1.5-2 4-2 4 2 4 2"/>
<line x1="9" y1="9" x2="9.01" y2="9"/>
<line x1="15" y1="9" x2="15.01" y2="9"/>
</svg>
),
},
{
nombre: "Desparasitación externa",
desc: "Pulgas, garrapatas y ácaros pueden causar problemas serios si no se controlan. Usamos Frontline, Bravecto, Nexgard y Evicto, eligiendo el formato — pipeta, comprimido o collar — que mejor se adapte a cada mascota.",
icono: (
<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
<polyline points="9 22 9 12 15 12 15 22"/>
</svg>
),
},
]

const etapas = [
{
num: "01",
titulo: "La primera visita",
desc: "Cuando traes a un cachorro o a un animal adulto sin historial previo, lo primero es hacer una revisión general completa. Valoramos su estado físico, revisamos si tiene carnet sanitario y definimos juntos por dónde empezar. Es la base sobre la que se construye todo lo demás.",
acento: "#ea4f4e",
},
{
num: "02",
titulo: "El seguimiento periódico",
desc: "La medicina preventiva no es una visita puntual, es un hábito. Cada año recordamos los refuerzos que tocan, revisamos si los tratamientos antiparasitarios siguen siendo los adecuados y aprovechamos para detectar cualquier cambio que merezca atención antes de que avance.",
acento: "#104766",
},
{
num: "03",
titulo: "Adaptación con la edad",
desc: "Las necesidades cambian. Un perro mayor necesita controles más frecuentes y un enfoque diferente al de un cachorro. Ajustamos el plan preventivo a cada etapa de la vida para que la protección sea real y no solo un trámite.",
acento: "#ea4f4e",
},
]

export default function MedicinaPreventiva() {
return (
<div>

{/* Hero — fondo azul con pill label coral */}
<section style={{ backgroundColor: "#104766" }} className="text-white py-20 px-4">
<div className="max-w-3xl mx-auto text-center">
<p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#ea4f4e" }}>
Servicios
</p>
<h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight" style={{ color: "white" }}>
Medicina Preventiva
</h1>
<p className="text-blue-200 text-lg leading-relaxed max-w-xl mx-auto">
Prevenir siempre es mejor que curar. Un buen protocolo preventivo es la forma más eficaz de dar a tu mascota una vida larga y saludable.
</p>
</div>
</section>

{/* Introducción + etapas + imagen */}
<section className="bg-white py-16 px-4">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-14 items-start">

<div className="flex-1 min-w-0">
<p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#ea4f4e" }}>
Nuestro enfoque
</p>
<h2 className="text-2xl md:text-3xl font-bold mb-6 leading-snug" style={{ color: "#104766" }}>
Cuidar antes de que haya un problema
</h2>
<p className="text-gray-500 text-base leading-relaxed mb-4 text-justify">
La medicina preventiva parte de una idea sencilla: es mucho más fácil evitar una enfermedad que tratarla una vez que se ha instalado. Vacunas, desparasitaciones y revisiones periódicas no son un gasto, son una inversión directa en la calidad de vida de tu mascota.
</p>
<p className="text-gray-500 text-base leading-relaxed mb-4 text-justify">
En Veter no aplicamos protocolos genéricos. Diseñamos el plan preventivo de cada animal teniendo en cuenta su edad, su raza, su estilo de vida y el entorno en el que vive. Un perro que sale al campo todos los días no tiene las mismas necesidades que uno que vive en un piso en el centro del pueblo.
</p>
<p className="text-gray-500 text-base leading-relaxed mb-10 text-justify">
Si tu mascota no tiene un historial actualizado o llevas tiempo sin pasar por la clínica, la consulta preventiva es el mejor punto de partida. Sin presiones, sin protocolo rígido: simplemente revisamos en qué punto está y qué necesita a partir de ahora.
</p>

<div className="flex flex-col gap-4">
{etapas.map((e) => (
<div key={e.num} className="flex gap-4 items-start rounded-xl p-5"
style={{ backgroundColor: "#f8fafc", borderLeft: `4px solid ${e.acento}` }}>
<span className="text-2xl font-extrabold leading-none select-none flex-shrink-0 mt-0.5"
style={{ color: e.acento, opacity: 0.4 }} aria-hidden="true">{e.num}</span>
<div>
<h3 className="text-sm font-bold mb-1" style={{ color: "#104766" }}>{e.titulo}</h3>
<p className="text-gray-500 text-sm leading-relaxed">{e.desc}</p>
</div>
</div>
))}
</div>
</div>

<div className="flex-shrink-0 w-full md:w-[420px] flex flex-col gap-6 self-start mt-4 md:mt-0">
<div className="relative">
<div className="absolute -bottom-5 -right-5 w-full h-full pointer-events-none"
style={{ backgroundColor: "#ea4f4e", opacity: 0.12, borderRadius: "55% 45% 38% 62% / 48% 58% 42% 52%" }} />
<Image
src="/images/preventiva-hero.jpg"
alt="Veterinaria con perro en Veter Centro Veterinario"
width={420}
height={560}
className="w-full h-auto relative z-10"
style={{ borderRadius: "55% 45% 38% 62% / 48% 58% 42% 52%", objectFit: "cover" }}
/>
</div>
<Image
src="/images/ilustracion-veter.jpeg"
alt="Your pet is always better with Veter"
width={420}
height={420}
className="w-full h-auto"
aria-hidden="true"
/>
</div>

</div>
</section>

{/* Servicios preventivos — cards con icono, hover effect */}
<section style={{ backgroundColor: "#f8fafc" }} className="py-16 px-4">
<div className="max-w-5xl mx-auto">

<div className="mb-6">
<p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#ea4f4e" }}>
Qué incluye
</p>
<h2 className="text-2xl md:text-3xl font-bold leading-snug" style={{ color: "#104766" }}>
Servicios preventivos
</h2>
</div>

<div className="flex flex-col gap-4">
{servicios.map((s) => (
<div
key={s.nombre}
className="group rounded-2xl p-6 flex gap-5 items-start transition-all duration-200 hover:shadow-md cursor-default"
style={{
backgroundColor: "#ffffff",
border: "1px solid #e5e7eb",
borderLeft: "4px solid #104766",
}}
>
<span
className="flex-shrink-0 rounded-xl p-2 mt-0.5"
style={{ backgroundColor: "#eff6ff", color: "#104766" }}
>
{s.icono}
</span>
<div className="flex-1">
<h3 className="text-base font-bold mb-2 leading-snug" style={{ color: "#104766" }}>
{s.nombre}
</h3>
<p className="text-gray-500 text-sm leading-relaxed">
{s.desc}
</p>
</div>
</div>
))}
</div>

</div>
</section>

{/* Planes de salud — sección destacada */}
<section className="bg-white py-20 px-4">
<div className="max-w-5xl mx-auto">

<div className="text-center mb-14">
<p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#ea4f4e" }}>Adaptado a cada etapa</p>
<h2 className="text-3xl md:text-4xl font-extrabold leading-tight" style={{ color: "#104766" }}>Planes de Salud</h2>
<p className="text-gray-400 mt-3 text-base max-w-xl mx-auto">Perros y gatos, cachorros y mayores — cada etapa tiene su propio protocolo</p>
</div>

<PlanesGrid />

</div>
</section>

{/* CTA final */}
<section style={{ backgroundColor: "#104766" }} className="py-16 px-4 text-center text-white">
<p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#ea4f4e" }}>
¿Tu mascota está al día?
</p>
<h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug" style={{ color: "white" }}>
Consulta sin compromiso
</h2>
<p className="text-blue-200 mb-8 max-w-xl mx-auto text-base leading-relaxed">
Si no recuerdas cuándo fue la última vacuna o desparasitación, o si acabas de adoptar y quieres empezar bien, escríbenos por WhatsApp. Solemos tener citas disponibles para el mismo día o el siguiente.
</p>
<a
href="https://wa.me/message/QSHQLWTJJJYDI1"
target="_blank"
rel="noopener noreferrer"
className="inline-block bg-[#ea4f4e] text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition text-base"
>
Pedir cita por WhatsApp
</a>
</section>

</div>
)
}
