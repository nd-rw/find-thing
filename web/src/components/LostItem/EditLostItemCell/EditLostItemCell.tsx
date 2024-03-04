import type {
  EditLostItemById,
  UpdateLostItemInput,
  UpdateLostItemMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import LostItemForm from 'src/components/LostItem/LostItemForm'

export const QUERY: TypedDocumentNode<EditLostItemById> = gql`
  query EditLostItemById($id: Int!) {
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

const UPDATE_LOST_ITEM_MUTATION: TypedDocumentNode<
  EditLostItemById,
  UpdateLostItemMutationVariables
> = gql`
  mutation UpdateLostItemMutation($id: Int!, $input: UpdateLostItemInput!) {
    updateLostItem(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ lostItem }: CellSuccessProps<EditLostItemById>) => {
  const [updateLostItem, { loading, error }] = useMutation(
    UPDATE_LOST_ITEM_MUTATION,
    {
      onCompleted: () => {
        toast.success('LostItem updated')
        navigate(routes.lostItems())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateLostItemInput,
    id: EditLostItemById['lostItem']['id']
  ) => {
    updateLostItem({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit LostItem {lostItem?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <LostItemForm
          lostItem={lostItem}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
