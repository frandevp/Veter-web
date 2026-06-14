"use client"

import { useState } from "react"

export default function Contacto() {
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
// limpio el form
setNombre("")
setEmail("")
setMensaje("")
} else {
setEstado("error")
}
}

if (estado === "ok") {
return (
<div className="max-w-2xl mx-auto px-4 py-32 text-center">
<p className="text-green-700 font-semibold text-lg mb-2">Mensaje enviado</p>
<p className="text-gray-500 text-sm">Te responderemos lo antes posible.</p>
</div>
)
}

return (
<div>
<section className="bg-[#104766] text-white py-20 px-4 text-center">
<h1 className="text-4xl font-bold mb-4">Contacto</h1>
<p className="text-blue-200 max-w-xl mx-auto">Escríbenos y te respondemos en el menor tiempo posible.</p>
</section>

<section className="max-w-2xl mx-auto px-4 py-16">
<form onSubmit={enviar} className="space-y-5">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
<input type="text" required value={nombre} onChange={e => setNombre(e.target.value)}
placeholder="Tu nombre"
className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#104766]" />
</div>

<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
<input type="email" required value={email} onChange={e => setEmail(e.target.value)}
placeholder="tu@email.com"
className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#104766]" />
</div>

<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
<textarea required rows={5} value={mensaje} onChange={e => setMensaje(e.target.value)}
placeholder="¿En qué podemos ayudarte?"
className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#104766] resize-none" />
</div>

{estado === "error" && (
<p className="text-red-500 text-sm">Algo ha fallado. Inténtalo de nuevo.</p>
)}

<button type="submit" disabled={estado === "enviando"}
className="w-full bg-[#ea4f4e] text-white font-semibold py-3 rounded-full hover:bg-red-600 transition disabled:opacity-60">
{estado === "enviando" ? "Enviando..." : "Enviar mensaje"}
</button>
</form>
</section>
</div>
)
}
