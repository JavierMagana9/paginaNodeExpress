const express = require('express')

const port = process.env.PORT || 3000;

const app = express()

app.use(express.static(__dirname + '/public'))

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use("/", require("./routers/firstline.router"))


app.use((req, res) => {
    res.status(404).render("404")
})

app.listen(port, () => {
    console.log(`servidor a la escucha de ${port}`)
})






