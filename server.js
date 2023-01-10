require('./config/connection')
const express = require('express')
const routes = require('./routes')

const app = express()
const port = 3001

app.use(express.json())
app.use(routes)

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})