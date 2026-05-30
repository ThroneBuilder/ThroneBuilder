export const TAG_VALUES = ['family', 'friends', 'coding', 'legos', 'alomac', 'career'] as const;
export type Tag = typeof TAG_VALUES[number];

export const SITE_TITLE = 'Throne Builder';
export const SITE_DESCRIPTION = 'Ramblings of an unreasonable engineer';
export const SITE_URL = 'https://thronebuilder.com';
export const DEFAULT_OG_IMAGE = '/images/og-default.svg';

export const SITE_LINKS = {
  contact:      [{ label: 'jeff@thronebuilder.com', href: 'mailto:jeff@thronebuilder.com' },
                 { label: 'jjames315@live.com',     href: 'mailto:jjames315@live.com' }],
  professional: [{ label: 'LinkedIn', href: 'https://linkedin.com/in/jeff-james' }],
  code:         [{ label: 'GitHub',   href: 'https://github.com/ThroneBuilder' }],
  video:        [{ label: 'YouTube',  href: 'https://www.youtube.com/@thronebuilder' }],
  social:       [{ label: 'Facebook (ThroneBuilder)', href: 'https://www.facebook.com/ThroneBuilder' },
                 { label: 'Facebook (personal)',       href: 'https://www.facebook.com/jjames315' }],
} as const;
