var mongoose = require("mongoose")

var categorySchema = mongoose.Schema({
    id: Number,
    name: String
})

module.exports = mongoose.model("Category", categorySchema)