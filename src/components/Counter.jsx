import React, { useState } from "react";

export default function Counter() {
  const [strState, setStrState] = useState(0);
  return (
    <div>
      <button onClick={() => setStrState(strState + 1)}>+</button>
      <button onClick={() => setStrState(strState - 1)}>-</button>
      <br />
      <span>{strState}</span>
    </div>
  );
}
