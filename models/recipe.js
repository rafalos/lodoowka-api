var mongoose = require("mongoose")

var recipeSchema = mongoose.Schema({
    name: String,
    category: { type : mongoose.Schema.Types.ObjectId, ref: 'Category' },
    difficulty: Number,
    time: Number,
    ingredients: [{
      ingredient: { type : mongoose.Schema.Types.ObjectId, ref: 'Ingredient' },
      weight: Number
    }],
    tags: [{ type : mongoose.Schema.Types.ObjectId, ref: 'Tag' }],
    steps: [],
    images: []
})

module.exports = mongoose.model("Recipe", recipeSchema)