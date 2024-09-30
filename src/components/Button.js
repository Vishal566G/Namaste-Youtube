import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='px-3 py-1 m-3 whitespace-nowrap rounded-lg bg-gray-200 text-sm font-semibold'>{name}</button>
    </div>
  )
}

export default Button;
