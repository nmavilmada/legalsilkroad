import React from 'react';
import './Buttons.css';

export default function Register(props) {
    return (
      <button>{props.label}</button>
    );
  }
  
  ReactDOM.render(<Register label="Register" />, mountNode);