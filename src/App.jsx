import React from 'react'
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero></Hero>
      <div className="h-dvh bg-black"></div>
    </main>
  )
}

export default App
