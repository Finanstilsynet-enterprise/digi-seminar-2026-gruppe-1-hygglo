import type { EquipmentItem } from '../types/equipment'

export type { EquipmentItem } from '../types/equipment'

export const equipmentCatalog: EquipmentItem[] = [
  {
    id: 'eq-1',
    name: 'Sony FX3',
    category: 'Video',
    location: 'Oslo',
    owner: 'Kari Hansen',
    pricePerDay: 1200,
    description: 'Kompakt videokamera for produksjon, intervju og event-opptak.',
    available: true,
    imageUrl:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Sony FX3 videokamera',
  },
  {
    id: 'eq-2',
    name: 'RØDE Wireless Go II',
    category: 'Lyd',
    location: 'Bergen',
    owner: 'Ola Nordmann',
    pricePerDay: 450,
    description: 'Trådløs lavpraktisk mikrofonløsning for podcast og intervju.',
    available: true,
    imageUrl:
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'RØDE Wireless Go II mikrofon',
  },
  {
    id: 'eq-3',
    name: 'Apple MacBook Pro 14',
    category: 'Kontor',
    location: 'Trondheim',
    owner: 'Per Johansen',
    pricePerDay: 700,
    description: 'Powerful arbeidsstasjon for videoredigering og presentasjoner.',
    available: true,
    imageUrl:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Apple MacBook Pro 14',
  },
  {
    id: 'eq-4',
    name: 'Canon EOS R5',
    category: 'Video',
    location: 'Oslo',
    owner: 'Anne Berg',
    pricePerDay: 980,
    description: 'Høyoppløselig speilrefsløs for fotografi og video.',
    available: false,
    imageUrl:
      'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Canon EOS R5 kamera',
  },
  {
    id: 'eq-5',
    name: 'Dell UltraSharp 27',
    category: 'Kontor',
    location: 'Stavanger',
    owner: 'Mona Solberg',
    pricePerDay: 320,
    description: 'Stort skjerm for designarbeid, møter og presentasjoner.',
    available: true,
    imageUrl:
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Dell UltraSharp 27 skjerm',
  },
  {
    id: 'eq-6',
    name: 'GoPro Hero 12',
    category: 'Mobil',
    location: 'Trondheim',
    owner: 'Eirik Mikkelsen',
    pricePerDay: 260,
    description: 'Robust actionkamera for innhold og dokumentasjon ute i felt.',
    available: true,
    imageUrl:
      'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'GoPro Hero 12 actionkamera',
  },
  {
    id: 'eq-7',
    name: 'Luma 4K LED-panel',
    category: 'Fysisk',
    location: 'Oslo',
    owner: 'Sofia Nilsen',
    pricePerDay: 560,
    description: 'Belysningspanel for studio, event og innholdsskapning.',
    available: true,
    imageUrl:
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Luma 4K LED-panel',
  },
  {
    id: 'eq-8',
    name: 'Shure SM7B',
    category: 'Lyd',
    location: 'Bergen',
    owner: 'Kari Hansen',
    pricePerDay: 390,
    description: 'Studio-mikrofon for podcast, opptak og konferanser.',
    available: true,
    imageUrl:
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Shure SM7B mikrofon',
  },
]

export const categories = ['Alle', 'Video', 'Lyd', 'Kontor', 'Fysisk', 'Mobil'] as const
