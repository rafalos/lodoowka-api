var mongoose = require("mongoose")

var recipeSchema = mongoose.Schema({
    name: String,
    category: { type : mongoose.Schema.Types.ObjectId, ref: 'Category' },
    difficulty: Number,
    time: Number,
    ingredients: [{ type : mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }],
    tags: [{ type : mongoose.Schema.Types.ObjectId, ref: 'Tag' }],
    steps: [],
    images: []
})

module.exports = mongoose.model("Recipe", recipeSchema)