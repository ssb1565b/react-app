import React, { useEffect } from 'react';

export default function Timer() {
  useEffect(() => {
    const timer = setInterval(() => {
      // setInterval 아래콘솔을 1초에 한번씩 계속 실행함
      console.log('타이머 실행 중');
    }, 1000);
    // mount 될때 실행됨 만약 amount때 즉 막고싶다면 아래 return문에 익명함수로 전달하기

    return () => {
      clearInterval(timer);
      console.log('컴포넌트 언마운트, 타이머가 종료됩니다');
    };
  }, []);
  return <div>Timer</div>;
}
