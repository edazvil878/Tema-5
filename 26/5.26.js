/* Escribe una expresión regular que valide solo las letras del castellano: debe incluir mayúsculas, 
minúsculas y caracteres con tilde pero no espacios en blanco */

const regex = /^[A-Za-zÁ-Úá-ú]+$/;

const textoValido = "Eduardo";
const textoInvalido = "texto con espacios";

console.log(regex.test(textoValido));
console.log(regex.test(textoInvalido));


