"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
{ num: 1200, suffix: "+", label: "Intervenciones" },
{ num: 3500, suffix: "+", label: "Clientes" },
{ num: 80,   suffix: "+", label: "Adopciones" },
{ num: 5000, suffix: "+", label: "Tratamientos" },
]

function useCountUp(target: number, started: boolean, duration = 1800) {
const [value, setValue] = useState(0)

useEffect(() => {
if (!started) return
let start = 0
const step = target / (duration / 16)
const timer = setInterval(() => {
start += step
if (start >= target) {
setValue(target)
clearInterval(timer)
} else {
setValue(Math.floor(start))
}
}, 16)
return () => clearInterval(timer)
}, [started, target, duration])

return value
}

function Contador({ num, suffix, label }: { num: number; suffix: string; label: string }) {
const value = useCountUp(num, true)
return (
<div>
<p className="text-4xl font-bold mb-1">
{value.toLocaleString("es-ES")}{suffix}
</p>
<p className="text-blue-200 text-sm">{label}</p>
</div>
)
}

export default function ContadoresAnimados() {
const ref = useRef<HTMLDivElement>(null)
const [started, setStarted] = useState(false)

useEffect(() => {
const el = ref.current
if (!el) return
const observer = new IntersectionObserver(
([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect() } },
{ threshold: 0.3 }
)
observer.observe(el)
return () => observer.disconnect()
}, [])

return (
<section ref={ref} style={{ backgroundColor: "#104766" }} className="py-16 px-4 text-white">
<div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
{stats.map(s => (
started
? <Contador key={s.label} {...s} />
: <div key={s.label}>
<p className="text-4xl font-bold mb-1">0{s.suffix}</p>
<p className="text-blue-200 text-sm">{s.label}</p>
</div>
))}
</div>
</section>
)
}
