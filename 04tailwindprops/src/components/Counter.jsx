// import React from 'react'
import { useState } from "react";

function Counter() {
  let [counter, setCounter] = useState(0);
  const addValue = () => {
    setCounter(counter + 1);
  };
  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="  p-4 justify-items-center bg-blue-400 text-black  rounded font-sans">
      <h1>Counter Machine {counter}</h1>
      <button onClick={addValue} className="bg-yellow-400 text-black">
        Increase Value
      </button>
      <br />
      <button onClick={removeValue} className="bg-yellow-400 text-black mt-3">
        Decrease Value{" "}
      </button>
    </div>
  );
}

export default Counter;
