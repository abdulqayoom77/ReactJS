import React from 'react'

const Conatiner = ({children}) => {
  return (
    <div className='border-1 border-black h-auto w-auto rounded-md flex flex-col items-center p-5 m-4'>{children}</div>
  )
}

export default Conatiner