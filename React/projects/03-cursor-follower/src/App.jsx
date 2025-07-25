import { useState, useEffect } from "react"


function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x: 0, y: 0})

  const handleClick = () => {
    setEnabled(!enabled)
  }

  // useEffect((codigoAEjecutar, listadoDependencias))

  useEffect(() => {
      //Se ejecutará por lo menos una vez

      const handleMove = (event) => {
        const {clientX, clientY} = event;
        setPosition({x: clientX, y: clientY});
        console.log("pointermove: ", {clientX, clientY});
      }

      // Las suscripciones podemos indicarle cuando arrancar, pero una vez arrancadas siguen escuchando el evento que le hayamos indicado
      if(enabled) {
        window.addEventListener('pointermove', handleMove);
      }

      return () => {
        window.removeEventListener('pointermove', handleMove);
      }
  }, [enabled])



  

  return (
    <main>
      <div 
        style={
          {
            position: 'absolute',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            border: '1px solid #fff',
            borderRadius: '50%',
            opacity: 0.8,
            pointerEvents: 'none',
            left: -25,
            top: -25,
            width: 50,
            height: 50,
            transform: `translate(${position.x}px, ${position.y}px)`
          }
        }
      />
        
      
      <button onClick={handleClick}>
       {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </main>
  )
}

export default App
