import {Schema, model, Model} from "mongoose";


const TagSchema = new Schema({
  name: String,
  id: Schema.Types.ObjectId
});


const CollectionSchema = new Schema({
  name: String,
  tags: [{type: Schema.Types.ObjectId, ref: 'Tag'}],
  id: Schema.Types.ObjectId
});


export let TagModel = model("Tag", TagSchema);
export let CollectionModel = model("Collection", CollectionSchema);

export interface TagInput{
  name: string,
}



export interface Tag extends TagInput {
  id: Schema.Types.ObjectId
}

export interface CollectionInput{
  name: string,
  tags?: TagInput[]
}

export interface Collection{
  tags: TagInput[],
  id: Schema.Types.ObjectId
}


