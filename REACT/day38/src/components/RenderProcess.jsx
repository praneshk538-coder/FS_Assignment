import React, { useState } from 'react'

const RenderProcess = () => {
 
const [count,setCount] = useState(0)

const countchange = ()=>{

  setCount(count+1)

}

const countdec = ()=>{
  setCount(count-1)
}

const reset = ()=>{
  setCount(0)
}
  return (
    <div className='bg-blue-500 flex-col gap-3 text-white p-10 flex justify-center items-center'>
      <h1 className='bg-black text-white rounded w-40 text-center'>{count}</h1>
      <button onClick={countchange} className='bg-white text-black p-1 rounded w-40'>Increse</button>
       <button onClick={countdec} className='bg-red-400 text-black p-1 rounded w-40'>Decrece</button>
        <button onClick={reset} className='bg-yellow-400 text-black p-1 rounded w-40'>Reset</button>
    </div>
  )
}

export default RenderProcess