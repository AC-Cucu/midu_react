//Leer el archivo JSON local
fetch('../agenda/agenda.json')
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

/*
    Replicar el funcionamiento de los 3 primeros botones: 
        - Mostrar la estructura completa del JSON de agenda;
        - Listar los diferentes nombres de contactos;
        - Modificar el correo de un contacto en concreto;
*/