import React from 'react';

function Sub(props) {
  return (
    <div className="App">
      <input type="text" />
      <button onClick={props.fn}>{props.buttonTxt}</button>
    </div>
  );
}

export default Sub;
