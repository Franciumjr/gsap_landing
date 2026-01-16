import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { features, goods } from '../constants'
import { useMediaQuery } from 'react-responsive'
const Art = () => {

  const isMobile = useMediaQuery({maxWidth: 767});
  useGSAP(() => {
    const start = isMobile ? 'top 20%' : 'top top';

    const tlmask = gsap.timeline({
      scrollTrigger: {
        trigger: '#art',
        start,
        end: 'bottom center',
        scrub: 1.5,
        pin: true,
      }
    }
    )
    tlmask
    .to(".will-fade", {
      opacity: 0,
      stagger: 0.5,
      ease: 'power1.inOut',
    })
    .to(".masked-img", {
      scale: 1.4,
      maskPosition: 'center',
      maskSize: '400%',
      duration: 2,
      ease: 'power3.inOut',
    })
    .to("#masked-content", {
      opacity: 1,
      duration: 1,
      ease: 'power3.inOut',
    })
  }, [])

  return (
    <section id='art'>
      <div className="container mx-auto h-full pt-20 ">
        <h2 className='will-fade'>A closer look of our Rooms</h2>
        <div className="content">
          <ul className='space-y-4 will-fade'>
            {features.map((feature, index) => (
              <li key={index} className='flex items-center gap-2'>
              <img src="/images/check.png" alt="check" />
              <p>{feature}</p>
              </li>
              
            ))
            }
          </ul>
          <div className="cocktail-img">
            <img src="/images/under-img.jpg" className='abs-center masked-img size-full object-contain' alt="" />
          </div>
          <ul className='space-y-4 will-fade'>
            {goods.map((good, index) => (
              <li key={index} className='flex items-center justify-start gap-2'>
              <img src="/images/check.png" alt="check" />
              <p className='md:w-fit w-60'>{good}</p>
              </li>
              
            ))
            }
          </ul>
        </div>
        <div className="masked-container ">
          <h2 className="will-fade">Vintage-like Experience</h2>
          <div id="masked-content">
            <h3>Made with Craft, Poured with Passion</h3>
            <p>Not just a Hotel. Rather an Experience.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Art
