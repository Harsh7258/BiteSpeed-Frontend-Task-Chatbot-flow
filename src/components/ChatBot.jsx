import React from 'react'
import Nodes from './Nodes'
import NavBar from './NavBar'
import Board from './Board'

const ChatBot = () => {
  return (
    <>
    <div className='w-full h-12 bg-gray-100'>
        <NavBar/>
    </div>
    <div className="flex h-screen">
      <div className="w-[75%] bg-white p-4 text-center">
        <Board />
      </div>
      <div className="w-[25%] bg-white border-l-2 border-gray-100 p-4 text-center">
        <Nodes />
      </div>
    </div>

    </>
  )
}

export default ChatBot