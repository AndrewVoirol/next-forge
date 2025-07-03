import { database } from './index';
import { projects } from './schema';

const sampleProjects = [
  {
    title: 'Creative Digital Art Collection',
    description:
      'A series of digital artworks exploring themes of nature and technology. Created using various digital tools including Photoshop, Illustrator, and 3D modeling software.',
    tags: ['Digital Art', 'Creative', 'Design'],
    mediaUrls: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop',
    ],
    isPublic: true,
  },
  {
    title: 'Generative AI Music Visualizer',
    description:
      'An interactive web application that creates real-time visualizations based on music input. Built with React, Web Audio API, and Canvas.',
    tags: ['Web Development', 'AI', 'Interactive'],
    mediaUrls: [
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
    ],
    isPublic: true,
  },
  {
    title: 'Mobile App UI/UX Design',
    description:
      'Complete UI/UX design for a fitness tracking mobile application. Includes wireframes, prototypes, and final mockups.',
    tags: ['UI/UX', 'Mobile', 'Design'],
    mediaUrls: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
    ],
    isPublic: true,
  },
  {
    title: 'Data Visualization Dashboard',
    description:
      'Interactive dashboard for analyzing and visualizing complex datasets. Built with D3.js, React, and Node.js backend.',
    tags: ['Data Science', 'Web Development', 'Analytics'],
    mediaUrls: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    ],
    isPublic: true,
  },
  {
    title: '3D Character Animation',
    description:
      'Character design and animation for a short film project. Created using Blender and Adobe After Effects.',
    tags: ['3D Animation', 'Character Design', 'Video'],
    mediaUrls: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop',
    ],
    isPublic: true,
  },
  {
    title: 'E-commerce Platform',
    description:
      'Full-stack e-commerce platform with payment integration, inventory management, and admin dashboard.',
    tags: ['Full Stack', 'E-commerce', 'Web Development'],
    mediaUrls: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    ],
    isPublic: true,
  },
  {
    title: 'Photography Portfolio',
    description:
      'Collection of landscape and portrait photography showcasing various techniques and styles.',
    tags: ['Photography', 'Creative', 'Art'],
    mediaUrls: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
    ],
    isPublic: true,
  },
  {
    title: 'Machine Learning Model',
    description:
      'Image classification model trained on custom dataset using TensorFlow and Python. Achieved 95% accuracy.',
    tags: ['Machine Learning', 'AI', 'Python'],
    mediaUrls: [
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    ],
    isPublic: true,
  },
];

async function seedProjects() {
  try {
    console.log('Seeding projects...');

    // Clear existing projects
    await database.delete(projects);

    // Insert sample projects
    for (const project of sampleProjects) {
      await database.insert(projects).values(project);
    }

    console.log('✅ Projects seeded successfully!');
  } catch (error) {
    console.error('❌ Error seeding projects:', error);
  }
}

// Run the seed function if this file is executed directly
if (require.main === module) {
  seedProjects();
}

export { seedProjects };
