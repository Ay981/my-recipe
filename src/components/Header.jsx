import { useState } from 'react'
import { FaBars } from "react-icons/fa6"
import { IoClose } from "react-icons/io5"
import Cookpal from "../assets/Cookpal 1.jpg"
import user from "../assets/Oval.png"
import { CiSearch } from "react-icons/ci"

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full bg-white shadow">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:gap-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Toggle navigation"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-2xl text-neutral-700 md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <IoClose /> : <FaBars />}
          </button>
          <img src={Cookpal} alt="Cookpal logo" className="h-10 w-auto shrink-0" />
        </div>

        <form className="flex flex-1 items-center gap-2 rounded-full bg-neutral-100 px-3 py-2 text-xs sm:text-sm md:max-w-lg">
          <button
            type="button"
            className="hidden items-center gap-1 whitespace-nowrap font-semibold text-neutral-600 sm:flex"
          >
            All Categories
          </button>
          <label htmlFor="search" className="sr-only">
            Search for your item
          </label>
          <input
            id="search"
            type="text"
            placeholder="Search for your item"
            className="w-full bg-transparent text-neutral-700 outline-none placeholder:text-neutral-400"
          />
          <button
            type="submit"
            aria-label="Search"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-lg text-neutral-500 shadow-sm"
          >
            <CiSearch />
          </button>
        </form>

        <nav className="hidden items-center gap-6 text-base text-neutral-800 md:flex">
          <a href="#" className="hover:text-green-600">Home</a>
          <a href="#" className="hover:text-green-600">Explore</a>
          <a href="#" className="hover:text-green-600">Help</a>
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <img src={user} alt="User avatar" className="h-12 w-12 rounded-full object-cover" />
        </div>
      </div>

      {isOpen && (
        <nav className="mx-4 mb-4 flex flex-col gap-4 rounded-2xl bg-neutral-100 px-4 py-4 text-base text-neutral-800 md:hidden">
          <a href="#" className="hover:text-green-600">Home</a>
          <a href="#" className="hover:text-green-600">Explore</a>
          <a href="#" className="hover:text-green-600">Help</a>
        </nav>
      )}
    </header>
  )
}

export default Header