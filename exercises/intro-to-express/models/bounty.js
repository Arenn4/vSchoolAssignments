const mongoose = require('mongoose')

const bountySchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    bountyAmount: Number,
    img: String,
    type: String
})

module.exports = mongoose.model('bounty', bountySchema)