import React, { useState } from "react";

export default function Emoji() {
  const [emj, setEmj] = useState(0);
  return (
    <>
      <button onClick={() => setEmj(emj + 1)}>{emj > 10 ? "😎" : "👍"}</button>
      <p>{emj}</p>
    </>
  );
}
