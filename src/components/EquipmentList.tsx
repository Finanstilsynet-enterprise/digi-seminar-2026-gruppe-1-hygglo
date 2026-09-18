import { Link } from 'react-router-dom'
import type { EquipmentItem } from '../types/equipment'

interface EquipmentListProps {
  items: EquipmentItem[]
}

export function EquipmentList({ items }: EquipmentListProps) {
  if (items.length === 0) {
    return <p>Ingen utstyr matcher søket ditt.</p>
  }

  return (
    <div className="equipment-grid">
      {items.map((item) => {
        const imageUrl = item.imageUrl?.trim()
        const imageAlt = item.imageAlt || item.name

        return (
          <Link key={item.id} to={`/utstyr/${item.id}`} className="equipment-card">
            <div className="equipment-card-header">
              <span className="equipment-category">{item.category}</span>
              <span className={`status-badge ${item.available ? 'available' : 'unavailable'}`}>
                {item.available ? 'Ledig' : 'Opptatt'}
              </span>
            </div>

            {imageUrl ? (
              <img className="equipment-image" src={imageUrl} alt={imageAlt} loading="lazy" />
            ) : (
              <div className="equipment-image equipment-image-placeholder" aria-label="Bilde ikke tilgjengelig">
                <span>Bilde ikke tilgjengelig</span>
              </div>
            )}

            <h3>{item.name}</h3>
            <p className="equipment-location">📍 {item.location}</p>
            <p className="equipment-owner">Eier: {item.owner}</p>
            <p className="equipment-description">{item.description}</p>
            <div className="equipment-footer">
              <strong>{item.pricePerDay.toLocaleString('nb-NO')} kr</strong>
              <span>per dag</span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
