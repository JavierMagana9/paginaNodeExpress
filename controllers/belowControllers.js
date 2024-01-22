
//Mostrar Instalaciones
const getInstalaciones = async (req, res) => {
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

const getActualizar = (req, res) => {
    res.render('./admin/actualizarInstalaciones')
}

//Actualizar instalaciones



// Mostrar para eliminar Instalaciones
const getEliminar = (req, res) => {
    res.render('./admin/eliminarInstalacion')
}

module.exports={
    getActualizar,
    getInstalaciones,
    getEliminar
}