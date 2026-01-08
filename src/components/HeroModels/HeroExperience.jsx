import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive';
import HeroLights from './HeroLights';
import { Spaceship } from './Spaceship';

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)'});
    const isMobile = useMediaQuery({ query: '(max-width: 768px)'});
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        <OrbitControls
            enablePan={false}
            enableZoom={false}
            maxDistance={20}
            minDistance={5}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 1.5}
        />
        <HeroLights />
        <group scale={isMobile ? 0.3 : .5} position={[0, -1, 0]} rotation={[0, -Math.PI /4, 0]}>
            <Spaceship />
        </group>
    </Canvas>
  )
}

export default HeroExperience
