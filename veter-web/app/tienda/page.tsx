import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Tienda — Productos recomendados para tu mascota",
  description:
    "Selección de productos veterinarios recomendados por Veter: suplementos, champús, antiparasitarios y más. Compra en Amazon con envío rápido.",
  openGraph: {
    title: "Tienda — Productos recomendados para tu mascota",
    description:
      "Selección de productos veterinarios recomendados por Veter: suplementos, champús, antiparasitarios y más.",
  },
}

type Categoria = "suplementos" | "dermatologia" | "digestivo" | "articulaciones" | "ocular" | "heridas"

const CATEGORIAS: Record<Categoria, { label: string; color: string }> = {
  suplementos:    { label: "Suplementos",     color: "#104766" },
  dermatologia:  { label: "Dermatología",     color: "#2e7d32" },
  digestivo:     { label: "Digestivo",        color: "#e65100" },
  articulaciones:{ label: "Articulaciones",   color: "#6a1b9a" },
  ocular:        { label: "Ocular",           color: "#00838f" },
  heridas:       { label: "Heridas y piel",   color: "#c62828" },
}

interface Producto {
  nombre: string
  descripcion: string
  link: string
  categoria: Categoria
  para: string
  imagen: string
}

const PRODUCTOS: Producto[] = [
  {
    nombre: "Bioiberica Impromune 200 Comprimidos",
    descripcion:
      "Complemento alimenticio para reforzar el sistema inmunitario de perros y gatos. Fórmula con beta-glucanos e inmunomoduladores naturales.",
    link: "https://amzn.to/4uAbsUq",
    categoria: "suplementos",
    para: "Perros y gatos",
    imagen: "/images/tienda/impromune-200.jpg",
  },
  {
    nombre: "Bioiberica Impromune 40 Comprimidos",
    descripcion:
      "Versión compacta del inmunoestimulante Impromune, ideal para tratamientos cortos o mascotas de pequeño tamaño.",
    link: "https://amzn.to/3S5i27J",
    categoria: "suplementos",
    para: "Perros y gatos",
    imagen: "/images/tienda/impromune-40.jpg",
  },
  {
    nombre: "Bioiberica Impromune Pasta 30 ml",
    descripcion:
      "Presentación en pasta para facilitar la administración en animales que rechazan los comprimidos. Mismo efecto inmunoestimulante.",
    link: "https://amzn.to/3S2ryIQ",
    categoria: "suplementos",
    para: "Perros y gatos",
    imagen: "/images/tienda/impromune-pasta.jpg",
  },
  {
    nombre: "Chemical Iberica Visvitae 15 g Epitelizante",
    descripcion:
      "Gel epitelizante y cicatrizante para heridas superficiales, cortes y rozaduras. Facilita la regeneración del tejido cutáneo.",
    link: "https://amzn.to/4fCfWGh",
    categoria: "heridas",
    para: "Perros y gatos",
    imagen: "/images/tienda/visvitae.jpg",
  },
  {
    nombre: "Dermovital Omega 3-6-9 — 300 Cápsulas",
    descripcion:
      "Suplemento de ácidos grasos esenciales para mejorar el estado del pelaje, la piel y reducir la inflamación crónica.",
    link: "https://amzn.to/4fCg2xD",
    categoria: "dermatologia",
    para: "Perros",
    imagen: "/images/tienda/dermovital-omega.png",
  },
  {
    nombre: "Douxo S3 Calm Champú para Perros y Gatos",
    descripcion:
      "Champú calmante con microbioma equilibrante para pieles sensibles, irritadas o con tendencia alérgica. Sin fragancia agresiva.",
    link: "https://amzn.to/4uucu44",
    categoria: "dermatologia",
    para: "Perros y gatos",
    imagen: "/images/tienda/douxo-calm.jpg",
  },
  {
    nombre: "Douxo S3 Pyo Champú para Perros y Gatos",
    descripcion:
      "Champú antiséptico indicado en piodermas y dermatitis bacterianas. Reduce la carga microbiana y alivia el picor.",
    link: "https://amzn.to/4eCLbjp",
    categoria: "dermatologia",
    para: "Perros y gatos",
    imagen: "/images/tienda/douxo-pyo.jpg",
  },
  {
    nombre: "Heel Gasteel Vet Complemento Alimenticio",
    descripcion:
      "Apoyo a la mucosa gástrica en perros y gatos con tendencia a gastritis, vómitos o acidez. Formulación homeopática.",
    link: "https://amzn.to/4afggHB",
    categoria: "digestivo",
    para: "Perros y gatos",
    imagen: "/images/tienda/gasteel.jpg",
  },
  {
    nombre: "Heel Mobeel Articulaciones — 50 Sobres",
    descripcion:
      "Suplemento en sobres para el mantenimiento articular. Indicado en displasia, artrosis y animales de edad avanzada.",
    link: "https://amzn.to/43xqRK5",
    categoria: "articulaciones",
    para: "Perros y gatos",
    imagen: "/images/tienda/mobeel.jpg",
  },
  {
    nombre: "Heel Pacifeel Jarabe Complemento Alimenticio",
    descripcion:
      "Jarabe calmante de origen natural para reducir el estrés, la ansiedad por separación y los miedos situacionales.",
    link: "https://amzn.to/4xlLSVA",
    categoria: "suplementos",
    para: "Perros y gatos",
    imagen: "/images/tienda/pacifeel.jpg",
  },
  {
    nombre: "Heel Tusheel Vet Jarabe para Perros",
    descripcion:
      "Jarabe para aliviar la tos seca e irritativa en perros. Formulación homeopática sin somnolencia ni efectos secundarios.",
    link: "https://amzn.to/4e5BmdL",
    categoria: "suplementos",
    para: "Perros",
    imagen: "/images/tienda/tusheel.jpg",
  },
  {
    nombre: "Ocucan Limpiador Ocular Perros y Gatos",
    descripcion:
      "Solución oftálmica para la limpieza diaria del contorno ocular. Elimina legañas, irritantes y previene infecciones.",
    link: "https://amzn.to/4oj6UQA",
    categoria: "ocular",
    para: "Perros y gatos",
    imagen: "/images/tienda/ocucan.jpg",
  },
  {
    nombre: "Proenteric Advanced Perro 15 ml",
    descripcion:
      "Probiótico y prebiótico de alta concentración para restaurar la flora intestinal tras antibióticos o episodios diarreicos.",
    link: "https://amzn.to/4eD5xJj",
    categoria: "digestivo",
    para: "Perros",
    imagen: "/images/tienda/proenteric.jpg",
  },
  {
    nombre: "Stangest Cronicare 60 Comprimidos",
    descripcion:
      "Complemento multinutriente para el mantenimiento de la función renal en perros y gatos con enfermedad renal crónica.",
    link: "https://amzn.to/3S3H07w",
    categoria: "suplementos",
    para: "Perros y gatos",
    imagen: "/images/tienda/cronicare-60.jpg",
  },
  {
    nombre: "Stangest Cronicare Oil 100 ml",
    descripcion:
      "Aceite funcional de apoyo renal, rico en omega-3 de alta pureza. Fácil de añadir al pienso o a la comida húmeda.",
    link: "https://amzn.to/4fAy3MK",
    categoria: "suplementos",
    para: "Perros y gatos",
    imagen: "/images/tienda/cronicare-oil.png",
  },
  {
    nombre: "Stangest Cronicare Suplemento 120 Comprimidos",
    descripcion:
      "Formato de gran capacidad del suplemento renal Cronicare, ideal para tratamientos de larga duración con mejor coste por dosis.",
    link: "https://amzn.to/3Q05UEx",
    categoria: "suplementos",
    para: "Perros y gatos",
    imagen: "/images/tienda/cronicare-120.jpg",
  },
]

// Iconos SVG por categoria (inline, sin dependencias)
function IconoCategoria({ cat }: { cat: Categoria }) {
  if (cat === "dermatologia") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-8 h-8">
        <path d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9z" />
        <path d="M9 9c0-1.657 1.343-3 3-3s3 1.343 3 3" />
        <path d="M7 14s1 3 5 3 5-3 5-3" />
      </svg>
    )
  }
  if (cat === "digestivo") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-8 h-8">
        <path d="M12 2C9 2 6 4 6 7c0 2 1 3 1 5 0 3-2 5-2 8h14c0-3-2-5-2-8 0-2 1-3 1-5 0-3-3-5-6-5z" />
      </svg>
    )
  }
  if (cat === "articulaciones") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-8 h-8">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    )
  }
  if (cat === "ocular") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-8 h-8">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  }
  if (cat === "heridas") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-8 h-8">
        <path d="M12 5v14M5 12h14" />
        <rect x="3" y="3" width="18" height="18" rx="2" />
      </svg>
    )
  }
  // suplementos (default)
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-8 h-8">
      <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
    </svg>
  )
}

function CardProducto({ p }: { p: Producto }) {
  const cat = CATEGORIAS[p.categoria]
  return (
    <article className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col overflow-hidden hover:shadow-md transition-shadow duration-200">
      {/* imagen del producto */}
      <div className="relative w-full h-44 bg-gray-50">
        <Image
          src={p.imagen}
          alt={p.nombre}
          fill
          className="object-contain p-4"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* contenido */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* badge categoria */}
        <span
          className="text-xs font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full self-start"
          style={{ backgroundColor: cat.color + "18", color: cat.color }}
        >
          {cat.label}
        </span>

        {/* badge para quien */}
        <span className="text-xs text-gray-400 -mt-1">{p.para}</span>

        <h3 className="font-semibold text-sm leading-snug" style={{ color: "#104766" }}>
          {p.nombre}
        </h3>

        <p className="text-gray-500 text-xs leading-relaxed flex-1">{p.descripcion}</p>

        <a
          href={p.link}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="mt-2 flex items-center justify-center gap-2 text-white text-sm font-semibold py-2.5 rounded-xl transition hover:opacity-90"
          style={{ backgroundColor: "#ea4f4e" }}
        >
          {/* icono carrito */}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 flex-shrink-0">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>
          Ver en Amazon
        </a>
      </div>
    </article>
  )
}

export default function TiendaPage() {
  // agrupa por categoria para el filtro visual (sección por sección)
  const categoriasSinRepetir = Array.from(new Set(PRODUCTOS.map(p => p.categoria)))

  return (
    <>
      {/* HERO */}
      <section
        className="py-20 px-4 text-center"
        style={{ backgroundColor: "#104766" }}
      >
        <p className="text-[#ea4f4e] font-semibold uppercase tracking-widest text-xs mb-3">
          Recomendado por nuestros veterinarios
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "white" }}>
          Productos para tu mascota
        </h1>
        <p className="text-blue-200 max-w-xl mx-auto text-sm leading-relaxed">
          Una selección de los complementos y productos que utilizamos y recomendamos en clínica.
          Disponibles en Amazon con envío rápido.
        </p>
      </section>

      {/* AVISO AFILIADO */}
      <div className="bg-amber-50 border-b border-amber-100 px-4 py-3 text-center text-xs text-amber-700">
        Como asociados de Amazon, obtenemos una pequeña comisión por las compras realizadas
        a través de estos enlaces, sin coste adicional para ti.
      </div>

      {/* PRODUCTOS POR SECCION */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        {categoriasSinRepetir.map((cat) => {
          const productosCat = PRODUCTOS.filter(p => p.categoria === cat)
          const info = CATEGORIAS[cat]
          return (
            <div key={cat} className="mb-14">
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="w-1 h-8 rounded-full block flex-shrink-0"
                  style={{ backgroundColor: info.color }}
                />
                <h2 className="text-lg font-bold" style={{ color: "#104766" }}>
                  {info.label}
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {productosCat.map(p => (
                  <CardProducto key={p.link} p={p} />
                ))}
              </div>
            </div>
          )
        })}
      </section>

      {/* CTA FINAL */}
      <section
        className="py-16 px-4 text-center"
        style={{ backgroundColor: "#f0f7ff" }}
      >
        <h2 className="text-xl font-bold mb-3" style={{ color: "#104766" }}>
          ¿Tienes dudas sobre qué producto es el adecuado?
        </h2>
        <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
          Nuestros veterinarios pueden orientarte en consulta sobre el suplemento o
          tratamiento que mejor se adapta a tu mascota.
        </p>
        <a
          href="https://wa.me/message/QSHQLWTJJJYDI1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full transition hover:opacity-90"
          style={{ backgroundColor: "#104766" }}
        >
          Pregunta a un veterinario
        </a>
      </section>
    </>
  )
}
