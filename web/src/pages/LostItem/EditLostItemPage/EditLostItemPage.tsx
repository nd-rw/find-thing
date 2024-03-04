import EditLostItemCell from 'src/components/LostItem/EditLostItemCell'

type LostItemPageProps = {
  id: number
}

const EditLostItemPage = ({ id }: LostItemPageProps) => {
  return <EditLostItemCell id={id} />
}

export default EditLostItemPage
