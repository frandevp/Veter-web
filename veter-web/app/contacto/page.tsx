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
<p className="font-bold text-lg mb-2" style={{ color: "#104766" }}>Mensaje enviado</p>
<p className="text-gray-500 text-sm">Te responderemos lo antes posible.</p>
</div>
)
}

return (
<div>
<section style={{ backgroundColor: "#104766" }} className="text-white py-20 px-4 text-center">
<h1 className="text-white text-4xl font-bold mb-4">Contacto</h1>
<p className="text-blue-200 max-w-xl mx-auto">Escríbenos o llámanos. Estamos aquí para ayudarte.</p>
</section>

<section className="max-w-5xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-14">

{/* datos de contacto */}
<div>
<h2 className="font-bold text-xl mb-6" style={{ color: "#104766" }}>Encuéntranos</h2>
<div className="space-y-4 text-sm text-gray-600 leading-relaxed">
<p>
<strong style={{ color: "#104766" }}>Dirección</strong><br />
Plaza del señorío, local 3<br />
Rincón de la Victoria, 29730
</p>
<p>
<strong style={{ color: "#104766" }}>Teléfonos</strong><br />
<a href="tel:+34640995846" className="hover:text-[#ea4f4e] transition">+34 640 995 846</a><br />
<a href="tel:+34951257388" className="hover:text-[#ea4f4e] transition">+34 951 25 73 88</a>
</p>
<p>
<strong style={{ color: "#104766" }}>Email</strong><br />
<a href="mailto:hola@veter.es" className="hover:text-[#ea4f4e] transition">hola@veter.es</a>
</p>
<p>
<strong style={{ color: "#104766" }}>WhatsApp</strong><br />
<a href="https://wa.me/message/QSHQLWTJJJYDI1" target="_blank" rel="noopener noreferrer"
className="hover:text-[#ea4f4e] transition">Escríbenos por WhatsApp</a>
</p>
</div>
</div>

{/* formulario */}
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

</section>
</div>
)
}
