import React from 'react';
import './Buttons.css';

export default function Delete(props) {
    return (
      <div className="Delete">
        <div>
      <button>onClick={props.onClick}</button>
        </div>
      </div>
    );
  }