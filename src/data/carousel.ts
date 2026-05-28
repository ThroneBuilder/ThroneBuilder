import type { Tag } from '../consts';

export interface CarouselSlide {
  tag: Tag;
  image: string;
  tagline: string;
}

export const carouselSlides: CarouselSlide[] = [
  // Add entries here when carousel images are ready.
  // Example:
  // { tag: 'legos', image: '/images/carousel/legos.jpg', tagline: 'Brick by brick' },
];
