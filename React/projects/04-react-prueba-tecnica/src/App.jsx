import { useCatImage } from './hooks/useCatImage';
import { useCatFact } from './hooks/useCatFact';

import './App.css'

function App() {
  const {fact, getRandomFact} = useCatFact();
  const {imageSRC} = useCatImage({fact});

  const handleClick = () => {
    getRandomFact();
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
