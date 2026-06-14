"use client"

const LOGO = "/images/cropped-Logo-Veter-Group-e1778144720121.png"

export default function HeroSlider() {
return (
<section className="relative text-white min-h-screen flex items-center overflow-hidden"
style={{ backgroundImage: "url(/images/O0A0943-scaled.jpg)", backgroundSize: "cover", backgroundPosition: "center top" }}>
{/* overlay muy ligero para que se vea la foto */}
<div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.25)" }} />
<div className="relative max-w-5xl mx-auto px-6 py-20 flex flex-col items-start">
<img src={LOGO} alt="Veter Group" className="h-10 mb-6"
style={{ filter: "brightness(0) invert(1)" }} />
<p className="text-white text-sm mb-2 tracking-wide">
Your Pets it&apos;s allways better with Veter
</p>
<h1 className="text-2xl md:text-4xl font-bold mb-7 max-w-md leading-snug" style={{ color: "#ffffff" }}>
La Salud de tu Mascota en las mejores manos
</h1>
<div className="flex flex-wrap gap-3">
<a href="https://wa.me/message/QSHQLWTJJJYDI1" target="_blank" rel="noopener noreferrer"
className="text-white font-semibold px-6 py-2.5 rounded-full hover:opacity-90 transition text-sm"
style={{ backgroundColor: "#ea4f4e" }}>
Hacer una Cita
</a>
<a href="/servicios"
className="text-white font-semibold px-6 py-2.5 rounded-full border border-white hover:bg-white hover:text-[#104766] transition text-sm">
Planes de Salud
</a>
</div>
</div>
</section>
)
}
