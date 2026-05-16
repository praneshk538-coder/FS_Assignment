import { useState } from "react"


const StateProcess = () => {
  console.log('Running');
  
const [react,setReact] = useState(false)

const handleClick = ()=>{

  setReact(!react)

}

  return (
    <div className="bg-amber-300 flex flex-col gap-3 justify-center items-center p-10 h-100">
      <h1>State Process</h1> 
      <p>{react}</p>
      <p>{react?"This is Ture":"This is False"}</p>
      <p>{react&&"This is only showing When the state is true"}</p>
      <button className="bg-black text-white rounded p-1 w-30"   onClick={handleClick} >Click</button>
    </div>
  )
}

export default StateProcess