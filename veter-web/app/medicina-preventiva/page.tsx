import type { Metadata } from "next"
import Image from "next/image"

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

{/* Introducción — narrativa, sin enumeraciones */}
<section className="bg-white py-16 px-4">
<div className="max-w-3xl mx-auto">

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
<p className="text-gray-500 text-base leading-relaxed text-justify">
Si tu mascota no tiene un historial actualizado o llevas tiempo sin pasar por la clínica, la consulta preventiva es el mejor punto de partida. Sin presiones, sin protocolo rígido: simplemente revisamos en qué punto está y qué necesita a partir de ahora.
</p>

</div>
</section>

{/* Servicios preventivos — cards con icono, hover effect */}
<section style={{ backgroundColor: "#f8fafc" }} className="py-16 px-4">
<div className="max-w-5xl mx-auto">

<div className="mb-6 text-right">
<p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#ea4f4e" }}>
Qué incluye
</p>
<h2 className="text-2xl md:text-3xl font-bold leading-snug" style={{ color: "#104766" }}>
Servicios preventivos
</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
{servicios.map((s) => (
<div
key={s.nombre}
className="group rounded-2xl p-7 flex flex-col gap-4 transition-all duration-200 hover:shadow-md cursor-default"
style={{
backgroundColor: "#ffffff",
border: "1px solid #e5e7eb",
borderTop: "3px solid #104766",
}}
>
<div className="flex items-center gap-3">
<span
className="flex-shrink-0 rounded-xl p-2"
style={{ backgroundColor: "#eff6ff", color: "#104766" }}
>
{s.icono}
</span>
<h3 className="text-base font-bold leading-snug" style={{ color: "#104766" }}>
{s.nombre}
</h3>
</div>
<p className="text-gray-500 text-sm leading-relaxed">
{s.desc}
</p>
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

{/* Perros */}
<div className="mb-4">
<p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#104766", opacity: 0.45 }}>Para perros</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
{planes.filter(p => p.especie === "Perros").map((p) => (
<div key={p.titulo}
className="rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-300"
style={{ border: "1px solid #e5e7eb" }}>
<div className="relative w-full h-72 overflow-hidden">
<Image src={p.img} alt={p.titulo} fill className="object-cover transition-transform duration-500 hover:scale-105" />
<div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${p.acento}cc 0%, transparent 60%)` }} />
<div className="absolute bottom-4 left-5">
<span className="text-xs font-bold uppercase tracking-widest text-white opacity-90">{p.edad}</span>
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
))}
</div>

{/* Gatos */}
<div className="mb-4">
<p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#104766", opacity: 0.45 }}>Para gatos</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{planes.filter(p => p.especie === "Gatos").map((p) => (
<div key={p.titulo}
className="rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-300"
style={{ border: "1px solid #e5e7eb" }}>
<div className="relative w-full h-72 overflow-hidden">
<Image src={p.img} alt={p.titulo} fill className="object-cover transition-transform duration-500 hover:scale-105" />
<div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${p.acento}cc 0%, transparent 60%)` }} />
<div className="absolute bottom-4 left-5">
<span className="text-xs font-bold uppercase tracking-widest text-white opacity-90">{p.edad}</span>
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
))}
</div>

</div>
</section>

{/* Cómo funciona — 3 etapas del cuidado preventivo */}
<section className="bg-white py-16 px-4">
<div className="max-w-4xl mx-auto">

<p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#ea4f4e" }}>
Cómo funciona
</p>
<h2 className="text-2xl md:text-3xl font-bold mb-12 leading-snug" style={{ color: "#104766" }}>
La prevención como hábito
</h2>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{etapas.map((e) => (
<div
key={e.num}
className="relative rounded-2xl p-8 flex flex-col"
style={{
backgroundColor: "#f8fafc",
border: "1px solid #e5e7eb",
borderTop: `4px solid ${e.acento}`,
boxShadow: "0 2px 12px 0 rgba(16,71,102,0.06)",
}}
>
<span
className="text-5xl font-extrabold leading-none mb-5 select-none"
style={{ color: e.acento, opacity: 0.18 }}
aria-hidden="true"
>
{e.num}
</span>
<h3 className="text-lg font-bold mb-3 leading-snug" style={{ color: "#104766" }}>
{e.titulo}
</h3>
<p className="text-gray-500 text-sm leading-relaxed">
{e.desc}
</p>
</div>
))}
</div>

</div>
</section>

{/* CTA final */}
<section style={{ backgroundColor: "#104766" }} className="py-16 px-4 text-center text-white">
<p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#ea4f4e" }}>
¿Tu mascota está al día?
</p>
<h2 className="text-white text-2xl md:text-3xl font-bold mb-4 leading-snug">
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
