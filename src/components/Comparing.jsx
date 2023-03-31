import React, { useState, useRef } from 'react';

export default function Comparing() {
  const [countState, setCountState] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  const [render, setRender] = useState(true);

  const countUpState = () => {
    setCountState(countState + 1);
    console.log('State:', countState);
  };

  const countUpRef = () => {
    countRef.current += 1;
    console.log('Ref:', countRef.current);
  };

  const countUpVar = () => {
    countVar += 1;
    console.log('Variable:', countVar);
  };

  const reRender = () => {
    setRender(!render);
  };
  return (
    <div>
      <h1>State: {countState}</h1>
      <h1>Ref: {countRef.current}</h1>
      <h1>Variable: {countVar}</h1>
      <button onClick={reRender}>렌더!</button>
      <button onClick={countUpState}>State 올리기</button>
      <button onClick={countUpRef}>Ref 올리기</button>
      <button onClick={countUpVar}>Variable 올리기</button>
    </div>
  );
}
