//Escribe un programa con herencia de clases que permita modelar los objetos Teléfono,
//Fijo y Móvil, de manera que Teléfono sea la clase madre y Fijo y Móvil, clases derivadas.

// Clase madre Teléfono
class Telefono {
    constructor(numero) {
        this.numero = numero;
    }
}

// Clase derivada Fijo que hereda de Teléfono
class Fijo extends Telefono {
    constructor(numero, extension) {
        super(numero);
        this.extension = extension;
    }
}

// Clase derivada Móvil que hereda de Teléfono
class Movil extends Telefono {
    constructor(numero, operador) {
        super(numero);
        this.operador = operador;
    }
}

// Ejemplo de uso
const telefonoFijo = new Fijo('123-456789', '101');
const telefonoMovil = new Movil('987-654321', 'Movistar');

document.write("Telefono fijo: ", telefonoFijo.numero, " ", telefonoFijo.extension);
document.write("<br>");
document.write("Telefono movil: ", telefonoMovil.numero, " ", telefonoMovil.operador);
