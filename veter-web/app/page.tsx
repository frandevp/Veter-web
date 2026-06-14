const servicios = [
{ titulo: "Atención increíble", desc: "Nuestro equipo está disponible para atender a tu mascota con la máxima dedicación.", icono: "🐾" },
{ titulo: "Servicio integral", desc: "Desde consultas generales hasta cirugía especializada, todo en un mismo lugar.", icono: "🏥" },
{ titulo: "Súper conveniente", desc: "Ubicados en el centro de Rincón de la Victoria, fácil acceso y aparcamiento.", icono: "📍" },
]

const stats = [
{ num: "1.200+", label: "Intervenciones" },
{ num: "3.500+", label: "Clientes" },
{ num: "80+", label: "Adopciones" },
{ num: "5.000+", label: "Tratamientos" },
]

export default function Home() {
return (
<div>
{/* hero */}
<section className="relative bg-[#104766] text-white overflow-hidden">
<div className="max-w-6xl mx-auto px-4 py-24 flex flex-col md:flex-row items-center gap-10">
<div className="flex-1 text-center md:text-left">
<img
src="https://veter.es/wp-content/uploads/2024/03/cropped-Logo-Veter-Group-e1778144720121.png"
alt="Veter Group"
className="h-16 mb-6 mx-auto md:mx-0"
style={{ filter: "brightness(0) invert(1)" }}
/>
<h1 className="text-white text-3xl font-bold mb-3">
La Salud de tu Mascota en las mejores manos
</h1>
<p className="text-blue-200 mb-8">
Clínica veterinaria en Rincón de la Victoria, Málaga. Atención profesional y cercana para tu compañero.
</p>
<div className="flex flex-wrap gap-4 justify-center md:justify-start">
<a href="https://wa.me/message/QSHQLWTJJJYDI1"
target="_blank" rel="noopener noreferrer"
className="text-white font-semibold px-7 py-3 rounded-full hover:opacity-90 transition"
style={{ backgroundColor: "#ea4f4e" }}>
Hacer una Cita
</a>
<a href="/servicios"
className="bg-white font-semibold px-7 py-3 rounded-full hover:bg-blue-50 transition"
style={{ color: "#104766" }}>
Planes de Salud
</a>
</div>
</div>
</div>
</section>

{/* servicios */}
<section className="max-w-6xl mx-auto px-4 py-20">
<h2 className="text-2xl font-bold text-center mb-12" style={{ color: "#104766" }}>
¿Por qué elegirnos?
</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{servicios.map(s => (
<div key={s.titulo} className="text-center p-6 rounded-xl bg-white shadow-sm border border-gray-100">
<div className="text-4xl mb-4">{s.icono}</div>
<h3 className="font-bold mb-2 text-lg" style={{ color: "#104766" }}>{s.titulo}</h3>
<p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
</div>
))}
</div>
</section>

{/* stats */}
<section style={{ backgroundColor: "#104766" }} className="py-16 px-4">
<div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
{stats.map(s => (
<div key={s.label}>
<p className="text-4xl font-bold mb-1">{s.num}</p>
<p className="text-blue-200 text-sm">{s.label}</p>
</div>
))}
</div>
</section>

{/* cta final */}
<section className="py-20 px-4 text-center">
<h2 className="text-2xl font-bold mb-3" style={{ color: "#104766" }}>
¿Listo para un gran cuidado veterinario?
</h2>
<p className="text-gray-500 mb-8">¡Llámanos ahora o escríbenos!</p>
<div className="flex gap-4 justify-center flex-wrap">
<a href="tel:+34640995846"
className="font-semibold px-7 py-3 rounded-full border-2 hover:bg-gray-50 transition"
style={{ color: "#104766", borderColor: "#104766" }}>
+34 640 995 846
</a>
<a href="/contacto"
className="text-white font-semibold px-7 py-3 rounded-full hover:opacity-90 transition"
style={{ backgroundColor: "#ea4f4e" }}>
Escribir mensaje
</a>
</div>
</section>
</div>
)
}
