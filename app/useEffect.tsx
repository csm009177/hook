
'use client'
import React, { useState, useEffect } from 'react';

export default function UseEffect() {
  const [count, setCount] = useState(0);

  // 컴포넌트가 렌더링될 때마다 실행
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
