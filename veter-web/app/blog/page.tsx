// fuerzo dynamic porque si no hace fetch en build y peta
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

export default async function Blog() {
let posts: Post[] = []
try {
const resp = await fetch(
"https://veter.es/wp-json/wp/v2/posts?per_page=12&_embed",
{ next: { revalidate: 3600 } }
)
posts = await resp.json()
} catch {
// si wp esta caido mostramos lista vacia
}

return (
<div>
<section style={{ backgroundColor: "#104766" }} className="text-white py-20 px-4 text-center">
<h1 className="text-white text-4xl font-bold mb-3">Blog</h1>
<p className="text-blue-200">Consejos, noticias y curiosidades sobre el mundo animal.</p>
</section>

<div className="max-w-6xl mx-auto px-4 py-16">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{posts.map(post => {
let img = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url
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
</div>
</div>
)
}
