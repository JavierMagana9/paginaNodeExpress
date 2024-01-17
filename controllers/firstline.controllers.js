

const getIndex = (req, res) => {
    res.render('index')
}

const getCursos = (req, res) => {
    res.render('cursos', {
        cursos: [{
            titulo: 'curso CSS',
            descripcion: 'Esta es la descripcion del curso CSS'
        },
        {
            titulo: 'curso JS',
            descripcion: 'Esta es la descripcion de JS'
        },
        {
            titulo: 'curso HTML',
            descripcion: 'Esta es la descripcion de HTML'
        }]
    })
}

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
    getCursos,
    getInstalaciones

}