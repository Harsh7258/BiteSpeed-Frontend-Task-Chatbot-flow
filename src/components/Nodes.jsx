import React from 'react';
import { Icons } from '../assets/icons/icons';

const Nodes = ({ addMessageNode, toggle }) => {
  return (
    <div className={`h-screen p-4 ${toggle ? 'panel-dark' : 'panel-light'}`}>
      <button
        className='btn-msg'
        onClick={addMessageNode}
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