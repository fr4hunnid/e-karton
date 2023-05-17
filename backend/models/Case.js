const mongoose = require('mongoose')

const caseSchema = mongoose.Schema({
    ime_lijecnika:String,
    prezime_lijecnika:String,
    dijagnoza: String,
    sifra_bolesti: Number,
    datum_dijagnoze: String,
    specijalizacija: String,
    sifra_specijalizacije: Number,
    mjesto: String,
    ime_pacijenta: String,
    prezime_pacijenta: String,
    datum_rod_pacijenta:String,
    patient_id: String,
},{
    timestamps : true,
})

module.exports = mongoose.model('Case', caseSchema)