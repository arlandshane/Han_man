const express = require('express')
const port = process.env.PORT || 3000

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(port, (req, res) => {
    console.log("Server up and running on port " + port)
})