
'use client'

import React, { useState, useEffect } from 'react';

export default function UseEffect() {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  

  useEffect(() => {
    let timer;
    if (show) {
      timer = setInterval(() => {
        setCount(prevCount => prevCount + 1);
        console.log("running");
      }, 1000);
    } else {
      clearInterval(timer);
    }

    // Clean-up 함수를 반환하여 컴포넌트가 언마운트될 때 setInterval을 정리합니다.
    return () => clearInterval(timer);
  }, [show]); // show 상태를 의존성 배열에 추가하여 show 상태가 변경될 때마다 useEffect가 실행되도록 합니다.

  return (
    <div>
      <button onClick={()=> setShow(!show)}>Toggle</button>
      {show && <p>timer: {count}</p>}
    </div>
  );
}
