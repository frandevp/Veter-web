export default function Home() {
  return (
    <div>
      <section className="bg-blue-600 text-white py-24 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Cuidamos a tu mascota como se merece</h1>
        <p className="text-lg mb-8 text-blue-100">Clínica veterinaria en Madrid con el mejor equipo profesional</p>
        <a href="/contacto" className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full">Contacta con nosotros</a>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">Nuestros servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-gray-800 mb-2">Consulta general</h3>
            <p className="text-gray-500 text-sm">Revisiones y diagnósticos para tu mascota</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-gray-800 mb-2">Vacunaciones</h3>
            <p className="text-gray-500 text-sm">Mantén a tu mascota protegida</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-gray-800 mb-2">Cirugía</h3>
            <p className="text-gray-500 text-sm">Intervenciones con el mejor equipo</p>
          </div>
        </div>
      </section>
      <section className="bg-blue-50 py-16 px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Tu mascota necesita atención?</h2>
        <p className="text-gray-500 mb-6">Estamos aquí para ayudarte</p>
        <a href="/contacto" className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full">Pedir cita</a>
      </section>
    </div>
  );
}