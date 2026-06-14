const serviciosDestacados = [
  { titulo: "Consulta general", desc: "Revisiones y diagnósticos para tu mascota" },
  { titulo: "Vacunaciones", desc: "Calendarios adaptados y protección completa" },
  { titulo: "Cirugía", desc: "Intervenciones con equipamiento moderno" },
];

export default function Home() {
  return (
    <div>
      <section className="bg-[#104766] text-white py-28 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Cuidamos a tu mascota como se merece</h1>
        <p className="text-blue-200 text-lg mb-10 max-w-xl mx-auto">
          Clínica veterinaria en Rincón de la Victoria, Málaga. Atención profesional y trato cercano.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="/contacto" className="bg-[#ea4f4e] text-white font-semibold px-7 py-3 rounded-full hover:bg-red-600 transition">
            Pedir cita
          </a>
          <a href="/servicios" className="bg-white text-[#104766] font-semibold px-7 py-3 rounded-full hover:bg-blue-50 transition">
            Ver servicios
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">Lo que ofrecemos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviciosDestacados.map((s) => (
            <div key={s.titulo} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-800 mb-2">{s.titulo}</h3>
              <p className="text-gray-500 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="/servicios" className="text-[#104766] text-sm font-medium hover:underline">
            Ver todos los servicios →
          </a>
        </div>
      </section>

      <section className="bg-[#104766] bg-opacity-5 py-16 px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">¿Tu mascota necesita atención?</h2>
        <p className="text-gray-500 mb-7">Estamos aquí para ayudarte. Escríbenos sin compromiso.</p>
        <a href="/contacto" className="bg-[#ea4f4e] text-white font-semibold px-7 py-3 rounded-full hover:bg-red-600 transition">
          Contactar ahora
        </a>
      </section>
    </div>
  );
}
