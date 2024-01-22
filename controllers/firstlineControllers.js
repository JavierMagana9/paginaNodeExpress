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
            console.log(mostrarInstalacion)
            const { instalaciones } = mostrarInstalacion
            res.render('instalaciones', { instalaciones })
          

    } catch (error) {
 console.log("no se pudo visualizar las instalaciones",error)


    }
}

// mostrar crear Instalacion
const getCrear = (req, res) => {
    res.render('crear')
}

// crear Instalacion

const postCrearInstalaciones = async (req, res) => {

    try {
        const resultado = req.body
        const respuesta = await fetch('http://localhost:5000/api/v1/crear', {
            method: "POST",
            body: JSON.stringify(resultado),
            headers: {
                "Content-Type": "application/json",
            }
        })
        const instalacion = await respuesta.json()
        console.log(instalacion)

    } catch (error) {
console.log('no se pudieron crear las instalaciones',error)

    }
    res.redirect('/admin/crear')

    /*  const {titulo,descripcion}= req.body
    const instalaciones= new Instalacion({
        titulo,
        descripcion
    })
try {
   instalaciones.save(instalaciones)

} catch (error) {
    console.log("problema en creacion",error)
}
 res.redirect('/admin/crear')*/

}

//mostrar para Actualizar instalaciones

const getActualizar = (req, res) => {
    res.render('actualizar')
}


//Actualizar instalaciones



// Mostrar para eliminar Instalaciones
const getEliminar = (req, res) => {
    res.render('eliminar')
}


// Elimiar Instalaciones





module.exports = {
    getIndex,
    mostrarCursos,
    getInstalaciones,
    getCrear,
    postCrearInstalaciones,
    getActualizar,
    getEliminar
}