import React, { useEffect, useState } from 'react';
import ProfileComponent from './ProfileComponent';

export default function UseEffectFetch() {
  const [dataArr, setDataArr] = useState([]);
  const fetchData = async () => {
    const resFetch = await fetch('http://localhost:4000', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });
    if (resFetch.status !== 200) return '실패했습니다.';

    const data = await resFetch.json();
    console.log(data);
    setDataArr(data); // cur에 data를 리턴한것과 같음
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {dataArr?.map((el, idx) => {
        return (
          <ProfileComponent
            key={idx}
            name={el.name}
            age={el.age}
            nickName={el.nickName}
          />
        );
      })}
    </div>
  );
}
