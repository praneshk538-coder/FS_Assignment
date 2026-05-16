import React from 'react'
import Navbar from './component/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import StateProcess from './pages/StateProcess'
import RenderProcess from './pages/RenderProcess'




const App = () => {
  return (
    <>
    
    <Navbar/>
   <StateProcess/>
    <Routes>

    <Route path='/' element={<Home/>}></Route>
        <Route path='/' element={<StateProcess/>}></Route>
            <Route path='/' element={<RenderProcess/>}></Route>



    </Routes>
    
    
    </>
  )
}

export default App