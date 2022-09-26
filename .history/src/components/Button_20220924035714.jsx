import React from 'react'

export default function Button({type, content}) {
  return (
    <button type={type} className="text-white bg-red-300 hover:shadow-md border-2 border:">
      {content}
    </button>
  )
}
