'use client';

import { Badge } from '@repo/design-system/components/ui/badge';
import { Card, CardContent } from '@repo/design-system/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import type { ProjectCardProps } from '../types';

export function ProjectCard({
  project,
  viewMode = 'grid',
  onClick,
}: ProjectCardProps) {
  const mainImage = project.mediaUrls?.[0];

  if (viewMode === 'list') {
    return (
      <Card
        className="cursor-pointer transition-all hover:shadow-md"
        onClick={onClick}
      >
        <CardContent className="p-6">
          <div className="flex gap-4">
            {mainImage && (
              <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={mainImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
            )}
            <div className="flex flex-1 flex-col gap-2">
              <div>
                <h3 className="font-semibold text-lg">{project.title}</h3>
                {project.description && (
                  <p className="line-clamp-2 text-muted-foreground text-sm">
                    {project.description}
                  </p>
                )}
              </div>
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.tags.length - 3} more
                    </Badge>
                  )}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      className="cursor-pointer transition-all hover:shadow-md"
      onClick={onClick}
    >
      <CardContent className="p-0">
        {mainImage && (
          <div className="relative aspect-video overflow-hidden rounded-t-lg">
            <Image
              src={mainImage}
              alt={project.title}
              fill
              className="object-cover transition-transform hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <div className="p-4">
          <h3 className="mb-2 font-semibold text-lg">{project.title}</h3>
          {project.description && (
            <p className="mb-3 line-clamp-2 text-muted-foreground text-sm">
              {project.description}
            </p>
          )}
          {project.tags && project.tags.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-1">
              {project.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {project.tags.length > 3 && (
                <Badge variant="secondary" className="text-xs">
                  +{project.tags.length - 3} more
                </Badge>
              )}
            </div>
          )}
          <div className="flex items-center justify-between text-muted-foreground text-xs">
            <span>{project.createdAt.toLocaleDateString()}</span>
            <div className="flex items-center gap-2">
              <Github className="h-3 w-3" />
              <ExternalLink className="h-3 w-3" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
