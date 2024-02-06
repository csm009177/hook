
'use client'
import React, { useState, useEffect } from 'react';

export default function UseEffect2() {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Clean-up 함수를 반환하여 컴포넌트가 언마운트될 때 setInterval을 정리합니다.
    return () => clearInterval(timer);
  }, []); // 빈 배열을 전달하여 처음 한 번만 실행되도록 합니다.

  return (
    <div>
      <button onClick={()=> setShow(!show)}>Toggle</button>
      {show && <p>timer: {count}</p>}
    </div>
  );
}
