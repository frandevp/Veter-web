import type { Metadata } from "next"

export const metadata: Metadata = {
title: "Consultas Veterinarias | Veter Rincón de la Victoria",
description: "Consultas generales y de especialistas veterinarios en Rincón de la Victoria, Málaga. Cardiología, traumatología, dermatología, oncología y oftalmología veterinaria.",
openGraph: {
title: "Consultas Veterinarias | Veter",
description: "Consultas generales y especializadas en Rincón de la Victoria, Málaga.",
},
}

const diagnosticas = [
{
titulo: "Análisis de sangre y orina",
desc: "Evaluamos la función renal, hepática, pancreática y el estado general del organismo. Imprescindible antes de anestesias y para el seguimiento de enfermedades crónicas.",
},
{
titulo: "Ecografía",
desc: "Exploración por imagen de órganos internos: abdomen, corazón, vejiga. Detecta masas, líquido libre, problemas digestivos y embarazos sin necesidad de cirugía.",
},
{
titulo: "Radiografía",
desc: "Diagnóstico de fracturas, problemas respiratorios, obstrucciones intestinales y valoración del tamaño cardíaco. Resultado inmediato en consulta.",
},
{
titulo: "Biopsias",
desc: "Extracción de una pequeña muestra de tejido para análisis histopatológico. Fundamental para confirmar o descartar tumores y enfermedades inflamatorias.",
},
{
titulo: "Raspados cutáneos",
desc: "Técnica diagnóstica para identificar ácaros, hongos y otros parásitos de la piel. Habitual en casos de sarna, tiña o dermatitis recurrente.",
},
{
titulo: "Citologías",
desc: "Análisis microscópico de células obtenidas de masas, ganglios o secreciones. Permite un diagnóstico rápido y mínimamente invasivo de muchas patologías.",
},
]

const especialidades = [
{
titulo: "Cardiología Veterinaria",
desc: "Diagnóstico y tratamiento de enfermedades del corazón en perros y gatos. Incluye electrocardiografía, ecocardiografía, monitoreo de tensión arterial y seguimiento continuado de patologías cardíacas crónicas como la insuficiencia cardíaca o los soplos.",
},
{
titulo: "Traumatología Veterinaria",
desc: "Atención de fracturas, lesiones ligamentosas y problemas ortopédicos mediante valoración completa del aparato locomotor. Intervención quirúrgica cuando es necesario y protocolo de rehabilitación post-operatoria para una recuperación óptima.",
},
{
titulo: "Dermatología Veterinaria",
desc: "Diagnóstico y tratamiento de alergias, enfermedades de la piel, otitis e infecciones cutáneas recurrentes. Realizamos pruebas de alergia, dietas de eliminación, raspados cutáneos y citologías para identificar el origen del problema.",
},
{
titulo: "Oncología Veterinaria",
desc: "Detección, diagnóstico y tratamiento de tumores en animales de compañía. Biopsia y análisis histopatológico para confirmar el diagnóstico, estadificación de la enfermedad y protocolo de quimioterapia cuando procede.",
},
{
titulo: "Oftalmología Veterinaria",
desc: "Exploración ocular completa con instrumental especializado. Tratamiento de cataratas, úlceras corneales, glaucoma, uveítis y otras patologías oculares frecuentes en perros y gatos. Valoramos la necesidad de derivación a especialista cuando el caso lo requiere.",
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
<p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#ea4f4e" }}>Diagnóstico</p>
<h2 className="text-3xl font-bold mb-4" style={{ color: "#104766" }}>Pruebas Diagnósticas</h2>
<p className="text-gray-600 mb-10 max-w-2xl">
Para llegar al diagnóstico correcto disponemos de un amplio abanico de pruebas complementarias que realizamos en la propia clínica, con resultados rápidos y sin derivaciones innecesarias.
</p>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
{diagnosticas.map(d => (
<div key={d.titulo} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition">
<div className="w-2 h-8 rounded-full mb-4" style={{ backgroundColor: "#104766" }} />
<h3 className="font-bold text-base mb-2" style={{ color: "#104766" }}>{d.titulo}</h3>
<p className="text-gray-500 text-sm leading-relaxed">{d.desc}</p>
</div>
))}
</div>
</div>
</div>

<div className="py-16 px-4">
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
