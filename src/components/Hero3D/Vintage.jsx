import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

export function Vintage (props) {
  const { nodes, materials } = useGLTF('/models/Vintage.glb')
  const ref = useRef();
  const tl = useRef();

  useGSAP(() => {
    gsap.to(ref.current.rotation, {
      y: Math.PI * 2,
      ease: 'none',
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top bottom",
        end: "bottom bottom",
        scrub: .5,
      }
    });
  }, []);

  return (
    <group ref={ref} scale={[0.015, 0.015, 0.015]} {...props} dispose={null}>
      <group position={[-48.787, 22.037, -94.111]} scale={1.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['handle_low_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[5.088, -33.663, 249.398]}
        />
      </group>
      <group position={[95.664, -154.129, 88.258]} rotation={[0.027, 0.436, 1.507]} scale={1.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['charger_low_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[1.06, -8.669, -20.87]}
        />
      </group>
      <group position={[-43.65, -53.556, 13.121]} scale={1.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['body_low_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[0, 39.839, 142.302]}
        />
      </group>
      <group position={[-47.828, 98.457, -73.801]} rotation={[-Math.PI / 9, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['antenna_low_03_-_Default_0'].geometry}
          material={materials['03_-_Default']}
          position={[0, 1.314, 18.195]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['wire_low_03_-_Default_0'].geometry}
        material={materials['03_-_Default']}
        position={[25.171, -79.189, -49.704]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['screen_low_03_-_Default_0'].geometry}
        material={materials['03_-_Default']}
        position={[-43.65, -8.091, 131.286]}
        scale={[0.709, 0.658, 0.7]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['front_low_03_-_Default_0'].geometry}
        material={materials['03_-_Default']}
        position={[-43.65, -13.717, 155.423]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['buttons_low_03_-_Default_0'].geometry}
        material={materials['03_-_Default']}
        position={[-28.571, -146.365, 141.704]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models/Vintage.glb')

export default Vintage;