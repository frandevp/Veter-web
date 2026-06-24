import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
title: "Cirugía General Veterinaria | Veter Centro Veterinario Rincón de la Victoria",
description: "Cirugía veterinaria general en Rincón de la Victoria, Málaga. Esterilizaciones, cirugías de tejidos blandos, urgencias y más, con seguimiento personalizado antes y después de cada intervención.",
openGraph: {
title: "Cirugía General | Veter Centro Veterinario",
description: "Intervenimos con rigor y cuidado. Protocolos de seguridad, anestesia controlada y seguimiento postoperatorio en Veter, Rincón de la Victoria.",
},
}

const procedimientos = [
{
nombre: "Esterilización canina y felina",
desc: "Ovariohisterectomía y orquiectomía en perros y gatos. Recomendamos la edad óptima para cada especie y acompañamos el proceso completo, desde la consulta previa hasta la revisión de la cicatriz.",
icono: (
<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
<circle cx="12" cy="12" r="10"/>
<path d="M12 8v4l3 3"/>
</svg>
),
},
{
nombre: "Cirugía de tejidos blandos",
desc: "Intervenciones sobre órganos abdominales, pared torácica, piel y tejido subcutáneo. Cada caso se evalúa individualmente para elegir el abordaje más seguro y menos invasivo posible.",
icono: (
<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
<path d="M14.5 4l5.5 5.5-9.5 9.5-3-3 9.5-9.5"/>
<path d="M4 20l3-3"/>
<line x1="9" y1="15" x2="5" y2="19"/>
</svg>
),
},
{
nombre: "Extirpación de masas y tumores",
desc: "Resección quirúrgica de nódulos, quistes y masas cutáneas o internas. Coordinamos el análisis anatomopatológico posterior para orientar el tratamiento con datos reales.",
icono: (
<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
</svg>
),
},
{
nombre: "Cirugía digestiva",
desc: "Gastrotomías, enterotomías y resecciones intestinales para casos de obstrucción, cuerpos extraños o patología gastrointestinal. Intervenimos con rapidez cuando la situación lo requiere.",
icono: (
<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
<path d="M9 3h6v11l3.5 6H5.5L9 14V3z"/>
<line x1="9" y1="3" x2="15" y2="3"/>
</svg>
),
},
{
nombre: "Heridas y laceraciones",
desc: "Limpieza, desbridamiento y sutura de heridas traumáticas, mordeduras y laceraciones. Valoramos la profundidad y el riesgo de infección para decidir el manejo más adecuado.",
icono: (
<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
<path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z"/>
</svg>
),
},
{
nombre: "Cirugía urogenital",
desc: "Cistotomías, uretrostomías y corrección de patologías del tracto urinario y reproductivo. Intervenimos tanto en urgencias como en procesos planificados con antelación.",
icono: (
<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
<ellipse cx="12" cy="9" rx="5" ry="7"/>
<path d="M12 16v6"/>
</svg>
),
},
]

const fases = [
{
num: "01",
titulo: "Antes de la cirugía",
desc: "Realizamos una consulta preoperatoria completa: analítica de sangre, valoración del estado general y planificación del protocolo anestésico. Tu mascota llega a quirófano en las mejores condiciones posibles. El ayuno previo — habitualmente 8 a 12 horas, sin agua las últimas 3 — forma parte de ese protocolo de seguridad.",
acento: "#ea4f4e",
},
{
num: "02",
titulo: "Durante la intervención",
desc: "Trabajamos con anestesia inhalada combinada con premedicación inyectable para un control preciso en todo momento. Monitorizamos constantes vitales de forma continua. El quirófano está equipado para actuar con rapidez ante cualquier variación y el equipo no deja sola a tu mascota en ningún momento del procedimiento.",
acento: "#104766",
},
{
num: "03",
titulo: "La recuperación",
desc: "Las primeras 24 a 48 horas son las más importantes. Tu mascota se queda bajo observación hasta que se estabiliza completamente. Te explicamos los cuidados en casa, los signos de alerta y cuándo limitar la actividad — normalmente entre 10 y 14 días según el tipo de cirugía. Estamos disponibles para resolver cualquier duda durante el postoperatorio.",
acento: "#ea4f4e",
},
]

export default function CirugiaGeneral() {
return (
<div>

{/* Hero — fondo azul con pill label coral */}
<section style={{ backgroundColor: "#104766" }} className="text-white py-20 px-4">
<div className="max-w-3xl mx-auto text-center">
<p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#ea4f4e" }}>
Servicios
</p>
<h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight" style={{ color: "white" }}>
Cirugía General
</h1>
<p className="text-blue-200 text-lg leading-relaxed max-w-xl mx-auto">
Intervenimos con precisión y con calma. Porque una cirugía bien planificada es, ante todo, una cirugía segura.
</p>
</div>
</section>

{/* Introducción — narrativa, sin enumeraciones */}
<section className="bg-white py-16 px-4">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">

<div className="flex-1">
<p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#ea4f4e" }}>
Nuestro enfoque
</p>
<h2 className="text-2xl md:text-3xl font-bold mb-6 leading-snug" style={{ color: "#104766" }}>
Cuando tu mascota necesita operarse
</h2>
<p className="text-gray-500 text-base leading-relaxed mb-4 text-justify">
Sabemos que la palabra "cirugía" puede generar inquietud. Por eso trabajamos de una forma muy concreta: primero entendemos bien el caso, luego planificamos con cuidado y, solo entonces, intervenimos. No hay prisas innecesarias ni decisiones tomadas a la ligera.
</p>
<p className="text-gray-500 text-base leading-relaxed mb-4 text-justify">
En Veter llevamos a cabo tanto intervenciones de rutina — como esterilizaciones — como cirugías más complejas que requieren una evaluación previa más detallada. En todos los casos el protocolo es el mismo: analítica preoperatoria, anestesia monitoreada y seguimiento cercano después de la operación.
</p>
<p className="text-gray-500 text-base leading-relaxed text-justify">
La Dra. Celeste Trevisi, con formación en medicina interna y cirugía general, lleva personalmente los casos quirúrgicos del centro. Si tienes dudas sobre si tu mascota necesita una intervención, la consulta previa es el primer paso y no compromete a nada.
</p>
</div>

<div className="flex-shrink-0 w-full md:w-[520px] relative">
<div className="absolute -bottom-4 -right-4 w-full h-full pointer-events-none"
style={{ backgroundColor: "#ea4f4e", opacity: 0.12, borderRadius: "60% 40% 30% 70% / 50% 60% 40% 50%" }} />
<Image
src="/images/cirugia-perro.jpg"
alt="Perro feliz en Veter Centro Veterinario"
width={520}
height={520}
className="w-full h-auto relative z-10"
style={{ borderRadius: "55% 45% 40% 60% / 45% 55% 45% 55%" }}
/>
</div>

</div>
</section>

{/* Procedimientos — cards con icono, hover effect */}
<section style={{ backgroundColor: "#f8fafc" }} className="py-16 px-4">
<div className="max-w-5xl mx-auto">

<div className="flex items-center justify-between mb-6">
<div>
<p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#ea4f4e" }}>
Qué realizamos
</p>
<h2 className="text-2xl md:text-3xl font-bold leading-snug" style={{ color: "#104766" }}>
Procedimientos habituales
</h2>
</div>
<div className="hidden md:block flex-shrink-0">
<Image
src="/images/ilustracion-cirugia.png"
alt=""
width={200}
height={200}
className="w-48 h-auto"
aria-hidden="true"
/>
</div>
</div>

<div className="flex flex-col md:flex-row gap-10 items-start">

<div className="flex-shrink-0 w-full md:w-[300px] relative self-center">
<div className="absolute -bottom-4 -left-4 w-full h-full pointer-events-none"
style={{ backgroundColor: "#104766", opacity: 0.10, borderRadius: "40% 60% 55% 45% / 50% 45% 55% 50%" }} />
<Image
src="/images/cirugia-veterinaria.png"
alt="Veterinaria preparando quirófano en Veter"
width={300}
height={300}
className="w-full h-auto relative z-10"
style={{ borderRadius: "40% 60% 55% 45% / 50% 45% 55% 50%" }}
/>
</div>

<div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-5">
{procedimientos.map((p) => (
<div
key={p.nombre}
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
{p.icono}
</span>
<h3 className="text-base font-bold leading-snug" style={{ color: "#104766" }}>
{p.nombre}
</h3>
</div>
<p className="text-gray-500 text-sm leading-relaxed">
{p.desc}
</p>
</div>
))}
</div>

</div>

</div>
</section>

{/* Cómo trabajamos — 3 steps visuales */}
<section className="bg-white py-16 px-4">
<div className="max-w-4xl mx-auto">

<p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#ea4f4e" }}>
El proceso
</p>
<h2 className="text-2xl md:text-3xl font-bold mb-12 leading-snug" style={{ color: "#104766" }}>
Antes, durante y después
</h2>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{fases.map((f) => (
<div
key={f.num}
className="relative rounded-2xl p-8 flex flex-col"
style={{
backgroundColor: "#f8fafc",
border: "1px solid #e5e7eb",
borderTop: `4px solid ${f.acento}`,
boxShadow: "0 2px 12px 0 rgba(16,71,102,0.06)",
}}
>
<span
className="text-5xl font-extrabold leading-none mb-5 select-none"
style={{ color: f.acento, opacity: 0.18 }}
aria-hidden="true"
>
{f.num}
</span>
<h3 className="text-lg font-bold mb-3 leading-snug" style={{ color: "#104766" }}>
{f.titulo}
</h3>
<p className="text-gray-500 text-sm leading-relaxed">
{f.desc}
</p>
</div>
))}
</div>

</div>
</section>

{/* CTA final — igual que /servicios y /equipo */}
<section style={{ backgroundColor: "#104766" }} className="py-16 px-4 text-center text-white">
<p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#ea4f4e" }}>
¿Necesitas una valoración?
</p>
<h2 className="text-white text-2xl md:text-3xl font-bold mb-4 leading-snug">
Consulta sin compromiso
</h2>
<p className="text-blue-200 mb-8 max-w-xl mx-auto text-base leading-relaxed">
Si crees que tu mascota puede necesitar una intervención, o simplemente quieres que la valoremos, escríbenos por WhatsApp. Solemos tener citas disponibles para el mismo día o el siguiente.
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
