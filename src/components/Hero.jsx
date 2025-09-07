import FoodHero from '../assets/Rectangle20.jpg'
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";

function Hero() {
  return (
    <div className="relative w-6xl h-96 ml-34  mt-7 overflow-hidden rounded-2xl ">
     
      <img src={FoodHero} alt="" className="w-full h-full object-cover" />
    
      <div className="absolute inset-0 bg-black/40 z-10"></div>
    
      <div className="absolute z-10 top-1/4 left-12 text-white">
        <p className="text-[#DC582A] text-2xl font-bold mb-2">Trending now</p>
        <p className="text-5xl font-bold">
          Mike’s famous salad <br />with cheese
        </p>
        <p className="mt-4 font-medium">By John Mike</p>
        

      </div>
      <div className='absolute bottom-8 right-1/2 flex gap-4 text-2xl z-10 font-thin'>       
       <FaRegArrowAltCircleLeft color='white'/>
       <FaRegArrowAltCircleRight color = 'white'/> 
      
      </div>



    </div>
  )
}

export default Hero

// function Hero() {
//   return (
//     <>
//     <div className="w-full flex justify-center my-3 h-96 rounded-full ">
//       <div className="Hero w-[80%] h-full bg-linear-0">
//       <div className="flex flex-col  mt-22 ml-20 font-bold font-[Poppins] w-[35%] ">
//         <p className="text-[#DC582A] text-2xl">Trending now</p>
//         <br />
//         <p className="text-[#fff] text-5xl">Mike’s famous salad <br /> with cheese</p>
//     </div>
//     </div>

//     </div>
    
    
    
//     </>
//   )
// }

// export default Hero