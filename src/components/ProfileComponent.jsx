import React from 'react';

export default function ProfileComponent({ name, age, nickName }) {
  return (
    <>
      <h1>이름 : {name}</h1>
      <h2>나이 : {age}</h2>
      <h2>닉네임 : {nickName}</h2>
      <hr />
    </>
  );
}
