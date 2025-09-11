import React, { useRef } from 'react'

const App = () => {

  const nameRef =useRef();
  const emailRef =useRef();
  const ageRef =useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // if(nameRef.current.value){
    //   ageRef.current.focus();
    // }
    console.log(nameRef.current.value, emailRef.current.value, ageRef.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input className='border-1 border-black rounded mr-2' type="text" name="" id="" placeholder='Name' ref={nameRef} />
      <input className='border-1 border-black rounded mr-2' type="email" name="" id="" placeholder='Email' ref={emailRef} />
      <input className='border-1 border-black rounded mr-2' type="number" name="" id="" placeholder='Age' ref={ageRef} />
      <button type='submit' >Submit</button>
    </form>
  )
}

export default App