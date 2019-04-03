import React from 'react';
import './Buttons.css';

function Login(props) {
    return (
      <button>{props.label}</button>
    );
  }
  
  ReactDOM.render(<Login label="Login" />, mountNode);
  