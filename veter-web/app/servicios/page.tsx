// hardcodeado — en wp no hay cpt para servicios
const lista = [
{ titulo: "Consulta general", icono: "🩺", desc: "Revisiones y diagnósticos completos para perros, gatos y pequeños animales." },
{ titulo: "Medicina preventiva", icono: "💉", desc: "Calendario de vacunación adaptado, desparasitaciones y controles periódicos." },
{
titulo: "Cirugía general",
icono: "🏥",
desc: "Intervenciones quirúrgicas con equipamiento moderno y anestesia segura.",
},
{ titulo: "Urgencias", icono: "🚨", desc: "Atendemos emergencias lo antes posible. Si es urgente, llámanos directamente." },
{ titulo: "Peluquería y estética", icono: "✂️", desc: "Baño, corte, cepillado y limpieza de oídos. Tu mascota siempre impecable." },
{ titulo: "Análisis y diagnóstico", icono: "🔬", desc: "Laboratorio propio para análisis de sangre, orina y heces. Resultados rápidos." },
{ titulo: "Dermatología", icono: "🧴", desc: "Tratamiento de alergias, problemas de piel e infecciones." },
{ titulo: "Odontología", icono: "🦷", desc: "Limpieza dental y extracciones bajo anestesia. La boca también importa." },
]

export default function Servicios() {
return (
<div>
<section style={{ backgroundColor: "#104766" }} className="text-white py-20 px-4 text-center">
<h1 className="text-white text-4xl font-bold mb-4">Consultas y Servicios</h1>
<p className="text-blue-200 max-w-xl mx-auto">
Todo lo que tu mascota necesita en un solo lugar, con el mejor equipo veterinario.
</p>
</section>

<section className="max-w-6xl mx-auto px-4 py-16">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{lista.map(srv => (
<div key={srv.titulo} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition">
<div className="text-3xl mb-3">{srv.icono}</div>
<h2 className="font-bold text-base mb-2" style={{ color: "#104766" }}>{srv.titulo}</h2>
<p className="text-gray-500 text-sm leading-relaxed">{srv.desc}</p>
</div>
))}
</div>
</section>

<section className="bg-gray-50 py-14 px-4 text-center">
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
