export const dynamic = "force-dynamic"

type Post = {
id: number
slug: string
title: { rendered: string }
excerpt: { rendered: string }
date: string
_embedded?: {
"wp:featuredmedia"?: Array<{ source_url: string; alt_text: string }>
}
}

const LOGO = "https://veter.es/wp-content/uploads/2024/03/cropped-Logo-Veter-Group-e1778144720121.png"
const HERO_IMG = "https://veter.es/wp-content/uploads/2026/06/viajar-con-perro-o-gato-en-verano-destac-1.jpg"

const stats = [
{ num: "1.200+", label: "Intervenciones" },
{ num: "3.500+", label: "Clientes" },
{ num: "80+", label: "Adopciones" },
{ num: "5.000+", label: "Tratamientos" },
]

export default async function Home() {
let posts: Post[] = []
try {
const resp = await fetch(
"https://veter.es/wp-json/wp/v2/posts?per_page=3&_embed",
{ next: { revalidate: 3600 } }
)
posts = await resp.json()
} catch {
// si wp no responde mostramos sin posts
}

return (
<div>
<section
className="relative text-white overflow-hidden"
style={{ backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center" }}>
<div className="absolute inset-0" style={{ backgroundColor: "rgba(16, 71, 102, 0.82)" }} />
<div className="relative max-w-6xl mx-auto px-4 py-28 flex flex-col items-center text-center">
<img src={LOGO} alt="Veter Group" className="h-16 mb-8" style={{ filter: "brightness(0) invert(1)" }} />
<h1 className="text-white text-4xl md:text-5xl font-bold mb-4 max-w-2xl">
La Salud de tu Mascota en las mejores manos
</h1>
<p className="text-blue-200 text-lg mb-10 max-w-xl">
Clínica veterinaria en Rincón de la Victoria, Málaga. Atención profesional y cercana.
</p>
<div className="flex flex-wrap gap-4 justify-center">
<a href="https://wa.me/message/QSHQLWTJJJYDI1" target="_blank" rel="noopener noreferrer"
className="text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition"
style={{ backgroundColor: "#ea4f4e" }}>
Hacer una Cita
</a>
<a href="/servicios" className="bg-white font-semibold px-8 py-3 rounded-full hover:bg-blue-50 transition"
style={{ color: "#104766" }}>
Nuestros servicios
</a>
</div>
</div>
</section>

<section style={{ backgroundColor: "#104766" }} className="py-14 px-4">
<div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
{stats.map(s => (
<div key={s.label}>
<p className="text-4xl font-bold mb-1">{s.num}</p>
<p className="text-blue-200 text-sm">{s.label}</p>
</div>
))}
</div>
</section>

<section className="max-w-6xl mx-auto px-4 py-20">
<h2 className="text-2xl font-bold text-center mb-12" style={{ color: "#104766" }}>¿Por qué elegirnos?</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{[
{ icono: "🐾", titulo: "Atención increíble", desc: "Nuestro equipo está disponible para atender a tu mascota con la máxima dedicación." },
{ icono: "🏥", titulo: "Servicio integral", desc: "Desde consultas generales hasta cirugía especializada, todo en un mismo lugar." },
{ icono: "📍", titulo: "Súper conveniente", desc: "Ubicados en el centro de Rincón de la Victoria, fácil acceso y aparcamiento." },
].map(s => (
<div key={s.titulo} className="text-center p-6 rounded-xl bg-white shadow-sm border border-gray-100">
<div className="text-4xl mb-4">{s.icono}</div>
<h3 className="font-bold mb-2 text-lg" style={{ color: "#104766" }}>{s.titulo}</h3>
<p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
</div>
))}
</div>
</section>

<section className="bg-gray-50 py-20 px-4">
<div className="max-w-6xl mx-auto">
<h2 className="text-2xl font-bold mb-10" style={{ color: "#104766" }}>Últimas entradas del blog</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{posts.map(post => {
const img = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url
const fecha = new Date(post.date).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })
return (
<a href={`/blog/${post.slug}`} key={post.id}
className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition group block">
{img && (
<img src={img} alt={post.title.rendered}
className="w-full h-44 object-cover group-hover:scale-105 transition duration-300" />
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
<a href="/blog" className="font-semibold px-7 py-3 rounded-full border-2 hover:bg-gray-100 transition inline-block"
style={{ color: "#104766", borderColor: "#104766" }}>
Ver todos los artículos
</a>
</div>
</div>
</section>

<section className="py-20 px-4 text-center">
<h2 className="text-2xl font-bold mb-3" style={{ color: "#104766" }}>¿Listo para un gran cuidado veterinario?</h2>
<p className="text-gray-500 mb-8">¡Llámanos ahora o escríbenos!</p>
<div className="flex gap-4 justify-center flex-wrap">
<a href="tel:+34640995846" className="font-semibold px-7 py-3 rounded-full border-2 hover:bg-gray-50 transition"
style={{ color: "#104766", borderColor: "#104766" }}>
+34 640 995 846
</a>
<a href="/contacto" className="text-white font-semibold px-7 py-3 rounded-full hover:opacity-90 transition"
style={{ backgroundColor: "#ea4f4e" }}>
Escribir mensaje
</a>
</div>
</section>
</div>
)
}
