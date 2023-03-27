import React, { useState } from "react";

export default function Condition() {
  const [condition, setCondition] = useState(true);
  return (
    <>
      <h1>{condition ? "🙈" : "🙉"}</h1>
      <button onClick={() => setCondition(!condition)}></button>
    </>
  );
}
