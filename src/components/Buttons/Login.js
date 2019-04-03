import React from 'react';
import './Buttons.css';

export default function Login(props) {
    return (
      <button>{props.label}</button>
    );
  }
  
  ReactDOM.render(<Login label="Login" />, mountNode);
  