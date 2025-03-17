console.log("Iniciando asistente...");

// Preguntar por el nombre del usuario
let nombre = prompt("¿Cuál es tu nombre?");
console.log("Encantado de conocerte ", nombre, "!");


//Declarar varible de fecha
let currentYear = new Date();
console.log("Valor de año actual", currentYear);

// Recuperar el año actual de la nueva variable de fecha
currentYear = currentYear.getFullYear();
console.log("Valor de año actual", currentYear);

// Preguntar por el año de nacimiento al usuario
let userYear = prompt("¿En que año naciste?");
console.log("Año de nacimiento del usuario: ", userYear);

// Hacer la resta del año actual para sacar su edad aproximada
let birthday = currentYear - userYear;

console.log("Oh, tienes", birthday," genial!");

// Preguntar por al usuario que elija una opción entre 1 o 2
let opcion = prompt ("¿Qué actividad quieres hacer? 1 o 2");

// La opción 1 hace una operación de 2 nº 
if (opcion == 1) {
    console.log("Has elegido la opción 1");

    let num1 = Number(prompt("Introduce el 1er nº"));
    let num2 = Number(prompt("Introduce el 2do nº"));
    let operacion = prompt("¿Qué operación deseas realizar con esos números? (+, -, *, /)");

    let resultado = 0;

    console.log("Operación elegida:", operacion);

    if (operacion === "+") resultado = num1 + num2;
    if (operacion === "-") resultado = num1 - num2;
    if (operacion === "*") resultado = num1 * num2;
    if (operacion === "/") resultado = num1 / num2;

    console.log("Resultado de la operación:",operacion, "entre el nº:", num1, " y nº 2:", num2, "es:", resultado);

}
else if (opcion == 2) {
    console.log("Has elegido la opción 2");

    let numRandom = Math.floor(Math.random() * 10) + 1;
    console.log("Número aleatorio: ", numRandom);

    
    let intentos = 3;
    for (intentos; intentos > 0; intentos--) {
        let userNumber = prompt("Escribe un número del 1 al 10");

        if (numRandom === Number(userNumber)) {
            alert("WOW, has acertado!!");
            break;
        } else {
            console.log("Nope :(");
        }
    }

    if (intentos === 0) {
        alert("Sorry, no has acertado, el nº era " + numRandom);
    }

}
else {
    alert("Solo tenemos 2 actividades :(");
}

console.log("Adios", nombre);
