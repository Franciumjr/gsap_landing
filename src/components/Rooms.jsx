import React, { use } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { cocktailLists, mockTailLists } from '../constants'
const Rooms = () => {
useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: "#cocktails",
            start: "top 30%",
            end: "bottom 50%",
            scrub: true,
        }
    })
    parallaxTimeline.from("#c-left-leaf", {
        x: -100, 
        y: 100,
    })
    .from("#c-right-leaf", {
        x: 100, 
        y: 100,
    })
})

return (
    <section id='cocktails' className='noisy'>
        <img src="/images/cocktail-left-leaf.png" alt="left-leaf" id='c-left-leaf'/>
        <img src="/images/cocktail-right-leaf.png" alt="right-leaf" id='c-right-leaf'/>
        
       

            {/* Room listings container */}
            <div className='list'>
                    <div className="popular">
                            <h2>Our top selling rooms: </h2>
                            <ul>
                                {cocktailLists.map(({name, country, detail, price}) => {
                                    // Render each room as a list item
                                    return (
                                        <li key={name}>
                                            <div className='md:me-28'>
                                                <h3>{name}</h3>
                                                <p>{country} | {detail}</p>
                                            </div>
                                            <span> - {price}</span>
                                        </li>
                                        )
                                    })}
                            </ul>
                    </div>

                    <div className="loved">
                            <h2>Tourist attractions </h2>
                            <ul>
                                {mockTailLists.map(({name, country, detail, price}) => {
                                    // Render each room as a list item
                                    return (
                                        <li key={name}>
                                            <div className='md:me-28'>
                                                <h3>{name}</h3>
                                                <p>{country} | {detail}</p>
                                            </div>
                                            <span> - {price}</span>
                                        </li>
                                        )
                                    })}
                            </ul>
                    </div>
            </div>

    </section>
)
}

export default Rooms
