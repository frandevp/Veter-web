import HeroSlider from "./components/HeroSlider"
import ReviewsCarousel from "./components/ReviewsCarousel"

export const dynamic = "force-dynamic"

type Post = {
id: number
slug: string
title: { rendered: string }
excerpt: { rendered: string }
date: string
_embedded?: {
"wp:featuredmedia"?: Array<{ source_url: string }>
}
}

const MAP = "/images/bg-map-contact.png"

// imagenes de las 3 columnas de diferencias
const diferencias = [
{
img: "/images/atencion-increible.jpg",
titulo: "Atención increíble",
desc: "Un servicio médico excepcional en un espacio cercano y acogedor, que incluye consejos y asesoría dedicado a padres de mascotas.",
},
{
img: "/images/servicio-integral.png",
titulo: "Servicio integral",
desc: "Se abordan más del 95 % de sus necesidades de atención, con servicios veterinarios de medicina preventiva y curativa bajo un mismo techo.",
},
{
img: "/images/super-conveniente.jpeg",
titulo: "Súper conveniente",
desc: "Planes de Salud. Citas para el mismo día o para día siguiente. Abierto hasta las 20:00 h.",
},
]

// los servicios que aparecen en la rejilla
const servicios = [
{ icono: "💉", nombre: "Vacunaciones" },
{ icono: "🔬", nombre: "Análisis Clínicos" },
{ icono: "🏥", nombre: "Cirugía" },
{ icono: "🦷", nombre: "Odontología" },
{ icono: "🐾", nombre: "Consulta General" },
{ icono: "🩺", nombre: "Ecografía" },
{ icono: "💊", nombre: "Farmacia" },
{ icono: "✂️", nombre: "Peluquería" },
]

export default async function Home() {
// pido los 3 ultimos posts para el bloque del blog
let posts: Post[] = []
try {
const resp = await fetch(
"https://veter.es/wp-json/wp/v2/posts?per_page=3&_embed",
{ next: { revalidate: 3600 } }
)
posts = await resp.json()
} catch {
// si wp esta caido no rompe la pagina
}

return (
<div>

<HeroSlider />

{/* seccion sobre nosotros */}
<section className="max-w-6xl mx-auto px-4 py-24 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
<div>
<p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#ea4f4e" }}>Sobre Veter</p>
<h2 className="text-3xl font-bold mb-5" style={{ color: "#104766" }}>Veter Centro Veterinario</h2>
<p className="text-gray-600 leading-relaxed mb-6">
Somos una clínica veterinaria ubicada en Rincón de la Victoria, Málaga.
Nuestro objetivo es ofrecer la mejor atención médica a tus mascotas, con un trato cercano y profesional que tanto tú como tu animal merecéis.
</p>
<ul className="space-y-3 text-gray-600 text-sm">
{[
"Equipo veterinario con más de 10 años de experiencia",
"Instalaciones modernas y equipadas",
"Servicio de urgencias y atención continuada",
"Seguimiento personalizado de cada paciente",
].map(p => (
<li key={p} className="flex items-start gap-2">
<span style={{ color: "#ea4f4e" }} className="mt-0.5">✓</span>
<span>{p}</span>
</li>
))}
</ul>
</div>
<img src="/images/sobre-veter.png"
alt="Veter Centro Veterinario"
className="w-full object-cover"
style={{ borderRadius: "42% 58% 43% 57% / 52% 36% 64% 48%" }} />
</section>

{/* 3 columnas con imagenes de wp */}
<section className="bg-gray-50 py-24 px-4">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl font-bold text-center mb-2" style={{ color: "#104766" }}>¿Qué nos hace diferentes?</h2>
<p className="text-center mb-14 text-gray-500">Cercanía, empatía y excelencia</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-14">
{diferencias.map(d => (
<div key={d.titulo} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
<img src={d.img} alt={d.titulo} className="w-full h-52 object-cover" />
<div className="p-6">
<h3 className="font-bold text-lg mb-2" style={{ color: "#ea4f4e" }}>{d.titulo}</h3>
<p className="text-gray-500 text-sm leading-relaxed">{d.desc}</p>
</div>
</div>
))}
</div>
</div>
</section>

{/* rejilla servicios */}
<section className="py-24 px-4">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div>
<p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#ea4f4e" }}>Lo que ofrecemos</p>
<h2 className="text-3xl font-bold mb-10" style={{ color: "#104766" }}>Nuestros Servicios</h2>
<div className="grid grid-cols-2 gap-4">
{servicios.map(s => (
<div key={s.nombre}
className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 bg-white hover:border-[#ea4f4e] transition">
<span className="text-2xl">{s.icono}</span>
<span className="font-medium text-sm" style={{ color: "#104766" }}>{s.nombre}</span>
</div>
))}
</div>
<a href="/servicios"
className="inline-block mt-8 text-white font-semibold px-7 py-3 rounded-full hover:opacity-90 transition"
style={{ backgroundColor: "#104766" }}>
Ver todos nuestros servicios
</a>
</div>
<img src="/images/service-04.jpg"
alt="Servicios veterinarios" className="w-full h-96 object-cover rounded-2xl" />
</div>
</section>

<ReviewsCarousel />

{/* contadores */}
<section style={{ backgroundColor: "#104766" }} className="py-16 px-4 text-white">
<div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
{[
{ num: "1.200+", label: "Intervenciones" },
{ num: "3.500+", label: "Clientes" },
{ num: "80+", label: "Adopciones" },
{ num: "5.000+", label: "Tratamientos" },
].map(s => (
<div key={s.label}>
<p className="text-4xl font-bold mb-1">{s.num}</p>
<p className="text-blue-200 text-sm">{s.label}</p>
</div>
))}
</div>
</section>

{/* imagen mapa */}
<section className="relative h-72 overflow-hidden">
<img src={MAP} alt="Ubicación Veter" className="w-full h-full object-cover" />
<div className="absolute inset-0 flex items-center justify-center"
style={{ backgroundColor: "rgba(16,71,102,0.6)" }}>
<div className="text-center text-white">
<h3 className="text-2xl font-bold mb-2">Encuéntranos</h3>
<p className="text-blue-200 text-sm">Plaza del señorío, local 3 · Rincón de la Victoria, Málaga</p>
</div>
</div>
</section>

{/* datos de contacto rapido */}
<section className="py-20 px-4 bg-gray-50">
<div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
<div>
<p className="text-3xl mb-3">📞</p>
<h4 className="font-bold mb-2" style={{ color: "#104766" }}>Teléfonos</h4>
<p className="text-gray-600 text-sm leading-relaxed">+34 640 995 846<br />+34 951 25 73 88</p>
</div>
<div>
<p className="text-3xl mb-3">📍</p>
<h4 className="font-bold mb-2" style={{ color: "#104766" }}>Dirección</h4>
<p className="text-gray-600 text-sm leading-relaxed">Plaza del señorío, local 3<br />Rincón de la Victoria, 29730</p>
</div>
<div>
<p className="text-3xl mb-3">✉️</p>
<h4 className="font-bold mb-2" style={{ color: "#104766" }}>Email</h4>
<p className="text-gray-600 text-sm">hola@veter.es</p>
</div>
</div>
</section>

{posts.length > 0 && (
<section className="py-20 px-4">
<div className="max-w-6xl mx-auto">
<h2 className="text-2xl font-bold mb-10" style={{ color: "#104766" }}>Últimas entradas</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{posts.map(post => {
let img = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url
const fecha = new Date(post.date).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })
return (
<a href={`/blog/${post.slug}`} key={post.id}
className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition group block">
{img && (
<img src={img} alt="" className="w-full h-44 object-cover group-hover:scale-105 transition duration-300" />
)}
<div className="p-5">
<p className="text-xs text-gray-400 mb-2">{fecha}</p>
<h3 className="font-bold text-base mb-2 group-hover:text-[#ea4f4e] transition"
style={{ color: "#104766" }}
dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
<div className="text-gray-500 text-sm line-clamp-2"
dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
</div>
</a>
)
})}
</div>
<div className="text-center mt-10">
<a href="/blog"
className="font-semibold px-7 py-3 rounded-full border-2 hover:bg-gray-50 transition inline-block"
style={{ color: "#104766", borderColor: "#104766" }}>
Ver todos los artículos
</a>
</div>
</div>
</section>
)}

{/* newsletter */}
<section style={{ backgroundColor: "#ea4f4e" }} className="py-16 px-4 text-white text-center">
<h3 className="text-2xl font-bold mb-2">Mantente informado</h3>
<p className="text-red-100 mb-8 text-sm">Consejos, noticias y novedades de Veter directo a tu email.</p>
<form className="flex flex-wrap gap-3 justify-center max-w-md mx-auto">
<input type="email" placeholder="Tu correo electrónico"
className="flex-1 px-5 py-3 rounded-full text-gray-800 text-sm focus:outline-none min-w-0" />
<button type="submit"
className="text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition"
style={{ backgroundColor: "#104766" }}>
Suscribirme
</button>
</form>
</section>

</div>
)
}
