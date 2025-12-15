'use client'

import React, { useState, useRef } from "react";

const UseRef = () => {
  const [count, setCount] = useState(1);
  const ref = useRef()
  return (
    <div>
      {/* useRef로 생성된 ref를 input 요소에 연결합니다. */}
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
export default UseRef 
