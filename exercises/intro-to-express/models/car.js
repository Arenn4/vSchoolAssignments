const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
    make: {
        type: String,
        required: true,
        lowercase: true,
        enum: ["dodge", "gm", "chevrolet", "tesla", "ford"]
    },
    model: String,
    year: Number,
    color: String,
    prevOwners: [{
        type: Object,
    }],
    tireProvider: {
        type: Schema.Types.ObjectId,
        ref: "TireProvider"
    }
})



module.exports = mongoose.model("Car", carSchema)