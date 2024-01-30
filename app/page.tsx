import Image from "next/image";
import UseState from "./useState";
import useEffect from "react";
import UseEffect from './useEffect';

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
        Use Effect
        <br />
        <UseEffect/>
      </div>
    </main>
  );
}
