import type { EquipmentItem } from '../mock/equipmentData'

interface EquipmentListProps {
  items: EquipmentItem[]
}

export function EquipmentList({ items }: EquipmentListProps) {
  if (items.length === 0) {
    return <p>Ingen utstyr matcher søket ditt.</p>
  }

  return (
    <div className="equipment-grid">
      {items.map((item) => (
        <article key={item.id} className="equipment-card">
          <div className="equipment-card-header">
            <span className="equipment-category">{item.category}</span>
            <span className={`status-badge ${item.available ? 'available' : 'unavailable'}`}>
              {item.available ? 'Ledig' : 'Opptatt'}
            </span>
          </div>
          <h3>{item.name}</h3>
          <p className="equipment-location">📍 {item.location}</p>
          <p className="equipment-owner">Eier: {item.owner}</p>
          <p className="equipment-description">{item.description}</p>
          <div className="equipment-footer">
            <strong>{item.pricePerDay.toLocaleString('nb-NO')} kr</strong>
            <span>per dag</span>
          </div>
        </article>
      ))}
    </div>
  )
}
