import React from 'react'
import Hero from './components/Hero.jsx';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className='flex-center h-[100vh]'>
      <Hero></Hero>
      
    </div>
  )
}

export default App
