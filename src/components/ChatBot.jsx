import React, { useState } from 'react'
import NavBar from './NavBar'
import Board from './Board'

const ChatBot = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
    <div className='w-full h-12'>
      <NavBar toggle={toggle} setToggle={setToggle} />
    </div>
    <div className='flex h-screen'>
      <Board toggle={toggle} />
    </div>  
    </>
  )
}

export default ChatBot