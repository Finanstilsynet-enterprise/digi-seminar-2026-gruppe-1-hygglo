import { useMemo, useState } from 'react'
import { EquipmentList } from '../components/EquipmentList'
import { categories, equipmentCatalog } from '../mock/equipmentData'
import { filterEquipment } from '../services/equipmentService'

export function EquipmentPage() {
  const [searchText, setSearchText] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle')

  const filteredEquipment = useMemo(
    () => filterEquipment(equipmentCatalog, searchText, selectedCategory),
    [searchText, selectedCategory],
  )

  return (
    <main className="equipment-page">
      <section className="equipment-toolbar">
        <div>
          <p className="section-label">Internt utstyr</p>
          <h1>Finn utstyr du trenger</h1>
        </div>

        <div className="filters">
          <input
            type="search"
            aria-label="Søk etter utstyr"
            placeholder="Søk etter utstyr, sted eller eier"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />

          <select
            aria-label="Velg kategori"
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </section>

      <EquipmentList items={filteredEquipment} />
    </main>
  )
}
