import { Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"
import * as THREE from "three"

const App = () => {

  return (
    <>
      <Canvas camera={{ position: [0, 0, 0] }}>
        <pointLight position={[0, 0, 0]} intensity={10}/>
        <Sphere position={[0, 0, -3]}>
          <meshStandardMaterial side={THREE.DoubleSide} color={0xff9900} />
        </Sphere>
      </Canvas>
    </>
  );
}

export default App
