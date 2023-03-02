function campoVacio(string){
    return string === '' || string === null
}

function formularioIncompleto() {
    const formNombre = document.querySelector('#formularioNombre').value
    const formCorreo = document.querySelector('#formularioCorreo').value
    const formTema = document.querySelector('#formularioTema').value
    const formMensaje = document.querySelector('#formularioMensaje').value
 
    return campoVacio(formNombre) || campoVacio(formCorreo) || campoVacio(formTema) || campoVacio(formMensaje) 
}

function formularioEnviar() {

    if (formularioIncompleto()) {
        
        alert('Hay campos sin completar. Su mensaje no ha sido enviado')
        return 
    }

    const formNombre = document.querySelector("#formularioNombre")
    alert(formNombre.value + ' su mensaje a sido enviado.')
}

let buttonFormularioEnviar = document.querySelector('#enviar')
buttonFormularioEnviar.addEventListener('click', formularioEnviar)
