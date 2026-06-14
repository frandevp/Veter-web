const vets = [
{
nombre: "Dra. Laura Méndez",
especialidad: "Medicina interna y urgencias",
bio: "Más de 10 años de experiencia. Especialista en diagnóstico por imagen y enfermedades crónicas.",
inicial: "L",
},
{
nombre: "Dr. Carlos Ruiz",
especialidad: "Cirugía y traumatología",
bio: "Formado en la Universidad de Córdoba. Experto en ortopedia y cirugía de tejidos blandos.",
inicial: "C",
},
{
nombre: "Dra. Ana Torres",
especialidad: "Dermatología y nutrición",
bio: "Especialista en alergias cutáneas y dietas personalizadas para mascotas con necesidades especiales.",
inicial: "A",
},
{
nombre: "Dr. Javier Molina",
especialidad: "Exóticos y pequeños animales",
bio: "Veterinario especializado en reptiles, aves, conejos y roedores.",
inicial: "J",
},
]

export default function Equipo() {
return (
<div>
<section style={{ backgroundColor: "#104766" }} className="text-white py-20 px-4 text-center">
<h1 className="text-white text-4xl font-bold mb-4">Nuestro Equipo</h1>
<p className="text-blue-200 max-w-xl mx-auto">
Profesionales apasionados por la salud animal, con formación continua.
</p>
</section>

<section className="max-w-5xl mx-auto px-4 py-16">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
{vets.map(v => (
<div key={v.nombre} className="flex gap-5 bg-white rounded-xl border border-gray-100 shadow-sm p-6">
<div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white shrink-0"
style={{ backgroundColor: "#104766" }}>
{v.inicial}
</div>
<div>
<h2 className="font-bold text-lg" style={{ color: "#104766" }}>{v.nombre}</h2>
<p className="text-sm font-semibold mb-2" style={{ color: "#ea4f4e" }}>{v.especialidad}</p>
<p className="text-gray-500 text-sm leading-relaxed">{v.bio}</p>
</div>
</div>
))}
</div>
</section>

<section style={{ backgroundColor: "#104766" }} className="py-14 px-4 text-center text-white">
<h2 className="text-white text-2xl font-bold mb-3">¿Tienes alguna pregunta?</h2>
<p className="text-blue-200 mb-6">Nuestro equipo estará encantado de atenderte.</p>
<a href="/contacto"
className="bg-white font-semibold px-7 py-3 rounded-full hover:bg-blue-50 transition inline-block"
style={{ color: "#104766" }}>
Contactar
</a>
</section>
</div>
)
}
