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

export type EquipmentFilter = 'Alle' | EquipmentCategory
