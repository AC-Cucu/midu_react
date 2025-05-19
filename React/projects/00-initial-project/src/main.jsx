import { Fragment, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {AppRoot} from './App.jsx'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// React va a renderizar siempre un unico elemento y ya dentro de ese elemento, podremos añadir todos los elementos que queramos (etiquetas, componentes, etc...)

root.render(
 <Fragment>
  <AppRoot />
 </Fragment>
)
