'use client';

import { Badge } from '@repo/design-system/components/ui/badge';
import { Button } from '@repo/design-system/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@repo/design-system/components/ui/dialog';
import { ExternalLink, Github, X } from 'lucide-react';
import Image from 'next/image';

// Define a simple project type
interface Project {
  id: number;
  title: string;
  description?: string;
  tags?: string[];
  mediaUrls?: string[];
  isPublic: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const mainImage = project.mediaUrls?.[0];

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <DialogTitle className="pr-4 font-bold text-2xl">
              {project.title}
            </DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {mainImage && (
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src={mainImage}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
              />
            </div>
          )}

          {project.description && (
            <div>
              <h3 className="mb-2 font-semibold text-lg">Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>
          )}

          {project.tags && project.tags.length > 0 && (
            <div>
              <h3 className="mb-2 font-semibold text-lg">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between border-t pt-4">
            <div className="text-muted-foreground text-sm">
              <span>Created: {project.createdAt.toLocaleDateString()}</span>
              {project.updatedAt !== project.createdAt && (
                <span className="ml-4">
                  Updated: {project.updatedAt.toLocaleDateString()}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Github className="mr-2 h-4 w-4" />
                View Code
              </Button>
              <Button variant="outline" size="sm">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
