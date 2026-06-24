import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
title: "Servicios Veterinarios | Veter Centro Veterinario Rincón de la Victoria",
description: "Medicina interna, cirugía, diagnóstico por imagen, odontología veterinaria y mucho más en Veter Centro Veterinario, Rincón de la Victoria, Málaga.",
openGraph: {
title: "Servicios | Veter Centro Veterinario",
description: "Todos los servicios veterinarios que ofrecemos en Veter: diagnóstico, cirugía, hospitalización, oncología y más.",
},
}

const servicios = [
{
num: "01",
nombre: "Medicina Interna",
desc: "Abordamos enfermedades del aparato digestivo, respiratorio, urinario y endocrino con un enfoque metódico. Cada caso se evalúa con la calma y el detalle que merece.",
icono: (
<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
</svg>
),
},
{
num: "02",
nombre: "Diagnóstico por Imagen",
desc: "Contamos con ecografía para obtener información precisa sin procedimientos invasivos. Detectamos problemas internos de forma rápida y segura.",
icono: (
<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
<rect x="3" y="3" width="18" height="18" rx="2"/>
<circle cx="12" cy="12" r="4"/>
<line x1="12" y1="3" x2="12" y2="7"/>
<line x1="12" y1="17" x2="12" y2="21"/>
<line x1="3" y1="12" x2="7" y2="12"/>
<line x1="17" y1="12" x2="21" y2="12"/>
</svg>
),
},
{
num: "03",
nombre: "Pruebas de Laboratorio",
desc: "Análisis de sangre, orina y otros parámetros en el propio centro. Los resultados nos permiten confirmar diagnósticos y ajustar tratamientos con datos reales.",
icono: (
<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
<path d="M9 3h6v11l3.5 6H5.5L9 14V3z"/>
<line x1="9" y1="3" x2="15" y2="3"/>
</svg>
),
},
{
num: "04",
nombre: "Cirugía General",
desc: "Cuando tu mascota necesita una intervención, queremos que estés tranquilo. Operamos con protocolos de seguridad rigurosos y un seguimiento personalizado antes, durante y después de cada cirugía.",
icono: (
<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
<path d="M14.5 4l5.5 5.5-9.5 9.5-3-3 9.5-9.5"/>
<path d="M4 20l3-3"/>
<line x1="9" y1="15" x2="5" y2="19"/>
</svg>
),
},
{
num: "05",
nombre: "Traumatología",
desc: "Fracturas, luxaciones y problemas ortopédicos tratados con precisión. Evaluamos la estructura musculoesquelética para ofrecer la solución más adecuada a cada paciente.",
icono: (
<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
<path d="M12 2c0 0-4 4-4 9a4 4 0 0 0 8 0c0-5-4-9-4-9z"/>
<line x1="12" y1="15" x2="12" y2="22"/>
</svg>
),
},
{
num: "06",
nombre: "Odontología",
desc: "La salud bucal afecta a todo el organismo. Realizamos limpiezas dentales, extracciones y tratamientos periodontales para que tu mascota coma bien y viva mejor.",
icono: (
<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
<path d="M12 2c-2.5 0-5 2-5 5 0 4 2 8 3 10h4c1-2 3-6 3-10 0-3-2.5-5-5-5z"/>
</svg>
),
},
{
num: "07",
nombre: "Hospitalización",
desc: "Cuando una mascota necesita seguimiento continuo, disponemos de zona de hospitalización con monitorización constante. Tu animal nunca está solo.",
icono: (
<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
<rect x="3" y="7" width="18" height="14" rx="2"/>
<path d="M8 7V5a4 4 0 0 1 8 0v2"/>
<line x1="12" y1="12" x2="12" y2="16"/>
<line x1="10" y1="14" x2="14" y2="14"/>
</svg>
),
},
{
num: "08",
nombre: "Identificación",
desc: "Implantamos microchips y gestionamos el alta en el Registro de Animales de Compañía. Un trámite sencillo que puede marcar la diferencia si tu mascota se pierde.",
icono: (
<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
<rect x="5" y="5" width="14" height="14" rx="2"/>
<rect x="9" y="9" width="6" height="6"/>
<line x1="9" y1="2" x2="9" y2="5"/>
<line x1="15" y1="2" x2="15" y2="5"/>
<line x1="9" y1="19" x2="9" y2="22"/>
<line x1="15" y1="19" x2="15" y2="22"/>
<line x1="2" y1="9" x2="5" y2="9"/>
<line x1="2" y1="15" x2="5" y2="15"/>
<line x1="19" y1="9" x2="22" y2="9"/>
<line x1="19" y1="15" x2="22" y2="15"/>
</svg>
),
},
{
num: "09",
nombre: "Oftalmología",
desc: "Examinamos la salud ocular y tratamos patologías como cataratas, úlceras corneales o conjuntivitis. Cuidamos la vista de tu mascota con la misma atención que el resto del cuerpo.",
icono: (
<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
<circle cx="12" cy="12" r="3"/>
</svg>
),
},
{
num: "10",
nombre: "Oncología",
desc: "Acompañamos a las familias en procesos oncológicos con rigor y mucha sensibilidad. Diagnóstico temprano, seguimiento cercano y opciones de tratamiento adaptadas a cada situación.",
icono: (
<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
</svg>
),
},
{
num: "11",
nombre: "Documentos de Viaje",
desc: "Preparamos toda la documentación sanitaria para que viajes con tu mascota dentro y fuera de España sin complicaciones. Pasaporte europeo, tratamientos antiparasitarios y certificados oficiales.",
icono: (
<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
<rect x="2" y="5" width="20" height="14" rx="2"/>
<path d="M2 10h20"/>
<path d="M7 15h.01"/>
<path d="M11 15h2"/>
</svg>
),
},
]

export default function Servicios() {
return (
<div>

{/* Hero */}
<section style={{ backgroundColor: "#104766" }} className="text-white py-16 px-4">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">

{/* Columna izquierda: texto */}
<div className="flex-1 text-center md:text-left">
<p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#ea4f4e" }}>
Lo que ofrecemos
</p>
<h1 className="text-white text-4xl md:text-5xl font-bold mb-5 leading-tight">
Servicios Veterinarios
</h1>
<p className="text-blue-200 text-lg leading-relaxed">
Atención especializada para perros y gatos en Rincón de la Victoria. Todo lo que tu mascota necesita, en un solo lugar.
</p>
</div>

{/* Columna derecha: imagen */}
<div className="flex-shrink-0 w-full md:w-[340px] bg-white rounded-2xl p-4 shadow-sm">
<Image
src="/images/servicios-hero.png"
alt="Veterinaria con mascota — Veter Centro Veterinario"
width={340}
height={340}
className="w-full h-auto object-contain rounded-xl"
priority
/>
</div>

</div>
</section>

{/* Lista de servicios */}
<section className="max-w-4xl mx-auto px-4 py-16">

{servicios.map((s, i) => (
<div key={s.num}>
<div
className="group flex gap-6 md:gap-10 items-start py-10 cursor-default transition-all duration-200 hover:bg-[#f8fafc] rounded-2xl px-4 -mx-4"
>

{/* Número decorativo */}
<span
className="flex-shrink-0 text-6xl md:text-7xl font-extrabold leading-none select-none pt-1"
style={{ color: "#ea4f4e", opacity: 0.15 }}
aria-hidden="true"
>
{s.num}
</span>

{/* Cuerpo */}
<div className="flex-1 min-w-0 pt-1">

<div className="flex items-center gap-3 mb-3">
<span
className="flex-shrink-0 rounded-xl p-2"
style={{ backgroundColor: "#eff6ff", color: "#104766" }}
>
{s.icono}
</span>
<h2 className="text-xl md:text-2xl font-bold leading-snug" style={{ color: "#104766" }}>
{s.nombre}
</h2>
</div>

<p className="text-gray-500 leading-relaxed text-base max-w-2xl">
{s.desc}
</p>

</div>

{/* Flecha hover */}
<span
className="flex-shrink-0 self-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
style={{ color: "#ea4f4e" }}
aria-hidden="true"
>
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
<path d="M5 12h14M12 5l7 7-7 7"/>
</svg>
</span>

</div>

{/* Separador (excepto el último) */}
{i < servicios.length - 1 && (
<div className="h-px mx-4" style={{ backgroundColor: "#e5e7eb" }} />
)}

</div>
))}

</section>

{/* CTA */}
<section style={{ backgroundColor: "#104766" }} className="py-16 px-4 text-center text-white">
<p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#ea4f4e" }}>
¿Necesitas atención?
</p>
<h2 className="text-white text-2xl md:text-3xl font-bold mb-4 leading-snug">
Pide cita hoy mismo
</h2>
<p className="text-blue-200 mb-8 max-w-xl mx-auto text-base leading-relaxed">
Estamos en Rincón de la Victoria, Málaga. Respondemos rápido y solemos tener citas disponibles para el mismo día o el siguiente.
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
