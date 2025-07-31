import React, { useState, useCallback } from 'react';
import { ReactFlow, Background, Controls, useNodesState, useEdgesState, addEdge } from '@xyflow/react';
import NodesPanel from './Nodes';
import SettingsPanel from './SettingPanel';
import '@xyflow/react/dist/style.css';

const initialNodes = []; 
const initialEdges = []; 

const Board = ({ toggle }) => {
  
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const [selectedNode, setSelectedNode] = useState(null);

  const connect = useCallback((params) => {
    setEdges((e) => addEdge(params, e) 
  )}, [setEdges]);

  const nodeClick = (event, node) => { 
    setSelectedNode(node);
  };

  const addMessageNode = () => {  
    const newNode = { 
      id: `${+new Date()}`,
      type: 'message',
      data: { 
        label: 'text message' 
      },
      position: { x: Math.random() * 250, y: Math.random() * 250 

      },
    };
    setNodes((nd) => [...nd, newNode]);
  };

  const handleTextChange = (text) => { 
    setNodes((nd) =>
      nd.map((node) =>
        node.id === selectedNode.id ? { ...node, data: { 
          ...node.data, 
          label: text 
        } } : node
      )
    );
  };

  return (
    <>
      <div className="w-[75%] flex-grow relative h-screen">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={connect}
          onNodeClick={nodeClick}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>

      <div className='w-[25%] h-screen'>
        {selectedNode ? (
            <SettingsPanel
                node={selectedNode}
                changeText={handleTextChange}
                onBack={() => setSelectedNode(null)}
            />
            ) : (
            <NodesPanel onAddMessage={addMessageNode} toggle={toggle} />
        )}
      </div>
    </>
  );
};

export default Board;
