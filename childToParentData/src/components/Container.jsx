import React from 'react'

const Container = ({children}) => {
  return (
    <div className='border-2 border-black rounded-md h-auto w-96 flex flex-col p-4 gap-5 items-center'>{children}</div>
  )
}

export default Container