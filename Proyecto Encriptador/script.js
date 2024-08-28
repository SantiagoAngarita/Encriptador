// Variables para los elementos
var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var munieco = document.querySelector(".contenedormunieco");
var contenedor = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");
var cajatexto = document.querySelector(".cajatexto"); // Añadido para convertir a minúsculas

// Convertir el texto a minúsculas en tiempo real
cajatexto.addEventListener('input', function() {
    this.value = this.value.toLowerCase();
});

// Asignación de eventos a los botones
botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar() {
    ocultarAdelante();
    var texto = recuperarTexto();
    resultado.textContent = encriptarTexto(texto);
}

function desencriptar() {
    ocultarAdelante();
    var texto = recuperarTexto();
    resultado.textContent = desencriptarTexto(texto);
}

function recuperarTexto() {
    return cajatexto.value;
}

function ocultarAdelante() {
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal += "ai";
        } else if (texto[i] == "e") {
            textoFinal += "enter";
        } else if (texto[i] == "i") {
            textoFinal += "imes";
        } else if (texto[i] == "o") {
            textoFinal += "ober";
        } else if (texto[i] == "u") {
            textoFinal += "ufat";
        } else {
            textoFinal += texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal += "a";
            i += 1;
        } else if (texto[i] == "e") {
            textoFinal += "e";
            i += 4;
        } else if (texto[i] == "i") {
            textoFinal += "i";
            i += 3;
        } else if (texto[i] == "o") {
            textoFinal += "o";
            i += 3;
        } else if (texto[i] == "u") {
            textoFinal += "u";
            i += 3;
        } else {
            textoFinal += texto[i];
        }
    }
    return textoFinal;
}

const btnCopiar = document.querySelector(".btn-copiar"); 
btnCopiar.addEventListener("click", () => {
    var contenido = resultado.textContent;
    navigator.clipboard.writeText(contenido);
});
