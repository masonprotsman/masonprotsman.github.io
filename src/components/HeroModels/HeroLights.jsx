import * as THREE from "three";

const HeroLights = () => (
  <>
    {/* lamp's light */}
    <spotLight
      position={[0, 0, 6]}
      angle={Math.PI /2}
      penumbra={0.5}
      intensity={100}
      color="white"
    />
    <spotLight
      position={[-8, 2, 0]}
      angle={Math.PI /2}
      penumbra={0.5}
      intensity={100}
      color="white"
    />
    <spotLight
      position={[0, 2, -6]}
      angle={Math.PI /2}
      penumbra={0.5}
      intensity={100}
      color="white"
    />
    <spotLight
      position={[0, 0, 5]}
      angle={Math.PI /2}
      penumbra={0.5}
      intensity={100}
      color="white"
    />
    <spotLight
      position={[5, 2, 6]}
      angle={Math.PI /2}
      penumbra={0.5}
      intensity={100}
      color="white"
    />
    <spotLight
      position={[-5, 2, 6]}
      angle={Math.PI /2}
      penumbra={0.5}
      intensity={100}
      color="white"
    />
    <spotLight
      position={[0, -5, 0]}
      angle={Math.PI /2}
      penumbra={0.5}
      intensity={100}
      color="white"
    />
    <spotLight
      position={[3, -5, -4]}
      angle={Math.PI /2}
      penumbra={0.5}
      intensity={100}
      color="white"
    />
    <spotLight
      position={[-3, -5, -4]}
      angle={Math.PI /2}
      penumbra={0.5}
      intensity={100}
      color="white"
    />
    {/* bluish overhead lamp */}
    <spotLight
      position={[4, 5, 4]}
      angle={0.3}
      penumbra={0.5}
      intensity={100}
      color="#4cc9f0"
    />
    {/* purplish side fill */}
    <spotLight
      position={[3, -5, 5]}
      angle={0.4}
      penumbra={1}
      intensity={100}
      color="#9d4edd"
    />
    <spotLight
      position={[0, -5, 0]}
      angle={0}
      penumbra={1}
      intensity={100}
      color="#ff0000"
    />
    {/* area light for soft moody fill */}
    <primitive
      object={new THREE.RectAreaLight("#a259ff", 8, 3, 2)}
      position={[1, 3, 4]}
      rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      intensity={15}
    />
    {/* subtle point light for atmospheric tone */}
    <pointLight position={[0, 1, 0]} intensity={10} color="#7209b7" />
    <pointLight position={[1, 2, -2]} intensity={10} color="#0d00a4" />
  </>
);

export default HeroLights;