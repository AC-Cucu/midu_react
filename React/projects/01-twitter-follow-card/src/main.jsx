import { Fragment, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {TwitterFollowCard} from './TwitterFollowCard.jsx'

import Task from './Task.jsx'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// React va a renderizar siempre un unico elemento y ya dentro de ese elemento, 
// podremos añadir todos los elementos que queramos (etiquetas, componentes, etc...)

root.render(
 <>
  <div className='App'>
    <TwitterFollowCard name={"Cucu"} userName={"cucu"}/>
    <TwitterFollowCard name={"John"} userName={"john"}/>
    <TwitterFollowCard name={"Homer"} userName={"homer"}/>

    <Task name={"Recoger NIE"} status={"completada"} owner={"Sebas"}/>
    <Task name={"Limpiar cocina"} status={"pendiente"} owner={"Cucu"}/>
    <Task name={"Tomar pastilla roja"} status={"completada"} owner={"Neo"}/>
  </div>
 </>
)
