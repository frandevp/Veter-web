import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Artículo del blog de Veter Centro Veterinario"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

type WPPost = {
title: { rendered: string }
excerpt: { rendered: string }
_embedded?: {
"wp:featuredmedia"?: Array<{ source_url: string }>
}
}

const strip = (html: string) => html.replace(/<[^>]+>/g, "").trim()

export default async function Image({ params }: { params: { slug: string } }) {
let titulo = "Veter Centro Veterinario"
let resumen = "Clínica veterinaria en Rincón de la Victoria, Málaga"
let featuredImg: string | null = null

try {
const resp = await fetch(
`https://veter.es/wp-json/wp/v2/posts?slug=${params.slug}&_embed=1&_fields=title,excerpt,_embedded`,
{ next: { revalidate: 3600 } }
)
const data: WPPost[] = await resp.json()
if (data[0]) {
titulo = strip(data[0].title.rendered).slice(0, 80)
resumen = strip(data[0].excerpt.rendered).slice(0, 120)
featuredImg = data[0]._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null
}
} catch {
// fallback a valores por defecto
}

return new ImageResponse(
(
<div
style={{
width: 1200,
height: 630,
display: "flex",
position: "relative",
backgroundColor: "#104766",
fontFamily: "sans-serif",
}}
>
{featuredImg && (
<img
src={featuredImg}
style={{
position: "absolute",
inset: 0,
width: "100%",
height: "100%",
objectFit: "cover",
opacity: 0.25,
}}
/>
)}

<div
style={{
position: "absolute",
inset: 0,
background: "linear-gradient(to right, rgba(16,71,102,0.97) 55%, rgba(16,71,102,0.5))",
}}
/>

<div
style={{
position: "relative",
display: "flex",
flexDirection: "column",
justifyContent: "center",
padding: "60px 80px",
maxWidth: 720,
}}
>
<div style={{ display: "flex", alignItems: "center", marginBottom: 32, gap: 12 }}>
<div style={{ width: 40, height: 4, backgroundColor: "#ea4f4e", borderRadius: 2 }} />
<span style={{ color: "#ea4f4e", fontSize: 16, fontWeight: 700, letterSpacing: 2 }}>
VETER · BLOG
</span>
</div>

<div style={{ color: "white", fontSize: 42, fontWeight: 800, lineHeight: 1.2, marginBottom: 20 }}>
{titulo}
</div>

<div style={{ color: "rgba(255,255,255,0.75)", fontSize: 20, lineHeight: 1.5 }}>
{resumen}
</div>

<div style={{ marginTop: 40, color: "rgba(255,255,255,0.5)", fontSize: 16 }}>
veter.es · Rincón de la Victoria, Málaga
</div>
</div>
</div>
),
{ width: 1200, height: 630 }
)
}
