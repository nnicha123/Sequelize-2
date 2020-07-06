const express = require('express')
const router = express.Router()
const accountControllers = require('../controllers/Account')

router.get('/',accountControllers.getAccountsAndBranchesAndManager)
router.post('/',accountControllers.createAccountsAndBranchesAndManager)

module.exports = router