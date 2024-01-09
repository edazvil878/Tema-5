//Crea una clase con dos propiedades y dos metodos donde se evidencien
//los conceptos de abstracción y encapsulamiento de la programación oriendata a objetos

class Asignatura {
  constructor(nombre, nota) {
    this.nombre = nombre;
    this.nota = nota;
  }

  // Método para obtener el nombre de la asignatura
  obtenerNombre() {
    return this.nombre;
  }

  // Método para establecer el nombre de la asignatura
  establecerNombre(nuevoNombre) {
    this.nombre = nuevoNombre;
  }

  // Método para obtener la nota de la asignatura
  obtenerNota() {
    return this.nota;
  }

  // Método para establecer la nota de la asignatura
  establecerNota(nuevaNota) {
    if (nuevaNota >= 0 && nuevaNota <= 10) {
      this.nota = nuevaNota;
    } else {
      console.error("La nota debe estar en el rango de 0 a 10");
    }
  }
}

// Crear una instancia de la clase Asignatura
const cliente = new Asignatura("Desarrollo en Entorno Cliente", 8);

// Obtener y mostrar el nombre y la nota de la asignatura
document.write("Asignatura: ", cliente.obtenerNombre());
document.write("<br>");
document.write("Nota: ", cliente.obtenerNota());
document.write("<br>");
document.write("<br>");

// Establecer un nuevo nombre y nota
cliente.establecerNombre("Servidor");
cliente.establecerNota(6);

// Mostrar el nombre y la nota actualizados
document.write("Nueva asignatura: ", cliente.obtenerNombre());
document.write("<br>");
document.write("Nueva nota: ", cliente.obtenerNota());
