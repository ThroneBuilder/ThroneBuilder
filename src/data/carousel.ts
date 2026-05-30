import type { Tag } from '../consts';

export interface CarouselSlide {
  tag: Tag;
  image: string;
  tagline: string;
  objectPosition?: string;
}

export const carouselSlides: CarouselSlide[] = [
  { tag: 'family' as Tag, image: '/images/carousel/Family.jpg', tagline: 'Role of partner, parent, sibling, son', objectPosition: 'top' },
  { tag: 'friends' as Tag, image: '/images/carousel/Friends.JPEG', tagline: 'Show-up, hear and celebrate friends' },
  { tag: 'coding' as Tag, image: '/images/carousel/Coding.png', tagline: 'Building cool things with AI', objectPosition: 'center 20%' },
  { tag: 'legos' as Tag, image: '/images/carousel/Legos.JPEG', tagline: 'My serious LEGO hobby', objectPosition: 'center 30%' },
  { tag: 'alomac' as Tag, image: '/images/carousel/Alomac.JPEG', tagline: 'Entreprenural side-gig with my brother', objectPosition: 'center 10%' },
  { tag: 'career' as Tag, image: '/images/carousel/Career.JPEG', tagline: 'Career from graduate school through big-tech' },
];
