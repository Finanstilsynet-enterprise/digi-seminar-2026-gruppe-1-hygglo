import { Link, useParams } from 'react-router-dom'
import { getEquipmentById } from '../services/equipmentService'

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

  const imageUrl = equipment.imageUrl?.trim()
  const imageAlt = equipment.imageAlt || equipment.name

  return (
    <main className="equipment-page equipment-detail-page">
      <Link to="/" className="back-link">
        ← Tilbake til oversikten
      </Link>

      <article className="equipment-detail-card">
        <div className="equipment-detail-image-wrap">
          {imageUrl ? (
            <img className="equipment-detail-image" src={imageUrl} alt={imageAlt} />
          ) : (
            <div className="equipment-image-placeholder equipment-detail-placeholder" aria-label="Bilde ikke tilgjengelig">
              <span>Bilde ikke tilgjengelig</span>
            </div>
          )}
        </div>

        <div className="equipment-detail-content">
          <div className="equipment-detail-header">
            <span className="equipment-category">{equipment.category}</span>
            <span className={`status-badge ${equipment.available ? 'available' : 'unavailable'}`}>
              {equipment.available ? 'Ledig' : 'Opptatt'}
            </span>
          </div>

          <h1>{equipment.name}</h1>
          <p className="equipment-location">📍 {equipment.location}</p>
          <p className="equipment-owner">Eier: {equipment.owner}</p>
          <p className="equipment-description">{equipment.description}</p>

          <div className="equipment-detail-meta">
            <div>
              <span className="meta-label">Pris</span>
              <strong>{equipment.pricePerDay.toLocaleString('nb-NO')} kr/dag</strong>
            </div>
            <div>
              <span className="meta-label">Status</span>
              <strong>{equipment.available ? 'Tilgjengelig for utlån' : 'Midlertidig opptatt'}</strong>
            </div>
          </div>

          <Link to={`/utstyr/${equipment.id}/book`} className="book-link">
            {equipment.available ? 'Book dette utstyret' : 'Send forespørsel om tilgjengelighet'}
          </Link>
        </div>
      </article>
    </main>
  )
}
