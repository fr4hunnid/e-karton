const Patient = require('../models/Patients')

const asyncHandler = require('express-async-handler')

//dohvace sve upisane pacijente 
//GET /api/patients
const getPatients = asyncHandler( async (req,res) =>{
    const pacijenti = await Patient.find()
    res.status(200).json(pacijenti)

})

//dohvaca jedan profil pomocu id-a

const getprofile = asyncHandler(async(req,res)=>{

    console.log("req.params.id", req.params.id)
    const pacijenti = await Patient.findById(req.params.id)
    if(!pacijenti){
        res.status(400)
        throw new Error('Nema pacijenta!')
    }
    res.status(200).json(pacijenti)
}) 

//posta pacijenta, dodaje na kraj
//GET /api/patients
const postPatients = asyncHandler( async (req,res) =>{
    if(!req.body.ime){
        res.status(400)
        throw new Error('Unesite ime!')
    }
    const pacijent = await Patient.create({
        ime: req.body.ime,
        prezime : req.body.prezime,
        email: req.body.email,
        mbo: req.body.mbo,
        oib : req.body.oib,

    })
    res.status(200).json(pacijent)
})
//updatea pacijenta po id-u
//GET /api/patients/id 
const updatePatients = asyncHandler( async (req,res) =>{
    const pacijent = await Patient.findById(req.params.id)
    if(!pacijent){
        res.status(400)
        throw new Error('Nema pacijenta!')
    }
    const updatedPacijent = await Patient.findByIdAndUpdate(req.params.id,
        req.body,{new: true})
    res.status(200).json(updatedPacijent)

})
//brise pacijenta
//GET /api/patients/broj?????
const deletePatients = asyncHandler( async (req,res) =>{
    const pacijent = await Patient.findById(req.params.id)
    if(!pacijent){
        res.status(400)
        throw new Error('Nema pacijenta!')
    }
    await Patient.deleteOne({ _id: req.params.id})

    res.status(200).json({id: req.params.id})

})


module.exports = {
    getPatients,
    postPatients,
    updatePatients,
    deletePatients,
    getprofile,
}