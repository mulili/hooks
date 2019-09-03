import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  let [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `${count} times`;
    /**
     * clear effect
     *
     * return ()=>{
     *  clear method
     * }
     */
  });
  return (
    <div className="App App-header">
      <button onClick={() => setCount(count + 1)}>Click</button>
      <p>Button has been clicked {count} times</p>
    </div>
  );
};

export default App;
