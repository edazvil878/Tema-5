/* Construye un objeto partiendo de Object y modifícalo al vuelo para modelar una matriz.
Sus propiedades serán nFilas, nColumnas y contenido, y su métodos inicializarMatriz(valor)
que rellena toda la matriz con el mismo valor, aleatoriaMatriz() que la muestra por consola */

// Crear un objeto matriz basado en Object
const matriz = Object.create(null);

// Modificar el objeto para modelar una matriz
matriz.nFilas = 0;
matriz.nColumnas = 0;
matriz.contenido = [];

// Método para inicializar la matriz con un valor específico
matriz.inicializarMatriz = function (valor) {
    for (let i = 0; i < this.nFilas; i++) {
        this.contenido[i] = [];
        for (let j = 0; j < this.nColumnas; j++) {
            this.contenido[i][j] = valor;
        }
    }
};

// Método para mostrar la matriz por consola
matriz.aleatoriaMatriz = function () {
    document.write("<br>");
    for (let i = 0; i < this.nFilas; i++) {
        document.write(this.contenido[i]);
        document.write("<br>");
    }
};

// Uso de la matriz
matriz.nFilas = 3;
matriz.nColumnas = 4;

// Inicializar la matriz con un valor específico
matriz.inicializarMatriz(2);

// Mostrar la matriz por consola
document.write("Matriz inicializada con dos:");
matriz.aleatoriaMatriz();
