import { useEffect, useState } from "react";

const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat/says';
const CAT_ENDPOINT_IMAGE_URL_OPTIONS = 'size=50&color=red&json=true';


// Es buena práctica pasarle los parámetros como propiedades de un objetos porque de esa manera será más flexible, si queremos añadir nuevos atributos lo podremos hacer sin problema
export function useCatImage({fact}) {
    const [imageSRC, setimageSRC] = useState();


    // para recuperar la imagen cada vez que cambié el valor de fact
    useEffect(()=>{
        // Si no hay ninguna cita disponible todavía, no hacer nada
        if (!fact) return

        console.log("Entro en el useEffect para la imagen");

        const firstWord = fact.split(' ', 3).join(' ');
        console.log(firstWord);

        const URL_IMAGE = `${CAT_ENDPOINT_IMAGE_URL}/${firstWord}?${CAT_ENDPOINT_IMAGE_URL_OPTIONS}`;
        console.log(URL_IMAGE);

        fetch(URL_IMAGE)
        .then(response => response.json())
        .then(data => {
        const {url} = data;
        return setimageSRC(url);
        });
        

    }, [fact])

    return {imageSRC}
}
