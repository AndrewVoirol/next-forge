'use client';

import { useMemo, useState } from 'react';
import type { PortfolioGridProps, Project } from '../types';
import { ProjectCard } from './project-card';
import { ProjectModal } from './project-modal';

export function PortfolioGrid({
  projects,
  viewMode = 'grid',
  searchTerm = '',
  selectedFilter = '',
}: PortfolioGridProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter projects based on search and filter
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        searchTerm === '' ||
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description?.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesFilter =
        selectedFilter === '' || project.tags?.includes(selectedFilter);

      return matchesSearch && matchesFilter;
    });
  }, [projects, searchTerm, selectedFilter]);

  if (viewMode === 'list') {
    return (
      <div className="space-y-4">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            viewMode="list"
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
        {filteredProjects.map((project) => (
          <div key={project.id} className="mb-4 break-inside-avoid">
            <ProjectCard
              project={project}
              viewMode="grid"
              onClick={() => setSelectedProject(project)}
            />
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="text-muted-foreground">
            <p className="font-medium text-lg">No projects found</p>
            <p className="text-sm">
              {searchTerm || selectedFilter
                ? 'Try adjusting your search or filter criteria'
                : 'Add some projects to get started'}
            </p>
          </div>
        </div>
      )}

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
