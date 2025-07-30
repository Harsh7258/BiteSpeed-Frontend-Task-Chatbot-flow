import React from 'react'
import { ReactFlow, Background, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const Board = () => {
  return (
    <>
    <div style={{ height: '100%', width: '100%' }}>
      <ReactFlow>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
    </>
  )
}

export default Board