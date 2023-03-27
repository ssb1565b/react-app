import React from "react";

export default function ExStyle() {
  const helloStr = "Hello, first exercise";
  return (
    <div
      style={{ marginTop: "32px", backgroundColor: "skyblue" }}
      onClick={() => alert("클릭됨")}
    >
      {helloStr}
    </div>
  );
}

// rfc 스닙펫
