const express = require('express')

const router = express.Router()

const {getIndex, mostrarCursos, getInstalaciones, getCrear,postCrearInstalaciones,getActualizar,getEliminar}=require ('../controllers/firstlineControllers')


//Index
router.get('/', getIndex)

//Mostrar Cursos
router.get('/cursos', mostrarCursos)

//Mostrar Instalaciones
router.get('/instalaciones', getInstalaciones)

//Mostrar crear Instalaciones
router.get('/crear',getCrear)

//Crear Instalaciones
router.post('/crear',postCrearInstalaciones)

//Mostrar Actualizar
router.get('/actualizar',getActualizar)


//Actualizar Instalaciones



//Mostrar eliminar Instalaciones

router.get('/eliminar',getEliminar)


//Eliminar Instalaciones



module.exports = router