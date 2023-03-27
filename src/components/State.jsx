import React, { useState } from "react";

export default function State() {
  const [teacher, setTeacher] = useState("이효석");

  function inEnglish() {
    if (teacher === "tetz") return setTeacher("이효석");
    setTeacher("tetz");
  }
  return (
    <>
      <button onClick={inEnglish}>영어로</button>
      <div id="text">{teacher}</div>
    </>
  );
}
