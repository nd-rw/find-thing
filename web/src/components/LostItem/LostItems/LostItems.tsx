import type {
  DeleteLostItemMutation,
  DeleteLostItemMutationVariables,
  FindLostItems,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/LostItem/LostItemsCell'
import { timeTag, truncate } from 'src/lib/formatters'

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

const LostItemsList = ({ lostItems }: FindLostItems) => {
  const [deleteLostItem] = useMutation(DELETE_LOST_ITEM_MUTATION, {
    onCompleted: () => {
      toast.success('LostItem deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteLostItemMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete lostItem ' + id + '?')) {
      deleteLostItem({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Item photo url</th>
            <th>Location</th>
            <th>Location photo url</th>
            <th>Area</th>
            <th>Date last seen</th>
            <th>Date created</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {lostItems.map((lostItem) => (
            <tr key={lostItem.id}>
              <td>{truncate(lostItem.id)}</td>
              <td>{truncate(lostItem.name)}</td>
              <td>{truncate(lostItem.description)}</td>
              <td>{truncate(lostItem.itemPhotoURL)}</td>
              <td>{truncate(lostItem.location)}</td>
              <td>{truncate(lostItem.locationPhotoURL)}</td>
              <td>{truncate(lostItem.area)}</td>
              <td>{timeTag(lostItem.dateLastSeen)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.lostItem({ id: lostItem.id })}
                    title={'Show lostItem ' + lostItem.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editLostItem({ id: lostItem.id })}
                    title={'Edit lostItem ' + lostItem.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete lostItem ' + lostItem.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(lostItem.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default LostItemsList
