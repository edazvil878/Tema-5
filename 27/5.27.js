/* Diseña una expresión regular que valide un precio en € con dos decimales. Debe permitir utilizar
como carácter separador tanto el punto como la coma, y debe haber un espacio en blanco entre el precio
y el carácter € */

const regex = /^\d+(?:[.,]\d{1,2})? €$/;

const precioValido1 = "123.45 €";
const precioValido2 = "678,90 €";
const precioInvalido = "12,345.67 €";

console.log(regex.test(precioValido1));
console.log(regex.test(precioValido2));
console.log(regex.test(precioInvalido));
