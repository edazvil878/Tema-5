/* Crea un objeto que disponga de métodos para operar con fechas, concretamente: difFechas: calcula los días que hay de diferencia entre dos fechas 
maxFecha: devulve la fecha más reciente de dos fechas dadas. testFecha: comprueba si el formato de una fecha es correcto. 
ayerFecha: devuelve el dia anterior a una fecha dada. mañanaFecha: devuelve el dia posterior a una fecha dada*/

// Crear un objeto operarFechas basado en Object
const operarFechas = Object.create(null);

// Modificar el objeto
operarFechas.fecha1 = Date("0000-00-00");
operarFechas.fecha2 = Date("0000-00-00");


//Creamos metodo difFechas
operarFechas.difFechas = function (fecha1, fecha2) {
    var diff = fecha1 - fecha2;
    document.write("La diferencia de las dos fechas es: ", diff);
};

//Creamos metodo maxFecha
operarFechas.maxFecha = function (fecha1, fecha2) {
    if (fecha1 > fecha2) {
        return fecha1;
    } else {
        return fecha2;
    }
}

operarFechas.testFecha = function (fecha) {

}
