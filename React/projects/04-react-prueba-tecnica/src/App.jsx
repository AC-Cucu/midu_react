import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM = 'https://catfact.ninja/fact';
const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat/says';
const CAT_ENDPOINT_IMAGE_URL_OPTIONS = 'size=50&color=red&json=true';

function App() {
  //const [fact, setFact] = useState('Random cat fact!')
  const [fact, setFact] = useState();
  const [imageSRC, setimageSRC] = useState();

  const fetchCatFact = () => {
    fetch(CAT_ENDPOINT_RANDOM)
    // Primero hacemos la llamada y duelve la promesa
    .then(respuestaPromesa => respuestaPromesa.json())
    // Y después, recuperamos los datos de esa promesa
    .then(respuestaAPI => {
      const hechoRandom = respuestaAPI?.fact || 'No se ha recuperado ningún hecho';
      console.log(hechoRandom);

      return setFact(hechoRandom)
    })
  }

  const fetchCatImage = () => {
    const firstWord = fact.split(' ', 3).join(' ');
    console.log(firstWord);

    const URL_IMAGE = `${CAT_ENDPOINT_IMAGE_URL}/${firstWord}?${CAT_ENDPOINT_IMAGE_URL_OPTIONS}`;
    console.log(URL_IMAGE);

    fetch(URL_IMAGE)
    .then(response => response.json())
    .then(data => {
      const {id, url} = data;
      return setimageSRC(url);
    });
  }

  // para recuperar la cita al cargar la página
  useEffect(()=>{
    console.log("Entro en el useEffect para la cita");

    fetchCatFact();
  }, []);

  // para recuperar la imagen cada vez que cambié el valor de fact
  useEffect(()=>{
    // Si no hay ninguna cita disponible todavía, no hacer nada
    if (!fact) return

    console.log("Entro en el useEffect para la imagen");

    fetchCatImage();

  }, [fact])  

  const handleClick = () => {
    fetchCatFact();
  }

  return (
    <>
      <h1>App de gatitos</h1>
      {/* Renderizado condicional en base al valor de fact */}
      {
        fact && <p>{fact}</p>        
      }
      {
        imageSRC && <img src={imageSRC} alt={`Image extracted from the three words of ${fact}`}/>
      }
      <button onClick={handleClick} >Generar hecho aleatorio</button>
    </>
  )
}

export default App
