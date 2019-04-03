import React from 'react';
import './Buttons.css';

export default function Buy(props) {
    return (
      <button>{props.label}</button>
    );
  }
  
  ReactDOM.render(<Buy label="Buy" />, mountNode);