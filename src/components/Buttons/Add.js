import React from 'react';
import './Buttons.css';

export default function Add(props) {
    return (
      <div className="Add">
        <div>
      <button>onClick={props.onClick}</button>
        </div>
      </div>
    );
  }