var mongoose = require("mongoose")

var ingredientSchema = mongoose.Schema({
    name: String,
    cal: Number,
    protein: Number,
    fat: Number,
    carb: Number,
    tip: [],
    images: [],
    details: {
        glouten: {
            default: false,
            type: Boolean
        },
        phenyl: {
            default: false,
            type: Boolean
        },
        fiber: {
            default: false,
            type: Boolean
        },
        calcium: {
            default: false,
            type: Boolean
        },
        iron: {
            default: false,
            type: Boolean
        },
        oxidant: {
            default: false,
            type: Boolean
        },
        magnesium: {
            default: false,
            type: Boolean
        },
        potasium: {
            default: false,
            type: Boolean
        }
    }
})

module.exports = mongoose.model("Ingredient", ingredientSchema)