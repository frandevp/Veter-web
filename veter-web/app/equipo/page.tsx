import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
title: "Nuestro Equipo | Veter Centro Veterinario Rincón de la Victoria",
description: "Conoce al equipo de Veter Centro Veterinario en Rincón de la Victoria, Málaga. Dra. Celeste Trevisi y un equipo comprometido con la salud animal y la experiencia de cada visita.",
openGraph: {
title: "Equipo Veterinario | Veter",
description: "La Dra. Celeste Trevisi y el equipo de Veter Centro Veterinario en Rincón de la Victoria, Málaga.",
},
}

const valores = [
{
num: "01",
titulo: "Diagnóstico preciso",
desc: "Evaluamos cada caso con detalle, sin prisas. Combinamos exploración clínica con pruebas complementarias para llegar al diagnóstico correcto.",
acento: "#ea4f4e",
},
{
num: "02",
titulo: "Trato cercano",
desc: "Sabemos que tu mascota es parte de la familia. Explicamos cada paso, resolvemos tus dudas y te acompañamos durante todo el proceso.",
acento: "#104766",
},
{
num: "03",
titulo: "Formación continua",
desc: "El equipo se forma de manera constante en las últimas técnicas y tratamientos para ofrecerte siempre lo mejor.",
acento: "#ea4f4e",
},
{
num: "04",
titulo: "Disponibilidad real",
desc: "Citas para el mismo día o el día siguiente. Abiertos hasta las 20:00 h de lunes a viernes para adaptarnos a tu agenda.",
acento: "#104766",
},
]

export default function Equipo() {
return (
<div>

{/* Hero */}
<section style={{ backgroundColor: "#104766" }} className="text-white py-20 px-4 text-center">
<h1 className="text-white text-4xl font-bold mb-4">Nuestro Equipo</h1>
<p className="text-blue-200 max-w-2xl mx-auto text-lg">
Profesionales comprometidos con la salud animal. Cercanía, empatía y excelencia en cada consulta.
</p>
</section>

{/* Misión */}
<section className="max-w-5xl mx-auto px-4 py-20">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="flex-1">
<p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#ea4f4e" }}>Nuestra misión</p>
<h2 className="text-3xl font-bold mb-8" style={{ color: "#104766" }}>¿Quiénes somos?</h2>
<blockquote className="border-l-4 pl-6 italic text-gray-600 leading-relaxed text-lg" style={{ borderColor: "#ea4f4e" }}>
"En Veter Centro Veterinario, nuestra misión es brindar una atención y experiencia excepcional para las mascotas y sus padres y al mismo tiempo crear el mejor ambiente posible para los miembros de nuestro equipo. Perseguimos nuestra misión de todo corazón, innovando constantemente en un entorno feliz y libre de estrés para perros y gatos. Nos dedicamos a mimar a los dueños de mascotas, asegurándonos de que cada visita sea una experiencia positiva y tranquilizadora. Además, estamos comprometidos a crear un lugar increíble para que los veterinarios busquen su realización profesional y personal, fomentando un ambiente de crecimiento y satisfacción laboral."
</blockquote>
</div>
<div className="flex-1 relative h-72 md:h-96 w-full rounded-2xl overflow-hidden shadow-lg">
<Image
src="/equipo/clinica.png"
alt="Clínica Veter Centro Veterinario"
fill
className="object-cover"
/>
</div>
</div>
</section>

{/* === SECCIÓN EQUIPO REDISEÑADA === */}
<div className="relative bg-gray-50 py-20 px-4 overflow-hidden">

{/* Ilustración decorativa flotante — esquina superior derecha */}
<div className="absolute top-8 right-0 w-52 md:w-72 opacity-10 pointer-events-none select-none" aria-hidden="true">
<Image
src="/equipo/ilustracion-medica.png"
alt=""
width={320}
height={320}
className="w-full h-auto"
/>
</div>

<div className="max-w-5xl mx-auto relative z-10">

<p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#ea4f4e" }}>El equipo</p>
<h2 className="text-3xl font-bold mb-14" style={{ color: "#104766" }}>Las personas detrás de Veter</h2>

{/* --- DIRECTORA: card horizontal grande --- */}
<div
className="rounded-2xl overflow-hidden mb-10 shadow-md flex flex-col md:flex-row"
style={{ backgroundColor: "#ffffff", border: "1px solid #e5e7eb" }}
>
{/* Foto grande */}
<div className="relative w-full md:w-[42%] h-80 md:h-auto flex-shrink-0 overflow-hidden">
<Image
src="/equipo/directora.jpg"
alt="Dra. Celeste Trevisi"
fill
className="object-cover object-top transition-transform duration-500 hover:scale-105"
sizes="(max-width: 768px) 100vw, 42vw"
/>
{/* Banda coral en la foto */}
<div
className="absolute bottom-0 left-0 right-0 h-1"
style={{ backgroundColor: "#ea4f4e" }}
/>
</div>

{/* Contenido */}
<div className="flex flex-col justify-center px-8 py-10 md:py-12 flex-1">
<span
className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5 w-fit"
style={{ backgroundColor: "#fef2f2", color: "#ea4f4e" }}
>
Directora
</span>
<h3 className="text-3xl font-bold leading-tight mb-1" style={{ color: "#104766" }}>
Dra. Celeste Trevisi
</h3>
<p className="text-sm font-semibold mb-5" style={{ color: "#ea4f4e" }}>
Medicina Interna · Cirugía General
</p>

{/* Quote */}
<blockquote className="border-l-4 pl-4 italic text-gray-500 text-base leading-relaxed mb-6" style={{ borderColor: "#ea4f4e" }}>
"Cada mascota merece sentirse segura. Eso es lo que guía cada consulta."
</blockquote>

<p className="text-gray-500 text-sm leading-relaxed">
Celeste dirige el centro con una visión clara: que cada visita sea una experiencia positiva para la mascota y para su familia. Su formación en medicina interna y cirugía general le permite abordar casos complejos con precisión y cercanía.
</p>
</div>
</div>

{/* --- LAS OTRAS DOS: grid de 2 columnas --- */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

{/* Administración */}
<div
className="rounded-2xl overflow-hidden shadow-sm flex flex-col group"
style={{ backgroundColor: "#f8fafc", border: "1px solid #e5e7eb" }}
>
<div className="relative w-full h-64 overflow-hidden">
<Image
src="/equipo/administracion.jpg"
alt="Francisca Maria Hevilla"
fill
className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
sizes="(max-width: 768px) 100vw, 50vw"
/>
</div>
<div className="px-6 py-7 flex flex-col flex-1">
<span
className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 w-fit"
style={{ backgroundColor: "#eff6ff", color: "#104766" }}
>
Administración
</span>
<h3 className="text-xl font-bold mb-1" style={{ color: "#104766" }}>Francisca Maria Hevilla</h3>
<p className="text-xs text-gray-400 mb-4">Gestión y atención al cliente</p>
<p className="text-gray-400 text-xs italic mb-4">"Me gusta que la visita empiece bien desde el primer momento."</p>
<p className="text-gray-500 text-sm leading-relaxed">
Francisca es la primera persona que te recibe cuando llegas a Veter. Se encarga de la gestión de citas, la coordinación del centro y de que cada visita fluya sin problemas.
</p>
</div>
</div>

{/* Redes sociales */}
<div
className="rounded-2xl overflow-hidden shadow-sm flex flex-col group"
style={{ backgroundColor: "#f8fafc", border: "1px solid #e5e7eb" }}
>
<div className="relative w-full h-64 overflow-hidden">
<Image
src="/equipo/marketing.jpg"
alt="Francesca Lombardo"
fill
className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
sizes="(max-width: 768px) 100vw, 50vw"
/>
</div>
<div className="px-6 py-7 flex flex-col flex-1">
<span
className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 w-fit"
style={{ backgroundColor: "#eff6ff", color: "#104766" }}
>
Redes Sociales
</span>
<h3 className="text-xl font-bold mb-1" style={{ color: "#104766" }}>Francesca Lombardo</h3>
<p className="text-xs text-gray-400 mb-4">Comunicación y comunidad digital</p>
<p className="text-gray-400 text-xs italic mb-4">"Las mascotas merecen tener su espacio en redes, y nosotros se lo damos."</p>
<p className="text-gray-500 text-sm leading-relaxed">
Francesca es quien da voz a Veter en redes sociales. Comparte consejos, noticias y el día a día de la clínica para mantener informada y conectada a la comunidad de dueños de mascotas.
</p>
</div>
</div>

</div>
</div>
</div>

{/* Valores — rediseño */}
<div style={{ backgroundColor: "#f8fafc" }} className="py-20 px-4">
<div className="max-w-5xl mx-auto">

<p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#ea4f4e" }}>Nuestra forma de trabajar</p>
<h2 className="text-4xl font-extrabold mb-14 leading-tight" style={{ color: "#104766" }}>Lo que nos define</h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-7">
{valores.map(v => (
<div
key={v.titulo}
className="relative rounded-2xl overflow-hidden p-8 flex flex-col"
style={{
backgroundColor: "#ffffff",
border: "1px solid #e5e7eb",
borderTop: `4px solid ${v.acento}`,
boxShadow: "0 2px 12px 0 rgba(16,71,102,0.06)",
}}
>
{/* Número decorativo de fondo */}
<span
className="absolute top-4 right-5 text-8xl font-black leading-none select-none pointer-events-none"
style={{ color: v.acento, opacity: 0.07 }}
aria-hidden="true"
>
{v.num}
</span>

{/* Número visible pequeño */}
<span
className="text-xs font-black tracking-widest mb-5 block"
style={{ color: v.acento }}
>
{v.num}
</span>

<h3 className="text-lg font-bold mb-3 leading-snug" style={{ color: "#104766" }}>
{v.titulo}
</h3>
<p className="text-gray-500 text-sm leading-relaxed">
{v.desc}
</p>
</div>
))}
</div>

</div>
</div>

{/* CTA */}
<section style={{ backgroundColor: "#104766" }} className="py-14 px-4 text-center text-white">
<h2 className="text-white text-2xl font-bold mb-3">¿Tienes alguna pregunta para el equipo?</h2>
<p className="text-blue-200 mb-8 max-w-xl mx-auto">
Llámanos, escríbenos por WhatsApp o pásate por la clínica. Estaremos encantados de atenderte.
</p>
<div className="flex gap-4 justify-center flex-wrap">
<a href="https://wa.me/message/QSHQLWTJJJYDI1" target="_blank" rel="noopener noreferrer"
className="bg-[#ea4f4e] text-white font-semibold px-7 py-3 rounded-full hover:opacity-90 transition inline-block">
Pedir cita por WhatsApp
</a>
<a href="tel:+34640995846"
className="bg-white font-semibold px-7 py-3 rounded-full hover:bg-blue-50 transition inline-block"
style={{ color: "#104766" }}>
+34 640 995 846
</a>
</div>
</section>

</div>
)
}
