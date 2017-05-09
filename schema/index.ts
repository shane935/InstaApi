import {buildSchema} from "graphql";


export default buildSchema(`

  input TagInput {
    Name: String
  }

  input CollectionInput {
    Name: String!
    Tags: [TagInput]
  }

  type Tag {
    _id: ID!
    Name: String
  }

  type Collection {
    Name: String
    Tags: [Tag]
    _id: ID!
  }

  type Query {
    Tags : [Tag]
    Collections : [Collection]
    Tag(_id: ID!) : Tag
  }

  type Mutation {
    CreateCollection(input: CollectionInput): Collection
    CreateTag(input: TagInput): Tag
  }

`);