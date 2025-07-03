'use client';

import type { projects } from '@repo/database/schema';
import { AspectRatio } from '@repo/design-system/components/ui/aspect-ratio';
import { Badge } from '@repo/design-system/components/ui/badge';
import {
  Card,
  CardContent,
  CardHeader,
} from '@repo/design-system/components/ui/card';
import { Calendar, ExternalLink, Tag } from 'lucide-react';
import Image from 'next/image';

type Project = typeof projects.$inferSelect;

interface ProjectCardProps {
  project: Project;
  viewMode: 'grid' | 'list';
  onClick?: () => void;
}

export function ProjectCard({ project, viewMode, onClick }: ProjectCardProps) {
  const mainImage = project.mediaUrls?.[0] || '/placeholder-project.jpg';
  const formattedDate = project.createdAt
    ? new Date(project.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
      })
    : '';

  if (viewMode === 'list') {
    return (
      <Card
        className="cursor-pointer transition-all hover:shadow-md"
        onClick={onClick}
      >
        <CardContent className="p-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <AspectRatio ratio={16 / 9} className="w-48">
                <Image
                  src={mainImage}
                  alt={project.title}
                  fill
                  className="rounded-md object-cover"
                />
              </AspectRatio>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between">
                <div className="min-w-0 flex-1">
                  <h3 className="truncate font-semibold text-xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <ExternalLink className="ml-2 h-4 w-4 flex-shrink-0 text-muted-foreground" />
              </div>
              <div className="mt-4 flex items-center gap-4">
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>{formattedDate}</span>
                </div>
                {project.tags && project.tags.length > 0 && (
                  <div className="flex items-center gap-1">
                    <Tag className="h-4 w-4 text-muted-foreground" />
                    <div className="flex gap-1">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      className="group cursor-pointer transition-all hover:shadow-md"
      onClick={onClick}
    >
      <CardHeader className="p-0">
        <AspectRatio ratio={16 / 9}>
          <Image
            src={mainImage}
            alt={project.title}
            fill
            className="rounded-t-lg object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
          <div className="absolute top-3 right-3 opacity-0 transition-opacity group-hover:opacity-100">
            <ExternalLink className="h-4 w-4 text-white" />
          </div>
        </AspectRatio>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="truncate font-semibold">{project.title}</h3>
        {project.description && (
          <p className="mt-1 line-clamp-2 text-muted-foreground text-sm">
            {project.description}
          </p>
        )}
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-1 text-muted-foreground text-xs">
            <Calendar className="h-3 w-3" />
            <span>{formattedDate}</span>
          </div>
          {project.tags && project.tags.length > 0 && (
            <div className="flex gap-1">
              {project.tags.slice(0, 2).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {project.tags.length > 2 && (
                <Badge variant="secondary" className="text-xs">
                  +{project.tags.length - 2}
                </Badge>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
