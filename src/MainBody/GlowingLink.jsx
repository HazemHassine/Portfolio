import React from 'react'

function GlowingLink({link, text, unhighlighted_text}) {
  return (
    <div className=''>{unhighlighted_text}&nbsp;<a className='drop-shadow-[0_0_5px_rgba(181,232,83,0.9)]' href={link}>{text}</a></div>
  )
}

export default GlowingLink