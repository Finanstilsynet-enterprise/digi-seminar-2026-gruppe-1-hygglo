import { Link, useParams } from 'react-router-dom'
import { getEquipmentById } from '../services/equipmentService'

// Placeholder for issue #9 "Lag detaljside for utstyr" — replace with full detail view.
export function EquipmentDetailPage() {
  const { id } = useParams<{ id: string }>()
  const equipment = id ? getEquipmentById(id) : undefined

  if (!equipment) {
    return (
      <main className="equipment-page">
        <p>Fant ikke utstyret.</p>
        <Link to="/">Tilbake til oversikten</Link>
      </main>
    )
  }

  return (
    <main className="equipment-page">
      <Link to="/">Tilbake til oversikten</Link>
      <h1>{equipment.name}</h1>
      <p>Detaljside kommer snart. Se issue #9.</p>
      <Link to={`/utstyr/${equipment.id}/book`}>Book dette utstyret</Link>
    </main>
  )
}
