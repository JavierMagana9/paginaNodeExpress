const express = require('express')
require('dotenv').config()

const {connection} = require('./utils/connections')

const port = process.env.PORT || 3000;
const app = express()

connection()
app.use(express.static(__dirname + '/public'))

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use("/", require("./routers/firstlineRouter"))


app.use((req, res) => {
    res.status(404).render("404")
})

app.listen(port, () => {
    console.log(`servidor a la escucha de ${port}`)
})






