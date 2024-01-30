
'use client'
import React, { useState } from "react";

export default function UseState() {
  const [count, setCount] = useState(0);

  const handleUpdate = () => {
    setCount(count+1)
  }
  console.log('update')
  return (
    <div>
      <div>클릭 횟수 </div>
      <div>You clicked {count} times</div>
      <button onClick={handleUpdate}>click</button>
    </div>
  );
}
