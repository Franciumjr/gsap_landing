import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';


const Hero = () => {
  useGSAP(() => {
    const titleSplit = new SplitText(".title", { type: "words, chars" });
    const paraSplit = new SplitText(".subtitle", { type: "lines" });

    titleSplit.chars.forEach((char) => { //separate individual characters for animation (similar to .map function)
      char.classList.add('text-gradient');
      
    });
    gsap.from(titleSplit.chars, { // from individual characters animate
      yPercent: 100,
      stagger: 0.05,
      duration: .5,
      opacity: 0,
      ease: "expo.out",
    })
    gsap.from(paraSplit.lines, { // from individual lines animate
      yPercent: 100,
      stagger: 0.07,
      duration: 1.2,
      opacity: 0,
      delay: 1,
      ease: "expo.out",
    })
    gsap.timeline({
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true, // so the animation matches the scroll
      }
      })
    .to('.right-leaf', { y:200 }, 0)
    .to ('.left-leaf', { y:-200 }, 0)
  
  }, []);
  return (
    <>
      <section id="hero" className='noisy'>
        <h1 className='title'>VINTAGE INN </h1>
        <img src="/images/hero-left-leaf.png" className='left-leaf'  alt="left-leaf" />
        <img src="/images/hero-right-leaf.png" className='right-leaf'  alt="right-leaf" />
        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Vintage. Budget. Convenience.</p>
              <p className='subtitle'>Malacca's most 
                <br />Affordable hotel
              </p>
            </div>
            <div className="view-cocktails">
              <p className='subtitle'>
                Vintage Inn is a budget hotel that offers single and double rooms at half the price of 4 star hotels.
              </p>
              <a href="#cocktails">View Rooms</a>
            </div>
          </div>
        </div>
      
      </section>
    </>
  )
}

export default Hero
