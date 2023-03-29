import React from "react";

export default function ExMap({ items }) {
  return (
    <div>
      {items.map((el, idx) => {
        return (
          <div key={idx}>
            <h1>품목명 : {el.item}</h1>
            <p>가격 : {el.price}</p>
          </div>
        );
      })}
    </div>
  );
}
