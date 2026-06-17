import type { Metadata } from "next"
import ContactoForm from "./ContactoForm"

export const metadata: Metadata = {
title: "Contacto y Citas | Veter Centro Veterinario",
description: "Pide cita o contáctanos. Clínica veterinaria en Plaza del señorío local 3, Rincón de la Victoria. Tel: +34 640 995 846 · +34 951 25 73 88",
openGraph: {
title: "Contacto | Veter Rincón de la Victoria",
description: "Pide cita o escríbenos. Estamos en Rincón de la Victoria, Málaga.",
},
}

export default function Contacto() {
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

{/* formulario — client component */}
<ContactoForm />

</section>
</div>
)
}
