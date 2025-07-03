'use client';

import { Badge } from '@repo/design-system/components/ui/badge';
import { Button } from '@repo/design-system/components/ui/button';
import { Input } from '@repo/design-system/components/ui/input';
import { Filter, Grid3X3, List, Search } from 'lucide-react';
import { useState } from 'react';

interface PortfolioHeaderProps {
  onSearchChange?: (search: string) => void;
  onFilterChange?: (filter: string) => void;
  onViewChange?: (view: 'grid' | 'list') => void;
  availableTags?: string[];
}

export function PortfolioHeader({
  onSearchChange,
  onFilterChange,
  onViewChange,
  availableTags = [],
}: PortfolioHeaderProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    onSearchChange?.(value);
  };

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    onFilterChange?.(filter);
  };

  const handleViewChange = (view: 'grid' | 'list') => {
    setViewMode(view);
    onViewChange?.(view);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-3xl tracking-tight">Portfolio</h1>
          <p className="text-muted-foreground">
            Showcase your creative work and projects
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant={viewMode === 'grid' ? 'default' : 'outline'}
            size="sm"
            onClick={() => handleViewChange('grid')}
          >
            <Grid3X3 className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'outline'}
            size="sm"
            onClick={() => handleViewChange('list')}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="-translate-y-1/2 absolute top-1/2 left-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground text-sm">Filter:</span>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant={selectedFilter === '' ? 'default' : 'secondary'}
              className="cursor-pointer"
              onClick={() => handleFilterChange('')}
            >
              All
            </Badge>
            {availableTags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedFilter === tag ? 'default' : 'secondary'}
                className="cursor-pointer"
                onClick={() => handleFilterChange(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
