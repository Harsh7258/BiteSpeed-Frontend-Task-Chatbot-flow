import React, { useState, useEffect } from 'react';
import { supportTypes } from '../utils/newNodeType'
import { Icons } from '../assets/icons/icons';

const SettingsPanel = ({ node, changeText, onBack, toggle, type, setType }) => {
  const [text, setText] = useState(node.data.label); // set to 'text message'

  useEffect(() => {
    setText(node.data.label); // 'text message'
  }, [node]);

  const handleChange = (e) => {
    setText(e.target.value); // 'text message -> user input
    changeText(e.target.value); // chng in text field -> node in board
  };

  return (
    <div className={`h-screen ${toggle ? 'panel-dark' : 'panel-light'}`}>
      <div className='flex items-center justify-between border-b-2 border-gray-200 p-2'>
          <button
          onClick={onBack}
          className="text-md text-blue-700"
          >
              {Icons.arrow}
          </button>

          <h2 className='font-semibold'>Message</h2>
          <div className={`rounded ${toggle ? 'panel-dark' : 'panel-ligth'}`}>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className={`border p-1 rounded`}
            >
              {supportTypes.map((t) => (
                <option key={t} value={t} disabled={t!=='message'} className='text-black'>
                  {t}
                </option>
              ))}
            </select>
          </div>
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
