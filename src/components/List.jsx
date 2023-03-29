import React from "react";
import ListChild from "./ListChild";

export default function List() {
  const dataArr = [
    {
      title: "리액트 공부하기",
      todo: "State 사용법 익히기",
    },
    {
      title: "코테 문제풀기",
      todo: "Lv0 정복 가보자구",
    },
  ];
  return (
    <div>
      <h1>오늘 해야할 일</h1>
      <hr />
      {dataArr.map((el, idx, arr) => (
        <ListChild key={idx} title={el.title} content={el.todo} />
      ))}
      {dataArr.map((el, idx) => {
        return (
          <div key={idx}>
            <hr />
            <h2>{el.title}</h2>
            <p>{el.todo}</p>
          </div>
        );
      })}
      <hr />
    </div>
  );
}
