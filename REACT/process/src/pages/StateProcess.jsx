import React, { useState } from 'react'

const StateProcess = () => {
   console.log( 'RUNNING');
  
const [count,setCount]=useState(0)
const handleClick=()=>{

  setCount(count+1)

}
  return (
    <>
    <div className='bg-amber-300 p-30 flex  flex-col justify-between items-center'>
      
     <h1> StateProcess{count} </h1>

       <button className="bg-black text-white rounded p-1 w-30" onClick={handleClick}>Click here </button>
    </div>
    </>
  )
}

export default StateProcess