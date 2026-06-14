# veter-web

Frontend para [veter.es](https://veter.es). La web original tiene el diseño roto porque caducó la licencia de Elementor Pro, así que la rehacemos desde cero con Next.js. Sin plugins, sin licencias que vencer, sin depender de que alguien renueve algo.

El blog sigue en WordPress. La clínica no toca nada, siguen subiendo artículos igual que siempre. Nosotros leemos la REST API y lo mostramos.

## Demo

[veter-web.vercel.app](https://veter-web.vercel.app)

## Páginas

| Ruta | Qué hace |
|------|----------|
| `/` | Home |
| `/servicios` | Servicios de la clínica |
| `/equipo` | Equipo veterinario |
| `/blog` | Posts desde WordPress |
| `/blog/[slug]` | Post individual |
| `/contacto` | Formulario — guarda el mensaje en BD y manda email |

## Stack

- Next.js 16 (App Router)
- Tailwind CSS 4
- WordPress REST API
- Drizzle ORM + libsql
- Turso (SQLite en producción)
- Resend

## Mínimos técnicos del curso

- ✅ Frontend en Next.js
- ✅ Route Handler propio (`POST /api/contacto`)
- ✅ SQLite + Drizzle
- ✅ API externa (WordPress REST API)

## Cómo arrancarlo

```bash
git clone https://github.com/frandevp/Veter-web
cd Veter-web/veter-web
npm install
cp .env.local.example .env.local
# edita .env.local con tu RESEND_API_KEY
npx drizzle-kit push
npm run dev
```

Abre http://localhost:3000.

## Variables de entorno

| Variable | Para qué |
|----------|----------|
| `TURSO_DATABASE_URL` | URL de Turso. En local: `file:./contacto.db` |
| `TURSO_AUTH_TOKEN` | Token de Turso. En local se deja vacío |
| `RESEND_API_KEY` | API key de Resend |

## Deploy

```bash
turso auth login
turso db create veter-contacto
turso db show veter-contacto
turso db tokens create veter-contacto

TURSO_DATABASE_URL=libsql://... TURSO_AUTH_TOKEN=... npx drizzle-kit push
# añadir las tres variables en Vercel > Settings > Environment Variables
```

## Estructura

```
app/
  page.tsx
  layout.tsx
  blog/
    page.tsx
    [slug]/page.tsx
  servicios/page.tsx
  equipo/page.tsx
  contacto/page.tsx
  api/
    contacto/route.ts
lib/
  db.ts
  schema.ts
drizzle.config.ts
```

## Por qué estas tecnologías

Next.js porque el blog necesita SEO. Con un cliente React puro Google no indexa el contenido, los posts se renderizan en servidor y ya.

WordPress headless porque la clínica ya lo usa. Cambiar de CMS significaría migrar contenido y enseñarles otra herramienta. Con la REST API leemos todo sin tocar el backend y ellos no notan nada.

Turso porque lo único que guardamos son mensajes del formulario de contacto. Para ese volumen SQLite es más que suficiente, y Turso funciona en Vercel sin tener que montar ningún servidor de base de datos.

Resend porque nodemailer en serverless es un lío: necesitas SMTP propio o credenciales de Gmail que tienen límites raros. Resend tiene una API simple, funciona y punto.

## Cómo usamos la IA

Claude fue la mano derecha durante todo el desarrollo. No escribió el proyecto, pero estuvo en cada decisión técnica que nos habría costado tiempo buscando en la documentación.

Lo más útil fue el setup de Drizzle con libsql: que funcionara con un archivo SQLite local en desarrollo y con Turso en producción sin cambiar nada del código es algo que no es obvio leyendo la documentación de Drizzle por primera vez. También cuando fallaba el build por errores que no sabíamos de dónde venían. El más raro fue que Resend petaba en tiempo de build porque instanciábamos el cliente a nivel de módulo, fuera del handler. Sin la API key en el entorno de build lanzaba una excepción antes de recibir ninguna petición. La IA lo vio enseguida y lo movió dentro de la función. Otro caso fue que `better-sqlite3` no tenía tipos TypeScript y el build fallaba con un error poco claro; se arregló instalando `@types/better-sqlite3`.

Cosas que fallaron o tuvimos que corregir nosotros:

Cuando le preguntamos si los servicios y el equipo estaban en WordPress dijimos que sí sin haberlo comprobado. La IA asumió que había custom post types y generó el código para leerlos. Cuando fuimos a la API real no existía nada de eso. Tuvimos que escribir esos datos a mano.

El home inicial ponía "Madrid" como ubicación de la clínica. Hay que leer lo que genera antes de darlo por bueno.

Los ajustes visuales, los colores exactos del diseño real y el logo los fuimos corrigiendo manualmente comparando con la web original. La IA no puede ver la pantalla, así que hay cosas que tienes que hacer tú.
