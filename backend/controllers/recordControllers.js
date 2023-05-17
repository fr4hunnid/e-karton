const Case = require('../models/Case')
const asyncHandler = require('express-async-handler')
const Record = require('../models/Record')



var multer = require('multer');
 
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
 
var upload = multer({ storage: storage });

const getRecord = asyncHandler(async(req,res)=>{

    const recordi = await Record.findById(req.params.id)
    if(!recordi){
        res.status(400)
        throw new Error('Nema recorda!')
    }
    res.render('imagepage',{items: data})
}) 
 
 

const postRecord = asyncHandler( async (req,res) =>{
    var obj = {
        name: req.body.name,
        desc: req.body.desc,
        patient_id:req.body.patient_id,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
    imgSchema.create(obj)
    .then ((err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            // item.save();
            res.redirect('/');
        }
    });

})


/*

/*app.post('/records/:id', upload.single('image'), (req, res, next) => {
 
    var obj = {
        name: req.body.name,
        desc: req.body.desc,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
    imgSchema.create(obj)
    .then ((err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            // item.save();
            res.redirect('/');
        }
    });
});*/

/*app.get('/records/:id', (req, res) => {
    imgSchema.find({})
    .then((data, err)=>{
        if(err){
            console.log(err);
        }
        res.render('imagepage',{items: data})
    })
});
dohvace case po id-u

//posta pacijenta, dodaje na kraj
//GET /api/patients
const postRecord = asyncHandler( async (req,res) =>{
    if(!req.body.dijagnoza){
        res.status(400)
        throw new Error('Unesite dijagnozu!')
    }
    const recordi = await Record.create({
        _id:req.body._id,
        opis_recorda: req.body.dijagnoza,
        datum_recorda: req.body.datum,
        patient_id: req.body.patient_id,
        file_recorda:req.body.file_recorda,


    })
    res.status(200).json(recordi)
})
//updatea pacijenta po id-u
//GET /api/patients/id 
const updateRecord = asyncHandler( async (req,res) =>{
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
const deleteRecord = asyncHandler( async (req,res) =>{
    const recordi = await Record.findById(req.params.id)
    if(!recordi){
        res.status(400)
        throw new Error('Nema casea!')
    }
    await Record.deleteOne({ _id: req.params.id})

    res.status(200).json({id: req.params.id})

})
*/
module.exports = {
    getRecord,
    postRecord,
}