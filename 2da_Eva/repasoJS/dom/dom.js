//Seleccionar elementos del DOM por su id
const nombreUsuario = document.getElementById("nombre");
console.log(nombreUsuario);


// Podemos invocar elementos por su id si lo conocemos (recomiendo siempre utilizar la función igualmente)
console.log(nombre);


//Seleccionar elementos del DOM por su clase
const elementosCentrados = document.getElementsByClassName("centerText");
console.log("elementosCentrados: ", elementosCentrados);

//Seleccionar elementos del DOM por el nombre de su etiqueta
const opcionesHabitacion = document.getElementsByTagName("option");
console.log("opcionesHabitacion: ", opcionesHabitacion);

//Cambiar el estilo del input nombre para que el color de fondo sea negro
nombreUsuario.style.backgroundColor = "black";
//nombreUsuario.style = "background-color: black;";

// **Hemos visto en clase que con la consola del navegador abierta podemos escribir funciones como console.log e invocar las variables ya declaradas

//Modificar el placeholder del elemento nombre a "Lo que quieras!"
nombreUsuario.placeholder = "Lo que quieras!!";
