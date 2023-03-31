import React, { useRef } from 'react';
export default function ColorInputTest() {
  const orangeEl = useRef();
  const skyblueEl = useRef();
  const inputEl = useRef();

  const adjustCss = () => {
    orangeEl.current.style.backgroundColor = 'orange';
    // current까지 써야 dom에 접근
    skyblueEl.current.style.backgroundColor = 'skyblue';
  };
  const clearInput = () => {
    inputEl.current.value = '';
  };
  return (
    <div>
      <h1 ref={orangeEl}>Orange</h1>
      <h1 ref={skyblueEl}>Skyblue</h1>
      <input type="text" ref={inputEl} />
      <br />
      <button onClick={adjustCss}>css 적용</button>
      <button onClick={clearInput}>초기화</button>
    </div>
  );
}
