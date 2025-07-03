'use client';

import type { projects } from '@repo/database/schema';
import { AspectRatio } from '@repo/design-system/components/ui/aspect-ratio';
import { Badge } from '@repo/design-system/components/ui/badge';
import { Button } from '@repo/design-system/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@repo/design-system/components/ui/dialog';
import { Calendar, ExternalLink, Share2, Tag, X } from 'lucide-react';
import Image from 'next/image';

type Project = typeof projects.$inferSelect;

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const mainImage = project.mediaUrls?.[0] || '/placeholder-project.jpg';
  const formattedDate = project.createdAt
    ? new Date(project.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '';

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: project.title,
          text: project.description || '',
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="font-bold text-2xl">
              {project.title}
            </DialogTitle>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="flex items-center gap-2"
              >
                <Share2 className="h-4 w-4" />
                Share
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Main Image */}
          <div className="relative">
            <AspectRatio ratio={16 / 9}>
              <Image
                src={mainImage}
                alt={project.title}
                fill
                className="rounded-lg object-cover"
              />
            </AspectRatio>
          </div>

          {/* Project Info */}
          <div className="space-y-4">
            {/* Meta Information */}
            <div className="flex items-center gap-4 text-muted-foreground text-sm">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>Created {formattedDate}</span>
              </div>
              {project.tags && project.tags.length > 0 && (
                <div className="flex items-center gap-1">
                  <Tag className="h-4 w-4" />
                  <span>{project.tags.length} tags</span>
                </div>
              )}
            </div>

            {/* Description */}
            {project.description && (
              <div>
                <h3 className="mb-2 font-semibold">Description</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            )}

            {/* Tags */}
            {project.tags && project.tags.length > 0 && (
              <div>
                <h3 className="mb-2 font-semibold">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Media Gallery */}
            {project.mediaUrls && project.mediaUrls.length > 1 && (
              <div>
                <h3 className="mb-2 font-semibold">Gallery</h3>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                  {project.mediaUrls.slice(1).map((url, index) => (
                    <div key={index} className="relative">
                      <AspectRatio ratio={1}>
                        <Image
                          src={url}
                          alt={`${project.title} - Image ${index + 2}`}
                          fill
                          className="rounded-md object-cover"
                        />
                      </AspectRatio>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-2 border-t pt-4">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
            <Button className="flex items-center gap-2">
              <ExternalLink className="h-4 w-4" />
              View Project
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
