import React, { useState } from "react";

export default function ChangeObj({ objArr }) {
  const [state, setState] = useState(0);
  // if (state === objArr.length - 1) {
  //   setState(0);
  //   return;
  // }
  return (
    <>
      <div>
        <button
          onClick={() => {
            state === objArr.length - 1
              ? setState((cur) => 0)
              : setState((cur) => {
                  console.log("cur", cur);
                  return cur + 1;
                });
          }}
        >
          바꾸기
        </button>
        <h1>{objArr[state]?.name}</h1>
        <p>{objArr[state]?.age}</p>
        <p>{objArr[state]?.nickName}</p>
      </div>
    </>
  );
}
