import { getDb } from "@/lib/db";
import { mensajes } from "@/lib/schema";
import { Resend } from "resend";

export async function POST(request: Request) {
const resend = new Resend(process.env.RESEND_API_KEY);
const db = getDb();

const body = await request.json();
const { nombre, email, mensaje } = body;

if (!nombre || !email || !mensaje) {
return Response.json({ error: "Faltan campos obligatorios" }, { status: 400 });
}

const fecha = new Date().toISOString();

await db.insert(mensajes).values({ nombre, email, mensaje, fecha });

await resend.emails.send({
from: "Veter.es <noreply@veter.es>",
to: "clinicavetergroup@gmail.com",
subject: `Nuevo mensaje de contacto — ${nombre}`,
html: `
<h2>Nuevo mensaje desde veter.es</h2>
<p><strong>Nombre:</strong> ${nombre}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Mensaje:</strong></p>
<p>${mensaje}</p>
`,
});

return Response.json({ ok: true });
}
