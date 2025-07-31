import React from 'react';
import { Handle, Position } from '@xyflow/react';

const MessageNode = ({ data }) => {
  return (
    <div className="rounded-md shadow-md border border-gray-300 bg-white text-sm text-black w-56">
      <div className="bg-cyan-100 text-black font-semibold px-3 py-1 rounded-t-md flex justify-between items-center">
        <span>Send Message</span>
      </div>

      <div className="px-3 py-2">{data.label}</div>

      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default MessageNode;

