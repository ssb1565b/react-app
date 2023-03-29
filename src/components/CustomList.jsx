import React from "react";

export default function CustomList({ arr }) {
  return (
    <ul>
      {arr?.map((el, idx) => (
        <li key={idx}>{el}</li>
      ))}
    </ul>
  );
}
