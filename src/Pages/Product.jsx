import React from 'react'




import Product1 from '../Components/Products/Product1'
import Product2 from '../Components/Products/Product2'
import Application1 from '../Components/Products/Application1'
import Application2 from '../Components/Products/Application2'
import Carousel from '../Components/Products/Carousel/Carousel'
import Info from '../Components/Products/Info/Info'

const Product = () => {
  
  
  return (

    <div className='product-container'>

      <div className='w-full flex flex-col items-center gap-20 min-h-900 mb-10 overflow-hidden'>

    
    <h2 className='text-3xl font-bold font-poppins mt-10 text-text-gray'>OUR PRODUCTS</h2>


<Product1/>
<Product2/>
<Application1/>
<Application2/>
<Carousel/>
<Info/>












    </div>
    </div>
  )
}

export default Product
