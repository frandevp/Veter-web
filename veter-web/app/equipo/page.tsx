import type { Metadata } from "next"

export const metadata: Metadata = {
title: "Nuestro Equipo Veterinario | Veter Rincón de la Victoria",
description: "Conoce al equipo de Veter Centro Veterinario en Rincón de la Victoria, Málaga. Más de 20 años de experiencia combinada cuidando perros, gatos y otras mascotas con cercanía y excelencia.",
openGraph: {
title: "Equipo Veterinario | Veter",
description: "Profesionales apasionados por la salud animal, con formación continua y más de 20 años de experiencia en Rincón de la Victoria, Málaga.",
},
}

const valores = [
{
icono: "🩺",
titulo: "Diagnóstico preciso",
desc: "Evaluamos cada caso con detalle, sin prisas. Combinamos exploración clínica con pruebas complementarias para llegar al diagnóstico correcto.",
},
{
icono: "❤️",
titulo: "Trato cercano",
desc: "Sabemos que tu mascota es parte de la familia. Explicamos cada paso, resolvemos tus dudas y te acompañamos durante todo el proceso.",
},
{
icono: "📚",
titulo: "Formación continua",
desc: "El equipo se forma de manera constante en las últimas técnicas y tratamientos veterinarios para ofrecerte siempre lo mejor.",
},
{
icono: "⚡",
titulo: "Disponibilidad real",
desc: "Citas para el mismo día o el día siguiente. Abiertos hasta las 20:00 h de lunes a viernes para adaptarnos a tu agenda.",
},
]

const razones = [
{
stat: "20+",
label: "Años de experiencia combinada",
},
{
stat: "5",
label: "Seguros veterinarios aceptados",
},
{
stat: "2",
label: "Teléfonos de contacto directo",
},
{
stat: "20:00h",
label: "Horario de cierre de lunes a viernes",
},
]

const seguros = ["Asisa", "Adeslas", "Assa", "Caser", "Divina"]

export default function Equipo() {
return (
<div>

<section style={{ backgroundColor: "#104766" }} className="text-white py-20 px-4 text-center">
<h1 className="text-white text-4xl font-bold mb-4">Nuestro Equipo</h1>
<p className="text-blue-200 max-w-2xl mx-auto text-lg">
Profesionales comprometidos con la salud animal. Cercanía, empatía y excelencia en cada consulta.
</p>
</section>

<section className="max-w-5xl mx-auto px-4 py-20">
<p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#ea4f4e" }}>Quiénes somos</p>
<h2 className="text-3xl font-bold mb-6" style={{ color: "#104766" }}>Un centro diseñado para ti y tu peludo</h2>
<p className="text-gray-600 leading-relaxed mb-4 max-w-3xl">
En Veter llevamos más de 20 años cuidando mascotas en Rincón de la Victoria. Somos un equipo de veterinarios con formación especializada y, sobre todo, con vocación real por los animales. Cada consulta, cada diagnóstico y cada cirugía la afrontamos con la misma dedicación: como si fuera nuestra propia mascota.
</p>
<p className="text-gray-600 leading-relaxed max-w-3xl">
Nuestra filosofía se resume en tres palabras: <strong style={{ color: "#104766" }}>cercanía, empatía y excelencia</strong>. No solo tratamos enfermedades — acompañamos a las familias, explicamos cada paso y nos aseguramos de que tanto tú como tu mascota os sintáis en buenas manos.
</p>
</section>

<div className="bg-gray-50 py-16 px-4">
<div className="max-w-5xl mx-auto">
<p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#ea4f4e" }}>Nuestra forma de trabajar</p>
<h2 className="text-3xl font-bold mb-10" style={{ color: "#104766" }}>Lo que nos define</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{valores.map(v => (
<div key={v.titulo} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition">
<div className="text-3xl mb-4">{v.icono}</div>
<h3 className="font-bold text-lg mb-2" style={{ color: "#104766" }}>{v.titulo}</h3>
<p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
</div>
))}
</div>
</div>
</div>

<section className="max-w-5xl mx-auto px-4 py-20">
<p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#ea4f4e" }}>Por qué elegirnos</p>
<h2 className="text-3xl font-bold mb-10" style={{ color: "#104766" }}>Veter en números</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
{razones.map(r => (
<div key={r.label} className="text-center">
<p className="text-4xl font-bold mb-2" style={{ color: "#ea4f4e" }}>{r.stat}</p>
<p className="text-sm text-gray-500 leading-tight">{r.label}</p>
</div>
))}
</div>

<div className="bg-gray-50 rounded-2xl p-8">
<p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#ea4f4e" }}>Seguros aceptados</p>
<h3 className="text-xl font-bold mb-6" style={{ color: "#104766" }}>Trabajamos con los principales seguros veterinarios</h3>
<div className="flex flex-wrap gap-3">
{seguros.map(s => (
<span key={s} className="px-4 py-2 rounded-full text-sm font-semibold border-2"
style={{ borderColor: "#104766", color: "#104766" }}>
{s}
</span>
))}
</div>
<p className="text-gray-500 text-sm mt-4">¿Tienes otro seguro? Consúltanos, trabajamos con más aseguradoras.</p>
</div>
</section>

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
