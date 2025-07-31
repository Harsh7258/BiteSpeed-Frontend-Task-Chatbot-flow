import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { Icons } from '../assets/icons/icons';

const MessageNode = ({ data }) => {
  return (
    <div className="rounded-md shadow-md border border-gray-300 bg-white text-sm text-black w-56">
      <div className="bg-lime-200 text-black text-xs font-semibold px-2 py-1 rounded-t-md flex items-center gap-2">
        <span>
          {Icons.chat}
        </span>
        <span>Send Message</span>
      </div>

      <div className="px-4 py-3">{data.label}</div>

      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default MessageNode;

