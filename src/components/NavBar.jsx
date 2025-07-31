import React from 'react'
import { Icons } from '../assets/icons/icons'

const NavBar = ({ toggle, setToggle, onSave }) => {
  return (
    <>
        <div  className={`navbar-base ${
        toggle ? 'dark-custom' : 'light-custom'
        }`}>
            <h3 className="text-xl font-semibold">ChatBot flow builder</h3>
            <div className="flex gap-4">
                <button className='btn-primary' onClick={onSave}>
                    Save Changes
                </button>
                <button
                    onClick={() => setToggle(!toggle)}
                    className='btn-primary'
                >
                    {toggle ? Icons.moon : Icons.sun}
                </button>
            </div>
        </div>
    </>
  )
}

export default NavBar