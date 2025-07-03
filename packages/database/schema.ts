import { sql } from 'drizzle-orm';
import {
  boolean,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

export const page = pgTable('Page', {
  id: serial().primaryKey().notNull(),
  name: text().notNull(),
});

export const projects = pgTable('projects', {
  id: serial().primaryKey().notNull(),
  title: varchar('255').notNull(),
  description: text(),
  tags: text().array(),
  mediaUrls: text().array(),
  isPublic: boolean().default(false),
  createdAt: timestamp().default(sql`now()`),
  updatedAt: timestamp().default(sql`now()`),
});
