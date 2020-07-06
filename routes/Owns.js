const express = require('express')
const router = express.Router()
const ownsController = require('../controllers/Owns')

router.get('/',ownsController.getOwns)
router.post('/',ownsController.createOwns)

module.exports = router