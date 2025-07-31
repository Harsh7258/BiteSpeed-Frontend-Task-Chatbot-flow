import {  Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import ChatBot from "./components/ChatBot";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chatbot" element={<ChatBot />} />
    </Routes>
    </>
  )
}

export default App
