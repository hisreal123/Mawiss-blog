import React from 'react'

export default function Button({type, content}) {
  return (
    <button type={type} className="text-white bg-red-300 hover:shadow-md ">
      {content}
    </button>
  )
}