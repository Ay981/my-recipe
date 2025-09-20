import React from 'react'
import Custom from './Custom'
function CustomContainer() {
  return (
    <>
    <div className='w-[104rem] justify-start items-center mt-5'>
    <div className='flex gap-3 pl-45'>
    <Custom text = "bruv" color ="red"/>
    <Custom text = "bruh" color ="lGreen"/>
    <Custom text = "brruh" color ="lBrown"/>
    <Custom text = "bruv" color ="dBrown"/>
    <Custom text = "bruv" color ="dGreen"/>
    </div>
    </div>
    </>
  )
}

export default CustomContainer