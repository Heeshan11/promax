import React from 'react'

type PropType = {
  selected: boolean
  index: number
  onClick: () => void
  thumbImg: string
}

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, index, onClick, thumbImg } = props

  return (
    <div
      className={'  embla-thumbs__slide'.concat(
        selected ? ' embla-thumbs__slide--selected' : ''
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number"
      >
        <img
          src={thumbImg}
          alt={thumbImg}
          className="w-14 rounded-md h-14 mr-2 object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110 "
        />
      </button>
    </div>
  )
}
