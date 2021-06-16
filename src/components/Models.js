import React, { useRef } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Html } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import styles from 'styles/room.module.css'

function Model(...props){
  const room = useLoader(GLTFLoader, "models/room2.glb");
  const laptop = useLoader(GLTFLoader, "models/laptop2.glb");
  const books = useLoader(GLTFLoader, "models/books2.glb");
  const board = useLoader(GLTFLoader, "models/board2.glb");
  return (
    <>
      <mesh {...props}>
        <primitive object={room.scene} scale={0.1}/>
      </mesh> 
      <mesh {...props} position={[3, 12, -15]}>
          <primitive object={laptop.scene} scale={0.1}/>
          <Html distanceFactor={40}>
            <div class={styles.menu + ' subtitle'}>
            <a href="/contact">Contact</a>
            </div>
          </Html>
      </mesh>
      <mesh {...props} position={[24, 1, -1]}>
        <primitive object={books.scene} scale={0.1}/>
        <Html distanceFactor={40}>
          <div class={styles.menu + ' subtitle'}>
            <a href="/about">About me</a>
          </div>
        </Html>
      </mesh>
      <mesh {...props} position={[1, 18, -5]}>
        <primitive object={board.scene} scale={0.1}/>
        <Html distanceFactor={40}>
          <div class={styles.menu + ' subtitle'}>
          <a href="/projects">Projects</a>
          </div>
        </Html>
      </mesh>
    </>
  );
};

export default function Models() {
  const ref = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.x = Math.cos(t / 4) / 8
    ref.current.rotation.y = Math.sin(t / 4) / 8
  })
  return (
    <group ref={ref}>
      <Model/>
    </group>
  )
}