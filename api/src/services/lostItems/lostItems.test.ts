import type { lostItem } from '@prisma/client'

import {
  lostItems,
  lostItem,
  createLostItem,
  updateLostItem,
  deleteLostItem,
} from './lostItems'
import type { StandardScenario } from './lostItems.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('lostItems', () => {
  scenario('returns all lostItems', async (scenario: StandardScenario) => {
    const result = await lostItems()

    expect(result.length).toEqual(Object.keys(scenario.lostItem).length)
  })

  scenario('returns a single lostItem', async (scenario: StandardScenario) => {
    const result = await lostItem({ id: scenario.lostItem.one.id })

    expect(result).toEqual(scenario.lostItem.one)
  })

  scenario('creates a lostItem', async () => {
    const result = await createLostItem({
      input: {
        name: 'String',
        description: 'String',
        itemPhotoURL: 'String',
        location: 'String',
        locationPhotoURL: 'String',
        area: 'String',
        dateLastSeen: '2024-03-04T10:12:16.838Z',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.itemPhotoURL).toEqual('String')
    expect(result.location).toEqual('String')
    expect(result.locationPhotoURL).toEqual('String')
    expect(result.area).toEqual('String')
    expect(result.dateLastSeen).toEqual(new Date('2024-03-04T10:12:16.838Z'))
  })

  scenario('updates a lostItem', async (scenario: StandardScenario) => {
    const original = (await lostItem({
      id: scenario.lostItem.one.id,
    })) as lostItem
    const result = await updateLostItem({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a lostItem', async (scenario: StandardScenario) => {
    const original = (await deleteLostItem({
      id: scenario.lostItem.one.id,
    })) as lostItem
    const result = await lostItem({ id: original.id })

    expect(result).toEqual(null)
  })
})
