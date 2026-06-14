import { int, text, sqliteTable } from "drizzle-orm/sqlite-core";

export const mensajes = sqliteTable("mensajes", {
  id: int("id").primaryKey({ autoIncrement: true }),
  nombre: text("nombre").notNull(),
  email: text("email").notNull(),
  mensaje: text("mensaje").notNull(),
  fecha: text("fecha").notNull(),
});
