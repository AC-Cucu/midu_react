import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Nuevo } from './Nuevo.jsx'

createRoot(document.getElementById('root')).render(  
    <>
        <App />
        <Nuevo></Nuevo>
    </>
    
)
