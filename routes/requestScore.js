const express = require('express')
const axios = require('axios')

const routerScore = express.Router()

routerScore.get('/score',async (req, res)=>{
    const responseA = await axios('https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=plaza universidad&inputtype=textquery&locationbias=circle%3A2000%4047.6918452%2C-122.2226413&fields=geometry&key=AIzaSyDGuA7VnI4V0MLwX7BD9UhOTAii_S3NPo4')
    const responseB = await axios('https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=bellas artes&inputtype=textquery&locationbias=circle%3A2000%4047.6918452%2C-122.2226413&fields=geometry&key=AIzaSyDGuA7VnI4V0MLwX7BD9UhOTAii_S3NPo4')
    const responseScore = await axios({
        method: 'post',
        url: 'https://services.circulodecredito.com.mx/sandbox/v2/ficoextended',
        data: {
            "folio": "1235",
            "persona": {
              "nombres": "JUAN",
              "apellidoPaterno": "OLIVOS",
              "apellidoMaterno": "JIMENEZ",
              "fechaNacimiento": "1966-05-13",
              "RFC": "CUPU800825569",
              "domicilio": {
                "direccion": "san joaquin",
                "coloniaPoblacion": "el arenal",
                "ciudad": "mexico",
                "CP": "12345",
                "delegacionMunicipio": "iztapalapa",
                "estado": "cdmx"
              }
            }
          },
          headers: {
              'x-api-key': 'BBBQeBKMvrqmRZVytGoIXOVt4VPGU9Ii',
              'Content-Type':'application/json'
          }
    })
    console.log(responseScore);
    
    res.json({pointA:responseA.data, pointB: responseB.data, distance: responseScore.data})
})

module.exports = routerScore
