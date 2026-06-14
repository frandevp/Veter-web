import { notFound } from "next/navigation"

type WPPost = {
slug: string
title: { rendered: string }
content: { rendered: string }
date: string
}

export default async function Post({ params }: PageProps<"/blog/[slug]">) {
const { slug } = await params

// la api devuelve un array aunque sea un solo post
const resp = await fetch(
`https://veter.es/wp-json/wp/v2/posts?slug=${slug}&_fields=slug,title,content,date`,
{ next: { revalidate: 3600 } }
)
const data: WPPost[] = await resp.json()

if (!data.length) notFound()

const post = data[0]
const fecha = new Date(post.date).toLocaleDateString("es-ES", {
day: "numeric", month: "long", year: "numeric",
})

return (
<div className="max-w-3xl mx-auto px-4 py-16">
<a href="/blog" className="text-sm text-[#104766] hover:underline mb-8 inline-block">
← Volver al blog
</a>

<h1 className="text-3xl font-bold text-gray-900 mt-4 mb-2"
dangerouslySetInnerHTML={{ __html: post.title.rendered }} />

<p className="text-sm text-gray-400 mb-10">{fecha}</p>

<div className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
</div>
)
}
