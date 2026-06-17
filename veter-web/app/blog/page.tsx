import type { Metadata } from "next"

export const metadata: Metadata = {
title: "Blog Veterinario | Consejos y Salud Animal | Veter",
description: "Artículos sobre salud animal, consejos veterinarios y cuidado de mascotas. Escritos por el equipo de Veter Centro Veterinario en Rincón de la Victoria, Málaga.",
openGraph: {
title: "Blog Veterinario | Veter",
description: "Consejos de salud animal y cuidado de mascotas del equipo de Veter.",
},
}

export const revalidate = 3600

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

const PER_PAGE = 12

export default async function Blog({
searchParams,
}: {
searchParams: Promise<{ page?: string }>
}) {
const { page: pageParam } = await searchParams
const page = Math.max(1, parseInt(pageParam ?? "1", 10) || 1)

let posts: Post[] = []
let totalPages = 1
let wpDown = false

try {
const resp = await fetch(
`https://veter.es/wp-json/wp/v2/posts?per_page=${PER_PAGE}&page=${page}&_embed`,
{ next: { revalidate: 3600 } }
)
if (!resp.ok) throw new Error(`wp ${resp.status}`)
totalPages = parseInt(resp.headers.get("X-WP-TotalPages") ?? "1", 10)
posts = await resp.json()
} catch {
wpDown = true
}

return (
<div>
<section style={{ backgroundColor: "#104766" }} className="text-white py-20 px-4 text-center">
<h1 className="text-white text-4xl font-bold mb-3">Blog</h1>
<p className="text-blue-200">Consejos, noticias y curiosidades sobre el mundo animal.</p>
</section>

<div className="max-w-6xl mx-auto px-4 py-16">

{wpDown && (
<div className="text-center py-16 text-gray-500">
<p className="text-lg font-semibold mb-2" style={{ color: "#104766" }}>Blog temporalmente no disponible</p>
<p className="text-sm">Estamos teniendo problemas para cargar los artículos. Inténtalo de nuevo en unos minutos.</p>
</div>
)}

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{posts.map(post => {
const img = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url
const fecha = new Date(post.date).toLocaleDateString("es-ES", {
day: "numeric", month: "long", year: "numeric"
})
return (
<a href={`/blog/${post.slug}`} key={post.id}
className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition group block">
{img ? (
<img src={img} alt={post.title.rendered}
className="w-full h-48 object-cover group-hover:scale-105 transition duration-300" />
) : (
<div className="w-full h-48 bg-blue-50 flex items-center justify-center text-4xl">🐾</div>
)}
<div className="p-5">
<p className="text-xs text-gray-400 mb-2">{fecha}</p>
<h2 className="font-bold text-base mb-2 group-hover:text-[#ea4f4e] transition"
style={{ color: "#104766" }}
dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
<div className="text-gray-500 text-sm line-clamp-2"
dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
</div>
</a>
)
})}
</div>

{/* paginacion */}
{totalPages > 1 && (
<div className="flex justify-center items-center gap-3 mt-14">
{page > 1 && (
<a href={`/blog?page=${page - 1}`}
className="px-5 py-2 rounded-full text-sm font-semibold border-2 transition hover:bg-[#104766] hover:text-white"
style={{ borderColor: "#104766", color: "#104766" }}>
← Anterior
</a>
)}
<span className="text-sm text-gray-500">
Página {page} de {totalPages}
</span>
{page < totalPages && (
<a href={`/blog?page=${page + 1}`}
className="px-5 py-2 rounded-full text-sm font-semibold text-white transition hover:opacity-90"
style={{ backgroundColor: "#104766" }}>
Siguiente →
</a>
)}
</div>
)}
</div>
</div>
)
}
