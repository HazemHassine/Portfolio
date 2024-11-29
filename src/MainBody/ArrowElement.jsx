import React, {useState} from 'react'

function ArrowElement({children, more}) {
  console.log(more)
  const [isMoreVisible, setIsMoreVisible] = useState(false);
  return (
    <div 
    className='flex text-xl gap-2 w-fit bg-green-700'
    onMouseEnter={() => setIsMoreVisible(true)}
    onMouseLeave={() => setIsMoreVisible(false)}
    >
        <h1 className='text-teal-500'>&gt;&gt;</h1>
        <h1 className='text-white'>{children}</h1>
        {more ? <div className={`p-5 text-white italic bg-[rgba(0,0,0,0.5)] border-dotted border-2 border-white fixed top-60 h-fit pb-16 left-20 max-w-96 transition-opacity ease-in-out duration-700 ${isMoreVisible ? "opcaity-100": "opacity-0"}`}>
        {more.bac.header}
        </div>: ""}
    </div>
  )
}

export default ArrowElement