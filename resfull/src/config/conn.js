require('dotenv').config() // Initialize dotenv config

const mysql = require('mysql')
const con = mysql.createConnection({
  host: "remotemysql.com",
  user: "QxmRhtwRL7",
  password: "IBOe8sT6ua",
  database: "QxmRhtwRL7"
})

con.connect((err) => {
  if (err) console.log(`Error: ${err}`)
})

module.exports = con