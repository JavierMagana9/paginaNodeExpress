const express = require('express')

const router = express.Router()

const {getIndex, mostrarCursos, getInstalaciones, getCrear}=require ('../controllers/firstlineControllers')

router.get('/', getIndex)

router.get('/cursos', mostrarCursos)

router.get('/instalaciones', getInstalaciones)

module.exports = router
