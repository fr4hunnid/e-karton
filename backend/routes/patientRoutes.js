const express = require('express')
const router = express.Router()
const {getPatients, postPatients,updatePatients,deletePatients, getprofile} = require('../controllers/patientController')

router.route('/').get(getPatients).post(postPatients)
router.route('/:id').put(updatePatients).delete(deletePatients)
router.route('/profile/:id').get(getprofile)


module.exports = router