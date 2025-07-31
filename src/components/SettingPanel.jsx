import React, { useState, useEffect } from 'react';

const SettingsPanel = ({ node, changeText, onBack, toggle }) => {
  const [text, setText] = useState(node.data.label); // set to 'text message'

  useEffect(() => {
    setText(node.data.label); // 'text message'
  }, [node]);

  const handleChange = (e) => {
    setText(e.target.value); // 'text message -> user input
    changeText(e.target.value); // chng in text field -> node in board
  };

  return (
    <div className={`h-screen ${toggle ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className='flex items-center justify-between border-b-2 border-gray-200 p-2'>
          <button
          onClick={onBack}
          className="text-md text-blue-700"
          >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
          </button>

          <h2 className="font-semibold">Message</h2>
          <div className="w-6" />
      </div>
      <div className='p-4'>
        <label className="block text-sm font-medium mb-2">Text</label>
        <textarea
            className="w-full border rounded p-2"
            value={text}
            onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SettingsPanel;
