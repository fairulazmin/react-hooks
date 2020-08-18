import React, { useState } from "react";

const HookCounterTwo = () => {
  const [count, setCount] = useState(0);

  const handleClick = (e) => {
    switch (e.target.value) {
      case "+":
        setCount((count) => count + 1);
        break;
      case "-":
        setCount((count) => count - 1);
        break;
      default:
        setCount(0);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{count}</h1>
      <input type="button" value="+" onClick={handleClick} />
      <input type="button" value="-" onClick={handleClick} />
      <input type="button" value="Reset" onClick={handleClick} />
    </div>
  );
};

export default HookCounterTwo;
