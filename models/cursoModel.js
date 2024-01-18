const mongoose = require('mongoose')

const {Schema, model}=mongoose

const cursoSchema = new Schema({
    curso: String,
    descripcion: String
})
const cursos = model('curso', cursoSchema)
console.log(cursos)
module.exports=cursos