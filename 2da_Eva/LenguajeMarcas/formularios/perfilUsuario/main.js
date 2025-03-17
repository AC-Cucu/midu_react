let crearPerfil = document.getElementById("create_profile");

/* 

<input id="nombre" type="text" maxlength="120" required>
<input id="edad" type="number" max="120">
<textarea id="descripcion" max="250"></textarea> 

*/

crearPerfil.onclick = function () {
    // imprimir por consola los valores de los 3 primeros inputs
    let nombreCompleto = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let descripcion = document.getElementById("descripcion").value;

    console.log("Nombre completo: ", nombreCompleto);
    console.log("Edad: ", edad);
    console.log("Descripción: ", descripcion);

    let pattern = new RegExp("[0-9]", "g");

    let contenido = document.getElementById("profile_preview");

    let isNanNombre = isNaN(Number(nombreCompleto));

    let contieneNumero = nombreCompleto.search(pattern);

    for (let index = 0; index < nombreCompleto.length; index++) {
        if (!isNaN(nombreCompleto[index])) alert("Cuidao.");
    }

    //Añadir comprobación para informar al usuario que no puede introducir un nombre vacío
    if (nombreCompleto === '') {
        alert("El nombre no puede estar vacío.");
    }    
    else if (!isNanNombre) {
        alert("El nombre no debe ser un número.");
    }  
    // else if (contieneNumero !== -1) {
    //     alert("El nombre no debe contener números.");
    // }
    else if (edad === '') {
        alert("La edad no puede estar vacía.");
    }
    else if (descripcion === '') {
        alert("La descripción no puede estar vacía.");
    } 
    else {
        contenido.innerHTML = `
            <h3>Nombre: ${nombreCompleto}, ${edad} años</h3>
            <p>Descripción personal: </p>
            <p>${descripcion}</p>
        `;

        contenido.style.display = "block"; 
    }
}