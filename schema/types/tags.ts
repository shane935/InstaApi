// import {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList} from "graphql";


export class Tag {
  id: number;
  name: string;
  sex: "male" | "female";
  constructor({id, name, sex}:{id:number, name:string, sex:"male" | "female"}) {
    this.id = id;
    this.name = name;
    this.sex = sex;
  }
}

// let tag = new GraphQLObjectType({
//   name: 'Tag',
//   description: 'A tag',
//   fields: () => ({
//     id: { type: GraphQLID },
//     name: { type: GraphQLString },
//     sex: { type: GraphQLString }
//   })
// });

// let tags = new GraphQLObjectType({
//   name: 'Tags',
//   description: 'A list of tags',
//   fields: () => ({
//     list: { type: new GraphQLList(tag) }
//   })
// });

// let queryTags = {
//   type: new GraphQLList(tag),
//   resolve: () => {
//     return tagsList;
//   } 
// }

// let addTag = {
//   type:
//   args: {
//     input: {
//       type: tag,
//     }
//   },
//   resolve: () => {
//     return tagsList;
//   } 
// }

// let queryTag = {
//   type: tag,
//   args: {
//     id: {
//       type: GraphQLID,
//     }
//   },
//   resolve: ({}, {id}:{id:number}) => {
    
//   } 
// }

// export {queryTags, queryTag, addTag};