import { drizzle } from "drizzle-orm/libsql"
import { createClient } from "@libsql/client"
import * as schema from "./schema"

// lo inicializo lazy porque si no peta en el build sin las env vars
let conexion: ReturnType<typeof drizzle> | null = null

export function getDb() {
if (conexion) return conexion

const client = createClient({
url: process.env.TURSO_DATABASE_URL!,
authToken: process.env.TURSO_AUTH_TOKEN,
})

conexion = drizzle(client, { schema })
return conexion
}
