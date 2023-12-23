import React from 'react'
import product5 from "../../assets/crmproduct5.png"
import product6 from "../../assets/crmproduct6.png"
const Application2 = () => {
  return (
    <div className='w-full flex items-center justify-center min-h-500'>

<div className=' flex flex-col items-center w-2/4' >
{/* 1 */}
<div className='flex flex-row  w-full group-hover:grayscale-0' >

<div className='w-2/4   h-48 wow animate__animated animate__fadeIn '>
  <img src={product5}  className='w-full h-full object-cover  grayscale hover:grayscale-0 ' alt="" />
</div>
<div className='hover:bg-yellow-500 flex justify-center flex-col px-5 w-2/4 cursor-pointer'>
  <h1 className='text-4xl text-gray-500 font-poppins font-semibold'>Carpark</h1>
  <h1 className='text-4xl text-gray-500 font-poppins font-semibold'>Exhaust</h1>
  <h1 className='text-4xl text-gray-400 font-poppins font-semibold'>Duct</h1>
</div>
</div>
{/* 2 */}
<div  className=' w-full flex flex-row  justify-between '>

<div className='hover:bg-yellow-500 flex justify-center items-end px-5 flex-col  w-2/4 cursor-pointer' >
  <h1 className='text-4xl text-gray-500 font-poppins font-semibold'>Kitchen</h1>
  <h1 className='text-4xl text-gray-500 font-poppins font-semibold'>Exhaust</h1>
  <h1 className='text-4xl text-gray-400 font-poppins font-semibold'>Duct</h1>
</div>
<div className='w-2/4 h-48  wow animate__animated animate__fadeIn '>
  <img src={product6} className='w-full h-full object-cover  grayscale hover:grayscale-0' alt="" />
</div>
</div>
</div>

</div>
  )
}

export default Application2
