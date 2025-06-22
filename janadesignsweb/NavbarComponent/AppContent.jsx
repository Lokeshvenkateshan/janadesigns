import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Main from '../mainComponent/Main'
import AllDesigns from '../pages/subpages/AllDesigns'
import DesignDetail from '../pages/subpages/DesignDetail'

const AppContent = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element={ <Main/>}/>
          <Route path='/home' element={ <Home/>}/>
          <Route path='/alldesigns' element={ <AllDesigns/>}/>
          <Route path="/design/:id" element={<DesignDetail/>} />

          
        </Routes>
    </div>
  )
}

export default AppContent
