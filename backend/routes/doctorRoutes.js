const express = require('express')
const router = express.Router()
const {getDoctors, postDoctors,updateDoctors,deleteDoctors} = require('../controllers/doctorController')

router.route('/').get(getDoctors).post(postDoctors)
router.route('/:id').put(updateDoctors).delete(deleteDoctors)


module.exports = router