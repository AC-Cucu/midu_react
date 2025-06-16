import { createRoot } from 'react-dom/client'
import ExpenseTracker from './components/ExpenseTracker'

import './index.css'

createRoot(document.getElementById('root')).render(  
    <>
      <ExpenseTracker/>
    </>
)
