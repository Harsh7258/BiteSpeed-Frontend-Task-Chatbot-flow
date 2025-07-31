import React from 'react'
import { Icons } from '../assets/icons/icons'

const NavBar = ({ toggle, setToggle, onSave }) => {
    // const [toggle, setToggle] = useState(false);

  return (
    <>
        <div  className={`flex justify-between items-center h-full px-14 gap-5 transition-colors duration-300 ${
        toggle ? 'bg-gray-900 text-white border-b-2 border-gray-200' : 'bg-gray-200 text-black'
        }`}>
            <h3 className="text-xl font-semibold">ChatBot flow builder</h3>
            <div className="flex gap-4">
                <button className="bg-transparent hover:bg-blue-300 text-blue-700 font-semibold hover:text-white border border-blue-700 hover:border-transparent rounded px-3 py-1 ease-in-out" onClick={onSave}>
                    Save Changes
                </button>
                <button
                    onClick={() => setToggle(!toggle)}
                    className="bg-transparent hover:bg-blue-300 text-blue-700 font-semibold hover:text-white border border-blue-700 hover:border-transparent rounded px-3 py-1"
                >
                    {toggle ? Icons.moon : Icons.sun}
                </button>
            </div>
        </div>
    </>
  )
}

export default NavBar