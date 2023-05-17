const Doctor = require('../models/Doctors')

const asyncHandler = require('express-async-handler')

//dohvace sve upisane pacijente 
//GET /api/patients
const getDoctors = asyncHandler( async (req,res) =>{
    const doktori = await Doctor.find()
    res.status(200).json(doktori)

})
//posta pacijenta, dodaje na kraj
//GET /api/patients
const postDoctors = asyncHandler( async (req,res) =>{
    if(!req.body.ime){
        res.status(400)
        throw new Error('Unesite ime!')
    }
    const doktori = await Doctor.create({
        ime: req.body.ime,
        prezime : req.body.prezime,
        email: req.body.email,
        broj_sustava: req.body.broj_sustava,
        oib : req.body.oib,
        specijalizacija: req.body.specijalizacija,
        sifra_specijalizacije:req.body.sifra_specijalizacije,


    })
    res.status(200).json(doktori)
})
//updatea pacijenta po id-u
//GET /api/patients/id 
const updateDoctors = asyncHandler( async (req,res) =>{
    const doctor = await Patient.findById(req.params.id)
    if(!doctor){
        res.status(400)
        throw new Error('Nema pacijenta!')
    }
    const updatedDoctors = await Doctor.findByIdAndUpdate(req.params.id,
        req.body,{new: true})
    res.status(200).json(updatedDoctors)

})
//brise pacijenta
//GET /api/patients/broj?????
const deleteDoctors = asyncHandler( async (req,res) =>{
    const doctor = await Doctor.findById(req.params.id)
    if(!doctor){
        res.status(400)
        throw new Error('Nema doktora!')
    }
    await Doctor.deleteOne({ _id: req.params.id})

    res.status(200).json({id: req.params.id})

})

module.exports = {
    getDoctors,
    postDoctors,
    updateDoctors,
    deleteDoctors,
}