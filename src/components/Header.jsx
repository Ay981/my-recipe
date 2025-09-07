import { FaBars } from "react-icons/fa6";
import Cookpal from "../assets/Cookpal 1.jpg"
import user from "../assets/Oval.png"
import { CiSearch } from "react-icons/ci";

function Header() {
  return (
    <>
        <div className='bg-white w-full flex items-center mt-3 shadow rounded pb-3'>

            <div className="flex gap-x-3 pl-2 w-[25%] justify-center gap-2.5">
            <button>
                <FaBars className="w-7 h-7"/>
            </button>
            <img src={Cookpal} alt="CookPal" />
            </div>


            <div className="w-[20%]  flex h-12 items-center bg-[#F3F3F3]  rounded-2xl">
        
                    <div className="flex items-center w-full  ">
                        <label htmlFor="search" className="pl-4 w-[38%] font-[Quicksand]">All Categories | </label>
                        <div className="flex  justify-start items-center gap-2 w-[75%%] ml-3">
                            <input type="text" name="search" className="h-1/2 border-amber-900 w-[90%]" placeholder="search for your item"/> 
                        </div>
                        <button className="h-1/2   w-1/10"><CiSearch className="w-1/2 h-full fill-black"/></button>

                </div>
            </div>
             

             
            <div className="font-[popins] text-xl w-[30%] justify-end flex gap-6  ">
            <a href="" className="hover:text-green-600">Home</a>
            <a href="" className="hover:text-green-600"> Explore</a>
            <a href=""className="hover:text-green-600">Help</a>

            </div>
            <div className="rounded-full w-[10%] flex justify-end" >
                <img src={user} alt="" className="rounded-full w-15" />

            </div>
        </div> 
    </>
  )
}

export default Header