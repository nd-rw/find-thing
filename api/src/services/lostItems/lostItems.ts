import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const lostItems: QueryResolvers['lostItems'] = () => {
  return db.lostItem.findMany()
}

export const lostItem: QueryResolvers['lostItem'] = ({ id }) => {
  return db.lostItem.findUnique({
    where: { id },
  })
}

export const createLostItem: MutationResolvers['createLostItem'] = ({
  input,
}) => {
  return db.lostItem.create({
    data: input,
  })
}

export const updateLostItem: MutationResolvers['updateLostItem'] = ({
  id,
  input,
}) => {
  return db.lostItem.update({
    data: input,
    where: { id },
  })
}

export const deleteLostItem: MutationResolvers['deleteLostItem'] = ({ id }) => {
  return db.lostItem.delete({
    where: { id },
  })
}
