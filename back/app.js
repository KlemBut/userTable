const express = require ('express')
const cors = require("cors")
const app = express()
app.listen (4001)
app.use(cors())
app.use(express.json())

const router = require('./router/mainRouter')
app.use("/", router)