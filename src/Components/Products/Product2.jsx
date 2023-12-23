import React from 'react'
import product2 from "../../assets/crmproduct2.png"
const Product2 = () => {
  return (
    <div className =" w-full flex items-center justify-center border-b-2 border-gray-300 overflow-hidden max-[680px]:flex-col">

    <div className=' flex w-2/12 px-5 ml-8 flex-col gap-2  max-[680px]:w-full'>
  <h3 className='text-2xl'>Product 2</h3>
  <p className='border-b-2 border-gray-400 w-14'></p>
</div>

<div className="min-h-500 w-full flex items-center justify-center  rounded-lg relative  mb-2 ">
{/* component #1 */}
<img src={product2} alt="product1" className="w-2/4 rounded-sm wow animate__animated animate__fadeInUp animate__delay-0s max-[800px]:w-full" />

{/* component #2 (Overlayed on top of #1) */}
<div className="absolute inset-y-40 flex justify-center flex-col bg-gray-600 bg-opacity-85  p-10 w-2/4 transform translate-y-40 wow animate__animated animate__fadeInUp animate__delay-1s max-[1200px]:w-2/3 max-[800px]:w-full">
<h2 className="font-poppins font-semibold text-3xl text-white mb-4 max-[1200px]:text-lg">
Air Distribution System
</h2>
<p className=" text-white max-[1200px]:text-sm max-[500px]:text-xs ">
  FyThis flexible, fire protection wrap meets the requirements defined by the Mechanical 
Code and is an alternative to a traditional fire-rated shaft wall enclosure around ducts. It 
is used to wrap HVAC ducts, stairwell pressurization ducts and smoke extraction ducts 
and provide critical fire protection and life safety.
</p>
</div>
</div>



</div>
  )
}

export default Product2
