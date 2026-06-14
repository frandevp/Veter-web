# veter-web

Frontend para [veter.es](https://veter.es), desarrollado por Fran como proyecto final del curso.

La web original tiene el diseño roto porque caducó la licencia de Elementor Pro. Este proyecto la reemplaza con Next.js, sin dependencias de plugins ni licencias externas.

El blog sigue gestionándose desde WordPress. La clínica no cambia su forma de trabajar: sigue subiendo artículos igual que siempre. El frontend lee la REST API y lo muestra con un diseño nuevo.

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
| `/contacto` | Formulario — guarda el mensaje en BD y envía email |

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

## Decisiones técnicas

Next.js en vez de una SPA porque el blog necesita SEO. Con un cliente React puro Google no indexa el contenido. Al renderizar en servidor, los posts aparecen en buscadores sin configuración extra.

WordPress headless porque la clínica ya lo tiene montado y funciona. Cambiar de CMS implicaría migrar contenido y reentrenar al cliente. Con la REST API se lee todo sin tocar el backend.

Turso en vez de PostgreSQL porque lo único que persiste son los mensajes del formulario de contacto. Para ese volumen SQLite es suficiente, y Turso funciona bien en Vercel sin necesidad de gestionar un servidor de base de datos.

Resend en vez de nodemailer porque en entornos serverless nodemailer necesita un servidor SMTP propio o credenciales de Gmail con límites de envío. Resend tiene una API directa y no requiere configuración adicional.
