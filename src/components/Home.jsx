import React from 'react'
import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();

  return (
   <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="text-center p-8 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Chat Bot Flow Builder</h2>
      <button
        onClick={() => navigate("/chatbot")}
        className='btn-primary !px-6 !py-2'
      >
        Go to Chatbot
      </button>
    </div>
  </div>

  )
}

export default Home