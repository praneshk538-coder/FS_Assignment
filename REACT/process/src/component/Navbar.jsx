import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-amber-900  text-white p-2   flex justify-between gap-2 items-center'>
    

    <div>

        <h1> logo</h1>
  
    </div>


    <div className='mx-10 flex gap-10'>

     <Link to="/ Home">Home| </Link>
     <Link to="/State">State| </Link>
     <Link to="/Render">Render|</Link>

    </div>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        </div>
  )
}

export default Navbar