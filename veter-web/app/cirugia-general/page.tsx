import type { Metadata } from "next"

export const metadata: Metadata = {
title: "Cirugía General y Especializada | Veter Rincón de la Victoria",
description: "Cirugía veterinaria general y especializada en Rincón de la Victoria, Málaga. Esterilizaciones, cirugías complejas y seguimiento post-operatorio exhaustivo.",
openGraph: {
title: "Cirugía Veterinaria | Veter",
description: "Procedimientos quirúrgicos veterinarios con seguimiento post-operatorio en Rincón de la Victoria, Málaga.",
},
}

const faqs = [
{ q: "¿Necesita cita previa para una cirugía?", a: "Sí, es necesario concertar cita previa. Puedes llamarnos o escribirnos por WhatsApp y te orientamos sobre los pasos a seguir." },
{ q: "¿Cuánto cuesta una cirugía veterinaria?", a: "El coste depende del tipo de intervención. Ofrecemos un presupuesto personalizado y sin compromiso antes de cualquier procedimiento." },
{ q: "¿Qué sedación o anestesia se utiliza?", a: "Usamos anestesia general adaptada a cada paciente según su edad, peso y estado de salud. Nuestro equipo monitoriza al animal en todo momento." },
{ q: "¿A qué edad se recomienda esterilizar una gata?", a: "Lo ideal es entre los 4 y 6 meses de edad, antes del primer celo. Consúltanos y valoramos el caso individualmente." },
{ q: "¿A qué edad se recomienda esterilizar una perra?", a: "Recomendamos entre los 6 y 8 meses, aunque puede variar según la raza y el tamaño. Te asesoramos en consulta." },
{ q: "¿Cuánto tiempo dura la recuperación?", a: "En la mayoría de intervenciones, el período de reposo y restricción de actividad es de 10 a 14 días. El veterinario pautará el seguimiento exacto." },
{ q: "¿Es necesario ayuno previo a la operación?", a: "Sí. El animal no debe comer ni beber durante las 8-12 horas anteriores a la intervención para minimizar riesgos anestésicos." },
{ q: "¿Aceptáis seguros de mascotas?", a: "Sí, trabajamos con los principales seguros: Asisa, Adeslas, Assa, Caser y Divina. Consúltanos si tienes algún otro." },
]

export default function CirugiaGeneral() {
return (
<div>
<section style={{ backgroundColor: "#104766" }} className="text-white py-20 px-4 text-center">
<h1 className="text-white text-4xl font-bold mb-4">Cirugía General y Cirugía Especializada</h1>
<p className="text-blue-200 max-w-xl mx-auto mb-8">¿Tu peludo necesita Cirugía Veterinaria?</p>
<a href="https://wa.me/message/QSHQLWTJJJYDI1" target="_blank" rel="noopener noreferrer"
className="inline-block bg-[#ea4f4e] text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition uppercase tracking-wide text-sm">
Reserva una Cita
</a>
</section>

<section className="max-w-4xl mx-auto px-4 py-20">
<p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#ea4f4e" }}>Nuestros procedimientos</p>
<h2 className="text-3xl font-bold mb-6" style={{ color: "#104766" }}>Cirugía con los más altos estándares</h2>
<p className="text-gray-600 leading-relaxed mb-4">
Realizamos todo tipo de procedimientos quirúrgicos, desde esterilizaciones y castraciones hasta cirugías complejas de tejidos blandos y ortopedia. Nuestras instalaciones están equipadas con el material necesario para garantizar la seguridad del paciente en cada intervención.
</p>
<p className="text-gray-600 leading-relaxed">
El seguimiento post-operatorio es parte fundamental de nuestro protocolo. Revisamos la evolución del animal y resolvemos cualquier duda que tengas durante la recuperación.
</p>
</section>

<section className="bg-gray-50 py-20 px-4">
<div className="max-w-3xl mx-auto">
<p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#ea4f4e" }}>Resolvemos tus dudas</p>
<h2 className="text-3xl font-bold mb-10" style={{ color: "#104766" }}>Preguntas frecuentes</h2>
<div className="space-y-4">
{faqs.map((faq, i) => (
<div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
<h3 className="font-bold text-base mb-2" style={{ color: "#104766" }}>{faq.q}</h3>
<p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
</div>
))}
</div>
</div>
</section>

<section className="py-16 px-4 text-center">
<h2 className="text-2xl font-bold mb-3" style={{ color: "#104766" }}>¿Tu mascota necesita una intervención?</h2>
<p className="text-gray-500 mb-6">Pídenos cita y valoramos el caso sin compromiso.</p>
<div className="flex gap-4 justify-center flex-wrap">
<a href="https://wa.me/message/QSHQLWTJJJYDI1" target="_blank" rel="noopener noreferrer"
className="text-white font-semibold px-7 py-3 rounded-full hover:opacity-90 transition"
style={{ backgroundColor: "#ea4f4e" }}>
Hacer una Cita
</a>
<a href="tel:+34640995846"
className="font-semibold px-7 py-3 rounded-full border-2 hover:bg-gray-100 transition"
style={{ color: "#104766", borderColor: "#104766" }}>
+34 640 995 846
</a>
</div>
</section>
</div>
)
}
