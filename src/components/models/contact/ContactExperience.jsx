import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Computer from "./Computer";
import { Cyber } from "../../HeroModels/Cyber";

const ContactExperience = () => {
  return (
    <Canvas 
      shadows 
      camera={{ position: [0, 3, 7], fov: 45 }}
      gl={{ alpha: false }}
      onCreated={({ gl }) => {
        gl.setClearColor('#2414cc')
      }}
    >
      <ambientLight intensity={0.5} color="#ffffff" />

      <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffffff" />

      <directionalLight
        position={[5, 9, 1]}
        castShadow
        intensity={2.5}
        color="#ffffff"
      />

      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <group scale={[1, 1, 1]}>
        <mesh
          receiveShadow
          position={[0, -4, 10]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[30, 30]} />
          <meshStandardMaterial color="#2414cc" />
        </mesh>
      </group>

      <group scale={1.5} position={[11, -5, 5]} castShadow>
        <Cyber />
      </group>
    </Canvas>
  );
};

export default ContactExperience;