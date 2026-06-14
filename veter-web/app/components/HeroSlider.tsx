"use client"

const LOGO = "/images/cropped-Logo-Veter-Group-e1778144720121.png"

export default function HeroSlider() {
return (
<section className="relative text-white min-h-screen flex items-center overflow-hidden"
style={{ backgroundImage: "url(/images/O0A0943-scaled.jpg)", backgroundSize: "cover", backgroundPosition: "center top" }}>
<div className="absolute inset-0" style={{ backgroundColor: "rgba(16, 71, 102, 0.70)" }} />
<div className="relative max-w-5xl mx-auto px-6 py-28 flex flex-col items-start">
<img src={LOGO} alt="Veter Group" className="h-14 mb-10"
style={{ filter: "brightness(0) invert(1)" }} />
<p className="text-blue-200 text-base mb-3 tracking-wide">
Your Pets it&apos;s allways better with Veter
</p>
<h1 className="text-white text-4xl md:text-6xl font-bold mb-10 max-w-xl leading-tight">
La Salud de tu Mascota en las mejores manos
</h1>
<div className="flex flex-wrap gap-4">
<a href="https://wa.me/message/QSHQLWTJJJYDI1" target="_blank" rel="noopener noreferrer"
className="text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition"
style={{ backgroundColor: "#ea4f4e" }}>
Hacer una Cita
</a>
<a href="/servicios"
className="text-white font-semibold px-8 py-3 rounded-full border-2 border-white hover:bg-white hover:text-[#104766] transition">
Planes de Salud
</a>
</div>
</div>
</section>
)
}
