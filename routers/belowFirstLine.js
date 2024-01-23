const express = require('express')

const router = express.Router()

const {getIndex, mostrarCursos, getCrear,postCrearInstalaciones}=require ('../controllers/firstlineControllers')

const {getActualizar,getInstalaciones,getEliminar,putActualizar}=require('../controllers/belowControllers')



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
router.get('/actualizar/:id',getActualizar)


//Actualizar Instalaciones
router.post('/actualizar/:id',putActualizar)


//Mostrar eliminar Instalaciones

router.get('/eliminar/:id',getEliminar)


//Eliminar Instalaciones



module.exports = router