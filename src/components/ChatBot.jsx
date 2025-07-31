import React, { useState } from 'react'
import { useNodesState, useEdgesState } from '@xyflow/react'
import { Toaster, toast } from 'react-hot-toast'
import NavBar from './NavBar'
import Board from './Board'

const initialNodes = []; // empty flexible
const initialEdges = []; // empty flexible

const ChatBot = () => {
  const [toggle, setToggle] = useState(false);

  // useState: of reactflow initiaNodes, initialEdges to manage nodes, egdes
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  // console.log(nodes)

  const saveChanges = () => {
    if (nodes.length <= 1) {
      toast.error("Cannot save flow");
      return;
    }

    const connectedTarget = edges.map((e) => e.target);
    // console.log(connectedTarget)
    const nodesWithoutInput = nodes.filter((node) => !connectedTarget.includes(node.id));


    if (nodesWithoutInput.length > 1) {
      toast.error("Cannot save flow");
      return;
    }

    const saved = nodes.map((n) => ({ id: n.id, label: n.data.label }));
    console.log("Saved:", saved); // logs saved message 
    toast.success("Flow saved!");

    setTimeout(() => {
      toast("refreshing board!")
      setNodes([]);  // Clear all nodes
      setEdges([]);  // Clear all edges
    }, 1500);
  };

  return (
    <>
    <Toaster position='top-center' />
      <div className='w-full h-12'>
        <NavBar toggle={toggle} setToggle={setToggle} onSave={saveChanges} />
      </div>
      <div className='flex h-screen'>
        <Board 
        toggle={toggle} 
        nodes={nodes}
        setNodes={setNodes}
        edges={edges}
        setEdges={setEdges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange} />
      </div>  
    </>
  )
}

export default ChatBot