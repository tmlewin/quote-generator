const express = require('express');
const app = express();
const port = process.env.PORT || 8080
const cors = require('cors')
const helmet = require('helmet')
const http = require('http')
const fs = require('fs')
const router = require('./routes')


app.use(helmet())
app.use(cors())

const server = http.createServer(app)

app.get('/', (req, res) => {
   fs.readFile('./index.html',{encoding: 'utf8'},(err, data) => {
       if (err) {
           console.error(err)
           res.status(404).send(err)
           return
       }
       res.status(200).send(data)

   })

})
app.use('/api/v1/',router)

server.listen(port,() => {
    console.log(`listening on port ${port}`)
})




