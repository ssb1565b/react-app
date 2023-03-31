import React, { useEffect, useRef } from 'react';

export default function ColorInput() {
  const inputEl = useRef();
  const divEl = useRef();
  const ChangeColor = () => {
    divEl.current.style.backgroundColor = inputEl.current.value;
    inputEl.current.value = '';
  };

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  return (
    <div ref={divEl}>
      <input ref={inputEl} />
      <br />
      <button onClick={ChangeColor}>색 적용</button>
    </div>
  );
}
