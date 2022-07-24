const express = require('express')
const router = express.Router()
const {validateUser} = require('../middleware/validate')
const { sendUser } = require('../modules/users')


router.get("/getUser", sendUser)
router.post("/user", validateUser)

module.exports = router