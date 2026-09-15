import { describe, expect, it } from 'vitest'
import { equipmentCatalog } from '../mock/equipmentData'
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
