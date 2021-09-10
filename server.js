const express = require('express')
const cors = require('cors')
const PDFDocument = require('pdfkit')
const fs = require('fs')
const router = require('./routes/data')
const routerScore = require('./routes/requestScore')
const routerFile = require('./routes/requestFile')
const app = express()

// Config
const port = process.env.PORT || 5000;

// Config
app.use(cors())
app.use(express.json())
//app.use('/',express.static('./client/build'))

let pdfDoc = new PDFDocument()
pdfDoc.pipe(fs.createWriteStream(`test.pdf`));
pdfDoc.font('Times-Roman').fontSize(25).fillColor('blue').text("Podemos Progresar")
pdfDoc.moveDown(0.5);
let myArrayOfItems = ['Dirección: Calle 2', 'Colonia: Cuautemoc', 'Score: 345'];
pdfDoc.fontSize(12).fillColor('black').list(myArrayOfItems);
pdfDoc.end();

// Middlewares
app.use('/api',[router, routerScore, routerFile])


app.listen(port, ()=> console.log(`Listening on port ${port}`))