import type { Tag } from '../consts';

export interface CarouselSlide {
  tag: Tag;
  image: string;
  tagline: string;
}

export const carouselSlides: CarouselSlide[] = [
  { tag: 'family' as Tag, image: '/images/carousel/Family.jpg', tagline: 'Role of partner, parent, sibling, son' },
  { tag: 'friends' as Tag, image: '/images/carousel/Friends.JPEG', tagline: 'Show-up, hear and celebrate friends' },
  { tag: 'career' as Tag, image: '/images/carousel/Career.JPEG', tagline: 'Productivity from graduate school to big-tech' },
  { tag: 'alomac' as Tag, image: '/images/carousel/Alomac.JPEG', tagline: 'Entreprenural side-gig with my brother' },
  { tag: 'legos' as Tag, image: '/images/carousel/Legos.JPEG', tagline: 'My own creations (MOC) in LEGO' },
];
