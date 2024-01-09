//Diseña una jerarquia de clases donde Música y Tecnología sean clases derivadas de Aula, para
//modelar las instalaciones de un instituto de enseñanza secundaria. Elige un método con el que
//evidenciar el concepto de polimorfismo

// Clase madre Aula
class Aula {
  constructor(nombre) {
    this.nombre = nombre;
  }

  // Método polimórfico
  utilizarRecursos() {
    document.write(`Utilizando los recursos en el aula ${this.nombre}`);
  }
}

// Clase derivada Música
class Musica extends Aula {
  constructor(nombre, instrumento) {
    super(nombre);
    this.instrumento = instrumento;
  }

  utilizarRecursos() {
    document.write(`Practicando música en el aula ${this.nombre} con el instrumento ${this.instrumento}`);
  }
}

// Clase derivada Tecnología
class Tecnologia extends Aula {
  constructor(nombre, equipo) {
    super(nombre);
    this.equipo = equipo;
  }

  utilizarRecursos() {
    document.write(`Realizando proyectos tecnológicos en el aula ${this.nombre} con el equipo ${this.equipo}`);
  }
}

// Ejemplo de uso con polimorfismo
const aulaDeMusica = new Musica('Aula de Música', 'piano');
const aulaDeTecnologia = new Tecnologia('Laboratorio de Tecnología', 'computadoras');

// Utilizando el método polimórfico
aulaDeMusica.utilizarRecursos();
document.write("<br>");
aulaDeTecnologia.utilizarRecursos();
