import * as express from "express";
import * as graphqlHTTP from "express-graphql";
import schema from "./schema";
import * as mongoose from 'mongoose';

import {TagModel, Tag, TagInput} from "./models/tag";



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
        return tag
      })
    },
    async Tags(){
     return await TagModel.find({}, (err:Error, tags:Tag[]) => {
        if(err){
          throw err;
        }
        return tags
      });
    },
    async CreateTag({input}:{input:TagInput}){
      return await TagModel.create(input, (err:Error, tag:Tag) => {
        if(err){
          throw err;
        }
        return tag
      });

    }
  },
  graphiql: true
}));

app.listen(4000);