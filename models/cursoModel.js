const {Schema,model} = require('mongoose')

const cursoSchema = new Schema({
    curso: String,
    descripcion: String
})
 
module.exports=model('curso', cursoSchema)