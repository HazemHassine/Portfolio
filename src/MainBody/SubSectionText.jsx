import React from 'react'

function SubSectionText(props) {
  return (
    <h2 id={props.id || ""} className='text-3xl text-teal-500 my-5'>{props.text}</h2>
  )
}

export default SubSectionText