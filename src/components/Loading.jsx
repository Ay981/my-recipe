import React from 'react'
import { Spiral } from 'ldrs/react'
import 'ldrs/react/Spiral.css'



function Loading() {
  return (
    <div className='flex justify-center items-center pt-12 '> 
 <Spiral
  size="60"
  speed="0.9"
  color="black" 
  
/>
</div>
  )
}

export default Loading