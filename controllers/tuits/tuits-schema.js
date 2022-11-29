import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tuit: String,
  likes: Number,
  liked: String,
  image: String,
  disliked: String,
  dislikes: Number,
  handle: String,
  replies: Number,
  retuits: Number,
  time: String,
  userName: String,
}, {collection: 'tuits'});
export default schema;  
