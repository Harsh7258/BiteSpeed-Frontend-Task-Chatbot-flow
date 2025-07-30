import React from 'react'
import { useNavigate } from "react-router-dom"
import ChatBot from './ChatBot'

const Home = () => {
    const navigate = useNavigate();

  return (
    <div>
        <h2>Chat Bot flow builder</h2>
        <button onClick={() => navigate("/chatbot")}>
            go to chatbot
        </button>
    </div>
  )
}

export default Home