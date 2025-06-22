import { useState } from 'react'
import {BrowserRouter} from 'react-router-dom';
import AppContent from '../NavbarComponent/AppContent';
function App() {

  return (
    <>
      <BrowserRouter>
              <AppContent/>
      </BrowserRouter>
    </>
  )
}

export default App
