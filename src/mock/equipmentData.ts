export type EquipmentCategory = 'Video' | 'Lyd' | 'Kontor' | 'Fysisk' | 'Mobil'

export interface EquipmentItem {
  id: string
  name: string
  category: EquipmentCategory
  location: string
  owner: string
  pricePerDay: number
  description: string
  available: boolean
}

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
  },
]

export const categories = ['Alle', 'Video', 'Lyd', 'Kontor', 'Fysisk', 'Mobil'] as const
