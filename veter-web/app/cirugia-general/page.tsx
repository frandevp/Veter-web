import type { Metadata } from "next"

export const metadata: Metadata = {
title: "Cirugía General y Especializada | Veter Rincón de la Victoria",
description: "Cirugía veterinaria general y especializada en Rincón de la Victoria, Málaga. Esterilizaciones, cirugías complejas y seguimiento post-operatorio exhaustivo.",
openGraph: {
title: "Cirugía Veterinaria | Veter",
description: "Procedimientos quirúrgicos veterinarios con seguimiento post-operatorio en Rincón de la Victoria, Málaga.",
},
}

const beneficios = [
{
titulo: "Reduce el riesgo de cáncer de mama",
desc: "En hembras operadas antes del primer celo, el riesgo de desarrollar tumores mamarios se reduce hasta un 90%. Es uno de los beneficios más importantes de la esterilización temprana.",
},
{
titulo: "Elimina el riesgo de cáncer de próstata y testicular",
desc: "En machos, la castración elimina la posibilidad de desarrollar cáncer testicular y reduce significativamente el riesgo de problemas de próstata.",
},
{
titulo: "Previene la piometra",
desc: "La piometra es una infección uterina potencialmente mortal que afecta a hembras no esterilizadas. La esterilización la previene por completo, eliminando un riesgo grave de salud.",
},
{
titulo: "Reduce comportamientos no deseados",
desc: "Disminuye el marcaje de territorio, la agresividad relacionada con hormonas, el instinto de fuga y los comportamientos de celo. Tu mascota estará más tranquila y equilibrada.",
},
{
titulo: "Mayor esperanza de vida",
desc: "Las mascotas esterilizadas tienen estadísticamente una vida más larga y saludable al eliminar los riesgos asociados a las hormonas reproductivas y las infecciones del aparato reproductor.",
},
]

const edades = [
{ animal: "Gatas", recomendacion: "Entre los 4 y 6 meses, antes del primer celo." },
{ animal: "Perras (razas pequeñas/medianas)", recomendacion: "Entre los 6 y 8 meses de edad." },
{ animal: "Perras (razas grandes)", recomendacion: "Pueden esperar hasta los 12-24 meses. Lo valoramos en consulta." },
{ animal: "Gatos machos", recomendacion: "A partir de los 5-6 meses, antes de que desarrollen hábitos de marcaje." },
{ animal: "Perros machos", recomendacion: "Entre los 6 y 12 meses según raza y tamaño." },
]

const faqs = [
{ q: "¿Necesita cita previa para una cirugía?", a: "Sí, es necesario concertar cita previa. Puedes llamarnos o escribirnos por WhatsApp y te orientamos sobre los pasos a seguir." },
{ q: "¿Cuánto cuesta una cirugía veterinaria?", a: "El coste depende del tipo de intervención. Ofrecemos un presupuesto personalizado y sin compromiso antes de cualquier procedimiento." },
{ q: "¿Qué sedación o anestesia se utiliza?", a: "Utilizamos anestesia general con anestesia inhalada, adaptada a cada paciente según su edad, peso y estado de salud. El equipo monitoriza al animal en todo momento durante la intervención." },
{ q: "¿Es necesario ayuno previo a la operación?", a: "Sí. El animal no debe comer durante las 8-12 horas anteriores a la intervención, ni beber agua en las 3 horas previas. Esto es fundamental para minimizar los riesgos anestésicos." },
{ q: "¿Cuánto tiempo dura la recuperación?", a: "Las primeras 24-48 horas son de reposo post-anestesia. Durante los 10-14 días siguientes la actividad debe ser mínima: en perros, paseos cortos de 5-10 minutos. La revisión de puntos se hace a los 10-14 días. Tu veterinario te explicará el protocolo exacto según la intervención." },
{ q: "¿Qué cuidados necesita en casa tras la operación?", a: "Es imprescindible el collar isabelino para evitar que el animal se lama la herida. Vigilar que la cicatriz esté limpia y sin signos de infección, y seguir la pauta de medicación indicada. Ante cualquier duda, llámanos." },
{ q: "¿Aceptáis seguros de mascotas?", a: "Sí, trabajamos con los principales seguros veterinarios: Asisa, Adeslas, Assa, Caser y Divina. Si tienes otro seguro, consúltanos." },
]

const seguros = ["Asisa", "Adeslas", "Assa", "Caser", "Divina"]

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
Realizamos todo tipo de procedimientos quirúrgicos, desde esterilizaciones y castraciones hasta cirugías complejas de tejidos blandos y ortopedia. Trabajamos con sedación y anestesia inhalada adaptada a cada paciente, y nuestras instalaciones están equipadas para garantizar la seguridad del animal en cada intervención.
</p>
<p className="text-gray-600 leading-relaxed">
El seguimiento post-operatorio es parte fundamental de nuestro protocolo. Revisamos la evolución del animal y resolvemos cualquier duda que tengas durante la recuperación.
</p>
</section>

<div style={{ backgroundColor: "#104766" }} className="py-16 px-4">
<div className="max-w-5xl mx-auto">
<p className="text-sm font-semibold uppercase tracking-widest mb-3 text-[#ea4f4e]">Esterilización</p>
<h2 className="text-3xl font-bold mb-4 text-white">Beneficios de esterilizar a tu mascota</h2>
<p className="text-blue-200 mb-10 max-w-2xl">
Más allá de evitar camadas no deseadas, la esterilización tiene beneficios de salud muy concretos y documentados.
</p>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
{beneficios.map(b => (
<div key={b.titulo} className="bg-white/10 rounded-xl p-6 border border-white/20">
<div className="w-2 h-8 rounded-full mb-4" style={{ backgroundColor: "#ea4f4e" }} />
<h3 className="font-bold text-base mb-2 text-white">{b.titulo}</h3>
<p className="text-blue-200 text-sm leading-relaxed">{b.desc}</p>
</div>
))}
</div>
</div>
</div>

<section className="bg-gray-50 py-16 px-4">
<div className="max-w-4xl mx-auto">
<p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#ea4f4e" }}>Cuándo operar</p>
<h2 className="text-3xl font-bold mb-6" style={{ color: "#104766" }}>Edades recomendadas para esterilizar</h2>
<p className="text-gray-600 mb-8">
Cada caso es diferente. Estas son las recomendaciones generales, pero siempre valoramos individualmente a cada mascota en consulta.
</p>
<div className="space-y-3">
{edades.map(e => (
<div key={e.animal} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex gap-4 items-start">
<div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ backgroundColor: "#ea4f4e" }} />
<div>
<span className="font-bold text-sm" style={{ color: "#104766" }}>{e.animal}: </span>
<span className="text-gray-500 text-sm">{e.recomendacion}</span>
</div>
</div>
))}
</div>
</div>
</section>

<section className="py-16 px-4">
<div className="max-w-4xl mx-auto">
<p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#ea4f4e" }}>Seguros</p>
<h2 className="text-2xl font-bold mb-6" style={{ color: "#104766" }}>Seguros veterinarios aceptados</h2>
<div className="flex flex-wrap gap-3 mb-3">
{seguros.map(s => (
<span key={s} className="px-4 py-2 rounded-full text-sm font-semibold border-2"
style={{ borderColor: "#104766", color: "#104766" }}>
{s}
</span>
))}
</div>
<p className="text-gray-500 text-sm">¿Tienes otro seguro? Consúltanos, trabajamos con más aseguradoras.</p>
</div>
</section>

<section className="bg-gray-50 py-16 px-4">
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
