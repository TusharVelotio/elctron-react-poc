/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Link } from 'react-router-dom';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';

const FocusableLink = withFocusable()(
  ({ focusableRef, isFocused, ...props }) => (
    <Link
      ref={focusableRef}
      style={{ outline: isFocused ? '2px solid blue' : 'none' }}
      {...props}
    />
  ),
);

export default FocusableLink;
