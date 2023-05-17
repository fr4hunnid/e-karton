const mongoose = require('mongoose')
const doctorSchema = mongoose.Schema({
    ime: String,
    prezime: String,
    email: String,
    password: String,
    broj_sustava: Number,
    oib: Number,
    specijalizacija: String,
    sifra_specijalizacije: Number,
},{
    timestamps : true,
})

module.exports = mongoose.model('Doctor', doctorSchema)