const mongoose = require('mongoose')
const patientSchema = mongoose.Schema({
    ime: String,
    prezime: String,
    email: String,
    mbo: Number,
    oib: Number,
    spol:String,
    godiste: Number,
},{
    timestamps : true,
})

module.exports = mongoose.model('Patient', patientSchema)