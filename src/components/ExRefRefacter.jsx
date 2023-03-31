import React, { useState, useRef } from 'react';

export default function ExRefRefacter() {
  const firstRandomNum = Math.floor(Math.random() * 10);
  const secondRandomNum = Math.floor(Math.random() * 10);
  const arithmeticArr = ['+', '-', 'x'];
  const randomArithmetic = Math.floor(Math.random() * arithmeticArr.length);

  const [again, setAgain] = useState(true);
  const answerInput = useRef();
  const oprator = arithmeticArr[randomArithmetic];

  const clearInput = () => {
    answerInput.current.value = '';
    answerInput.current.focus();
  };

  const checkAnswer = () => {
    let answer = 0;
    if (randomArithmetic === 0) {
      answer = firstRandomNum + secondRandomNum;
    } else if (randomArithmetic === 1) {
      answer = firstRandomNum - secondRandomNum;
    } else {
      answer = firstRandomNum * secondRandomNum;
    }

    if (answer === Number(answerInput.current.value)) {
      alert('정답입니다!');
      setAgain(!again);
      clearInput();
    } else {
      alert('틀렸습니다!');
      clearInput();
    }
  };

  return (
    <>
      <h1>
        {firstRandomNum}
        {oprator}
        {secondRandomNum}
      </h1>
      <div>
        <input ref={answerInput} type="text" />
        <button onClick={checkAnswer}>정답제출</button>
      </div>
    </>
  );
}
