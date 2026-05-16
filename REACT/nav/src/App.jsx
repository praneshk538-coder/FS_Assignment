import { Route,Routes } from 'react-router-dom'
import { Home } from './pages.jsx/Home'
import { Contact } from './pages.jsx/Contact';
import { About } from './pages.jsx/About';
import Navbar from './component/Navbar';

 const App = () => {
  return (

    <>
    <Navbar/>
    <Home/> 
      <About/>
    <Contact/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/" element={<Contact/>}/>
       <Route path="/" element={<About/>}/>


    </Routes>
      
    
    </>
  )
}

export default App
