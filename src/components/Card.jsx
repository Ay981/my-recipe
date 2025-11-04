import React from 'react'
import PropTypes from 'prop-types'
import { FaRegHeart, FaRegComment, FaStar } from 'react-icons/fa'

function Card({ title = 'Untitled', image = '', time = '-', rating = null }) {
  const imgSrc = image || ''

  return (
    <div className="bg-gray-300 rounded-2xl shadow-2xl w-1/6 h-80 flex flex-col gap-4 p-4">
      <img
        src={imgSrc}
        alt={title}
        aria-label={`Image of ${title}`}
        className="h-52 w-full object-cover rounded-xl"
      />

      <div className="flex items-center justify-between pt-2 pb-1">
        <h2 className="font-bold text-2xl">{title}</h2>
        <div className="flex items-center gap-2">
          <FaStar color="orange" />
          <span>{rating ?? '-'}</span>
        </div>
      </div>

      <div className="flex items-center justify-between w-full font-bold">
        <h3 className="text-[#DC582A] text-2xl">{time}</h3>
        <div className="flex gap-4 items-center">
          <button aria-label="favorite" className="cursor-pointer">
            <FaRegHeart size={20} />
          </button>
          <button aria-label="comment" className="cursor-pointer">
            <FaRegComment size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  time: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Card