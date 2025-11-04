import React from 'react'
import { FaAngleRight } from "react-icons/fa6";


function Custom({color,text}) {
    const colors = {
        red: 'bg-[#F6784C]',
        lGreen: 'bg-[#C4D600]',
        lBrown: 'bg-[#EAAA00]',
        dBrown : 'bg-[#ED8B00]',
        dGreen: 'bg-[#84BD00]'
    }
    

  return (
 <>
    <div className={`${colors[color]} w-1/4 rounded-2xl h-20 flex items-center justify-center text-white gap-2.5 text-xl font-[Poppins] font-medium`}>
        <h1>{text}</h1>
        <button>  <FaAngleRight /></button>
       


    </div>
    <div className="hidden md:flex items-center justify-between gap-6">
  {/* buttons */}
</div>
    
    
    </>

  )
}

export default Custom