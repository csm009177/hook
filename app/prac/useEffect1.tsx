
'use client'
import React, { useState, useEffect } from 'react';

export default function UseEffect1() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const handleCountUpdate = () => {
    setCount(count+1)
  }

  const handleInputChange = (e) => {
    setName(e.target.value)
  }
  // 컴포넌트가 렌더링될 때마다 실행
  useEffect(() => {
    console.log('rendering')
  }, [name]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleCountUpdate}>Click me</button>
      <input type="text" value={name} onChange={handleInputChange}/>
      <div>name: {name}</div>
    </div>
  );
}
