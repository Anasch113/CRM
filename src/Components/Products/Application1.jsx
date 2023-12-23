import React from 'react'
import product3 from "../../assets/crmproduct3.png"
import product4 from "../../assets/crmproduct4.png"
import { MdOutlineWorkspaces } from "react-icons/md";
const Application1 = () => {
  return (
    <div className='w-full flex items-center justify-evenly min-h-500 flex-col'>
      <div className='flex flex-row w-full  gap-3  justify-center wow animate__animated animate__rotateIn'>

     
<h2 className='text-3xl font-poppins font-semibold mb-10 '>Applications </h2>
<MdOutlineWorkspaces className='text-3xl'/>
</div>

<div className=' flex flex-col items-center w-2/4' >

  
{/* 1 */}
<div className='flex flex-row  w-full group-hover:grayscale-0' >

<div className='w-2/4   h-48 wow animate__animated animate__fadeIn '>
  <img src={product3}  className='w-full h-full object-cover  grayscale hover:grayscale-0 ' alt="" />
</div>
<div className='hover:bg-yellow-500 flex justify-center flex-col px-5 w-2/4 cursor-pointer'>
  <h1 className='text-4xl text-gray-500 font-poppins font-semibold'>Stairway</h1>
  <h1 className='text-4xl text-gray-500 font-poppins font-semibold'>Purging</h1>
  <h1 className='text-4xl text-gray-400 font-poppins font-semibold'>Duct</h1>
</div>
</div>
{/* 2 */}
<div  className=' w-full flex flex-row  justify-between '>

<div className='hover:bg-yellow-500 flex justify-center items-end px-5 flex-col  w-2/4 cursor-pointer' >
  <h1 className='text-4xl text-gray-500 font-poppins font-semibold'>Smoke</h1>
  <h1 className='text-4xl text-gray-500 font-poppins font-semibold'>Extraction</h1>
  <h1 className='text-4xl text-gray-400 font-poppins font-semibold'>Duct</h1>
</div>
<div className='w-2/4 h-48  wow animate__animated animate__fadeIn '>
  <img src={product4} className='w-full h-full object-cover  grayscale hover:grayscale-0' alt="" />
</div>
</div>
</div>

</div>

  )
}

export default Application1
