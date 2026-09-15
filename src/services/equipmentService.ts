import type { EquipmentItem } from '../mock/equipmentData'

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
