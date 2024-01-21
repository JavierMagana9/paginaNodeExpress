const express = require('express')
require('dotenv').config()

const {connection} = require('./utils/connections')

const port = process.env.PORT || 3000;
const app = express()

connection()

//Nos permite trabajar con formularios enriquecidos
app.use(express.urlencoded({extended:false}))

//Nos permite trabajar con aplicaciones JSON
app.use(express.json())

app.use(express.static(__dirname + '/public'))

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use("/", require("./routers/firstlineRouter"))
app.use("/admin",require('./routers/belowFirstLine'))


app.use((req, res) => {
    res.status(404).render("404")
})

app.listen(port, () => {
    console.log(`servidor a la escucha de ${port}`)
})






