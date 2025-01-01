
import { useState } from 'react';
import { FaStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
const Product = ({product}) => {
  // console.log("hello",props.product);
  // const data=props.product;
  const [isShowDescription, setIsShowDescription] = useState(false)
  return (
    
    <div className="border rounded-3xl pl-5 bg-white pb-3 shadow-lg hover:scale-95 transition ease-in-out duration-300 cursor-pointer w-full">
  {/* Card content */}
      <div>
        <img className='w-full  object-cover rounded-t-lg' src={product.images} alt="" />
        <span></span>
      </div>
      
      <div>
        <h1 className='font-bold font-serif text-2xl text-gray-800 truncate'>{product.title} </h1>
        {/* <h1 className='font-bold font-serif text-2xl text-gray-800'></h1> */}
      </div>
      <div>
        <p className='text-gray-800'>${product.price}</p>
        <p  className={`text-gray-600 text-sm ${
              isShowDescription ? "" : "truncate"
            }`}
            onClick={() => setIsShowDescription(!isShowDescription)}>{product.description}</p>
      </div>
      <div>
      <span className='text-blue-900'> <button onClick={()=> setIsShowDescription(!isShowDescription)} > {isShowDescription? "Show Less":"Show More"} </button></span>
        
      </div>
      <div className='flex justify-between'>
        <div className='flex gap-2'>
          <FaStar className='mt-1 text-yellow-500 text-lg' />
          <p className='text-lg font-bold'>{product.rating}</p>
        </div>
        <div>
          <FaHeart className='mr-4 mt-2 text-gray-600' />

        </div>
      </div>
      <div className='pr-4'>
        <button className='bg-orange-400 text-white py-1 px-3 rounded-md hover:bg-orange-500 transition-colors duration-200 mt-2  w-full'>Add to Cart</button>
      </div>
    </div>
    
    
  )
}

export default Product
