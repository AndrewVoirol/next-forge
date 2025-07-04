// Portfolio types for type safety
export interface Project {
  id: number;
  title: string;
  description?: string;
  tags?: string[];
  mediaUrls?: string[];
  isPublic: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface PortfolioGridProps {
  projects: Project[];
  viewMode?: 'grid' | 'list';
}

export interface ProjectCardProps {
  project: Project;
  viewMode?: 'grid' | 'list';
  onClick?: () => void;
}

export interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export interface PortfolioHeaderProps {
  onSearchChange?: (search: string) => void;
  onFilterChange?: (filter: string) => void;
  onViewChange?: (view: 'grid' | 'list') => void;
  availableTags?: string[];
}
