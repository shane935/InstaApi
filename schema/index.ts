import {buildSchema} from "graphql";


export default buildSchema(`

  input TagInput {
    name: String
  }

  type Tag {
    _id: ID!
    name: String
  }

  type Query {
    Tags : [Tag]
    Tag(_id: ID!) : Tag
  }

  type Mutation {
    CreateTag(input: TagInput) : Tag
  }

`);