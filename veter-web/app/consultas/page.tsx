import type { Metadata } from "next"

export const metadata: Metadata = {
title: "Consultas Veterinarias | Veter Rincón de la Victoria",
description: "Consultas generales y de especialistas veterinarios en Rincón de la Victoria, Málaga. Cardiología, traumatología, dermatología, oncología y oftalmología veterinaria.",
openGraph: {
title: "Consultas Veterinarias | Veter",
description: "Consultas generales y especializadas en Rincón de la Victoria, Málaga.",
},
}

const especialidades = [
{
titulo: "Cardiología Veterinaria",
desc: "Diagnóstico y tratamiento de enfermedades del corazón en perros y gatos. Electrocardiografía, ecocardiografía y seguimiento de patologías cardíacas crónicas.",
},
{
titulo: "Traumatología Veterinaria",
desc: "Atención de fracturas, lesiones ligamentosas y problemas ortopédicos. Intervención quirúrgica cuando es necesario y rehabilitación post-operatoria.",
},
{
titulo: "Dermatología Veterinaria",
desc: "Diagnóstico y tratamiento de alergias, enfermedades de la piel, otitis e infecciones cutáneas recurrentes. Pruebas de alergia y dietas de eliminación.",
},
{
titulo: "Oncología Veterinaria",
desc: "Detección, diagnóstico y tratamiento de tumores. Biopsia, análisis histopatológico y protocolo de quimioterapia cuando procede.",
},
{
titulo: "Oftalmología Veterinaria",
desc: "Exploración ocular completa, tratamiento de cataratas, úlceras corneales, glaucoma y otras patologías oculares frecuentes en animales de compañía.",
},
]

export default function Consultas() {
return (
<div>
<section style={{ backgroundColor: "#104766" }} className="text-white py-20 px-4 text-center">
<h1 className="text-white text-4xl font-bold mb-4">Consultas</h1>
<p className="text-blue-200 max-w-xl mx-auto mb-8">¿Necesitas ayuda Veterinaria?</p>
<a href="https://wa.me/message/QSHQLWTJJJYDI1" target="_blank" rel="noopener noreferrer"
className="inline-block bg-[#ea4f4e] text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition uppercase tracking-wide text-sm">
Reserva una Cita
</a>
</section>

<section className="max-w-5xl mx-auto px-4 py-20">
<p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#ea4f4e" }}>Lo que hacemos</p>
<h2 className="text-3xl font-bold mb-6" style={{ color: "#104766" }}>Consultas Generales</h2>
<p className="text-gray-600 leading-relaxed mb-4">
Realizamos evaluaciones completas y precisas de tu mascota, observando los ojos, oídos y piel, revisando el sistema cardiovascular y respiratorio, y explorando el abdomen para detectar cualquier anomalía.
</p>
<p className="text-gray-600 leading-relaxed mb-4">
Durante la consulta general evaluamos el estado general del animal, su peso, condición corporal, hidratación y temperatura. Detectamos problemas de forma temprana para actuar con la mayor eficacia posible.
</p>
<p className="text-gray-600 leading-relaxed">
Citas para el mismo día o para el día siguiente. Abierto hasta las 20:00 h de lunes a viernes.
</p>
</section>

<div className="bg-gray-50 py-16 px-4">
<div className="max-w-5xl mx-auto">
<p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#ea4f4e" }}>Especialistas</p>
<h2 className="text-3xl font-bold mb-10" style={{ color: "#104766" }}>Consultas de Especialistas</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{especialidades.map(e => (
<div key={e.titulo} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition">
<div className="w-2 h-8 rounded-full mb-4" style={{ backgroundColor: "#ea4f4e" }} />
<h3 className="font-bold text-lg mb-3" style={{ color: "#104766" }}>{e.titulo}</h3>
<p className="text-gray-500 text-sm leading-relaxed">{e.desc}</p>
</div>
))}
</div>
</div>
</div>

<section className="py-16 px-4 text-center">
<h2 className="text-2xl font-bold mb-3" style={{ color: "#104766" }}>¿Necesitas pedir cita?</h2>
<p className="text-gray-500 mb-6">Escríbenos o llámanos y te atendemos enseguida.</p>
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
