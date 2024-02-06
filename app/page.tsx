import Image from "next/image";
import UseState from "./useState";
import useEffect from "react";
import UseEffect from './useEffect';
import UseState1 from './prac/useState1';
import UseState2 from './prac/useState2';
import UseRef from './useRef';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="bg-white text-black">
        Use State
        <br />
        <UseState />
      </div>
        <br />
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
        Use Effect
        <br />
        <UseEffect/>
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
