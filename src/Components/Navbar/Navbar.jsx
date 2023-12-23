import React from 'react'
import "../../app.css"
import { Link } from 'react-router-dom'
const Navbar = () => {

  return (
    <div className='navbar-container overflow-x-hidden'>

     <div className="logo">
      <h2 className='text-red-600 font-bold text-7xl border-4 border-gray-500 p-6 rounded-xl mt-3 mb-3 max-[860px]:text-4xl'>FyreWrap</h2>
     </div>

<nav>
  <ul className='flex gap-10 max-[860px]:flex-col max-[860px]:gap-0 overflow-hiddenhidden'>
   <li className='text-text-gray text-xl font-medium hover:text-red-500 cursor-pointer relative max-[860px]:text-lg'>
   <Link to='/'>Home</Link>   </li>
   <li className='text-text-gray text-xl font-medium hover:text-red-500 cursor-pointer max-[860px]:text-lg'><Link to='/product'>Products</Link></li>
  
   <li className='text-text-gray text-xl font-medium hover:text-red-500 cursor-pointer max-[860px]:text-lg'><Link to='/contact'>Contact</Link></li>
  </ul>
</nav>

<div className="others">
  <button className='text-text-gray text-xl font-medium px-8 py-3 bg-red-600 rounded-lg hover:bg-red-500 text-white max-[860px]:px-5 max-[860px]:py-2'>Login</button>
</div>
     
    </div>
  )
}

export default Navbar
