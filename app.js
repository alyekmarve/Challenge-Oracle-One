console.log('Hola mundo');
let frase = [];
function validarTexto(event) {
    var caracter = String.fromCharCode(event.keyCode);
    // Expresión regular para verificar que solo hay letras minúsculas y sin acentos
    if (!caracter.match(/[a-z]/)) {
        alert('Solo se permiten letras minúsculas.');
        return false;
    } else {
        console.log(true);
        return true;
    }
}
function asignarTextoElemento(id, texto) {
    let elementoHTML = document.getElementById(id);
    if (elementoHTML) { // Verifica si el elemento fue encontrado
        elementoHTML.innerHTML = texto;
    } else {
        console.error("El elemento con el ID '" + id + "' no fue encontrado.");
    }
}
function asignarClase(id, clase) {
    let elemento = document.getElementById(id);

    elemento.classList.add(clase);
}

function quitarClase(id, clase) {
    let elemento = document.getElementById(id);

    elemento.classList.remove(clase);
}

function encriptar() {

    asignarTextoElemento('text1', '');
    let textoIngresado = document.getElementById('textoUsuario').value;
    
   

    for (i = 0; i < textoIngresado.length; i++) {
        let letra = textoIngresado[i];
        if (letra == "e") {
            frase.push('enter');
        }
        else if (letra == "i") {
            frase.push('imes');
        } else if (letra == "a") {
            frase.push('ai');
        } else if (letra == "o") {
            frase.push('ober');
        } else if (letra == "u") {
            frase.push('ufat');
        } else {
            frase.push(letra);
        }


    }


    asignarTextoElemento('text1', frase.join(''));
    asignarClase('muñeco', 'oculto');
    asignarClase('text2', 'oculto');
    asignarClase('text1', 'ajustar');
    quitarClase('btn-copiar', 'oculto')
    frase.remove



}

function desencriptar() {
    asignarTextoElemento('text1', '');
    let textoIngresado = document.getElementById('textoUsuario').value;
    textoIngresado = textoIngresado.replace(/enter/g, 'e');
    textoIngresado = textoIngresado.replace(/imes/g, 'i');
    textoIngresado = textoIngresado.replace(/ai/g, 'a');
    textoIngresado = textoIngresado.replace(/ober/g, 'o');
    textoIngresado = textoIngresado.replace(/ufat/g, 'u');


    asignarTextoElemento('text1', textoIngresado);
    asignarClase('muñeco', 'oculto');
    asignarClase('text2', 'oculto');
    asignarClase('text1', 'ajustar');
    quitarClase('btn-copiar', 'oculto')



}

function reset() {
    document.getElementById('textoUsuario').value = '';
    asignarTextoElemento('text1', 'Ningun mensaje fue encontrado')
    quitarClase('muñeco', 'oculto');
    quitarClase('text2', 'oculto');
    quitarClase('text1', 'ajustar');
    asignarClase('btn-copiar', 'oculto');

}
function copiarTexto() {


    let textoIngresado = document.getElementById('text1').textContent;
    console.log(textoIngresado);

     // Intentar copiar el texto al portapapeles

    navigator.clipboard.writeText(textoIngresado)
     
}

