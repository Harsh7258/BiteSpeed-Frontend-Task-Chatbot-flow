import React, { useState, useCallback } from 'react';
import { ReactFlow, Background, Controls, addEdge } from '@xyflow/react';
import { nodeGenerators } from '../utils/newNodeType';
import toast from 'react-hot-toast';
import NodesPanel from './Nodes';
import SettingsPanel from './SettingPanel';
import MessageNode from './MessageNode';
import '@xyflow/react/dist/style.css';

const nodeTypes = {
  message: MessageNode,
  // customizable add more for node types
}

const Board = ({ toggle, nodes, setNodes, edges, setEdges, onNodesChange, onEdgesChange }) => {

  // node to be modified
  const [selectedNode, setSelectedNode] = useState(null);
  const [type, setType] = useState('message'); // default to message

  const connect = useCallback((params) => {
    setEdges((e) => addEdge(params, e) // validation for invalid edge or duplicate an existing one
  )}, [setEdges]);

  const nodeClick = (event, node) => { // node is clicked for edit
    // console.log(node);
    setSelectedNode(node);
  };

  const addMessageNode = () => { // add new message node 
    if(!nodeGenerators[type]){
      toast.error('No such type!!') // type error
      return;
    }

    const generator = nodeGenerators[type];
    // console.log(generator);
    const res = generator();

    const newNode = { // one node { node }
      id: `${+new Date()}`,
      ...res, // node custom generator
      position: { x: Math.random() * 250, y: Math.random() * 250 

      },
    };
    setNodes((nd) => [...nd, newNode]);
  };

  const handleTextChange = (text) => { // text change

    setNodes((nd) =>
      nd.map((node) =>
        node.id === selectedNode.id ? { ...node, data: { 
          ...node.data, 
          label: text // update only text
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
          nodeTypes={nodeTypes}
          fitView
          colorMode={toggle ? 'dark' : 'light'}
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>

      <div className='w-[25%] h-screen border-l-2 border-gray-200'>
        {selectedNode ? (
            <SettingsPanel
                node={selectedNode}
                changeText={handleTextChange}
                onBack={() => setSelectedNode(null)}
                toggle={toggle}
                type={type} // selected type diabled
                setType={setType} // disabled types
            />
            ) : (
            <NodesPanel addMessageNode={addMessageNode} toggle={toggle} />
        )}
      </div>
    </>
  );
};

export default Board;
