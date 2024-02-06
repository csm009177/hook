'use client'

import React, { useRef } from 'react';

const UseRef = () => {
  // useRef를 사용하여 DOM 요소에 접근합니다.
  const inputRef = useRef(null);

  // 버튼을 클릭할 때 input 요소에 포커스를 설정합니다.
  const focusInput = () => {
    
    inputRef.current.focus();
  };

  return (
    <div>
      {/* useRef로 생성된 ref를 input 요소에 연결합니다. */}
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default UseRef;
