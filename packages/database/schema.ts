import { pgTable, serial, text } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const page = pgTable("Page", {
	id: serial().primaryKey().notNull(),
	name: text().notNull(),
});
