import { useState } from 'react'
import './App.css'
import {BrowserRouter} from 'react-router-dom';
import AppContent from '../Component/AppContent';

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
