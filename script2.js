//validar nombre, debe contener solo letras y no ser vacio
//validar edad: Debe ser mayor o igual a 18 y menor a 100
let personas =[]
function validar(){
    let eNombre = document.getElementById("nombre")
    let vNombre = eNombre.value
    let eErrorNombre = document.getElementById("errorNombre")

    let eEdad = document.getElementById("edad")
    let vEdad = eEdad.value
    let eErrorEdad = document.getElementById("errorEdad")

    let fNombre = validarLargoMinimo(eNombre, vNombre, eErrorNombre)
    let fEdad = validarEdad(eEdad, vEdad, eErrorEdad)

    if(fNombre === "exito" && fEdad === "exito"){
        let p = {
            nombre: vNombre,
            edad: vEdad
        }
        personas.push(p)
        eNombre.value = ""
        eEdad.value = ""
        cargarDatos()
    }
}

function validarLargoMinimo(elemento, valor, eError){
    if(valor.length < 3){
        alert("Debes ingresar más de 3 caracteres")
        eError.innerText = "Debes ingresar más de 3 caracteres!"
        elemento.style.backgroundColor = "red"
        elemento.style.color = "white"
        return "falla"
    } else {
        eError.innerText = ""
        elemento.style.backgroundColor = "green"
        elemento.style.color = "white"
        return "exito"
    }
}

function validarEdad(elemento, valor, eError){
    let edad = parseInt(valor)
    if (valor.trim() === "") {
        eError.innerText = "La edad no puede estar vacía."
        elemento.style.backgroundColor = "red"
        elemento.style.color = "white"
        return "falla"
    } else if (isNaN(edad)) {
        eError.innerText = "La edad debe ser un número."
        elemento.style.backgroundColor = "red"
        elemento.style.color = "white"
        return "falla"
    } else if (edad < 0 || edad > 120) {
        eError.innerText = "La edad debe estar entre 0 y 120."
        elemento.style.backgroundColor = "red"
        elemento.style.color = "white"
        return "falla"
    } else {
        eError.innerText = ""
        elemento.style.backgroundColor = "green"
        elemento.style.color = "white"
        return "exito"
    }
}

function cargarDatos(){
    let mapPersonas = personas.map((p,index)=>{
        return "<tr><td>"+p.nombre+
               "</td><td>"+p.edad+
               "</td><td><button type='button' value='"+index+"' onclick='eliminar("+index+")'>Eliminar</button>"+
               "<button onclick='actualizarFormulario("+index+")'>Actualizar</button></td></tr>"
    })
    let tablaPersonas = document.getElementById("tablaPersonas")
    let strTablaPersonas = mapPersonas.join("")
    tablaPersonas.innerHTML = strTablaPersonas 
}

function eliminar(indice){
    personas = personas.filter((p,index)=> index !== indice)
    cargarDatos();
}

function actualizarFormulario(indice){
    let eNombre = document.getElementById("nombre1")
    let eEdad = document.getElementById("edad1")
    let persona = personas[indice]
    eNombre.value = persona.nombre
    eEdad.value = persona.edad
    let btnActualizar = document.getElementById("btnActualizar")
    btnActualizar.value = indice
}

function actualizar(){
    let eNombre = document.getElementById("nombre1")
    let vNombre = eNombre.value
    let eEdad = document.getElementById("edad1")
    let vEdad = eEdad.value

    let btnActualizar = document.getElementById("btnActualizar")
    let indice = btnActualizar.value

    let fNombre = validarLargoMinimo(eNombre, vNombre, document.getElementById("errorNombre1"))
    let fEdad = validarEdad(eEdad, vEdad, document.getElementById("errorEdad1"))

    if (fNombre === "exito" && fEdad === "exito") {
        personas = personas.map((p, index) => {
            if(index == indice){
                return {
                    nombre: vNombre,
                    edad: vEdad
                }
            } else {
                return p
            }
        })
        cargarDatos()
        eNombre.value = ""
        eEdad.value = ""
        eNombre.style.backgroundColor = "green"
        eNombre.style.color = "white"
        eEdad.style.backgroundColor = "green"
        eEdad.style.color = "white"
        document.getElementById("errorNombre1").innerText = ""
        document.getElementById("errorEdad1").innerText = ""
    }
}





 



