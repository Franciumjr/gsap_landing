
import { navLinks } from '../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'



const Navbar = () => {
  
useGSAP(() => {
  const navTween = 
  gsap.timeline({
    scrollTrigger: {
      trigger: 'nav',
      start: 'bottom top',// when bottom of navbar hits top of viewport
    }
    });
    
    navTween.fromTo("nav",
      {
        backgroundColor: "transparent",
      }, 
      {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power2.out",
      
});
}, []);


  return (
    <nav>
        <div className=''>
          
            <a href="#home" className='flex items-center gap-2 mx-7'>
              <img src="/images/logo.png" alt="" />
                <p>Vintage Inn</p>
            </a>
            <ul className='mx-7'>
              {navLinks.map((nav) => (
                <li key={nav.name}>
                  <a href={nav.link}>{nav.name}</a>
                </li>
              ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
