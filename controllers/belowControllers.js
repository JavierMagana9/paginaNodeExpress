const jwt=require('jsonwebtoken')

//Mostrar Instalaciones
const getInstalaciones = async (req, res) => {
const cookie=req.cookies.token

const payload=jwt.verify(cookie,process.env.SECRET_KEY)

console.log("payload",payload)
console.log("get instalaciones",cookie)
    try {
        const resultado = await fetch('http://localhost:5000/api/v1/instalaciones')

            const mostrarInstalacion = await resultado.json()
           // console.log(mostrarInstalacion)
            const { instalaciones } = mostrarInstalacion
            res.render('./admin/panelInstalaciones', { instalaciones })
          

    } catch (error) {
 console.log("no se pudo visualizar las instalaciones",error)

    }
}


//mostrar para Actualizar instalaciones

const getActualizar = async(req, res) => {
const idActualizar=req.params.id
console.log(idActualizar)
const resultado = req.body   

try {
    const respuesta= await fetch(`http://localhost:5000/api/v1/actualizar/${idActualizar}`,{
    method: "PUT",
    body: JSON.stringify(resultado),
    headers: {
        "Content-Type": "application/json",
    }
})
const datosActualizar = await respuesta.json()
//console.log(datosActualizar)
const {instalacionActualizada}=datosActualizar
const{titulo,descripcion,_id}=instalacionActualizada
 res.render('./admin/actualizarInstalaciones',{titulo,descripcion,_id})


    
} catch (error) {
    return res.status(500).json({
        ok:false,
        error
    })
}

}

//Actualizar instalaciones

const putActualizar=async (req,res)=>{

    const idActualizar=req.params.id

//console.log("EN PUT",idActualizar)

const cuerpo = req.body

//console.log("EN PUT",cuerpo)

const respuesta= await fetch(`http://localhost:5000/api/v1/actualizar/${idActualizar}`,{
    method: "PUT",
    body: JSON.stringify(cuerpo),
    headers: {
        "Content-Type": "application/json",
    }
})

const datosActualizados= await respuesta.json()
console.log("en put",datosActualizados)

res.redirect('/admin/instalaciones')

}







// Mostrar para eliminar Instalaciones
const getEliminar = (req, res) => {

//     const idEliminar=req.params.id
// const resultado = req.body
    
// const respuesta= await fetch(`http://localhost:5000/api/v1/actualizar/${idEliminar}`,{
//     method: "post",
//     body: JSON.stringify(resultado),
//     headers: {
//         "Content-Type": "application/json",
//     }
// })

// const datosEliminar = await respuesta.json()
// console.log(datosEliminar)
// const {instalacionActualizada}=datosEliminar
// const{_id,titulo,descripcion}=instalacionActualizada
    res.render('./admin/eliminarInstalacion')
}

module.exports={
    getActualizar,
    getInstalaciones,
    getEliminar,
    putActualizar
}