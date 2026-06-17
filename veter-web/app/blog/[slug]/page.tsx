import { notFound } from "next/navigation"
import Image from "next/image"
import type { Metadata } from "next"

type WPPost = {
slug: string
title: { rendered: string }
content: { rendered: string }
excerpt: { rendered: string }
date: string
modified: string
_embedded?: {
"wp:featuredmedia"?: Array<{ source_url: string; alt_text: string }>
}
}

type Params = { slug: string }

const strip = (html: string) => html.replace(/<[^>]+>/g, "").trim()

type FetchResult = { post: WPPost | null; wpDown: boolean }

const WP = process.env.WP_API ?? "https://veter.es"

async function getPost(slug: string): Promise<FetchResult> {
try {
const resp = await fetch(
`${WP}/wp-json/wp/v2/posts?slug=${slug}&_embed=1&_fields=slug,title,content,excerpt,date,modified,_embedded`,
{ next: { revalidate: 3600 } }
)
if (!resp.ok) return { post: null, wpDown: true }
const data: WPPost[] = await resp.json()
return { post: data[0] ?? null, wpDown: false }
} catch {
return { post: null, wpDown: true }
}
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
const { slug } = await params
const { post } = await getPost(slug)
if (!post) return {}
const img = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url
const titulo = strip(post.title.rendered)
const desc = strip(post.excerpt.rendered).slice(0, 160)
return {
title: titulo,
description: desc,
openGraph: {
type: "article",
title: titulo,
description: desc,
publishedTime: post.date,
modifiedTime: post.modified,
...(img && { images: [{ url: img, width: 1200, height: 630 }] }),
},
}
}

export default async function Post({ params }: { params: Promise<Params> }) {
const { slug } = await params
const { post, wpDown } = await getPost(slug)

// wp caido: aviso amigable en vez de 404
if (!post && wpDown) {
return (
<div className="max-w-3xl mx-auto px-4 py-24 text-center">
<p className="text-2xl font-bold mb-3" style={{ color: "#104766" }}>Artículo no disponible ahora mismo</p>
<p className="text-gray-500 mb-8">Tenemos problemas para conectar con el servidor. Inténtalo de nuevo en unos minutos.</p>
<a href="/blog" className="px-6 py-2 rounded-full text-white font-semibold text-sm" style={{ backgroundColor: "#104766" }}>
← Volver al blog
</a>
</div>
)
}

if (!post) notFound()

const img = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url
const fecha = new Date(post.date).toLocaleDateString("es-ES", {
day: "numeric", month: "long", year: "numeric",
})
const titulo = strip(post.title.rendered)

const jsonLd = {
"@context": "https://schema.org",
"@type": "Article",
headline: titulo,
datePublished: post.date,
dateModified: post.modified,
author: { "@type": "Organization", name: "Veter Centro Veterinario" },
publisher: {
"@type": "Organization",
name: "Veter Centro Veterinario",
logo: { "@type": "ImageObject", url: "https://veter.es/images/cropped-Logo-Veter-Group-e1778144720121.png" },
},
...(img && { image: img }),
}

return (
<div className="max-w-3xl mx-auto px-4 py-16">
<script
type="application/ld+json"
dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>

<a href="/blog" className="text-sm hover:underline mb-6 inline-block" style={{ color: "#104766" }}>
← Volver al blog
</a>

<h1 className="text-3xl font-bold mt-4 mb-2"
style={{ color: "#104766" }}
dangerouslySetInnerHTML={{ __html: post.title.rendered }} />

<p className="text-sm text-gray-400 mb-8">{fecha}</p>

{img && (
<div className="relative w-full h-72 rounded-xl overflow-hidden mb-10">
<Image src={img} alt={titulo} fill className="object-cover"
sizes="(max-width: 768px) 100vw, 768px" priority />
</div>
)}

<div className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
</div>
)
}
