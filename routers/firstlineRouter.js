const express = require('express')

const router = express.Router()

const {getIndex, mostrarCursos, getInstalaciones, getCrear}=require ('../controllers/firstlineControllers')

router.get('/', getIndex)

router.get('/cursos', mostrarCursos)

router.get('/instalaciones', getInstalaciones)

//router.get('/crear',getCrear)
//router.get('/cursosP', escuela)

//Añadir todos los clientes

//Añadir un cliente

//crearUnCurso

//editarUnCurso

//eliminarUnCurso
module.exports = router
