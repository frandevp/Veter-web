"use client";

import { useState } from "react";

export default function Contacto() {
const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
const [estado, setEstado] = useState<"idle" | "enviando" | "ok" | "error">("idle");

async function handleSubmit(e: React.FormEvent) {
e.preventDefault();
setEstado("enviando");

const res = await fetch("/api/contacto", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(form),
});

if (res.ok) {
setEstado("ok");
setForm({ nombre: "", email: "", mensaje: "" });
} else {
setEstado("error");
}
}

return (
<div>
<section className="bg-[#104766] text-white py-20 px-4 text-center">
<h1 className="text-4xl font-bold mb-4">Contacto</h1>
<p className="text-blue-200 max-w-xl mx-auto">
Escríbenos y te respondemos en el menor tiempo posible.
</p>
</section>

<section className="max-w-2xl mx-auto px-4 py-16">
{estado === "ok" ? (
<div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
<p className="text-green-700 font-semibold text-lg mb-2">Mensaje enviado</p>
<p className="text-green-600 text-sm">Gracias por contactarnos. Te responderemos pronto.</p>
</div>
) : (
<form onSubmit={handleSubmit} className="space-y-5">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
<input
type="text"
required
value={form.nombre}
onChange={(e) => setForm({ ...form, nombre: e.target.value })}
className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#104766]"
placeholder="Tu nombre"
/>
</div>

<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
<input
type="email"
required
value={form.email}
onChange={(e) => setForm({ ...form, email: e.target.value })}
className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#104766]"
placeholder="tu@email.com"
/>
</div>

<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
<textarea
required
rows={5}
value={form.mensaje}
onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#104766] resize-none"
placeholder="¿En qué podemos ayudarte?"
/>
</div>

{estado === "error" && (
<p className="text-red-500 text-sm">Algo ha fallado. Inténtalo de nuevo.</p>
)}

<button
type="submit"
disabled={estado === "enviando"}
className="w-full bg-[#ea4f4e] text-white font-semibold py-3 rounded-full hover:bg-red-600 transition disabled:opacity-60"
>
{estado === "enviando" ? "Enviando..." : "Enviar mensaje"}
</button>
</form>
)}
</section>
</div>
);
}
