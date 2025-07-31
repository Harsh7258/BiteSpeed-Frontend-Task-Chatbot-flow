import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { Icons } from '../assets/icons/icons';

const MessageNode = ({ data }) => {
  return (
    <div className='node-base'>
      <div className='node-header'>
        <span>
          {Icons.chat}
        </span>
        <span>Send Message</span>
      </div>

      <div className="px-4 py-3">{data.label}</div>

      {/* handles left right */}
      <Handle type="target" position={Position.Left} /> 
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default MessageNode;

