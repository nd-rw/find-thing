export const schema = gql`
  type LostItem {
    id: Int!
    name: String!
    description: String!
    itemPhotoURL: String!
    location: String!
    locationPhotoURL: String!
    area: String!
    dateLastSeen: DateTime!
  }

  type Query {
    lostItems: [LostItem!]! @requireAuth
    lostItem(id: Int!): LostItem @requireAuth
  }

  input CreateLostItemInput {
    name: String!
    description: String!
    itemPhotoURL: String!
    location: String!
    locationPhotoURL: String!
    area: String!
    dateLastSeen: DateTime!
  }

  input UpdateLostItemInput {
    name: String
    description: String
    itemPhotoURL: String
    location: String
    locationPhotoURL: String
    area: String
    dateLastSeen: DateTime
  }

  type Mutation {
    createLostItem(input: CreateLostItemInput!): LostItem! @requireAuth
    updateLostItem(id: Int!, input: UpdateLostItemInput!): LostItem!
      @requireAuth
    deleteLostItem(id: Int!): LostItem! @requireAuth
  }
`
