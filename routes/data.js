const express = require('express')
const cors = require('cors')
const data = require('../data/groups')

const router = express.Router()

router.get('/data',(req, res)=>{
    res.send(data)
})


module.exports = router