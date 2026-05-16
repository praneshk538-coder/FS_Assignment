import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <>
  
       
      <div className="bg-blue-400 p-2 flex justify-between items-center">

        <div>
        logo
      </div>

      <div className="flex gap-15">
          
        <Link className="bg-black text-white p-2 rounder-full  w-20  text center" to="/">Home</Link>
         <Link to="/About">About </Link>
         <Link to="/Contact">Contact</Link>


       

      </div>



    </div>
    </>
  )
}
export default Navbar