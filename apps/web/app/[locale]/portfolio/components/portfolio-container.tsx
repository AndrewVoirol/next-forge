'use client';

import { useState } from 'react';
import type { Project } from '../types';
import { PortfolioGrid } from './portfolio-grid';
import { PortfolioHeader } from './portfolio-header';

interface PortfolioContainerProps {
  projects: Project[];
}

export function PortfolioContainer({ projects }: PortfolioContainerProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Get unique tags for filtering
  const availableTags = Array.from(
    new Set(projects.flatMap((project) => project.tags || []))
  );

  return (
    <div className="flex flex-1 flex-col gap-4">
      <PortfolioHeader
        onSearchChange={setSearchTerm}
        onFilterChange={setSelectedFilter}
        onViewChange={setViewMode}
        availableTags={availableTags}
      />
      <PortfolioGrid
        projects={projects}
        viewMode={viewMode}
        searchTerm={searchTerm}
        selectedFilter={selectedFilter}
      />
    </div>
  );
}
