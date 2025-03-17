//Variable global que tendrá el resutlado del parseado del JSON
let datosConfig;

//Elemento donde añadiremos los valores
const resultado = document.getElementById("resultado");

//Div contenedor del h3 y el texto del resultado
const mostrarResultado = document.getElementById("mostrarResultado");

//Para redirigir al index y con eso conseguir reiniciar la página
const cabecera = document.getElementById("header");
cabecera.onclick = function () {
    window.location.href = './index.html';
}

//Leer el archivo JSON local
fetch('config.json')
    .then(function(response) {
        response.json()
        .then(function (data) {
            datosConfig = data;

            console.log("Datos cargados:", datosConfig);
        })
    })
    .catch(function(error) {
        console.error("Error al cargar el archivo JSON:", error)
    });

//Función para mostrar todas las bases de datos
function mostrarBaseDatos() {
    let baseDatos = datosConfig.configuracion_servidor.base_datos;

    resultado.textContent = JSON.stringify(baseDatos, null, 2);

    if (mostrarResultado.style.display === "none" || mostrarResultado.style.display === "") mostrarResultado.style.display = "block";
}

//Función para mostrar la configuración de backups
function mostrarBackups() {
    let backups = datosConfig.configuracion_servidor.backups;

    resultado.textContent = JSON.stringify(backups, null, 2);

    if (mostrarResultado.style.display === "none" || mostrarResultado.style.display === "") mostrarResultado.style.display = "block";
}

//Función para listar los nombres de las bases de datos
function listarNombresBD() {
    let baseDatos = datosConfig.configuracion_servidor.base_datos;

    //Crear un array con solo los nombres de bases de datos
    const nombres = baseDatos.map(bd => bd.nombre);
    
    resultado.textContent = "Nombres de Bases de Datos:\n" + nombres.join("\n");

    if (mostrarResultado.style.display === "none" || mostrarResultado.style.display === "") mostrarResultado.style.display = "block";
}

//Función para modificar el usuario de BD_Pruebas
function modificarUsuario() {
    let baseDatos = datosConfig.configuracion_servidor.base_datos;

    //Buscar en el json la base de datos con el nombre "BD_Pruebas"
    const bdPruebas = baseDatos.find(bd => bd.nombre === "BD_Pruebas");

    //Si existe, modificar el valor del usuario
    if (bdPruebas) {
        bdPruebas.usuario = "pepon";
        resultado.textContent = "Usuario de BD_Pruebas modificado:\n" + JSON.stringify(bdPruebas, null, 2);
    } else {
        alert("No se encontró la base de datos BD_Pruebas.");
    }

    if (mostrarResultado.style.display === "none" || mostrarResultado.style.display === "") mostrarResultado.style.display = "block";
}


