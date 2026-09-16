import { equipmentCatalog, type EquipmentItem } from '../mock/equipmentData'
import { readFromStorage, writeToStorage } from './storage'

const EQUIPMENT_STORAGE_KEY = 'hygglo:equipment-catalog'

export function getEquipmentCatalog(): EquipmentItem[] {
  return readFromStorage<EquipmentItem[]>(EQUIPMENT_STORAGE_KEY, equipmentCatalog)
}

export function saveEquipmentCatalog(items: EquipmentItem[]): void {
  writeToStorage(EQUIPMENT_STORAGE_KEY, items)
}

export function getEquipmentById(id: string): EquipmentItem | undefined {
  return getEquipmentCatalog().find((item) => item.id === id)
}

export function filterEquipment(
  items: EquipmentItem[],
  searchText: string,
  selectedCategory: string,
): EquipmentItem[] {
  const normalizedSearch = searchText.trim().toLowerCase()

  return items.filter((item) => {
    const matchesCategory = selectedCategory === 'Alle' || item.category === selectedCategory
    const matchesSearch =
      normalizedSearch.length === 0 ||
      item.name.toLowerCase().includes(normalizedSearch) ||
      item.location.toLowerCase().includes(normalizedSearch) ||
      item.owner.toLowerCase().includes(normalizedSearch) ||
      item.description.toLowerCase().includes(normalizedSearch)

    return matchesCategory && matchesSearch
  })
}
