import type { FindLostItemById, FindLostItemByIdVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import LostItem from 'src/components/LostItem/LostItem'

export const QUERY: TypedDocumentNode<
  FindLostItemById,
  FindLostItemByIdVariables
> = gql`
  query FindLostItemById($id: Int!) {
    lostItem: lostItem(id: $id) {
      id
      name
      description
      itemPhotoURL
      location
      locationPhotoURL
      area
      dateLastSeen
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>LostItem not found</div>

export const Failure = ({
  error,
}: CellFailureProps<FindLostItemByIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  lostItem,
}: CellSuccessProps<FindLostItemById, FindLostItemByIdVariables>) => {
  return <LostItem lostItem={lostItem} />
}
