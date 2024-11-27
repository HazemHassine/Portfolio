import React from 'react'

function ArrowElement({children}) {
  return (
    <div className='flex text-xl gap-2'>
        <h1 className='text-teal-500'>&gt;&gt;</h1>
        <h1 className='text-white'>{children}</h1>
    </div>
  )
}

export default ArrowElement