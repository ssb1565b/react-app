import React, { useRef, useState, useEffect } from 'react';

export default function ExRef() {
  const inputEl = useRef('');
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [num, setNum] = useState(0);
  const calc = ['+', '*', '-'];

  const checkValue = () => {
    if (Number(inputEl.current.value) === first + second) {
      reset();
      return;
    }
    if (Number(inputEl.current.value) === first - second) {
      reset();
      return;
    }
    if (Number(inputEl.current.value) === first * second) {
      reset();
      return;
    }
    inputEl.current.value = '';
    alert('틀렸습니다');
    inputEl.current.focus();
  };
  const reset = () => {
    alert('정답!');
    setFirst(Math.floor(Math.random() * 10));
    setSecond(Math.floor(Math.random() * 10));
    setNum(Math.floor(Math.random() * 3));
    inputEl.current.focus();
  };

  useEffect(() => {
    inputEl.current.focus();
  }, [inputEl.current.value]);

  return (
    <>
      <h1>
        {first}
        {calc[num] === '*' ? 'X' : calc[num]}
        {second}
      </h1>
      <div>
        <input ref={inputEl} type="text" />
        <button onClick={checkValue}>정답제출</button>
      </div>
    </>
  );
}
