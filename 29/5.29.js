/* Escribbe una expresión regular que permite validar URL de sitios web, 
cuyos requisitos son que empiece por https://, termine en .es y en medio no haya ninguna <<ñ>> */

const regex = /^https:\/\/(?!.*ñ)[\w-]+\.es$/;

const urlValida1 = "https://www.ejemplo.es";
const urlValida2 = "https://sitio-web.es";
const urlInvalida = "https://www.ejemplon.es";

console.log(regex.test(urlValida1));
console.log(regex.test(urlValida2));
console.log(regex.test(urlInvalida));
