class Usuario {
    constructor(nombre, correo) {
        this.nombre = nombre;
        this.correo = correo;
    }

    saludar(){
        console.log(`Hola, soy ${this.nombre}`);
    }
}

class Admin extends Usuario{
    constructor(nombre, email, rol) {
        super(nombre, email);
        this.rol = rol;
    }

    decirRol() {
        console.log(`Hola, soy ${this.nombre} y mi rol es ${this.rol}`);
    }
}

const user = new Usuario('Anaa', 'anaa@mail.com');
user.saludar();

const admin = new Admin('Mike', 'mike@mail.com', 'CTO');
admin.saludar();
admin.decirRol();