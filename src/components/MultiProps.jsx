import React from "react";

export default function MultiProps({ id, text, url }) {
  return (
    <div>
      <h1>{id}님 반갑습니다</h1>
      <a href={url}>{text}</a>
    </div>
  );
}
