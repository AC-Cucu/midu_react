import { Fragment, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {TwitterFollowCard} from './TwitterFollowCard.jsx'

// import Task from './Task.jsx'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// Ejemplo de función que podemos pasarle como prop
//const format = (userName) => {return `@${userName}`}

// React va a renderizar siempre un unico elemento y ya dentro de ese elemento, 
// podremos añadir todos los elementos que queramos (etiquetas, componentes, etc...)

root.render(
 <>
  <div className='App'>
    <TwitterFollowCard name={"Cucu"} userName={"cucu"} initialIsFollowing={true}/>
    <TwitterFollowCard name={"John"} userName={"john"} initialIsFollowing={true}/>
    <TwitterFollowCard name={"Bruce Lee"} userName={"brucelee"} initialIsFollowing={false}/>
  </div>
 </>
)
