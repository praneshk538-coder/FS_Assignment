import React from 'react'
import { Routes,Route } from 'react-router-dom'
import LoginForm from './component/LginForm'
const App = () => {
  return (
    <>

   <LoginForm/>
    <Routes>
    
    <Route path='/' element={<login/>}/>






    </Routes>

    </>
  )
}

export default App
