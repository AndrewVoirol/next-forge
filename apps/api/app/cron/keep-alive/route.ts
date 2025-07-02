import { database } from '@repo/database';
import { page } from '@repo/database/schema';
import { eq } from 'drizzle-orm';

export const GET = async () => {
  // Insert a new page
  const [newPage] = await database
    .insert(page)
    .values({ name: 'cron-temp' })
    .returning();

  // Delete the page by id
  if (newPage && newPage.id) {
    await database.delete(page).where(eq(page.id, newPage.id));
  }

  return new Response('OK', { status: 200 });
};
