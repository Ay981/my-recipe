import FoodHero from '../assets/Rectangle20.jpg'
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="w-full px-4 pt-6">
      <div className="relative mx-auto h-[18rem] max-w-6xl overflow-hidden rounded-2xl md:h-[24rem] lg:h-[28rem]">
        <img
          src={FoodHero}
          alt="Mike’s famous salad with cheese"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45"></div>

        <div className="absolute inset-x-6 top-1/4 z-10 text-white md:inset-x-10 lg:inset-x-12">
          <p className="text-sm font-semibold text-[#DC582A] md:text-base lg:text-lg">Trending now</p>
          <h1 className="mt-1 text-2xl font-bold leading-tight md:text-4xl lg:text-5xl">
            Mike’s famous salad
            <br className="hidden md:block" />
            with cheese
          </h1>
          <p className="mt-4 text-sm font-medium md:text-base">By John Mike</p>
        </div>

        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-4 text-2xl text-white">
          <button type="button" aria-label="Previous">
            <FaRegArrowAltCircleLeft />
          </button>
          <button type="button" aria-label="Next">
            <FaRegArrowAltCircleRight />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero

