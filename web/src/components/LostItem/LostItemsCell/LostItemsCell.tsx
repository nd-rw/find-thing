import type { FindLostItems, FindLostItemsVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import LostItems from 'src/components/LostItem/LostItems'

export const QUERY: TypedDocumentNode<
  FindLostItems,
  FindLostItemsVariables
> = gql`
  query FindLostItems {
    lostItems {
      id
      name
      description
      itemPhotoURL
      location
      locationPhotoURL
      area
      dateLastSeen
      dateCreated
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No lostItems yet. '}
      <Link to={routes.newLostItem()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps<FindLostItems>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  lostItems,
}: CellSuccessProps<FindLostItems, FindLostItemsVariables>) => {
  return <LostItems lostItems={lostItems} />
}
