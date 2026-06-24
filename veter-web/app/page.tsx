import Image from "next/image"
import HeroSlider from "./components/HeroSlider"
import ReviewsCarousel from "./components/ReviewsCarousel"
import ContadoresAnimados from "./components/ContadoresAnimados"

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

const servicios = [
{ nombre: "Medicina Interna" },
{ nombre: "Diagnóstico por Imagen" },
{ nombre: "Pruebas Laboratorio" },
{ nombre: "Cirugía General" },
{ nombre: "Traumatología" },
{ nombre: "Odontología" },
{ nombre: "Hospitalización" },
{ nombre: "Identificación" },
{ nombre: "Oftalmología" },
{ nombre: "Oncología" },
{ nombre: "Documentos de Viaje" },
]

const testimonios = [
{
texto: "Cuando conocimos a Celeste fue amor a primera vista, hizo que los últimos años de la vida de Thelma fueran con la mayor calidad, y ahora con Vilma no hemos dudado en seguir con ella. Siempre esta formandose para poder dar el mejor servicio, el cariño nunca faltará en su consulta!!",
autor: "Rocío Sanz",
},
{
texto: "Apenas emigramos a España, tuvimos que examinar a nuestro gatito por un pequeño bulto en su lateral. Tuvimos la suerte de conocer a Celeste, que nos guio en todo momento, nos priorizó, y nos ayudó a entender qué pasaba y cómo movernos en una situación tan difícil en un lugar completamente nuevo para nosotros. Un año después, y habiendo pasado por 2 cirugías y muchos estudios, hoy sabemos que haberla encontrado le salvó la vida a nuestro gatito. Gran professional en la que se puede confiar! Recomendadísima!",
autor: "Florencia Carotti",
},
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
"Veterinarios certificados",
"Más de 20 años de experiencia",
"Medicina interna, diagnósticos y tratamientos",
"Lugar acogedor y cercano",
].map(p => (
<li key={p} className="flex items-start gap-2">
<span style={{ color: "#ea4f4e" }} className="mt-0.5">✓</span>
<span>{p}</span>
</li>
))}
</ul>
</div>
<div className="relative w-full aspect-square">
<Image src="/images/sobre-veter.png"
alt="Veter Centro Veterinario"
fill className="object-cover"
sizes="(max-width: 768px) 100vw, 50vw"
style={{ borderRadius: "42% 58% 43% 57% / 52% 36% 64% 48%" }} />
</div>
</section>

{/* 3 columnas con imagenes de wp */}
<section className="bg-gray-50 py-24 px-4">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl font-bold text-center mb-2" style={{ color: "#104766" }}>¿Qué nos hace diferentes?</h2>
<p className="text-center mb-14 text-gray-500">Cercanía, empatía y excelencia</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-14">
{diferencias.map(d => (
<div key={d.titulo} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
<div className="relative w-full h-52">
<Image src={d.img} alt={d.titulo} fill className="object-cover"
sizes="(max-width: 768px) 100vw, 33vw" />
</div>
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
<div className="relative w-full h-[480px]">
<Image src="/images/O0A0940-scaled.jpg"
alt="Servicios veterinarios" fill
className="object-cover object-top"
sizes="(max-width: 768px) 100vw, 50vw"
style={{ borderRadius: "42% 58% 55% 45% / 48% 40% 60% 52%" }} />
</div>
<div>
<p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#ea4f4e" }}>¿Qué hacemos?</p>
<h2 className="text-3xl font-bold mb-10" style={{ color: "#104766" }}>Nuestros Servicios</h2>
<div className="grid grid-cols-2 gap-4">
{servicios.map(s => (
<div key={s.nombre}
className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 bg-white hover:border-[#ea4f4e] transition">
<span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: "#ea4f4e" }} />
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
</div>
</section>

<ReviewsCarousel />

{/* testimonios reales */}
<section className="bg-gray-50 py-24 px-4 overflow-hidden">
<div className="max-w-6xl mx-auto">
<p className="text-sm font-semibold uppercase tracking-widest mb-3 text-center" style={{ color: "#ea4f4e" }}>Lo que dicen</p>
<h2 className="text-3xl font-bold text-center mb-16" style={{ color: "#104766" }}>¿Por qué los padres de mascotas aman a Veter?</h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

{/* imagen blob */}
<div className="flex justify-center">
<div className="relative w-[460px] h-[520px] shrink-0">
{/* mancha de color detras del blob para dar profundidad */}
<div className="absolute -bottom-4 -right-4 w-[440px] h-[500px] opacity-20 rounded-full"
style={{
backgroundColor: "#ea4f4e",
borderRadius: "72% 28% 38% 62% / 55% 67% 33% 45%",
}} />
<Image
src="/images/clientes.jpg"
alt="Clientes satisfechos de Veter Centro Veterinario"
width={460}
height={520}
className="object-cover w-full h-full"
style={{
borderRadius: "72% 28% 38% 62% / 55% 67% 33% 45%",
objectPosition: "center top",
}}
sizes="340px"
/>
</div>
</div>

{/* tarjetas de testimonios */}
<div className="flex flex-col gap-5">
{testimonios.map(t => (
<div key={t.autor} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 flex flex-col gap-4">
<div className="flex gap-1">
{[...Array(5)].map((_, i) => (
<svg key={i} className="w-4 h-4" fill="#ea4f4e" viewBox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
</svg>
))}
</div>
<p className="text-gray-600 text-sm leading-relaxed italic">"{t.texto}"</p>
<div className="flex items-center gap-3 pt-2 border-t border-gray-100">
<div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
style={{ backgroundColor: "#104766" }}>
{t.autor.charAt(0)}
</div>
<p className="font-semibold text-sm" style={{ color: "#104766" }}>{t.autor}</p>
</div>
</div>
))}
</div>

</div>
</div>
</section>

<ContadoresAnimados />


{/* donde estamos */}
<section className="py-24 px-4 bg-gray-50">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div>
<p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#ea4f4e" }}>Encuéntranos</p>
<h2 className="text-3xl font-bold mb-2" style={{ color: "#104766" }}>¿Dónde estamos?</h2>
<p className="text-lg font-medium mb-2" style={{ color: "#104766" }}>La mejor ubicación</p>
<p className="text-gray-500 mb-6">Justo cuando nos necesites</p>
<div className="space-y-3 text-sm text-gray-600">
<p><strong style={{ color: "#104766" }}>Dirección</strong><br />Plaza del señorío, local 3, frente a la Notaría<br />Rincón de la Victoria, 29730, Málaga</p>
<p><strong style={{ color: "#104766" }}>Teléfonos</strong><br />+34 640 995 846 · +34 951 25 73 88</p>
<p><strong style={{ color: "#104766" }}>Horario</strong><br />Lunes a Viernes: 09:00 – 20:00 h</p>
</div>
</div>
<div>
<iframe
src="https://maps.google.com/maps?q=36.7177,-4.2792&z=16&output=embed"
width="100%"
height="380"
className="rounded-xl border-0 shadow-sm"
loading="lazy"
referrerPolicy="no-referrer-when-downgrade"
title="Ubicación Veter Centro Veterinario"
/>
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
<div className="relative w-full h-44 overflow-hidden">
<Image src={img} alt="" fill className="object-cover group-hover:scale-105 transition duration-300"
sizes="(max-width: 768px) 100vw, 33vw" />
</div>
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


</div>
)
}
