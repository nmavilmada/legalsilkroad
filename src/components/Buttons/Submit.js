import React from 'react';
import './Buttons.css';

export default function Submit(props) {
    return (
      <div className="Submit">
        <div>
      <button>{props.onClick}</button>
        </div>
      </div>
    );
  }
  
 