/* Crea un objeto que disponga de métodos para operar con fechas, concretamente: difFechas: calcula los días que hay de diferencia entre dos fechas 
maxFecha: devulve la fecha más reciente de dos fechas dadas. testFecha: comprueba si el formato de una fecha es correcto. 
ayerFecha: devuelve el dia anterior a una fecha dada. mañanaFecha: devuelve el dia posterior a una fecha dada*/

// Crear un objeto operarFechas basado en Object
const operarFechas = Object.create(null);

let DIA_EN_MILISEGUDOS = 24 * 60 * 60 * 1000;


//Creamos metodo difFechas
operarFechas.difFechas = function (fecha1, fecha2) {
    var diff = fecha1 - fecha2;
    diff = diff / (24 * 60 * 60 * 1000);
    document.write("La diferencia de las dos fechas es: ", diff, " días");
}

//Creamos metodo maxFecha
operarFechas.maxFecha = function (fecha1, fecha2) {
    if (fecha1 > fecha2) {
        return fecha1;
    } else {
        return fecha2;
    }
}

//Creamos metodo testFecha
operarFechas.testFecha = function (fecha) {

}

//creamos metodo ayerFecha para saber la fecha de ayer de una fecha dada
operarFechas.ayerFecha = function (fecha) {
    return diff = new Date(fecha.getTime() - DIA_EN_MILISEGUDOS);
}

//creamos metodo mananaFecha para saber la fecha de mañana de una fecha dada
operarFechas.mananaFecha = function (fecha) {
    return diff = new Date(fecha.getTime() + DIA_EN_MILISEGUDOS);
}

let fecha1 = new Date("2023-11-01");
let fecha2 = new Date("2017-12-01");

operarFechas.difFechas(fecha1, fecha2);
let fechaMaxima = operarFechas.maxFecha(fecha1, fecha2);
operarFechas.testFecha(fecha1);
let ayer = operarFechas.ayerFecha(fecha1);
let manana = operarFechas.mananaFecha(fecha1);

document.write("<br> esta es la fecha máxima: ", fechaMaxima.toLocaleDateString("en-ES"));
document.write("<br> esta es la fecha de ayer: ", ayer.toLocaleDateString("en-ES"));
document.write("<br> esta es la fecha de mañana: ", manana.toLocaleDateString("en-ES"));