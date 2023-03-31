import React, { useRef } from 'react';

export default function ExampleRefDom() {
  const divEl = useRef();
  const inputEl = useRef();

  return (
    <div>
      <input type="text" ref={inputEl} />
    </div>
  );
}
