import React from 'react'
import './App.css'
import Navbar from './component/Navbar';
import { Router } from 'react-router-dom';
const App =()=>{
  return(
    <>

    <Router>

       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
    
    </Router>
      <Navbar/>
    </>
  )
}
export default App;