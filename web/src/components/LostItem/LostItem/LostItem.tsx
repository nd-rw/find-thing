import type {
  DeleteLostItemMutation,
  DeleteLostItemMutationVariables,
  FindLostItemById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_LOST_ITEM_MUTATION: TypedDocumentNode<
  DeleteLostItemMutation,
  DeleteLostItemMutationVariables
> = gql`
  mutation DeleteLostItemMutation($id: Int!) {
    deleteLostItem(id: $id) {
      id
    }
  }
`

interface Props {
  lostItem: NonNullable<FindLostItemById['lostItem']>
}

const LostItem = ({ lostItem }: Props) => {
  const [deleteLostItem] = useMutation(DELETE_LOST_ITEM_MUTATION, {
    onCompleted: () => {
      toast.success('LostItem deleted')
      navigate(routes.lostItems())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteLostItemMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete lostItem ' + id + '?')) {
      deleteLostItem({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            LostItem {lostItem.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{lostItem.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{lostItem.name}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{lostItem.description}</td>
            </tr>
            <tr>
              <th>Item photo url</th>
              <td>{lostItem.itemPhotoURL}</td>
            </tr>
            <tr>
              <th>Location</th>
              <td>{lostItem.location}</td>
            </tr>
            <tr>
              <th>Location photo url</th>
              <td>{lostItem.locationPhotoURL}</td>
            </tr>
            <tr>
              <th>Area</th>
              <td>{lostItem.area}</td>
            </tr>
            <tr>
              <th>Date last seen</th>
              <td>{timeTag(lostItem.dateLastSeen)}</td>
            </tr>
            <tr>
              <th>Date created</th>
              <td>{timeTag(lostItem.dateCreated)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editLostItem({ id: lostItem.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(lostItem.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default LostItem
