import React, { useState } from 'react';
import './UpperCaseKeyboard.css'; 

const UpperCaseKeyboard = () => {
  const [inputValue, setInputValue] = useState('');

  const handleClick = (key) => {
    setInputValue((prev) => prev + key.toUpperCase());
  };

  const handleDeleteClick = () => {
    setInputValue((prev) => prev.slice(0, -1));
  };

  const handleClearClick = () => {
    setInputValue('');
  };

  return (
    <div className="container">
      <input
        type="text"
        value={inputValue}
        readOnly
        className="input"
        placeholder="Type here..."
      />
      <div className="keyboard">
        {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((char) => (
          <button
            key={char}
            onClick={() => handleClick(char)}
            className="keyBtn"
          >
            {char}
          </button>
        ))}
        <button onClick={handleDeleteClick} className="btn">
          Delete
        </button>
        <button onClick={handleClearClick} className="btn">
          Clear
        </button>
      </div>
    </div>
  );
};

export default UpperCaseKeyboard;
