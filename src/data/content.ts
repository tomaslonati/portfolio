export const SOCIAL_LINKS = {
  github: 'https://github.com/tomaslonati',
  linkedin: 'https://linkedin.com/in/tomaslonati',
  email: 'tomaslonati@gmail.com',
  phone: '+54 2966 740772',
  phoneHref: 'tel:+542966740772',
}

export interface GalleryImage {
  src: string
  fullPage: boolean  // true = imagen full-page → efecto scroll Dribbble
}

export interface ProjectImages {
  thumb: string
  thumbFullPage: boolean
  gallery: GalleryImage[]
}

export const PROJECT_IMAGES: Record<string, ProjectImages> = {
  'aventura-andina': {
    thumb: '/images/projects/aventura-andina/thumb.png',
    thumbFullPage: true, // home.png — 10634 px de alto
    gallery: [
      { src: '/images/projects/aventura-andina/home.png',          fullPage: true  },
      { src: '/images/projects/aventura-andina/excursion.png',     fullPage: true  },
      { src: '/images/projects/aventura-andina/nosotros.png',      fullPage: true  },
      { src: '/images/projects/aventura-andina/checkout.png',      fullPage: false },
      { src: '/images/projects/aventura-andina/checkout-2.png',    fullPage: false },
      { src: '/images/projects/aventura-andina/admin.png',         fullPage: false },
      { src: '/images/projects/aventura-andina/admin-2.png',       fullPage: true  },
      { src: '/images/projects/aventura-andina/admin-important.png', fullPage: false },
      { src: '/images/projects/aventura-andina/admin-panel.png',   fullPage: false },
    ],
  },
  'seguromarket': {
    thumb: '/images/projects/seguromarket/thumb.png',
    thumbFullPage: false, // 2168 px — viewport normal
    gallery: [
      { src: '/images/projects/seguromarket/1.png', fullPage: false },
      { src: '/images/projects/seguromarket/2.png', fullPage: false },
      { src: '/images/projects/seguromarket/3.png', fullPage: true  }, // 4304 px
    ],
  },
  'grupo-winding': {
    thumb: '/images/projects/grupo-winding/thumb.png',
    thumbFullPage: true, // home — 10532 px de alto
    gallery: [
      { src: '/images/projects/grupo-winding/home.png',            fullPage: true  },
      { src: '/images/projects/grupo-winding/productos.png',       fullPage: false },
      { src: '/images/projects/grupo-winding/producto-detalle.png',fullPage: true  },
      { src: '/images/projects/grupo-winding/calculador.png',      fullPage: true  },
    ],
  },
  'signalink': {
    thumb: '/images/projects/signalink/thumb.jpeg',
    thumbFullPage: true, // portrait mobile
    gallery: [
      { src: '/images/projects/signalink/1.jpeg', fullPage: true },
      { src: '/images/projects/signalink/2.jpeg', fullPage: true },
      { src: '/images/projects/signalink/3.jpeg', fullPage: true },
      { src: '/images/projects/signalink/4.jpeg', fullPage: true },
    ],
  },
  'sinplagas': {
    thumb: '/images/projects/sinplagas/thumb.png',
    thumbFullPage: true, // 7694 px de alto
    gallery: [
      { src: '/images/projects/sinplagas/thumb.png', fullPage: true },
    ],
  },
  'airbnb-db': {
    thumb: '/images/projects/airbnb-db/thumb.png',
    thumbFullPage: false,
    gallery: [
      { src: '/images/projects/airbnb-db/thumb.png', fullPage: false },
    ],
  },
}

export const TECH_MARQUEE = [
  'React', 'Node.js', 'PostgreSQL', 'AWS', 'TypeScript',
  'Tailwind CSS', 'Supabase', 'MongoDB', 'Redis', 'Vercel',
  'Python', 'Figma', 'REST APIs', 'React Native', 'Git',
]
