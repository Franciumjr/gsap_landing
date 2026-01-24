import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Environment, PerspectiveCamera, ScrollControls} from "@react-three/drei"
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Vintage from "./Vintage"
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const HeroExperience = ({progress}) => {
  const cameraRef = useRef(null);

  useFrame(() => {
    cameraRef.current.lookAt(0, 0, 0)
  })
  
//// x: 4.762106209217567, y: 1.7769096976027328, z: 8.61190666337581
  return (
    <>
      
        <PerspectiveCamera ref={cameraRef} fov={45} near={.1} far={10000} makeDefault position={[4.76, 1.78, 8.61]}></PerspectiveCamera>
        <Environment preset="dawn"></Environment>
        <Vintage ></Vintage>
        
      
    </>
  )
}

export default HeroExperience
