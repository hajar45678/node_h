const mongoose = require("mongoose");
const Schema = mongoose.Schema
const articaleShema = new Schema({
    title: String,
    body: String,
    number0fLikes: Number,
}
)
const Article = mongoose.model("Article", articaleShema)
module.exports = Article;



