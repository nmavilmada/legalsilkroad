import React from 'react';
import './Buttons.css';

export default function Submit(props) {
    return (
      <button>{props.label}</button>
    );
  }
  
  ReactDOM.render(<Submit label="Register" />, mountNode);