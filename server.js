const express = require('express')
const cors = require('cors')
const router = require('./routes/data')
const routerScore = require('./routes/requestScore')
const app = express()
const port = process.env.PORT || 5000;

// Config
app.use(cors())
app.use(express.json())
//app.use('/',express.static('./client/build'))

// Middlewares
app.use('/api',[router, routerScore])


app.listen(port, ()=> console.log(`Listening on port ${port}`))