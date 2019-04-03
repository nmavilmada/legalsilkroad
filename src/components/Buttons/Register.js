import React from 'react';
import './Buttons.css';

export default function Register(props) {
    return (
      <div className="Register">
        <div>
        <button>onClick={props.onClick}</button>
        </div>
      </div>
    );
  }
  