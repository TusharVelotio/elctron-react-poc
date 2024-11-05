/* eslint-disable react/button-has-type */
/* eslint-disable react/function-component-definition */
import React from 'react';
import {
  withFocusable,
  FocusableComponentProps,
} from '@noriginmedia/react-spatial-navigation';

const styles = {
  button: {
    padding: '10px 20px',
    backgroundColor: 'gray',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  focused: {
    backgroundColor: 'blue',
  },
};

const Button: React.FC<FocusableComponentProps & { label: string }> = ({
  focused,
  label,
  onEnterPress,
}) => {
  return (
    <button
      style={{ ...styles.button, ...(focused ? styles.focused : {}) }}
      onClick={onEnterPress}
    >
      {label}
    </button>
  );
};

const FocusableButton = withFocusable()(Button);
export default FocusableButton;
