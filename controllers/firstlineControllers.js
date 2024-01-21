const Curso = require('../models/cursoModel')
const Instalacion =require('../models/instalacionModel')


// este es el index

const getIndex = (req, res) => {
    res.render('index')
}

//esta es mostrarCursos

const mostrarCursos = async(req, res) => {
    try {
        const cursos = await Curso.find()
        res.render('cursos',{cursos})
        
    } catch (error) {
        console.log("error", error)
        //gestionar las excepciones
    }
}


//mostrar Instalaciones

const getInstalaciones =async (req, res) => {
   try {
    const instalaciones = await Instalacion.find()
    res.render('instalaciones',{instalaciones})
    
   } catch (error) {
    
   }
}

// mostrar crear Instalacion
const getCrear = (req, res) => {
    res.render('crear')
}

// crear Instalacion

const postCrearInstalaciones = async(req,res)=>{
    const {titulo,descripcion}= req.body
    const instalaciones= new Instalacion({
        titulo,
        descripcion
    })
try {
   instalaciones.save(instalaciones)

} catch (error) {
    console.log("problema en creacion",error)
}
 res.redirect('/admin/crear')



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