import React from 'react';
import './Buttons.css';

export default function Buy(props) {
    return (
      <div className="Buy">
        <div>
      <button>onClick={props.onClick}</button>
        </div>
      </div>
    );
  }
