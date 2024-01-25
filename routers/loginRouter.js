const express=require('express')
const router=express.Router()

const {getLogin,registrarUsuario,logeandoUsuario}=require('../controllers/usuarioControllers')


router.get('/',getLogin)

router.post('/registroUsuario',registrarUsuario)

router.post('/loginUsuario',logeandoUsuario)



module.exports=router