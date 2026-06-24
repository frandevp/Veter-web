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

const equipo = [
{
nombre: "Dra. Celeste Trevisi",
rol: "Directora Veterinaria",
especialidad: "Medicina Interna · Cirugía General",
desc: "Celeste dirige el centro con una visión clara: que cada visita sea una experiencia positiva para la mascota y para su familia. Su formación en medicina interna y cirugía general le permite abordar casos complejos con precisión y cercanía.",
foto: "/equipo/directora.jpg",
},
{
nombre: "Francisca Maria Hevilla",
rol: "Administración",
especialidad: "Gestión y atención al cliente",
desc: "Francisca es la primera persona que te recibe cuando llegas a Veter. Se encarga de la gestión de citas, la coordinación del centro y de que cada visita fluya sin problemas. Su trato amable hace que la experiencia empiece bien desde el primer momento.",
foto: "/equipo/administracion.jpg",
},
{
nombre: "Francesca Lombardo",
rol: "Redes Sociales",
especialidad: "Comunicación y comunidad digital",
desc: "Francesca es quien da voz a Veter en redes sociales. Se encarga de compartir consejos, noticias y el día a día de la clínica para mantener informada y conectada a la comunidad de dueños de mascotas.",
foto: "/equipo/marketing.jpg",
},
]

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
desc: "El equipo se forma de manera constante en las últimas técnicas y tratamientos para ofrecerte siempre lo mejor.",
},
{
icono: "⚡",
titulo: "Disponibilidad real",
desc: "Citas para el mismo día o el día siguiente. Abiertos hasta las 20:00 h de lunes a viernes para adaptarnos a tu agenda.",
},
]

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

<div className="bg-gray-50 py-16 px-4">
<div className="max-w-5xl mx-auto">
<p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#ea4f4e" }}>El equipo</p>
<h2 className="text-3xl font-bold mb-10" style={{ color: "#104766" }}>Las personas detrás de Veter</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{equipo.map(m => (
<div key={m.nombre} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition flex flex-col">
<div className="relative w-full h-72 overflow-hidden">
<Image
src={m.foto}
alt={m.nombre}
fill
className="object-cover object-top"
/>
</div>
<div className="p-6 flex flex-col flex-1">
<h3 className="font-bold text-lg mb-1" style={{ color: "#104766" }}>{m.nombre}</h3>
<p className="text-sm font-semibold mb-1" style={{ color: "#ea4f4e" }}>{m.rol}</p>
<p className="text-xs text-gray-400 mb-4">{m.especialidad}</p>
<p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
</div>
</div>
))}
</div>
</div>
</div>

<div className="py-16 px-4">
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
