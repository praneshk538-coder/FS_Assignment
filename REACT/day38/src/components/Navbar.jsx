import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <div className='bg-blue-500 p-3 text-white flex justify-between items-center'>
        <div>
      <h1>Logo</h1>
        </div>
        <div className='mx-10 flex gap-10'>
       <Link to="/">Home</Link>
       <Link to="/state">State Process</Link>
       <Link to="/render">Rendering Methods</Link>
        </div>
    </div>
    </>
  )
}

export default NavBar