"use client"
import { useState } from "react"

export default function ContactoForm() {
const [nombre, setNombre] = useState("")
const [email, setEmail] = useState("")
const [mensaje, setMensaje] = useState("")
const [estado, setEstado] = useState<"idle" | "enviando" | "ok" | "error">("idle")

async function enviar(e: React.FormEvent) {
e.preventDefault()
setEstado("enviando")
const resp = await fetch("/api/contacto", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ nombre, email, mensaje }),
})
if (resp.ok) {
setEstado("ok")
setNombre(""); setEmail(""); setMensaje("")
} else {
setEstado("error")
}
}

if (estado === "ok") {
return (
<div className="py-16 text-center">
<p className="font-bold text-lg mb-2" style={{ color: "#104766" }}>Mensaje enviado</p>
<p className="text-gray-500 text-sm">Te responderemos lo antes posible.</p>
</div>
)
}

return (
<form onSubmit={enviar} className="space-y-4">
<div>
<label className="block text-sm font-semibold mb-1" style={{ color: "#104766" }}>Nombre</label>
<input type="text" required value={nombre} onChange={e => setNombre(e.target.value)}
placeholder="Tu nombre"
className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2"
style={{ focusRingColor: "#104766" } as React.CSSProperties} />
</div>

<div>
<label className="block text-sm font-semibold mb-1" style={{ color: "#104766" }}>Email</label>
<input type="email" required value={email} onChange={e => setEmail(e.target.value)}
placeholder="tu@email.com"
className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2" />
</div>

<div>
<label className="block text-sm font-semibold mb-1" style={{ color: "#104766" }}>Mensaje</label>
<textarea required rows={5} value={mensaje} onChange={e => setMensaje(e.target.value)}
placeholder="¿En qué podemos ayudarte?"
className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 resize-none" />
</div>

{estado === "error" && (
<p className="text-red-500 text-sm">Algo ha fallado. Inténtalo de nuevo.</p>
)}

<button type="submit" disabled={estado === "enviando"}
className="w-full text-white font-semibold py-3 rounded-full hover:opacity-90 transition disabled:opacity-60"
style={{ backgroundColor: "#ea4f4e" }}>
{estado === "enviando" ? "Enviando..." : "Enviar mensaje"}
</button>
</form>
)
}
