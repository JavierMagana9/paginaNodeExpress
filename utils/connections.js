const mongoose = require('mongoose')


const connection = async() => {

try {
    await mongoose.connect(process.env.URI)
    console.log("funciona la conexion mongoose")
} catch (error) {
    console.log("No se establecio la conexion",error)
}}



module.exports = {connection}