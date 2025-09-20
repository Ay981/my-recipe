import React from 'react'
import { FaRegHeart,FaRegComment, FaStar} from "react-icons/fa";



 
function Card({title,image,time,rating}) {
  return (
    <>
    <div className='bg-gray-300 rounded-2xl shadow-2xl w-1/6 h-80 flex-col gap-5'>
    <img src={image} alt="food-image" aria-label='IMAGE OF THE FOOD' className='h-52 rounded-xl'/>
    <div className='flex items-center gap-x-28  pt-6 pb-3'>   
      <h2 className='font-bold text-[inter] text-2xl'> {title}</h2>
      <div className='flex items-center gap-2.5'>
      <FaStar fill='orange'/> 
      <p>{rating}</p>
      </div>
    </div>
 
    <div className='flex  gap-2.5  w-4/5 font-bold h-5'>
           <h3 className='w-3xl text-[#DC582A] text-2xl'>{time}</h3>
          <div className='flex justify-end gap-5 items-end w-[90%] pt-1.5  ' >
          <button className='cursor-pointer'><FaRegHeart size={25} /></button>
          <button className='cursor-pointer'><FaRegComment size={25} /></button>
          </div>

    </div>
  

    </div>
    
    </>
  )
}

export default Card