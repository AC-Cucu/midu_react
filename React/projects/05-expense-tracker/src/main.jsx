import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ExpenseTracker from './components/ExpenseTracker'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <ExpenseTracker/>
    </>
  </StrictMode>
)
