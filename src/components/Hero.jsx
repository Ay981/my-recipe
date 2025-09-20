import FoodHero from '../assets/Rectangle20.jpg'
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";

function Hero() {
  return (
    <div className="relative w-[104rem] h-96 ml-34  mt-7 overflow-hidden rounded-2xl ">
     
      <img src={FoodHero} alt="" className="w-full h-full object-cover" />
    
      <div className="absolute inset-0 bg-black/40 z-10"></div>
    
      <div className="absolute z-10 top-1/4 left-12 text-white">
        <p className="text-[#DC582A] text-2xl font-bold mb-2">Trending now</p>
        <p className="text-5xl font-bold">
          Mike’s famous salad <br />with cheese
        </p>
        <p className="mt-4 font-medium">By John Mike</p>
        

      </div>
      <div className='absolute bottom-8 right-1/2 flex gap-4 text-2xl z-10 font-thin cursor-pointer'>       
       <FaRegArrowAltCircleLeft color='white'/>
       <FaRegArrowAltCircleRight color = 'white'/> 
      
      </div>



    </div>
  )
}

export default Hero

