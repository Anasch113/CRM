
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from './Pages/Home'
import Product from "./Pages/Product"
import Contact from "./Pages/Contact"
import Navbar from './Components/Navbar/Navbar'
function App() {
 

  return (
    <>
      <Router>
      <Navbar/>
<Routes>

<Route path='/' element = {<Home/>}/>
<Route path='/product' element = {<Product/>}/>
<Route path='/contact' element = {<Contact/>}/>




</Routes>



      </Router>
      
    </>
  )
}

export default App
