import React from 'react';

const Nodes = ({ onAddMessage, toggle }) => {
  return (
    <div className={`h-screen p-4 ${toggle ? 'bg-gray-900 text-white border-l-2 ' : 'bg-white text-black border-l-2 border-gray-200'}`}>
      <h2 className="font-semibold mb-4 text-center">Nodes Panel</h2>
      <button
        className='bg-transparent hover:bg-blue-300 text-blue-700 font-semibold hover:text-white border border-blue-700 hover:border-transparent rounded-sm w-36 h-20 ease-in-out flex flex-col items-center justify-center'
        onClick={onAddMessage}
      >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
            </svg>
        <span>
            Message
        </span>
      </button>
    </div>
  );
};

export default Nodes;