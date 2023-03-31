import React, { useState, useEffect, useRef } from 'react';

export default function TestUseEffect() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('입력하세요');
  const inputValue = useRef();

  const onBtnClick = () => {
    console.log('🤟 버튼 클릭');
    setCount((cur) => cur + 1);
  };

  const onInputChange = () => {
    console.log('키 입력');
    setText(inputValue.current.value);
  };

  // 1. 이렇게 쓰나
  // useEffect(() => {
  //   console.log('렌더링 할 떄마다 실행되는 useEffect');
  // });
  // 2. 이렇게 쓰나 동일?! 하지않음 렌더링 되는 시점이 다름 useEffect는 return의 값을 그리고 실행되고 그냥 쓴것은 그리기전에 실행됨 === defer와 동일
  // console.log('렌더링 할 떄마다 실행되는 useEffect');

  useEffect(() => {
    console.log('최초 마운트시 실행되는 useEffect');
  }, []);

  useEffect(() => {
    console.log('버튼 클릭 시에만 실행되는 useEffect');
  }, [count]);

  useEffect(() => {
    console.log('input 입력시 실행되는 useEffect');
  }, [text]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={onBtnClick}>+1 버튼</button>
      <br />
      <h1>{text}</h1>
      <input ref={inputValue} type="text" onChange={onInputChange} />
    </>
  );
}
