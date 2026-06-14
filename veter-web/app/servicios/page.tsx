const lista = [
{
titulo: "Consulta general",
desc: "Revisiones y diagnósticos completos para perros, gatos y pequeños animales. Evaluamos el estado de salud de tu mascota y resolvemos cualquier duda.",
icono: "🩺",
},
{
titulo: "Vacunaciones",
desc: "Calendario de vacunación adaptado a la edad y estilo de vida de tu mascota. Protección frente a las enfermedades más comunes.",
icono: "💉",
},
{
titulo: "Cirugía",
desc: "Intervenciones quirúrgicas con equipamiento moderno y anestesia segura. Cirugía de tejidos blandos, ortopedia y más.",
icono: "🏥",
},
{
titulo: "Urgencias",
desc: "Atendemos situaciones de emergencia lo antes posible. Si tu mascota necesita atención urgente, llámanos directamente.",
icono: "🚨",
},
{
titulo: "Peluquería y estética",
desc: "Baño, corte, cepillado y limpieza de oídos. Dejamos a tu mascota limpia y bien cuidada.",
icono: "✂️",
},
{
titulo: "Análisis y diagnóstico",
desc: "Laboratorio propio para análisis de sangre, orina y heces. Resultados rápidos para diagnósticos precisos.",
icono: "🔬",
},
]

export default function Servicios() {
return (
<div>
<section className="bg-[#104766] text-white py-20 px-4 text-center">
<h1 className="text-4xl font-bold mb-4">Nuestros servicios</h1>
<p className="text-blue-200 max-w-xl mx-auto">
Todo lo que tu mascota necesita en un solo lugar.
</p>
</section>

<section className="max-w-6xl mx-auto px-4 py-16">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{lista.map(srv => (
<div key={srv.titulo} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition">
<div className="text-3xl mb-4">{srv.icono}</div>
<h2 className="font-semibold text-gray-900 text-lg mb-2">{srv.titulo}</h2>
<p className="text-gray-500 text-sm leading-relaxed">{srv.desc}</p>
</div>
))}
</div>
</section>

<section className="bg-gray-50 py-14 px-4 text-center">
<h2 className="text-2xl font-bold text-gray-800 mb-3">¿Necesitas pedir cita?</h2>
<p className="text-gray-500 mb-6">Escríbenos y te respondemos lo antes posible.</p>
<a href="/contacto"
className="bg-[#ea4f4e] text-white font-semibold px-7 py-3 rounded-full hover:bg-red-600 transition">
Contactar
</a>
</section>
</div>
)
}
