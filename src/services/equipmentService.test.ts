import { render, screen } from '@testing-library/react'
import { createElement } from 'react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { EquipmentList } from '../components/EquipmentList'
import { equipmentCatalog } from '../mock/equipmentData'
import { EquipmentDetailPage } from '../pages/EquipmentDetailPage'
import type { EquipmentItem } from '../types/equipment'
import { filterEquipment } from './equipmentService'

describe('filterEquipment', () => {
  it('filters by text and category', () => {
    const result = filterEquipment(equipmentCatalog, 'kamera', 'Video')

    expect(result).toHaveLength(1)
    expect(result[0].name).toBe('Sony FX3')
  })

  it('returns all items when filters are empty', () => {
    const result = filterEquipment(equipmentCatalog, '', 'Alle')

    expect(result).toHaveLength(equipmentCatalog.length)
  })
})

describe('equipment image rendering', () => {
  const equipmentWithImage: EquipmentItem = {
    id: 'eq-1',
    name: 'Sony FX3',
    category: 'Video',
    location: 'Oslo',
    owner: 'Kari Hansen',
    pricePerDay: 1200,
    description: 'Kompakt videokamera for produksjon, intervju og event-opptak.',
    available: true,
    imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Sony FX3 videokamera',
  }

  it('renders an image in the equipment list when available', () => {
    render(
      createElement(
        MemoryRouter,
        null,
        createElement(EquipmentList, { items: [equipmentWithImage] }),
      ),
    )

    expect(screen.getByRole('img', { name: 'Sony FX3 videokamera' })).toHaveAttribute(
      'src',
      equipmentWithImage.imageUrl,
    )
  })

  it('renders a fallback when an image is missing', () => {
    const itemWithoutImage: EquipmentItem = {
      ...equipmentWithImage,
      imageUrl: '',
      imageAlt: 'Sony FX3',
    }

    render(
      createElement(
        MemoryRouter,
        null,
        createElement(EquipmentList, { items: [itemWithoutImage] }),
      ),
    )

    expect(screen.getByText('Bilde ikke tilgjengelig')).toBeInTheDocument()
  })

  it('renders the detail image on the equipment detail page', () => {
    render(
      createElement(
        MemoryRouter,
        { initialEntries: ['/utstyr/eq-1'] },
        createElement(
          Routes,
          null,
          createElement(Route, { path: '/utstyr/:id', element: createElement(EquipmentDetailPage) }),
        ),
      ),
    )

    expect(screen.getByRole('img', { name: 'Sony FX3 videokamera' })).toHaveAttribute(
      'src',
      equipmentWithImage.imageUrl,
    )
  })
})
