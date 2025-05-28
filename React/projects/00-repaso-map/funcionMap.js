/*
    const nuevoArray = arrayOriginal.map((elemento, indice, array) => {
        // elemento es obligatorio
        // indice y array son opcionales

        //Lógica de transformación
        return elementoTransformado
    });
*/

console.clear();

const numeros =  [1, 2, 3, 4]

//Multiplicar por 2 cada uno de los números en un nuevo array usando .map

const duplicar = numeros.map((numero) => {
    return numero*2;
});

console.log("Array original: ", numeros);
console.log("Array nuevo: ", duplicar);


console.log("-----------------------------------");

//Devolver un array con todos los nombres en mayúsculas
const nombres = ["Valerion", "Johanien", "Pedron", "Sharik"];

const mayus = nombres.map((name) => {
    return name.toUpperCase();
});

console.log("Array original: ", nombres);
console.log("Array nuevo: ", mayus);


console.log("-----------------------------------");

const productos = [
        {producto: "Laptop", precio: 250}, 
        {producto: "Tablet", precio: 75}, 
        {producto: "Mochila", precio: 50}
];


//Devolver un array nuevo con todos los precios de los objetos con un 10% de descuento

const productosDescuento = productos.map((objetoProducto) => {
    const {producto, precio} = objetoProducto;

    return {producto: producto, precio: (precio * 0.9)}
});

console.log("Array original: ", productos);
console.log("Array nuevo: ", productosDescuento);


console.log("-----------------------------------");

const etiquetasProducto = productosDescuento.map((producto) => {        
    return `${producto.producto}: ${producto.precio}`;
});


console.log("Array original: ", productosDescuento);
console.log("Array nuevo: ", etiquetasProducto);


console.log("-----------------------------------");