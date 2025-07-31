import React from 'react';
import { Icons } from '../assets/icons/icons';

const Nodes = ({ onAddMessage, toggle }) => {
  return (
    <div className={`h-screen p-4 ${toggle ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <button
        className='bg-transparent hover:bg-blue-300 text-blue-700 font-semibold hover:text-white border border-blue-700 hover:border-transparent rounded-sm w-36 h-20 ease-in-out flex flex-col items-center justify-center'
        onClick={onAddMessage}
      >
          {Icons.message}
        <span>
            Message
        </span>
      </button>
    </div>
  );
};

export default Nodes;