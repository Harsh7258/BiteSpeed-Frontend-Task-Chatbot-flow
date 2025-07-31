import React from 'react';
import { Icons } from '../assets/icons/icons';

const Nodes = ({ toggle, type }) => {
  // drag function passed 
  const dragMessage = (event, nodeType) => {
    // console.log(event)
    event.dataTransfer.setData('application/reactflow', nodeType); // (key, type) default 'message' 
    event.dataTransfer.effectAllowed = 'move'; // move operation allowed
  };

  return (
    <div className={`h-screen p-4 ${toggle ? 'panel-dark' : 'panel-light'}`}>
      <div
        className="btn-msg cursor-move"
        draggable
        onDragStart={(e) => dragMessage(e, type)}
      >
        {Icons.message}
        <span>Message</span>
      </div>
    </div>
  );
};

export default Nodes;