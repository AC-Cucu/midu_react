import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Board from './Board.jsx'

createRoot(document.getElementById('root')).render(  
  <Board />
)
