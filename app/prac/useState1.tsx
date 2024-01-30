
'use client'
import React, { useState } from "react";

export default function UseState1() {
  const [count, setCount] = useState(1);

  const handleUpdate = () => {
    let newCount;
    if(count>=12){
      newCount=1;
    } else {
      newCount = count +1
    }
    setCount(newCount)
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
