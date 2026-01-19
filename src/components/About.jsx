import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import SplitText from 'gsap/SplitText.js'

const About = () => {

    useGSAP(() => {
        const titleSplit = SplitText.create("#about h2", {type: 'words'}) //about h2: target "about > h2"
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#about",
                start: "top 30%",

            }
        })
        tl
        .from (titleSplit.words, {
            opacity: 0,
            duration: .7, 
            stagger: 0.03,
            y: 50,
            ease: "power3.inOut",
        })
        .from(".top-grid div, .bottom-grid div ", {
            opacity: 0,
            duration: 0.5,
            ease: 'power1.inOut',
            stagger: 0.04,
            y: 30,
        }, '-=0.5')
        
    })
  return (
    <section id='about'>
        <div className="mb-16 md:px-0 px-5">
            <div className="content">
                <div className="md:col-span-8">
                    <p className='badge'>Near-Perfect Rooms</p>
                    <h2>Your stay matters <span className='text-white'>-</span>from the room all the way to the toilet</h2>
                    
                </div>
                <div className="sub-content">
                    <p >Every Room in Vintage Inn is tailored to your needs while keeping the prices low &mdash; That care is what separates Vintage Inn from other hotels.</p>
                    <div>
                        <p className='md:text-3xl text-xl font-bold'><span>4.0</span>/5</p>
                    </div>
                    <p className='text-sm text-white-100'>More than 150+ customers</p>
                </div>
            </div>
        </div>

        <div className="top-grid">
            <div className="md:col-span-3">
                <div className="noisy"></div>
                <img src="/images/abt1.png" alt="grid-img-1" />
            </div>
            {/*Second container: takes 6/12 of the grid */}
            <div className="md:col-span-6"> 
                <div className="noisy"></div>
                <img src="/images/abt2.png" alt="grid-img-2" />
            </div>

            <div className="md:col-span-3">
                <div className="noisy"></div>
                <img src="/images/abt5.png" alt="grid-img-5" />
            </div>
            
        </div>
        <div className="bottom-grid">
            <div className="md:col-span-8">
                <div className="noisy"></div>
                <img src="/images/abt3.png" alt="grid-img-5" />
            </div>
            <div className="md:col-span-4">
                <div className="noisy"></div>
                <img src="/images/abt4.png" alt="grid-img-5" />
            </div>
        </div>
    </section>
  )
}

export default About
