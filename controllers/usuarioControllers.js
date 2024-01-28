const { verify } = require('jsonwebtoken')



const getLogin = (req, res) => {

    res.render('vistaLogin', { error: null })//agregar un respuesta null
}

const registrarUsuario = async (req, res) => {

    const { name, email, password, password2 } = req.body

    // console.log("post", email)
    // console.log("post", password)
    // console.log("post", password2)


    try {

        if (password != password2) {
            console.log("las contraseñas no son iguales")
            return res.render('vistaLogin', {
                error: "Las contraseñas son diferentes"
            })
        } else {
            const usuario = { name, email, password }

            const respuesta = await fetch('http://localhost:5000/api/v1/auth/registro', {
                method: "POST",
                body: JSON.stringify(usuario),
                headers: {
                    "Content-Type": "application/json",
                }
            })
            console.log("REGISTRO", usuario)
            const datos = await respuesta.json()

            //const pruebaName=await datos.errores.name.msg
            //const pruebaEmail=await datos.errores.email.msg
           //const pruebaPassword=await datos.errores.password.msg

           //console.log("prueba mensaje",pruebaName)
           //console.log("prueba mensaje",pruebaEmail)
          // console.log("prueba mensaje",pruebaPassword)

            console.log("en registro", datos)
            res.redirect('/login')

        }

    } catch (error) {
        console.log(error)
        res.status(500).render('vistaLogin', { error })
    }
}


const logeandoUsuario = async (req, res) => {

    const usuario = req.body

    const respuesta = await fetch('http://localhost:5000/api/v1/auth/login', {
        method: "POST",
        body: JSON.stringify(usuario),
        headers: {
            "Content-Type": "application/json",
        }
    })

    const data = await respuesta.json()
    const { token } = data
    console.log("data token", token)
    if (token) {
        //================PRUEBA COOKIE =================
        res.cookie('token', token, {
            maxAge: 36000
        })
        return res.redirect('../admin/instalaciones')

    }
    res.send("usuario no valido")

}


module.exports = {
    getLogin,
    registrarUsuario,
    logeandoUsuario
}