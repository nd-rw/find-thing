import LostItemCell from 'src/components/LostItem/LostItemCell'

type LostItemPageProps = {
  id: number
}

const LostItemPage = ({ id }: LostItemPageProps) => {
  return <LostItemCell id={id} />
}

export default LostItemPage
