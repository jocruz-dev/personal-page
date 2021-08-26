const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

app.use(cors())

app.listen(port, ()=> console.log(`Listening on port ${port}`))

app.get('/backend',(req, res)=>{
    res.send({ express: 'EXPRESS CONNECTED'})
})