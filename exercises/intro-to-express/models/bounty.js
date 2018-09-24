const mongoose = require('mongoose')

const bountySchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: String,
    bountyAmount: Number,
    img: String,
    type: String
})

module.exports = mongoose.model('Bounty', bountySchema)