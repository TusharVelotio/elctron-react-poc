import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import FocusableButton from './FocusableButton';
import InputComponent from '../Input/input';

const FocusableButtonGrid = withFocusable()(({ setFocus }) => {
  const location = useLocation();

  useEffect(() => {
    if (setFocus) {
      setFocus('BUTTON_GRID');
    }
  }, [location.pathname, setFocus]);

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        padding: '20px',
      }}
    >
      <FocusableButton
        label="Button 1"
        onEnterPress={() => alert('Button 1 Pressed!')}
      />
      <FocusableButton
        label="Button 2"
        onEnterPress={() => alert('Button 2 Pressed!')}
      />
      <FocusableButton
        label="Button 3"
        onEnterPress={() => alert('Button 3 Pressed!')}
      />
      <FocusableButton
        label="Button 4"
        onEnterPress={() => alert('Button 4 Pressed!')}
      />
      <FocusableButton
        label="Button 5"
        onEnterPress={() => alert('Button 5 Pressed!')}
      />
      <FocusableButton
        label="Button 6"
        onEnterPress={() => alert('Button 6 Pressed!')}
      />
      <FocusableButton
        label="Button 7"
        onEnterPress={() => alert('Button 7 Pressed!')}
      />
      <FocusableButton
        label="Button 8"
        onEnterPress={() => alert('Button 8 Pressed!')}
      />
      <FocusableButton
        label="Button 9"
        onEnterPress={() => alert('Button 9 Pressed!')}
      />
      <InputComponent />
    </div>
  );
});
export default FocusableButtonGrid;
