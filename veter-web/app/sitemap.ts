import type { MetadataRoute } from "next"

const BASE = "https://veter-web.vercel.app"

type WPPost = { slug: string; modified: string }

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
const estaticas: MetadataRoute.Sitemap = [
{ url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
{ url: `${BASE}/servicios`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
{ url: `${BASE}/equipo`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
{ url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
{ url: `${BASE}/contacto`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
]

let posts: WPPost[] = []
try {
const resp = await fetch(
"https://veter.es/wp-json/wp/v2/posts?per_page=100&_fields=slug,modified",
{ next: { revalidate: 3600 } }
)
posts = await resp.json()
} catch {}

const blog: MetadataRoute.Sitemap = posts.map(p => ({
url: `${BASE}/blog/${p.slug}`,
lastModified: new Date(p.modified),
changeFrequency: "monthly" as const,
priority: 0.7,
}))

return [...estaticas, ...blog]
}
