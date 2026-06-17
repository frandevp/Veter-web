import type { Metadata } from "next"

export const metadata: Metadata = {
title: "Política de Cookies | Veter Centro Veterinario",
description: "Información sobre el uso de cookies en la web de Veter Centro Veterinario, clínica veterinaria en Rincón de la Victoria, Málaga.",
}

export default function PoliticaCookies() {
return (
<div>
<section style={{ backgroundColor: "#104766" }} className="text-white py-20 px-4 text-center">
<h1 className="text-white text-4xl font-bold mb-3">Política de Cookies</h1>
<p className="text-blue-200">Información sobre las cookies que utilizamos en esta web.</p>
</section>

<div className="max-w-3xl mx-auto px-4 py-16 text-gray-700 text-sm leading-relaxed space-y-8">

<section>
<h2 className="text-lg font-bold mb-3" style={{ color: "#104766" }}>¿Qué son las cookies?</h2>
<p>Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo cuando los visitas. Sirven para que el sitio recuerde tus preferencias, analizar el uso de la página y mejorar tu experiencia de navegación.</p>
</section>

<section>
<h2 className="text-lg font-bold mb-3" style={{ color: "#104766" }}>Cookies que utilizamos</h2>
<div className="overflow-x-auto">
<table className="w-full border-collapse text-sm mt-2">
<thead>
<tr style={{ backgroundColor: "#104766" }} className="text-white">
<th className="text-left px-4 py-2">Tipo</th>
<th className="text-left px-4 py-2">Finalidad</th>
<th className="text-left px-4 py-2">Duración</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-gray-100">
<td className="px-4 py-2 font-medium">Técnicas</td>
<td className="px-4 py-2">Funcionamiento básico del sitio (sesión, formulario de contacto)</td>
<td className="px-4 py-2">Sesión</td>
</tr>
<tr className="border-b border-gray-100 bg-gray-50">
<td className="px-4 py-2 font-medium">Analíticas</td>
<td className="px-4 py-2">Estadísticas de visitas (Google Analytics, si está activado)</td>
<td className="px-4 py-2">Hasta 2 años</td>
</tr>
</tbody>
</table>
</div>
</section>

<section>
<h2 className="text-lg font-bold mb-3" style={{ color: "#104766" }}>Cookies de terceros</h2>
<p>Esta web puede cargar contenido de terceros (por ejemplo, Google Maps) que podrían instalar sus propias cookies. No controlamos esas cookies; consulta la política de privacidad de Google para más información.</p>
</section>

<section>
<h2 className="text-lg font-bold mb-3" style={{ color: "#104766" }}>Cómo desactivar las cookies</h2>
<p>Puedes configurar tu navegador para bloquear o eliminar cookies en cualquier momento. Ten en cuenta que algunas funciones de la web podrían dejar de funcionar si deshabilitas las cookies técnicas.</p>
<ul className="list-disc ml-5 mt-2 space-y-1">
<li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
<li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies</li>
<li><strong>Safari:</strong> Preferencias → Privacidad → Gestión de datos</li>
<li><strong>Edge:</strong> Configuración → Privacidad, búsqueda y servicios</li>
</ul>
</section>

<section>
<h2 className="text-lg font-bold mb-3" style={{ color: "#104766" }}>Contacto</h2>
<p>Si tienes cualquier duda sobre nuestra política de cookies, escríbenos a <a href="mailto:hola@veter.es" className="underline hover:text-[#ea4f4e]">hola@veter.es</a>.</p>
</section>

</div>
</div>
)
}
