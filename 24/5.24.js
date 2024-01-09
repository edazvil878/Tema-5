/*Crea una clase Película que permita gestionar esta información: nombre de la película, año de estreno, duración, género, los seis actores o actrices 
más importantes, la URL de su cartel promocional y su director; y una acción que permita mostrar en consola toda la información. 
El constructo recibirá los datos en una cadena JSON de la que deberá sacar los valores de cada propiedad. Crea un objeto de la clase y ponla a prueba */

class Pelicula {
    constructor(nombre, anoEstreno, duracion, genero, actores, url, director) {
        this.nombre = nombre;
        this.anoEstreno = anoEstreno;
        this.duracion = duracion;
        this.genero = genero;
        this.actores = actores || [];
        this.url = url;
        this.director = director;
    }

    mostrarDatos() {
        console.log(`El nombre de la película es ${this.nombre} el año de estreno es el ${this.anoEstreno} y dura ${this.duracion}. El genero es ${this.genero}, 
        los 6 actores más importantes son: ${this.actores}. 
        La URL del cartel promocional es ${this.url} y el director es ${this.director}.`);
    }
}

const pelicula1 = new Pelicula("Como entrenar a tu dragón", 2014, "1h 34min", "animado", ["actor1", "actor2", "actor3", "actor4", "actor5", "actor6"], "google.com", "alen López");
pelicula1.mostrarDatos();