console.log("¡Bienvenido a tu asistente virtual!");
let nombre = prompt("¿Cómo te llamas?");
console.log("Hola, " + nombre + ". ¡Es un gusto conocerte!");


let anioNacimiento = prompt("¿En qué año naciste?");
let anioActual = new Date().getFullYear();
let edad = anioActual - anioNacimiento;
console.log("Tienes " + edad + " años.");


console.log("¿Qué te gustaría hacer ahora?");
console.log("1. Realizar una operación matemática.");
console.log("2. Jugar un mini-juego de adivinanza.");
let opcion = prompt("Escribe 1 o 2 según tu elección:");

if (opcion === "1") {
    let num1 = prompt("Escribe el primer número:");
    let num2 = prompt("Escribe el segundo número:");
    let operacion = prompt("¿Qué operación deseas realizar? (+, -, *, /):");

    function calcular(a, b, op) {
        if (op === "+") return a + b;
        if (op === "-") return a - b;
        if (op === "*") return a * b;
        if (op === "/") return a / b;
        return "Operación no válida.";
    }

    let resultado = calcular(Number(num1), Number(num2), operacion);
    console.log("El resultado de " + num1 + " " + operacion + " " + num2 + " es: " + resultado);
}


if (opcion === "2") {
    let numeroSecreto = Math.floor(Math.random() * 10) + 1;
    console.log("He pensado en un número entre 1 y 10. ¡Adivínalo!");

    let intento = prompt("¿Cuál es tu primer intento?");
    if (Number(intento) === numeroSecreto) {
        console.log("¡Felicidades, " + nombre + "! Adivinaste el número.");
    } else {
        console.log("¡Oh no! El número era " + numeroSecreto + ". Mejor suerte la próxima vez.");
    }
}

console.log("Gracias por usar tu asistente virtual, " + nombre + ". ¡Hasta la próxima!");