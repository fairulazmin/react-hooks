import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>You click {count} times</h1>
      <input type="button" value="Click Here" onClick={handleIncrement} />
    </div>
  );
};

export default Counter;
