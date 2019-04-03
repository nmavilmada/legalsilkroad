import React from 'react';
import './Buttons.css';

export default function Login(props) {
    return (
      <div className="Login">
        <div>
        <button>onClick={props.onClick}</button>
        </div>
      </div>
    );
  }
  
  
  