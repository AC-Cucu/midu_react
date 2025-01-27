//Declaración de variable que puede cambiar su valor
let nombre = "Cris";

//Declaración de variable que no cambia su valor
const pais = "Rumanía";

//Declaración antigua de las variables (no recomendada)
var color = "blanco";

// Restricciones a la hora de nombrar nuestras variables:

//No pueden comenzar con números:
// let 10comida = "pizzas";

// Ni pueden contener guiones
// let nombre-usuario = "Abel";

// Y existen palabras reservadas dentro de javascript que no podremos utilizar:
// let return = "no";

console.log("Nombre usuario: ", nombre);

//Declarar y pintar por consola variables que contengan: Nombre completo, Correo, Edad y Fecha de Nacimiento
const nombreCompleto = "Jeremiah Jackson";
const email = "jj@mail.com";
const edad = 55;
const fechaNacimiento = "1970-01-20";

//Cambiamos el valor inicial de "Cris" a "Pepe"
nombre = "Pepe";

//Copiamos el valor de edad y se lo asignamos a la variable nombre, pasando a tener 55
nombre = edad;

function mostrarDatos() {
    //Declaración de una neuva variable local, solo accesible dentro de mostrarDatos
    let despedida = "Adious!";

    console.log(`Mi nombre es ${nombreCompleto}, soy un granjero de Wisconsin de ${edad} años (${fechaNacimiento}). 
        Para cualquier consulta, mandame un mail a: ${email}. ${despedida}`
    );

    //Devolver valor de la variable local, de otra manera no es accesible fuera de la función mostrarDatos
    //return despedida
}

//console.log(despedida); //Da error al ser una variable local dentro de mostrarDatos()

//Recuperar el valor del return y mostrarlo por consola
//let nuevaVar = mostrarDatos();
mostrarDatos();


let sumaOperacion = 5 + 7;
sumaOperacion++; // sumaOperacion = sumaOperacion + 1;

console.log("Operación resultado: ", sumaOperacion);

//Primero muestra el valor y depués aumenta su valor
console.log("Operación resultado ++ despues: ", sumaOperacion++);

//Primero aumenta su valor y después lo muestra
console.log("Operación resultado ++ antes: ", ++sumaOperacion);

sumaOperacion += 5; // sumaOperacion = sumaOperacion + 5;
console.log("Operación resultado += : ", sumaOperacion);

// Crear una nueva función que pregunte al usuario 2 números y sumarlos
function sumarNumeros() {
    let suma = 0;

    let num1 = Number(prompt("Introduce un número: "));
    let num2 = parseInt(prompt("Introduce otro número para sumarselo al 1ero: "));

    suma = num1 + num2;

    alert("El resultado es: " + suma);
}

//sumarNumeros();

// Nueva función que declare un número con un valor en concreto y pregunte al usuario que quiere hacer con ese número:
// Restarle una unidad, sumarle una unidad, dividirlo entre otro número o multiplicar por otro número
// (las últimas dos opciones tendrá que preguntar por otro número o tener otra variable declarada con un valor en concreto)

function operaciones() {
    let resultado = 0;

    let numeroPrincipal = 7;
    let numeroSecundario = 10;

    let operacion = prompt(`Tenemos el ${numeroPrincipal} y el ${numeroSecundario}. ¿Qué operación deseas realizar (+,-,*,/)?`);

    //Preguntamos si ha el usuario ha introducido algo
    if (operacion.length > 0) {
        if(operacion === '+') {
            resultado = numeroPrincipal + numeroSecundario;
            alert(`Has elegido suma, el resultado es: ${resultado}`);
        }
        else if(operacion === '-') {
            resultado = numeroPrincipal - numeroSecundario;
            alert(`Has elegido resta, el resultado es: ${resultado}`);
        }
        else if(operacion === '*') {
            resultado = numeroPrincipal * numeroSecundario;
            alert(`Has elegido multiplicación, el resultado es: ${resultado}`);
        }
        else if(operacion === '/') {
            resultado = numeroPrincipal / numeroSecundario;
            alert(`Has elegido división, el resultado es: ${resultado}`);
        }
        // Si no es niguna de las 4 operaciones esperadas mostrar una advertencia
        else {
            alert("Nos has introducido una operación conocida");
        }
    }
    else {
        alert("¡Oye que no has elegido niguna operación de las disponibles!");
    }
}

operaciones();