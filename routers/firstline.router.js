const express = require('express')

const router = express.Router()

const {getIndex, getCursos, getInstalaciones}=require ('../controllers/firstline.controllers')

router.get('/', getIndex)

router.get('/cursos', getCursos)

router.get('/instalaciones', getInstalaciones)



module.exports = router
