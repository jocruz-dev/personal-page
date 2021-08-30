const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())
app.use(express.static('./client/build'))



app.post('/api',(req, res)=>{
    console.log(req.body);
    res.send({status: req.body})
})

app.get('/backend',(req, res)=>{
    res.send({ express: 'EXPRESS CONNECTE'})
})
app.listen(port, ()=> console.log(`Listening on port ${port}`))