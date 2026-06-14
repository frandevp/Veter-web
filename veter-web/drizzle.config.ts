import type { Config } from "drizzle-kit"

export default {
schema: "./lib/schema.ts",
out: "./drizzle",
dialect: "turso",
dbCredentials: {
// en local usa file:./contacto.db si no hay env
url: process.env.TURSO_DATABASE_URL ?? "file:./contacto.db",
authToken: process.env.TURSO_AUTH_TOKEN,
},
} satisfies Config
