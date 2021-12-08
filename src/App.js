import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>
        Counter with <span className="title"> React Hooks</span>
      </h1>
      <h2>You clicked <span className="title">{count}</span> times!</h2>

      <button className="btn btn-primary" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default App;
