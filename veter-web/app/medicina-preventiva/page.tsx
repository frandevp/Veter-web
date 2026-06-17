import type { Metadata } from "next"

export const metadata: Metadata = {
title: "Medicina Preventiva Veterinaria | Veter Rincón de la Victoria",
description: "Vacunación, desparasitación y planes de salud preventivos para tu mascota en Rincón de la Victoria, Málaga. Calendarios de vacunación para perros y gatos.",
openGraph: {
title: "Medicina Preventiva | Veter",
description: "Vacunas, desparasitaciones y planes de salud para tu mascota en Rincón de la Victoria, Málaga.",
},
}

const vacunasCachorros = [
{ nombre: "DP Plus", desc: "Distemper y Parvovirus. Primera vacuna esencial del cachorro." },
{ nombre: "DHPPI", desc: "Protección combinada frente a Distemper, Hepatitis, Parvovirus y Parainfluenza." },
{ nombre: "Leptospira", desc: "Prevención de leptospirosis, enfermedad transmisible también a personas." },
]

const vacunasAdultos = [
{ nombre: "DHPPI (refuerzo)", desc: "Refuerzo anual de la vacuna combinada para mantener la inmunidad." },
{ nombre: "Leptospira (refuerzo)", desc: "Refuerzo anual imprescindible, especialmente en zonas con agua estancada." },
{ nombre: "Tos de las perreras", desc: "Recomendada si el perro frecuenta residencias, parques o zonas con otros perros." },
{ nombre: "Leishmaniosis", desc: "Vacunas disponibles: Letifemd y Neoleish. Especialmente importante en zonas mediterráneas." },
]

const desparasitaciones = [
{
tipo: "Desparasitación interna",
productos: ["Advocate", "Nexgard Spectra"],
desc: "Elimina parásitos intestinales como áscaris y tenias, y protege frente a parásitos internos que pueden afectar la salud del animal y de la familia.",
},
{
tipo: "Desparasitación externa",
productos: ["Frontline", "Bravecto", "Nexgard", "Evicto"],
desc: "Protege frente a pulgas, garrapatas y otros ectoparásitos. Disponible en pipetas, comprimidos y collares según las necesidades de cada mascota.",
},
]

export default function MedicinaPreventiva() {
return (
<div>
<section style={{ backgroundColor: "#104766" }} className="text-white py-20 px-4 text-center">
<h1 className="text-white text-4xl font-bold mb-4">Garantiza la salud de tu Mascota</h1>
<p className="text-blue-200 max-w-xl mx-auto mb-8">Bienestar y atención preventiva</p>
<a href="https://wa.me/message/QSHQLWTJJJYDI1" target="_blank" rel="noopener noreferrer"
className="inline-block bg-[#ea4f4e] text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition uppercase tracking-wide text-sm">
Reserva una Cita
</a>
</section>

<section className="max-w-4xl mx-auto px-4 py-20">
<p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#ea4f4e" }}>Prevención</p>
<h2 className="text-3xl font-bold mb-6" style={{ color: "#104766" }}>Nuestro compromiso con la salud preventiva</h2>
<p className="text-gray-600 leading-relaxed mb-4">
La medicina preventiva es la mejor herramienta para mantener a tu mascota sana y detectar problemas antes de que se agraven. En Veter ofrecemos vacunaciones adaptadas a cada animal, desparasitaciones periódicas y planes de salud personalizados.
</p>
<p className="text-gray-600 leading-relaxed">
Un animal correctamente vacunado y desparasitado no solo está protegido, sino que también reduce el riesgo de transmisión de enfermedades a otros animales y a las personas de su entorno.
</p>
</section>

<section className="bg-gray-50 py-16 px-4">
<div className="max-w-4xl mx-auto">
<h2 className="text-2xl font-bold mb-5" style={{ color: "#104766" }}>¿Qué es una vacuna y cómo funciona?</h2>
<p className="text-gray-600 leading-relaxed mb-4">
Una vacuna es una preparación que contiene agentes similares al microorganismo causante de una enfermedad, generalmente versiones debilitadas o inactivadas del patógeno. Al administrarla, el sistema inmunológico reconoce el agente como una amenaza, lo destruye y conserva memoria de él.
</p>
<p className="text-gray-600 leading-relaxed">
Así, si el animal entra en contacto con la enfermedad real en el futuro, su sistema inmune puede responder de forma rápida y eficaz. Una población correctamente vacunada contribuye además a frenar la propagación de enfermedades, protegiendo también a los animales que no pueden vacunarse por razones médicas.
</p>
</div>
</section>

<section className="max-w-5xl mx-auto px-4 py-20">
<h2 className="text-2xl font-bold mb-2" style={{ color: "#104766" }}>Vacunas para cachorros</h2>
<p className="text-gray-500 text-sm mb-8">Protocolo inicial para proteger a tu cachorro desde las primeras semanas</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
{vacunasCachorros.map(v => (
<div key={v.nombre} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
<div className="w-2 h-6 rounded-full mb-3" style={{ backgroundColor: "#ea4f4e" }} />
<h3 className="font-bold text-base mb-2" style={{ color: "#104766" }}>{v.nombre}</h3>
<p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
</div>
))}
</div>

<h2 className="text-2xl font-bold mb-2" style={{ color: "#104766" }}>Vacunas para perros adultos</h2>
<p className="text-gray-500 text-sm mb-8">Refuerzos anuales y protección adicional según el estilo de vida del animal</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
{vacunasAdultos.map(v => (
<div key={v.nombre} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
<div className="w-2 h-6 rounded-full mb-3" style={{ backgroundColor: "#104766" }} />
<h3 className="font-bold text-base mb-2" style={{ color: "#104766" }}>{v.nombre}</h3>
<p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
</div>
))}
</div>
</section>

<section className="bg-gray-50 py-20 px-4">
<div className="max-w-5xl mx-auto">
<p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#ea4f4e" }}>Parásitos</p>
<h2 className="text-3xl font-bold mb-10" style={{ color: "#104766" }}>Desparasitaciones</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
{desparasitaciones.map(d => (
<div key={d.tipo} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
<h3 className="font-bold text-lg mb-3" style={{ color: "#104766" }}>{d.tipo}</h3>
<p className="text-gray-500 text-sm leading-relaxed mb-4">{d.desc}</p>
<div className="flex flex-wrap gap-2">
{d.productos.map(p => (
<span key={p} className="text-xs font-semibold px-3 py-1 rounded-full"
style={{ backgroundColor: "#eef4f8", color: "#104766" }}>
{p}
</span>
))}
</div>
</div>
))}
</div>
</div>
</section>

<section className="py-16 px-4 text-center">
<h2 className="text-2xl font-bold mb-3" style={{ color: "#104766" }}>¿Necesitas poner las vacunas de tu mascota?</h2>
<p className="text-gray-500 mb-6">Pídenos cita y preparamos el calendario adaptado a tu animal.</p>
<div className="flex gap-4 justify-center flex-wrap">
<a href="https://wa.me/message/QSHQLWTJJJYDI1" target="_blank" rel="noopener noreferrer"
className="text-white font-semibold px-7 py-3 rounded-full hover:opacity-90 transition"
style={{ backgroundColor: "#ea4f4e" }}>
Hacer una Cita
</a>
<a href="tel:+34640995846"
className="font-semibold px-7 py-3 rounded-full border-2 hover:bg-gray-100 transition"
style={{ color: "#104766", borderColor: "#104766" }}>
+34 640 995 846
</a>
</div>
</section>
</div>
)
}
