import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Suspense } from 'react'
import Models from 'components/Models'
import styles from 'styles/room.module.css'

export default function Room() {
  return (
    <div className={styles.room}>
      <Canvas>
        <ambientLight intensity={0.4}/>
        <directionalLight position={[60, 100, 10]} intensity={1}/>
        <PerspectiveCamera makeDefault position={[60, 60, -60]} />
        <Suspense fallback={null}>
          <Models/>
          <OrbitControls 
            maxDistance={120}
            minDistance={40}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 10}
            minAzimuthAngle={Math.PI / 2}
            maxAzimuthAngle={Math.PI / 1}
          />
        </Suspense>
      </Canvas>
      <div className={styles.text + ' body'}>
        Haz click para navegar
      </div>
    </div>
  );
}