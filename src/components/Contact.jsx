import { openingHours, socials } from '../constants'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Contact = () => {

  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", 
      {type: 'words'});

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#contact',
        start: 'top center',
        end: 'bottom-bottom'
      },
      ease: 'power1.inOut',
    })

    tl
    .from(titleSplit.words, {
      opacity:0,
      yPercent: 100, 
      stagger: 0.1,
      
    })
    .from('#contact h3, #contact p', {
      opacity:0,
      yPercent: 100, 
      stagger: 0.1,
    })
    .to( '#f-right-leaf', {
      y: -70,
      duration: 1,
      ease: 'power1.inOut',
    })
    .to( '#f-left-leaf', {
      y: 70,
      duration: 1,
      ease: 'power1.inOut',
    })
  }, [])

  return (
    <footer id='contact'>
      <img src="/images/footer-right-leaf.png" alt="leaf-right" id='f-right-leaf' />
      <img src="/images/footer-left-leaf.png" alt="leaf-left" id='f-left-leaf'/>

      <div className="content">
        <h2>Where to Find Us</h2>
        <div>
          
          <h3>BOOK YOUR STAY NOW!</h3>
          <p>Jalan Pasar Lama, Kampung Jawa, 75100 Melaka (Above Syafiq Thai Seafood)</p>
        </div>
        <div className="">
          <h3>Contact Us</h3>
          <p>(60)11 -5553 1415</p>
        </div>
        <div className="">
          <h3>OPEN EVERY DAY</h3>
          {openingHours.map(({title, time}) => (
            <p key={title}>{title} : {time}</p>
          ))}
        </div>
        <div className="">
          <h3>Socials</h3>
          <div className="flex-center gap-7">
          
            
            {socials.map(({name, icon, url}) => (
              <a aria-label= {name} rel='noopener noreferer' target='_blank' href={url}>
                <img src={icon} alt={name} />
                </a>
            ))}
          </div>
        </div>
      </div>
      
    </footer>
  )
}

export default Contact
