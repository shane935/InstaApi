import * as express from "express";
import * as graphqlHTTP from "express-graphql";
import schema from "./schema";
import * as mongoose from 'mongoose';

import {TagModel, CollectionModel, Tag, TagInput, CollectionInput, Collection} from "./models/tag";


mongoose.connect('mongodb://mongo/InstaApi');
const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: {
    async Tag({_id}:{_id:string}){
      return await TagModel.findById(_id, (err, tag:Tag) => {
        if(err){
          throw err;
        }
        return tag;
      })
    },
    async Tags(){
     return await TagModel.find({}, (err:Error, tags:Tag[]) => {
        if(err){
          throw err;
        }
        return tags;
      });
    },
    async Collections(){
     return await CollectionModel.find({}, (err:Error, collections:Collection[]) => {
        if(err){
          throw err;
        }
        return collections;
      });
    },
    async CreateTag({input}:{input:TagInput}){
      return await TagModel.create(input, (err:Error, tag:Tag) => {
        if(err){
          throw err;
        }
        return tag;
      });
    },
    async CreateCollection({input}:{input:CollectionInput}) {
      return await CollectionModel.create(input, (err:Error, collection:CollectionInput) => {
        if(err){
          throw err;
        }
        return collection;
      });
    }
  },
  graphiql: true
}));

app.listen(4000);