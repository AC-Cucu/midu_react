// Si el usuario introduce 1, 2 -> OK
// Si el usuario introduce "" -> Error: no has introducido ningún número.
// Si el usuario no lo separa por comas: Error: los elementos deben estar separados por comas.
// si el usuario introduce los números como palabras -> Error: has introducido un elemento que no es un número.

const elementoResultado = document.getElementById("resultado");

function calcularPromedio(numeros) {
    if (!Array.isArray(numeros) || numeros.length === 0) {
        return "Error: El input debe ser un array no vacío.";
    }

    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (typeof numeros[i] !== "number" || isNaN(numeros[i])) {
            return `Error: El elemento en la posición ${i+1} no es un número.`;
        }
        suma += numeros[i];
    }
    return suma / numeros.length;
}

// Evento para calcular el promedio
let calculo = document.getElementById("calcular");

calculo.onclick = function () {
    //Recuperar el valor del input
    const input = document.getElementById("numeros").value;
    if (input.length === 0) {
        elementoResultado.innerText = "¡Oye que no has introducido nada!";
    } 
    //else if (input.includes(",") === false) {
    else if (!input.includes(",")) {
        elementoResultado.innerText = "¡Oye que es necesario separar los elementos por comas (,)!";
    }
    else if (input.includes("-") || input.includes("?") || input.includes(";")) {
        elementoResultado.innerText = "¡Oye que es necesario separar los elementos por comas (,)!";
    }
    else {
        const numeros = input.split(",");
        const decimales = numeros.map(num => parseFloat(num.trim()));
        const resultado = calcularPromedio(decimales);
    
        // Mostrar el resultado y registrar en consola
        //console.log("Resultado calculado:", resultado);
        elementoResultado.innerText = resultado;
    }
}
