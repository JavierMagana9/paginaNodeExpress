const Cursos = require('../models/cursoModel')

const getIndex = (req, res) => {
    res.render('index')
}
//esta es mostrarCursos
console.log(Cursos)
const mostrarCursos = async(req, res) => {
    try {
        const cursos = await Cursos.find()
        res.render('cursos',{cursos})
        console.log("en cursos",cursos)
    } catch (error) {
        console.log("error", error)
    }
}

//mostrarUnCurso

//crearUnCurso

//editarUnCurso

//eliminarUnCurso

const getInstalaciones = (req, res) => {
    res.render('instalaciones', {
        instalaciones: [
            {
                titulo: "Instalacion 1",
                descripcion: " Descripcion Instalacion 1"
                
            },
            {
                titulo: "Instalacion 2",
                descripcion: "Descripcion instalacion 2"
            },
            {
                titulo: "Instalacion 3",
                descripcion: "Descripcion instalacion 3"
            },
            {
                titulo: "Instalacion 4",
                descripcion: "Descripcion instalacion 4"
            }
        ]
    })
}
/*

const escuela = async (req, res) => {

    try {
        const cursos = await Cursos.find()
        res.render('cursos',{cursos})
        console.log("en cursos",cursos)
    } catch (error) {
        console.log("error", error)
    }

}
*/
module.exports = {
    getIndex,
    mostrarCursos,
    getInstalaciones
}