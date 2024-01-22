

const getIndex = (req, res) => {
    res.render('index')
}
//esta es mostrarCursos
//console.log(Cursos)
const mostrarCursos = async (req, res) => {
    try {
        const respuesta = await fetch('http://localhost:5000/api/v1/cursos')
        const cursosRecibidos = await respuesta.json()
        const { cursos } = cursosRecibidos

        res.render('cursos', { cursos })
    } catch (error) {
        console.log("error", error)
    }
}

//mostrarUnCurso

//crearUnCurso
const enviarCursos = async (req, res) => {
    try {
        const respuesta = await fetch('http://localhost:5000/api/v1/enviar', {
            method: 'POST'
        })
        
    } catch (error) {

    }


}
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


module.exports = {
    getIndex,
    mostrarCursos,
    getInstalaciones,
    enviarCursos
}