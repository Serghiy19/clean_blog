const mongoose = require('mongoose')
const Schema = mongoose.Schema
const BlogPostShema = new Schema({
  title: String,
  body: String
});
const BlogPost = mongoose.model('Blogpost',BlogPostShema);
module.exports = BlogPost
