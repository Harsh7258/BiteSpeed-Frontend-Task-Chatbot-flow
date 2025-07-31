import React, { useState, useEffect } from 'react';

const SettingsPanel = ({ node, changeText, onBack }) => {
  const [text, setText] = useState(node.data.label); 

  useEffect(() => {
    setText(node.data.label); 
  }, [node]);

  const handleChange = (e) => {
    setText(e.target.value); 
    changeText(e.target.value); 
  };

  return (
    <div className="p-4 h-full bg-white border-l-2 border-gray-200">
        <button
        onClick={onBack}
        className="mb-4 text-sm text-blue-600 hover:underline"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>


        </button>

        <h2 className="font-semibold mb-4">Settings Panel</h2>
        <label className="block text-sm font-medium mb-2">Text</label>
        <textarea
            className="w-full border rounded p-2"
            value={text}
            onChange={handleChange}
        />
    </div>
  );
};

export default SettingsPanel;
