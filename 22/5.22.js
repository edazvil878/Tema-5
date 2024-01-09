//Crea una clase donde demuestres la utilidad del objeto this

class Animal {
    constructor(nombre, corazon) {
        this.nombre = nombre;
        this.corazon = corazon;
    }

    mostrarNombre() {
        return this.nombre;
    }

    mostrarCorazon() {
        return this.corazon;
    }
}

// Crear una instancia de la clase Asignatura
const pulpo = new Animal("Paul", 3);

// Mostramos los datos por pantalla
document.write("Nombre: ", pulpo.mostrarNombre());
document.write("<br>");
document.write("Corazones: ", pulpo.mostrarCorazon());