import { auth } from '@repo/auth/server';
import { database } from '@repo/database';
import { projects } from '@repo/database/schema';
import { notFound } from 'next/navigation';
import { PortfolioGrid } from './components/portfolio-grid';
import { PortfolioHeader } from './components/portfolio-header';

export default async function PortfolioPage() {
  const { userId } = await auth();

  if (!userId) {
    notFound();
  }

  // Fetch projects from database
  const portfolioProjects = await database.select().from(projects);

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <PortfolioHeader />
      <PortfolioGrid projects={portfolioProjects} />
    </div>
  );
}
