import Image from "next/image";
import useEffect from "react";

import UseState from "./useState";
import UseEffect from './useEffect';
import UseState1 from './prac/useState1';
import UseState2 from './prac/useState2';
import UseRef from './useRef';
import UseEffect1 from './prac/useEffect1';
import UseEffect2 from './prac/useEffect2';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="bg-white text-black">
        Use State 1
        <br />
        <UseState1/>
      </div>
        <br />
      <div className="bg-white text-black">
        Use State 2
        <br />
        <UseState2/>
      </div>

        <br />
      <div className="bg-white text-black">
        Use Effect1
        <br />
        <UseEffect1/>
      </div>
        <br />
      <div className="bg-white text-black">
        Use UseRef
        <br />
        <UseRef/>
      </div>
        <br />
      <div className="bg-white text-black">
        Use Ref1
        <br />
        <UseRef/>
      </div>

    </main>
  );
}
