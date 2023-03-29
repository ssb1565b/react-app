import React, { useState } from "react";

export default function StateProblem() {
  const [state, setState] = useState([0]);
  const [stateObj, setStateObj] = useState({ teacher: "이효석" });

  return (
    <div>
      {state}
      <br />
      <button
        onClick={() => {
          state[0] = 1;
          // setState(state); 이거 주석 해제시 밑에 copyArr 주석 하기
          console.log(state);
          // 값은 변했으나 주소값이 변하지 않아 렌더링이 일어나지않음
          // useState는 주소값이 같으면 렌더링 안함
          const copyArr = [...state];
          copyArr[0] = 1;
          setState(copyArr);
          // 새로운 주소값이 다시 할당되어서 렌더링 일어남
          console.log(state);
        }}
      >
        1로 만들기
      </button>
      <br />
      {stateObj.teacher}
      <br />
      <button
        onClick={() => {
          stateObj.teacher = "tetz";
          // setState(state);
          console.log(stateObj);
          // 이렇게 하면 주소값 안바뀜

          const copyObj = { ...stateObj };
          setStateObj(copyObj);
          console.log(stateObj);
        }}
      >
        영어로
      </button>
    </div>
  );
}
