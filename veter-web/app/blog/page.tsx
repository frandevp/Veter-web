type Post = {
id: number
slug: string
title: { rendered: string }
excerpt: { rendered: string }
date: string
}

export default async function Blog() {
// pido los ultimos 10 posts a la api de wordpress
const resp = await fetch(
"https://veter.es/wp-json/wp/v2/posts?per_page=10&_fields=id,slug,title,excerpt,date",
{ next: { revalidate: 3600 } }
)
const posts: Post[] = await resp.json()

return (
<div>
<section style={{ backgroundColor: "#104766" }} className="text-white py-20 px-4 text-center">
<h1 className="text-white text-4xl font-bold mb-3">Blog</h1>
<p className="text-blue-200">Consejos, noticias y curiosidades sobre el mundo animal.</p>
</section>

<div className="max-w-6xl mx-auto px-4 py-16">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{posts.map(post => {
const fecha = new Date(post.date).toLocaleDateString("es-ES", {
day: "numeric", month: "long", year: "numeric"
})
return (
<a href={`/blog/${post.slug}`} key={post.id}
className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition group block">
<p className="text-xs text-gray-400 mb-2">{fecha}</p>
<h2 className="font-bold text-lg mb-2 group-hover:text-[#ea4f4e] transition"
style={{ color: "#104766" }}
dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
<div className="text-gray-500 text-sm line-clamp-3"
dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
</a>
)
})}
</div>
</div>
</div>
)
}
