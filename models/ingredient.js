var mongoose = require("mongoose")

var ingredientSchema = mongoose.Schema({
    name: String,
    cal: Number,
    protein: Number,
    fat: Number,
    carb: Number,
    tip: [],
    images: []
})

module.exports = mongoose.model("Ingredient", ingredientSchema)