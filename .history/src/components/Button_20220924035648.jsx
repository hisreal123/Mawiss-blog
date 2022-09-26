import React from 'react'

export default function Button({type, content}) {
  return (
    <button type={type} className="text-white bg-c">
      {content}
    </button>
  )
}
