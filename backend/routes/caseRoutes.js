const express = require('express')
const router = express.Router()
const { getCases, postCases, updateCases, deleteCases } = require('../controllers/caseController')

router.route('/:id').get(getCases).post(postCases)
router.route("/:id").delete(deleteCases)
router.route('/:id/:id_case').put(updateCases)


module.exports = router