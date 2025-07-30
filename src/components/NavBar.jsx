import React, { useState, useEffect } from 'react'

const NavBar = () => {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const html = document.documentElement;
        if (toggle) {
        html.classList.add('dark');
        } else {
        html.classList.remove('dark');
        }
    }, [toggle]);

  return (
    <>
        <div className="flex justify-end items-center h-full px-14 gap-5">
            <button className="bg-transparent hover:bg-blue-300 text-blue-700 font-semibold hover:text-white border border-blue-700 hover:border-transparent rounded px-3 py-1 ease-in-out">
                Save Changes
            </button>
            <button
                onClick={() => setToggle(prev => !prev)}
                className="bg-transparent hover:bg-blue-300 text-blue-700 font-semibold hover:text-white border border-blue-700 hover:border-transparent rounded px-3 py-1 ease-in-out"
            >
                {toggle? (
                // 🌞 Sun icon for dark mode active (click to turn off)
                <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2m6.364.636L16.95 7.05M21 12h-2M18.364 18.364L16.95 16.95M12 19v2M5.636 18.364L7.05 16.95M3 12h2M5.636 5.636L7.05 7.05M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
                ) : (
                // 🌙 Moon icon for light mode active (click to turn on dark)
                <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                </svg>
                )}
            </button>
        </div>
    </>
  )
}

export default NavBar