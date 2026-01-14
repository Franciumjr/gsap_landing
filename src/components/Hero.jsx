import React, { use } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const Hero = () => {
    useGSAP(() => {
    gsap.fromTo("#text",
        {
            opacity: 0, 
            y:50
        },
        {
            opacity: 1,
            duration: 1,
            y:0,
            ease: "bounce.out",
        }
    );
}, []);
  return (
    <div>
      <h1 id='text' className="text-7xl text-white">Hello World</h1>
    </div>
  )
}

export default Hero
