const express = require('express')
const router = express.Router()
const { getRecord, postRecord } = require('../controllers/recordControllers')

router.route('/:id').get(getRecord).post(postRecord)


module.exports = router