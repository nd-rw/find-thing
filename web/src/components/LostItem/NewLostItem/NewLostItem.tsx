import type {
  CreateLostItemMutation,
  CreateLostItemInput,
  CreateLostItemMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import LostItemForm from 'src/components/LostItem/LostItemForm'

const CREATE_LOST_ITEM_MUTATION: TypedDocumentNode<
  CreateLostItemMutation,
  CreateLostItemMutationVariables
> = gql`
  mutation CreateLostItemMutation($input: CreateLostItemInput!) {
    createLostItem(input: $input) {
      id
    }
  }
`

const NewLostItem = () => {
  const [createLostItem, { loading, error }] = useMutation(
    CREATE_LOST_ITEM_MUTATION,
    {
      onCompleted: () => {
        toast.success('LostItem created')
        navigate(routes.lostItems())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateLostItemInput) => {
    createLostItem({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New LostItem</h2>
      </header>
      <div className="rw-segment-main">
        <LostItemForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewLostItem
