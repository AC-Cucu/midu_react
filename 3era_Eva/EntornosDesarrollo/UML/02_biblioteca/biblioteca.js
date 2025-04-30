/*
    Crear 3 clases en js:
        + Libro:
            - ISBN
            - titulo
            - autor
            - prestar()
            - devolver()
        + Usuario:
            - id
            - nombre
            - solicitarLibro()
            - devolverLibro()
        + Bibliotecario:
            - turno
            - registrarLibro()
*/

class Libro {
    constructor(ISBN, titulo, autor) {
        this.ISBN = ISBN;
        this.titulo = titulo;
        this.autor = autor;
    }

    prestar() {
        console.log(`El libro ${this.titulo} ha sido prestado.`);
    }

    devolver() {
        console.log(`El libro ${this.titulo} ha sido devuelto.`);
    }    
}

class Usuario{
    constructor(id, nombre){
        this.id = id;
        this.nombre = nombre;
    }

    solicitarLibro(libro){
        console.log(`${this.nombre} ha solicitado el libro ${libro.titulo}.`);
    }

    devolverLibro(libro){
        console.log(`${this.nombre} ha devuelto el libro ${libro.titulo}.`);
    }
}

class Bibliotecario {
    constructor(turno){
        this.turno = turno;
    }

    registrarLibro(ISBN, titulo, autor){
        console.log(`Se ha añadido el libro ${titulo} (ISBN: ${ISBN}, autor: ${autor})`);
    }
}