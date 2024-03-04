import type { Prisma, lostItem } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.lostItemCreateArgs>({
  lostItem: {
    one: {
      data: {
        name: 'String',
        description: 'String',
        itemPhotoURL: 'String',
        location: 'String',
        locationPhotoURL: 'String',
        area: 'String',
        dateLastSeen: '2024-03-04T10:12:16.852Z',
      },
    },
    two: {
      data: {
        name: 'String',
        description: 'String',
        itemPhotoURL: 'String',
        location: 'String',
        locationPhotoURL: 'String',
        area: 'String',
        dateLastSeen: '2024-03-04T10:12:16.852Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<lostItem, 'lostItem'>
