# veter-web

Nuevo frontend para [veter.es](https://veter.es), construido con Next.js. Reemplaza el diseño roto de Elementor Pro con una web moderna, rápida y sin dependencias de plugins.

El contenido del blog sigue gestionándose desde WordPress — la clínica no cambia su forma de trabajar. Solo cambia lo que ve el usuario final.

## Demo

🔗 [veter.es](https://veter.es) — pendiente de deploy en Vercel

## Qué hace

| Página | Descripción |
|--------|-------------|
| `/` | Home con hero, servicios destacados y CTA |
| `/servicios` | Catálogo de servicios de la clínica |
| `/equipo` | Presentación del equipo veterinario |
| `/blog` | Artículos desde WordPress REST API |
| `/blog/[slug]` | Post individual desde WordPress |
| `/contacto` | Formulario que guarda el mensaje y envía email |

## Stack técnico

- **Next.js 16** — App Router, Server Components, Route Handlers
- **Tailwind CSS 4** — estilos utility-first
- **WordPress REST API** — fuente de datos del blog (headless)
- **Drizzle ORM + libsql** — mensajes del formulario de contacto
- **Turso** — SQLite distribuido en producción
- **Resend** — envío de email al recibir un mensaje

## Mínimos técnicos del proyecto

- ✅ Frontend en Next.js
- ✅ Route Handler propio (`POST /api/contacto`)
- ✅ Base de datos con SQLite + Drizzle
- ✅ API externa (WordPress REST API)

## Arrancar en local

```bash
# 1. Clonar e instalar
git clone https://github.com/tuusuario/veter-web
cd veter-web
npm install

# 2. Variables de entorno
cp .env.local.example .env.local
# Edita .env.local con tu RESEND_API_KEY
# TURSO_DATABASE_URL ya tiene el valor por defecto para local (file:./contacto.db)

# 3. Crear la tabla en la BD local
npx drizzle-kit push

# 4. Arrancar
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Variables de entorno

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `TURSO_DATABASE_URL` | URL de la BD. En local: `file:./contacto.db` | `libsql://veter.turso.io` |
| `TURSO_AUTH_TOKEN` | Token de Turso (vacío en local) | `eyJ...` |
| `RESEND_API_KEY` | API key de Resend | `re_abc123` |

## Deploy en Vercel

```bash
# 1. Crear BD en Turso
turso auth login
turso db create veter-contacto
turso db show veter-contacto        # copia la URL
turso db tokens create veter-contacto  # copia el token

# 2. Crear tabla en producción
TURSO_DATABASE_URL=libsql://... TURSO_AUTH_TOKEN=... npx drizzle-kit push

# 3. Añadir variables en Vercel → Settings → Environment Variables
#    TURSO_DATABASE_URL, TURSO_AUTH_TOKEN, RESEND_API_KEY
```

Luego conecta el repo en [vercel.com](https://vercel.com) y despliega.

## Estructura del proyecto

```
app/
  page.tsx                  # Home
  layout.tsx                # Nav + footer compartidos
  blog/
    page.tsx                # Listado de posts (WP)
    [slug]/page.tsx         # Post individual (WP)
  servicios/page.tsx
  equipo/page.tsx
  contacto/page.tsx         # Formulario (Client Component)
  api/
    contacto/route.ts       # POST: guarda en BD + envía email
lib/
  db.ts                     # Cliente Drizzle + Turso/libsql
  schema.ts                 # Esquema de la tabla mensajes
drizzle.config.ts           # Configuración de Drizzle Kit
```

## Decisiones técnicas

**¿Por qué Next.js y no una SPA?**
El blog necesita SEO. Con Next.js los posts se renderizan en servidor y Google los indexa. Una SPA con React puro no indexa bien sin configuración extra.

**¿Por qué WordPress headless y no un CMS propio?**
La clínica ya tiene contenido en WordPress y sabe usarlo. Cambiar el CMS supondría migrar datos y reentrenar al cliente. Con la REST API leemos ese contenido sin tocar nada del backend.

**¿Por qué Turso y no PostgreSQL?**
El único dato que persiste es el formulario de contacto. SQLite es más que suficiente para ese volumen. Turso da SQLite distribuido con buena integración en Vercel, sin necesidad de provisionar un servidor de base de datos.

**¿Por qué Resend y no nodemailer?**
nodemailer requiere un servidor SMTP propio o credenciales de Gmail, que tienen límites y configuraciones delicadas. Resend tiene una API REST simple, funciona en entornos serverless y el plan gratuito cubre con creces las necesidades de una clínica pequeña.

## Uso de IA en el desarrollo

Este proyecto se desarrolló con asistencia de Claude (Anthropic) como herramienta de apoyo.

**Qué se pidió a la IA:**
- Estructura inicial de páginas y componentes
- Configuración del cliente Drizzle con libsql para soportar tanto `file:` local como Turso en producción
- Resolución de un error de build: Resend lanzaba excepción al instanciar en módulo-level sin API key — se movió la instancia dentro del handler
- Instalación de `@types/better-sqlite3` al detectar error de tipos en build

**Qué se revisó y corrigió manualmente:**
- Los datos de servicios y equipo se escribieron a mano (WordPress no tiene esos CPTs)
- La ubicación de la clínica ("Rincón de la Victoria, Málaga") estaba incorrecta en el placeholder inicial
- Se verificó que los endpoints de la WordPress REST API existían antes de usarlos

**Conclusión:** La IA agilizó el scaffolding y la resolución de errores de configuración, pero las decisiones de arquitectura, la verificación de la API real y el contenido específico de la clínica requirieron criterio humano.
