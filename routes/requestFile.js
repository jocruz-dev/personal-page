const express = require('express')
const fs = require('fs')

const routerFile = express.Router()

routerFile.get('/pdf',(req, res)=>{
    fs.readFile(__dirname+`/test.pdf`, (err, data)=>{
        res.contentType('application/pdf');
        res.send(data)
    })
})

module.exports = routerFile
