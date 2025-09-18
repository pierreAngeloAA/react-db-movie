import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DbMovie } from './DbMovie';
import { FavoritesProvider } from './context/FavoritesContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavoritesProvider>
      <DbMovie />
    </FavoritesProvider>
  </StrictMode>,
)

