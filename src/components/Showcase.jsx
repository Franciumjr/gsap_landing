import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { rooms } from '../constants'


const Showcase = () => {
  const contentRef = useRef();
  const [currentIndex, SetcurrentIndex] = useState(0);

  useGSAP(() => {
    gsap.fromTo('#title', 
      {
        opacity: 0,
    }, 
    {
        opacity: 1,
        duration: 1,
        ease: 'power1.inOut',
    })
    gsap.fromTo(".details h2", {
      yPercent: 100,
      opacity: 0,

    },
    {
      yPercent: 0,
      duration: 1,
      opacity: 1,
    });
    gsap.fromTo ('.cocktail img', {
      xPercent: -200, 
    }, {
      xPercent: 0,
      ease: 'power1.inOut',
      duration: .7,
      delay: .1,
    })

    const tl = gsap.timeline(
      {
        scrollTrigger: {
            trigger: "#menu",
            start: "top 50%",
            end: "bottom 80%",
            scrub: true,
        }
    })
    tl
    .from("#m-left-leaf", {
        x: -100, 
        y: 100,
        duration: 1,
    })
    .from("#m-right-leaf", {
        x: 100, 
        y: 100,
        duration:1,
        ease: 'power1.inOut',
    })


  }, [currentIndex]); // currentIndex: when the variable changes, GSAP animation also changes base on the variable

  const totalRooms = rooms.length;

  const slidehandler = (index) => {
    const newIndex = (index + totalRooms) % totalRooms;

    SetcurrentIndex(newIndex)
  }

  const getRoomAt = (indexOffset) => {
    return rooms[(currentIndex + indexOffset + totalRooms) % totalRooms ]
  }

const currentRoom = getRoomAt(0);
const prevRoom = getRoomAt(-1);
const nextRoom = getRoomAt(1);


  return (
    <section id='menu' aria-labelledby='menu-heading'>
        <img src="/images/slider-left-leaf.png" alt="left-leaf" id='m-left-leaf' />
        <img src="/images/slider-right-leaf.png" alt="right-leaf" id='m-right-leaf' />
        <h2 id='menu-heading' className='sr-only'>
          Room Showcase
        </h2>
        
        <nav className="cocktail-tabs" aria-label='Cocktail Navigation'>
          {rooms.map((room, index)=> {
            const isActive = index === currentIndex;
            return(
              <button key={room.id} 
              className= {`${isActive ? 'text-white border-white'
              : 'text-slate-300 border-slate-300'}`}
              onClick={() => slidehandler(index)}>
                {room.name}
              </button>
            )
          })}
        </nav>
        <div className="content gap-7">
          <div className="arrows">
            <button className=' cursor-pointer text-left' onClick={() => slidehandler(currentIndex - 1) }>
              <span>{prevRoom.name}</span>
              <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden = "true"/>
            </button>
            <button className='cursor-pointer text-right' onClick={() => slidehandler(currentIndex + 1)}>
              <span>{nextRoom.name}</span>
              <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden = "true"/>
            </button>
          </div>
          <div className="cocktail">
            <img src={currentRoom.image} className='object-contain' alt="" />
          </div>
          <div className="recipe">
            <div ref={contentRef} className="info">
              <p id='title'>{currentRoom.name}</p>
            </div>
          </div>
          <div className="details">
            <h2>{currentRoom.title}</h2>
          </div>
        </div>
    </section>
  )
}

export default Showcase
