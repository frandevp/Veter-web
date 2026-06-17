import type { Metadata } from "next"

export const metadata: Metadata = {
title: "Política de Privacidad | Veter Centro Veterinario",
description: "Política de privacidad y protección de datos de Veter Centro Veterinario, clínica veterinaria en Rincón de la Victoria, Málaga.",
}

export default function PoliticaPrivacidad() {
return (
<div>
<section style={{ backgroundColor: "#104766" }} className="text-white py-20 px-4 text-center">
<h1 className="text-white text-4xl font-bold mb-3">Política de Privacidad</h1>
<p className="text-blue-200">Información sobre el tratamiento de tus datos personales.</p>
</section>

<div className="max-w-3xl mx-auto px-4 py-16 text-gray-700 text-sm leading-relaxed space-y-8">

<section>
<h2 className="text-lg font-bold mb-3" style={{ color: "#104766" }}>1. Responsable del tratamiento</h2>
<p>
<strong>Denominación:</strong> Veter Centro Veterinario<br />
<strong>Dirección:</strong> Plaza del señorío, local 3, Rincón de la Victoria, 29730, Málaga<br />
<strong>Teléfono:</strong> +34 640 995 846<br />
<strong>Email:</strong> hola@veter.es
</p>
</section>

<section>
<h2 className="text-lg font-bold mb-3" style={{ color: "#104766" }}>2. Finalidad del tratamiento</h2>
<p>Los datos personales que nos facilitas a través de los formularios de contacto o por cualquier otro medio se utilizan exclusivamente para:</p>
<ul className="list-disc ml-5 mt-2 space-y-1">
<li>Gestionar tu solicitud de cita o consulta.</li>
<li>Responder a tus preguntas o comunicaciones.</li>
<li>El mantenimiento de la relación clínica, cuando proceda.</li>
</ul>
</section>

<section>
<h2 className="text-lg font-bold mb-3" style={{ color: "#104766" }}>3. Legitimación</h2>
<p>El tratamiento de tus datos se basa en el consentimiento que prestas al enviarnos tu solicitud (art. 6.1.a RGPD) y, en su caso, en la ejecución de la relación contractual o clínica (art. 6.1.b RGPD).</p>
</section>

<section>
<h2 className="text-lg font-bold mb-3" style={{ color: "#104766" }}>4. Conservación de los datos</h2>
<p>Conservaremos tus datos durante el tiempo necesario para atender tu solicitud y, posteriormente, durante los plazos legales aplicables.</p>
</section>

<section>
<h2 className="text-lg font-bold mb-3" style={{ color: "#104766" }}>5. Destinatarios</h2>
<p>No cedemos tus datos a terceros salvo obligación legal. En caso de usar servicios externos de correo electrónico o gestión, dichos proveedores actúan como encargados del tratamiento bajo las garantías establecidas en el RGPD.</p>
</section>

<section>
<h2 className="text-lg font-bold mb-3" style={{ color: "#104766" }}>6. Tus derechos</h2>
<p>Puedes ejercer en cualquier momento los derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición enviando un correo a <a href="mailto:hola@veter.es" className="underline hover:text-[#ea4f4e]">hola@veter.es</a> con copia de tu DNI. También tienes derecho a reclamar ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#ea4f4e]">aepd.es</a>).</p>
</section>

</div>
</div>
)
}
