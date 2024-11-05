import React, { useEffect, useState, useRef } from 'react';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';

function InputComponent({ focused, focusableRef }) {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const styles = {
    focused: {
      backgroundColor: 'lightsteelblue',
    },
  };

  useEffect(() => {
    if (focused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [focused]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Basic React Input Component</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter something..."
        value={inputValue}
        onChange={handleInputChange}
        style={{
          padding: '5px',
          fontSize: '16px',
          ...(focused ? styles.focused : {}),
        }}
      />
      <p>You entered: {inputValue}</p>
    </div>
  );
}

const InputComponentFocusable = withFocusable()(InputComponent);
export default InputComponentFocusable;
