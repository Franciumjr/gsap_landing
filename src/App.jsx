import React from 'react'
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import Rooms from './components/Rooms.jsx'
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import About from "./components/About.jsx"

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero></Hero>
      <Rooms></Rooms>
      <About></About>
    </main>
  )
}

export default App
