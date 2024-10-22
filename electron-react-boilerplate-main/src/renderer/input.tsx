import React, { useState } from 'react';

function InputComponent() {
  // Declare a state variable to hold the input value
  const [inputValue, setInputValue] = useState('');

  // Update the state whenever the input changes
  const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputValue(event.target.value);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Basic React Input Component</h2>
      <input
        type="text"
        placeholder="Enter something..."
        value={inputValue}
        onChange={handleInputChange}
        style={{ padding: '5px', fontSize: '16px' }}
      />
      <p>You entered: {inputValue}</p>
    </div>
  );
}

export default InputComponent;
