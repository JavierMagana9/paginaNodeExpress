const {Schema,model} = require('mongoose')

const InstalacionSchema= new Schema({
    titulo: String,
    descripcion: String,
})

module.exports=model('instalacione',InstalacionSchema)