const Curso = require('../models/cursoModel')
const Instalacion = require('../models/instalacionModel')


// este es el index

const getIndex = (req, res) => {
    res.render('index')
}

//esta es mostrarCursos

const mostrarCursos = async (req, res) => {
    try {
        const cursos = await Curso.find()
        res.render('cursos', { cursos })

    } catch (error) {
        console.log("error", error)
        //gestionar las excepciones
    }
}


//mostrar Instalaciones

const getInstalaciones = async (req, res) => {
    try {
        const resultado = await fetch('http://localhost:5000/api/v1/instalaciones')

        const mostrarInstalacion = await resultado.json()
        //console.log(mostrarInstalacion)
        const { instalaciones } = mostrarInstalacion
        res.render('instalaciones', { instalaciones })


    } catch (error) {
        console.log("no se pudo visualizar las instalaciones", error)


    }
}

// mostrar crear Instalacion
const getCrear = (req, res) => {
    res.render('crear',{respuestaJSON:null})
}
// crear Instalacion

const postCrearInstalaciones = async (req, res) => {

    try {
        const resultado = req.body

        console.log("en post crear",resultado)
        const respuesta = await fetch('http://localhost:5000/api/v1/crear', {
            method: "POST",
            body: JSON.stringify(resultado),
            headers: {
                "Content-Type": "application/json",
            }
        })
        const respuestaJSON=await respuesta.json()
        console.log("en post", respuestaJSON.ok)
       console.log(respuestaJSON)
        if (!respuestaJSON.ok) {
            
           res.render('crear',{ respuestaJSON })
        }else{
            res.redirect('/admin/crear')
        }
        
    } catch (error) {
        console.log(error)

    }
    

}





module.exports = {
    getIndex,
    mostrarCursos,
    getInstalaciones,
    getCrear,
    postCrearInstalaciones,

}