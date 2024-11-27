import React from 'react'

function BioElement(props) {
  return (
    <div className='mt-2 text-white'>
        <h2 className='font-bold italic'>{props.title}</h2>
        <p className='ml-2 mt-1'>{props.text}</p>
    </div>
  )
}

export default BioElement