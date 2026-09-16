import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { EquipmentList } from '../components/EquipmentList'
import { categories } from '../mock/equipmentData'
import { filterEquipment, getEquipmentCatalog } from '../services/equipmentService'

export function EquipmentPage() {
  const [searchText, setSearchText] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle')
  const equipmentCatalog = useMemo(() => getEquipmentCatalog(), [])

  const filteredEquipment = useMemo(
    () => filterEquipment(equipmentCatalog, searchText, selectedCategory),
    [equipmentCatalog, searchText, selectedCategory],
  )

  return (
    <main className="equipment-page">
      <section className="equipment-toolbar">
        <div>
          <p className="section-label">Internt utstyr</p>
          <h1>Finn utstyr du trenger</h1>
          <Link to="/foresporsler" className="owner-link">
            Se innkommende forespørsler
          </Link>
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
