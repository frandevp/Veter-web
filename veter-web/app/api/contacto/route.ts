import { getDb } from "@/lib/db"
import { mensajes } from "@/lib/schema"
import { Resend } from "resend"

export async function POST(req: Request) {
const { nombre, email, mensaje } = await req.json()

// comprobacion basica
if (!nombre || !email || !mensaje) {
return Response.json({ error: "faltan campos" }, { status: 400 })
}

const db = getDb()
await db.insert(mensajes).values({
nombre,
email,
mensaje,
fecha: new Date().toISOString(),
})

// mando el email con resend
const resend = new Resend(process.env.RESEND_API_KEY)
await resend.emails.send({
from: "Veter.es <noreply@veter.es>",
to: "clinicavetergroup@gmail.com",
subject: `Nuevo mensaje de ${nombre}`,
html: `<p><b>Nombre:</b> ${nombre}</p><p><b>Email:</b> ${email}</p><p><b>Mensaje:</b> ${mensaje}</p>`,
})

return Response.json({ ok: true })
}
