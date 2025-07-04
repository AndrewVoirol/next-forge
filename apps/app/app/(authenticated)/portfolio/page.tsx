import { auth } from '@repo/auth/server';
import { notFound } from 'next/navigation';
import { PortfolioGrid } from './components/portfolio-grid';
import { PortfolioHeader } from './components/portfolio-header';
import type { Project } from './types';

// Static sample data for development
const sampleProjects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce platform built with Next.js, TypeScript, and Stripe integration.',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    mediaUrls: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
    ],
    isPublic: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates and team features.',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    mediaUrls: [
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
    ],
    isPublic: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description:
      'A modern portfolio website showcasing projects and skills with responsive design.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    mediaUrls: [
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
    ],
    isPublic: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description:
      'A weather dashboard with real-time data, charts, and location-based forecasts.',
    tags: ['React', 'D3.js', 'Weather API', 'CSS Grid'],
    mediaUrls: [
      'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
    ],
    isPublic: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 5,
    title: 'Social Media Clone',
    description:
      'A social media platform with posts, comments, likes, and user authentication.',
    tags: ['React', 'Firebase', 'Redux', 'Material-UI'],
    mediaUrls: [
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    ],
    isPublic: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 6,
    title: 'Recipe Finder',
    description:
      'A recipe discovery app with search, filtering, and meal planning features.',
    tags: ['Vue.js', 'Node.js', 'PostgreSQL', 'Docker'],
    mediaUrls: [
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop',
    ],
    isPublic: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 7,
    title: 'Fitness Tracker',
    description:
      'A comprehensive fitness tracking app with workout plans and progress analytics.',
    tags: ['React Native', 'GraphQL', 'Prisma', 'PostgreSQL'],
    mediaUrls: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    ],
    isPublic: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 8,
    title: 'AI Chat Assistant',
    description:
      'An AI-powered chat assistant with natural language processing and context awareness.',
    tags: ['Python', 'OpenAI API', 'FastAPI', 'React'],
    mediaUrls: [
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    ],
    isPublic: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export default async function PortfolioPage() {
  try {
    const { userId } = await auth();

    if (!userId) {
      notFound();
    }

    // Use static data for now to avoid database connection issues
    const portfolioProjects = sampleProjects;

    return (
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <PortfolioHeader />
        <PortfolioGrid projects={portfolioProjects} />
      </div>
    );
  } catch (error) {
    console.error('Portfolio page error:', error);

    // Fallback to static data if auth fails
    return (
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <PortfolioHeader />
        <PortfolioGrid projects={sampleProjects} />
      </div>
    );
  }
}
