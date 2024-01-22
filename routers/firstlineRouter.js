const express = require('express')

const router = express.Router()

const {getIndex, mostrarCursos, getInstalaciones, enviarCursos}=require ('../controllers/firstlineControllers')

router.get('/', getIndex)

router.get('/cursos', mostrarCursos)

router.get('/instalaciones', getInstalaciones)

router.post('/cursos', enviarCursos)



module.exports = router
