// Implementa las siguientes funcionalidades (2 puntos):
// Al enviar el formulario, muestra un mensaje con los datos ingresados (puede ser en un alert, o añadiendo los datos debajo del formulario).

let formulario = document.getElementById("registerForm");
let nombre = document.getElementById("name");
let email = document.getElementById("email");
let birthdate = document.getElementById("birthdate");
let generoM = document.getElementById("generoM");

let generoF = document.getElementById("generoF");
let generoO = document.getElementById("generoO");
let movies = document.getElementById("movies");
let sports = document.getElementById("sports");
let music = document.getElementById("music");
let tech = document.getElementById("tech");
let country = document.getElementById("country");
let comments = document.getElementById("comments");


formulario.onsubmit = function (event) {
    event.preventDefault();
    //Mostrar un alert si el nombre o email están vacios
    nombre.value;
    email.value;

    if (String(nombre.value).trim() === '') {
        alert("¡El nombre no puede estar vacío!");
        nombre.className+= '';
    }
    if (String(email.value).trim() === '') {
        alert("¡El email no puede estar vacío!");
    }

    birthdate.value;
    //Si ninguna de las tres variables de genero están marcadas, seleccionar una por defecto
    generoM.checked;
    generoF.checked;
    generoO.checked;
    
    movies.checked;
    sports.checked;
    music.checked;
    tech.checked;
    country.children;
    comments.value;
}