import React, { useState } from 'react';
import Timer from './Timer';

export default function TimerRender() {
  const [show, setShow] = useState(false);

  return (
    <>
      {show && <Timer />}
      <button onClick={() => setShow(!show)}>click</button>
    </>
  );
}
