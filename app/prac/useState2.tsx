
'use client'
import React, { useState } from "react";

export default function UseState() {
  const [input, setInput] = useState("");
  const [output, setOuput] = useState([]);

  const handleInput = async (e) => {
    setInput(e.target.value)
    
  }

  const handleUpload = async (e) => {
    setOuput((prevState) => {
      console.log(prevState)
      return [input, ... prevState];
    })
  }

  // console.log(input)
  return (
    <div>
      <input type="text" value={input} onChange={handleInput}/>
      <button onClick={handleUpload}>upload</button>
      {output.map((output, index) => {
        return <h1 key={index}>{output}</h1>;      })}
    </div>
  );
}
