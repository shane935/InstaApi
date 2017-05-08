import {Schema, model, Model} from "mongoose";


const TagSchema = new Schema({
  name: String,
  id: Schema.Types.ObjectId
});

const TagsSchema = new Schema({
  tags: [{type: Schema.Types.ObjectId, ref: 'Tag'}],
  id: Schema.Types.ObjectId
});




export let TagModel = model("Tag", TagSchema);
export let TagsModel = model("Tags", TagsSchema);

export interface TagInput{
  name: string,
}

export interface Tag extends TagInput {
  id: Schema.Types.ObjectId
}

