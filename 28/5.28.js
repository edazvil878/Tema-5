/* Crea una expresión regular que valide una hora en formato HH:MM de 24 horas, donde HH representa las horas y MM los minutos */

const regex = /^([01]\d|2[0-3]):[0-5]\d$/;

const horaValida1 = "12:34";
const horaValida2 = "23:60";
const horaInvalida = "27:00";

console.log(regex.test(horaValida1));
console.log(regex.test(horaValida2));
console.log(regex.test(horaInvalida));
