require(`dotenv`).config()

const express = require(`express`)
const bodyParser = require(`body-parser`)
const app = express()
const port = process.env.PORT || 5000
const isEmpty = require(`lodash.isempty`)

 
const bookRoute = require(`./src/routes/book_routes`)
const cartRoute = require(`./src/routes/routes`)
const halo = require('./src/routes/shelf_routes')
 
const cors = require('cors');


app.use(cors()); //mengaktifkan cors

app.listen(port, () => {
  console.log(`\n App listening on port ${port} \n`)
}) // Create listening app

app.use(bodyParser.json()) // Body parse json
app.use(bodyParser.urlencoded({ extended: false })) // body type

app.use('/', halo)
app.use(`/product`, bookRoute)
app.use(`/cart`, cartRoute)

// Username: QxmRhtwRL7

// Database name: QxmRhtwRL7

// Password: IBOe8sT6ua

// Server: remotemysql.com

// Port: 3306