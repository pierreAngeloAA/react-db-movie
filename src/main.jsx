import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {MovieExpertApp} from './MovieExpertApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovieExpertApp />
  </StrictMode>,
)
