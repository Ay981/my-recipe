import React from 'react'
import Custom from './Custom'

function CustomContainer() {
  return (
    <div className="hidden md:flex md:items-center md:justify-center md:mt-5">
      <div className="flex flex-wrap items-center gap-3 px-6">
        <Custom text="bruv" color="red" />
        <Custom text="bruh" color="lGreen" />
        <Custom text="brruh" color="lBrown" />
        <Custom text="bruv" color="dBrown" />
        <Custom text="bruv" color="dGreen" />
      </div>
    </div>
  )
}

export default CustomContainer