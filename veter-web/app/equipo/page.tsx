import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
title: "Nuestro Equipo Veterinario | Veter Rincón de la Victoria",
description: "Conoce a nuestro equipo de veterinarios especializados. Más de 10 años de experiencia cuidando mascotas en Rincón de la Victoria, Málaga.",
openGraph: {
title: "Equipo Veterinario | Veter",
description: "Profesionales apasionados por la salud animal en Rincón de la Victoria, Málaga.",
},
}

// tampoco hay cpt equipo en wp, lo pongo a mano
const vets = [
{
nombre: "Dra. Laura Méndez",
especialidad: "Medicina interna y urgencias",
foto: "/images/franciscavet.jpeg",
bio: "Más de 10 años de experiencia. Especialista en diagnóstico por imagen y enfermedades crónicas.",
},
{
nombre: "Dr. Carlos Ruiz",
especialidad: "Cirugía y traumatología",
foto: "/images/martin2.jpg",
bio: "Formado en la Universidad de Córdoba. Experto en ortopedia y cirugía de tejidos blandos.",
},
{
nombre: "Dra. Ana Torres",
especialidad: "Dermatología y nutrición",
foto: "/images/francesca.jpeg",
bio: "Especialista en alergias cutáneas y dietas personalizadas.",
},
{
nombre: "Dr. Javier Molina",
especialidad: "Exóticos y pequeños animales",
foto: "/images/team-01.jpg",
bio: "Veterinario especializado en reptiles, aves, conejos y roedores.",
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
<Image src={v.foto} alt={v.nombre}
width={80} height={80}
className="w-20 h-20 rounded-full object-cover shrink-0" />
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
