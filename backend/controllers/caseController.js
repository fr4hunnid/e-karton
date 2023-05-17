const Case = require('../models/Case')

const asyncHandler = require('express-async-handler')

//dohvace case po id-u
const getCases = asyncHandler(async(req,res)=>{

    console.log("req.params.id", req.params.id)
    const cases = await Case.findById(req.params.id)
    if(!cases){
        res.status(400)
        throw new Error('Nema casea!')
    }
    res.status(200).json(cases)
}) 
//posta pacijenta, dodaje na kraj
//GET /api/patients
const postCases = asyncHandler( async (req,res) =>{
    if(!req.body.dijagnoza){
        res.status(400)
        throw new Error('Unesite dijagnozu!')
    }
    const doktori = await Case.create({
        _id:req.body._id,
        ime_lijecnika:req.body.ime_lijecnika,
        prezime_lijecnika:req.body.prezime_lijecnika,
        dijagnoza: req.body.dijagnoza,
        sifra_bolesti: req.body.sifra_bolesti,
        datum_dijagnoze: req.body.datum,
        specijalizacija: req.body.specijalizacija,
        sifra_specijalizacije: req.body.sifra_specijalizacije,
        mjesto: req.body.mjesto,
        ime_pacijenta: req.body.ime_osiguranika,
        prezime_pacijenta: req.body.prezime_osiguranika,
        datum_rod_pacijenta:req.body.datum_rod_pacijenta,
        patient_id: req.body.patient_id,


    })
    res.status(200).json(caseovi)
})
//updatea pacijenta po id-u
//GET /api/patients/id 
const updateCases = asyncHandler( async (req,res) =>{
    const casee = await Case.findById(req.params.id)
    if(!casee){
        res.status(400)
        throw new Error('Nema casea!')
    }
    const updatedCase = await Case.findByIdAndUpdate(req.params.id,
        req.body,{new: true})
    res.status(200).json(updateCases)

})
//brise pacijenta
//GET /api/patients/broj?????
const deleteCases = asyncHandler( async (req,res) =>{
    const casee = await Case.findById(req.params.id)
    if(!casee){
        res.status(400)
        throw new Error('Nema casea!')
    }
    await Case.deleteOne({ _id: req.params.id})

    res.status(200).json({id: req.params.id})

})

module.exports = {
    getCases,
    postCases,
    updateCases,
    deleteCases,
}