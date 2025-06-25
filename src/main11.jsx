import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
<<<<<<< HEAD
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
=======
// import App from './App.jsx'
import Routing from './MainRoute.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
   <Routing />
  </StrictMode>,
)
>>>>>>> 527789529b788cd8cd3ad98745d59cd5c51f134f
