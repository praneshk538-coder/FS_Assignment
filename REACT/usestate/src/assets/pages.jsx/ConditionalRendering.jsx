import React from 'react'

const ConditionalRendering = () => {
  const[color,setColor]= useState(false)

  const handleClick =()=>{
        setColor(!color)
  }
  return (
    <>
    <div className='bg-red-600,p-2'>
      <h1>Conditional rendering</h1>
      <p>{color?<p className="bg-red-500 p-2">this is trye</p>:<p>this is false</p>}</p>
      <button onClick={handleClick}> click to update</button>
    </div>
    
      </>
  )
  
  
}

export default ConditionalRendering