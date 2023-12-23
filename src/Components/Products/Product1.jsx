import React from 'react'
import product1 from "../../assets/crmproduct1.png"
const Product1 = () => {
  return (
    <div className =" w-full flex items-center justify-center border-b-2 border-gray-300 overflow-hidden max-[680px]:flex-col">
    <div className=' flex w-2/12 px-5 ml-8 flex-col gap-2 max-[680px]:w-full'>
      <h3 className='text-2xl'>Product 1</h3>
      <p className='border-b-2 border-gray-400 w-14'></p>
    </div>
    
        <div className="min-h-500 w-full flex items-center justify-center  rounded-lg relative mb-3   ">
      {/* component #1 */}
      <img src={product1} alt="product1" className="w-2/4 rounded-sm wow animate__animated animate__fadeInUp animate__delay-0s max-[1200px]:w-2/3 max-[800px]:w-full"  />
    
      {/* component #2 (Overlayed on top of #1) */}
      <div className="absolute inset-y-40 flex justify-center flex-col bg-yellow-600 bg-opacity-85  p-10 w-2/4 transform translate-y-40 wow animate__animated animate__fadeInUp animate__delay-1s max-[1200px]:w-2/3 max-[800px]:w-full ">
        <h2 className="font-poppins font-semibold text-3xl text-white mb-4 max-[1200px]:text-lg">
          Grease Duct System
        </h2>
        <p className=" text-white max-[1200px]:text-sm max-[500px]:text-xs ">
          FyreWrap® Elite® 1.5 Duct Insulation is a two-layer flexible enclosure for
          two-hour rated commercial kitchen grease ducts. FyreWrap Elite 1.5 Duct
          Insulation is tested per ASTM E2336 and is acceptable as an alternate to a
          traditional fire-rated shaft. Installed as a two-layer system, FyreWrap
          Elite 1.5 complies with the International Mechanical Code (IMC) and
          Uniform Mechanical Code (UMC)
        </p>
      </div>
    </div>
    
    
    
        </div>
  )
}

export default Product1
