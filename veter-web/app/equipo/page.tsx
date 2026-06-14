const equipo = [
  {
    nombre: "Dra. Laura Méndez",
    especialidad: "Medicina interna y urgencias",
    descripcion:
      "Más de 10 años de experiencia en medicina interna. Especialista en diagnóstico por imagen y enfermedades crónicas.",
    inicial: "L",
  },
  {
    nombre: "Dr. Carlos Ruiz",
    especialidad: "Cirugía y traumatología",
    descripcion:
      "Cirujano veterinario formado en la Universidad de Córdoba. Experto en ortopedia y cirugía de tejidos blandos.",
    inicial: "C",
  },
  {
    nombre: "Dra. Ana Torres",
    especialidad: "Dermatología y nutrición",
    descripcion:
      "Especialista en problemas de piel, alergias y dietas personalizadas para mascotas con necesidades especiales.",
    inicial: "A",
  },
  {
    nombre: "Dr. Javier Molina",
    especialidad: "Exóticos y pequeños animales",
    descripcion:
      "Veterinario especializado en reptiles, aves, conejos y roedores. Formación específica en fauna no convencional.",
    inicial: "J",
  },
];

export default function Equipo() {
  return (
    <div>
      <section className="bg-[#104766] text-white py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Nuestro equipo</h1>
        <p className="text-blue-200 max-w-xl mx-auto">
          Profesionales apasionados por la salud animal, con formación continua y trato cercano.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {equipo.map((v) => (
            <div key={v.nombre} className="flex gap-5 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="w-14 h-14 rounded-full bg-[#104766] text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                {v.inicial}
              </div>
              <div>
                <h2 className="font-semibold text-gray-900 text-lg">{v.nombre}</h2>
                <p className="text-[#ea4f4e] text-sm font-medium mb-2">{v.especialidad}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{v.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
