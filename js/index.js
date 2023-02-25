const foto = document.querySelector('#foto')
const nombre = document.querySelector('#nombre')
const correo = document.querySelector('#correo')
const telefono = document.querySelector('#telefono')

async function newUser() {
    try {
        const url = 'https://randomuser.me/api/'
        const respuesta = await fetch(url)
        const {results} = await respuesta.json()
        const datos = results[0]
        console.log(datos)
        foto.src = datos.picture.large;
        nombre.textContent = `${datos.name.first} ${datos.name.last}`
        correo.textContent = datos.email
        telefono.textContent = datos.phone
    } catch (e) {
        console.log(e)
    }
}
// newUser()
document.addEventListener('DOMContentLoaded', newUser)

// const newUser = async() => {
//     try {
//         const url = 'https://randomuser.me/api/'
//         const respuesta = await fetch(url)
//         const {results} = await respuesta.json()
//         const datos = results[0]
//         console.log(datos)
        
//     } catch (e) {
//         console.log(e)
//     }
// }

