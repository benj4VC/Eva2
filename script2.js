//validar nombre, debe contener solo letras y no ser vacio
//validar edad: Debe ser mayor o igual a 18 y menor a 100
let personas =[]

function validar(){
    let eNombre = document.getElementById("nombre")
    let vNombre = eNombre.value
    let eErrorNombre = document.getElementById("errorNombre")
    let fNombre = validarLargoMinimo(eNombre,vNombre,eErrorNombre)
         let p = {
            nombre:vNombre,
        }
        personas.push(p)
        console.log(personas)
        eNombre.value = ""
        cargarDatos()
    }



