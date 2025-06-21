// components/ParallaxSection.tsx
"use client";
import { Parallax } from 'react-scroll-parallax';
import { useState } from 'react';

export default function ParallaxSection() {
  const [progress, setProgress] = useState(0);
  const [entered, setEntered] = useState(false);

  return (
    <>
      <div className='flex justify-between'>
        <Parallax speed={10}>
          <div className="w-8 h-8 bg-red-500" >A</div>
        </Parallax>
        <div className='flex gap-3'>
          <div className="relatvie">
            <p>Progress: {Math.round(progress * 100)}%</p>
            <p>Element B is {entered ? 'in' : 'out of'} viewport</p>
          </div>
          <Parallax
            speed={-10}
            onProgressChange={(progress) => setProgress(progress)}
            onEnter={() => setEntered(true)}
            onExit={() => setEntered(false)}
          >
            <div className="w-48 h-48 bg-green-500" >B</div>
          </Parallax>
        </div>
      </div>
      <section className='h-[1000px]' />
    </>
  );
}