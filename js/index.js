const foto = document.querySelector('#foto')
const nombre = document.querySelector('#nombre')
const correo = document.querySelector('#correo')
const telefono = document.querySelector('#telefono')
const sobremiNombre = document.querySelector('#sobremiNombre')
const nacionalidad = document.querySelector('#nacionalidad')
const direccion = document.querySelector('#direccion')
const date = document.querySelector('#date')
const edad = document.querySelector('#edad')

async function nuevoUsuario() {
    try {
        const url = 'https://randomuser.me/api/'
        const respuesta = await fetch(url)
        const {results} = await respuesta.json()
        const datos = results[0]
        
        foto.src = datos.picture.large;
        
        nombre.textContent = obtenerNombre(datos.name)
        
        sobremiNombre.textContent = obtenerNombre(datos.name)
        
        nacionalidad.textContent = datos.location.country

        direccion.textContent = obtenerDireccion(datos.location) 
        
        date.textContent = obtenerFecha(datos.dob.date)
        
        edad.textContent = datos.dob.age
        
        correo.textContent = datos.email
        
        telefono.textContent = datos.phone        

    } catch (e) {
        console.log(e)
    }
}

function obtenerFecha (string) {

    const fechaCompleta = new Date(string)

    return `${fechaCompleta.getDate()}/${fechaCompleta.getMonth()}/${fechaCompleta.getFullYear()}`
}

function obtenerDireccion (objeto) {

    return `${objeto.street.name} ${objeto.street.number}, ${objeto.state}`
}

function obtenerNombre (objeto) {

    return `${objeto.first} ${objeto.last}`
}

/*CARGA LOS DATOS DE LA PAGINA RANDOMUSER */

document.addEventListener('DOMContentLoaded', nuevoUsuario)


