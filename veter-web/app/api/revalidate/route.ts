import { revalidatePath } from "next/cache"
import { NextRequest } from "next/server"

export async function POST(req: NextRequest) {
let body: { secret?: string; slug?: string } = {}
try {
body = await req.json()
} catch {
return Response.json({ error: "invalid json" }, { status: 400 })
}

if (!process.env.REVALIDATE_SECRET || body.secret !== process.env.REVALIDATE_SECRET) {
return Response.json({ error: "unauthorized" }, { status: 401 })
}

// siempre revalidamos el listado completo del blog
revalidatePath("/blog")

// si viene slug, revalidamos esa entrada concreta
if (body.slug) {
revalidatePath(`/blog/${body.slug}`)
}

return Response.json({ revalidated: true, slug: body.slug ?? null })
}
