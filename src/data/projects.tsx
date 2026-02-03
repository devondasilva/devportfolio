// src/data/projects.ts
import type { Project } from '../types/Project';

export const myProjects: Project[] = [
  {
    id: '1',
    title: 'Modern Branding Fashion',
    category: 'Branding',
    description: 'Une refonte complète pour une startup Fintech.',
    imageUrl: 'src/assets/img/img1.png', // Chemin vers ton image
    tags: ['Illustrator', 'Strategy', 'Logo']
  },
  {
    id: '2',
    title: 'General Company',
    category: 'UI/UX',
    description: 'Interface utilisateur minimaliste pour gestion de wallet.',
    imageUrl: 'src/assets/img/img2.png',
    tags: ['Figma', 'Prototyping', 'React']
  }
];