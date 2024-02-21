import React from "react";

// Counter Component
const Counter = ({ number, onIncrease, onDecrease, onTimes }: any) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>{number}</h1>
      <button onClick={onIncrease}>INC</button>
      <button onClick={onDecrease}>DEC</button>
      <button onClick={onTimes}>TIMES 2</button>
    </div>
  );
};

export default Counter;
