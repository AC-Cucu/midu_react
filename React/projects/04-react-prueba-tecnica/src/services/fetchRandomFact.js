/*
    Nunca es buena idea pasar sets o props de un componente a la hora de seprar la lógica.
    La idea de separar la lógica realmente viene para poder reutilizar esto en otro componente.
*/
  
  const CAT_ENDPOINT_RANDOM = 'https://catfact.ninja/fact';


    // Referencia de alternativa de llamada con varios .then
    // const fetchCatFact = () => {
    //   fetch(CAT_ENDPOINT_RANDOM)
    //   // Primero hacemos la llamada y duelve la promesa
    //   .then(respuestaPromesa => respuestaPromesa.json())
    //   // Y después, recuperamos los datos de esa promesa
    //   .then(respuestaAPI => {
    //     const hechoRandom = respuestaAPI?.fact || 'No se ha recuperado ningún hecho';
    //     console.log(hechoRandom);
  
    //     return setFact(hechoRandom)
    //   })
    // }
  
  export const fetchCatFact = async () => {    
    // Primero hacemos la llamada y duelve la promesa
    const respuestaPromesa = await fetch(CAT_ENDPOINT_RANDOM);

    // Y después, recuperamos los datos de esa promesa
    const respuestaDatosAPI = await respuestaPromesa.json();    
    
    const hechoRandom = respuestaDatosAPI?.fact || 'No se ha recuperado ningún hecho';
    //console.log(hechoRandom);

    return hechoRandom
  }