import { int, text, sqliteTable } from "drizzle-orm/sqlite-core"

// tabla para los mensajes del formulario
export const mensajes = sqliteTable("mensajes", {
id: int("id").primaryKey({ autoIncrement: true }),
nombre: text("nombre").notNull(),
email: text("email").notNull(),
mensaje: text("mensaje").notNull(),
fecha: text("fecha").notNull(),
})
