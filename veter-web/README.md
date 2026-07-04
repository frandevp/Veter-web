# Veter-web · Clínica Veterinaria

🇬🇧 [English](#english) · 🇪🇸 [Español](#español)

---

## English

Frontend replacement for a veterinary clinic website. The original site broke after an Elementor Pro license expired, so I rebuilt it with Next.js while keeping WordPress as the blog CMS.

**Tech:** Next.js 16 · Tailwind CSS 4 · WordPress REST API · Drizzle ORM · Turso · Resend

**Features:**
- 6 routes: home, services, team, blog, post detail, contact
- Contact form that saves to DB and sends email notifications
- Blog content pulled from WordPress REST API

**Setup:**
```bash
git clone https://github.com/frandevp/Veter-web
cd Veter-web
npm install
# Add .env with Turso and Resend credentials
npm run dev
```

---

## Español

Reemplazo del frontend de una clínica veterinaria. La web original se rompió al caducar la licencia de Elementor Pro, así que la reconstruí con Next.js manteniendo WordPress como CMS del blog.

**Tecnologías:** Next.js 16 · Tailwind CSS 4 · WordPress REST API · Drizzle ORM · Turso · Resend

**Funcionalidades:**
- 6 rutas: inicio, servicios, equipo, blog, detalle de post, contacto
- Formulario de contacto que guarda en DB y envía notificación por email
- Contenido del blog desde WordPress REST API

**Instalación:**
```bash
git clone https://github.com/frandevp/Veter-web
cd Veter-web
npm install
# Añadir .env con credenciales de Turso y Resend
npm run dev
```
