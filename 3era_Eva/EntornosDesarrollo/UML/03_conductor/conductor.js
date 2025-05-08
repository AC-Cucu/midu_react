class Persona {
    constructor(nombre, pais, edad) {
        this.nombre = nombre;
        this.pais = pais;
        this.edad = edad;
    }

    mostrarDetalles(){
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y soy de ${this.pais}`);
    }
}

class Conductor extends Persona {
    constructor(nombre, pais, edad, licencia) {
        super(nombre, pais, edad);
        this.licencia = licencia;

        this.vehiculos = [];
    }

    agregarVehiculo (vehiculo) {
        this.vehiculos.push(vehiculo);
    }

    mostrarDetalles(){
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años, soy de ${this.pais} y mi licencia es ${this.licencia}`);
    }    
}

class Vehiculo {
    constructor (marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    mostrarDetalles() {
        console.log(`${this.marca} - ${this.modelo} - ${this.año}`);
    }
}