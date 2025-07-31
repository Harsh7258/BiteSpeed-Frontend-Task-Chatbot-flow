// import { create } from 'zustand';

// const useStore = create((set) => ({
//   nodes: [],
//   edges: [],
//   selectedNode: null,
//   toggle: false,

//   setNodes: (newNodes) => set({ nodes: newNodes }),
//   setEdges: (newEdges) => set({ edges: newEdges }),

//   setSelectedNode: (id) => set({ selectedNodeId: id }),
//   setToggle: () => set((state) => ({ toggle: !state.toggle })),

//   addNode: (newNode) =>
//     set((state) => ({
//       nodes: [...state.nodes, newNode],
//     })),

//    addEdge: (edge) =>
//     set((state) => ({
//         edges: [...state.edges, edge],
//     })),

//   updateNodeLabel: (id, label) =>
//     set((state) => ({
//       nodes: state.nodes.map((node) =>
//         node.id === id ? { ...node, data: { 
//             ...node.data, 
//             label // update only text 
//         } } : node
//       ),
//     })),

// }));

// export default useStore;
