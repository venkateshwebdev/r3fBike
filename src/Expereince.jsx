import { Canvas } from "@react-three/fiber";
import {
  Center,
  ContactShadows,
  CubeCamera,
  Environment,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
  PresentationControls,
  Scroll,
  ScrollControls,
  Sky,
} from "@react-three/drei";
import { Bike } from "./Bike";
import { useContext } from "react";
import { TextContext } from "./context";

const Expereince = () => {
  const {title} = useContext(TextContext)
  return (
    <Canvas shadows>
      <PerspectiveCamera
        makeDefault
        fov={45}
        far={1000}
        near={1}
        position={[0, 0, 10]}
      />
      <ambientLight intensity={1} />
      {title==="style"&&<ambientLight intensity={10} />}
      <directionalLight intensity={5} position={[1, 1, 5]} />
      <ScrollControls pages={1} distance={20}>
        <Scroll>
          <PresentationControls
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
            azimuth={[-1.5,1.5]}
            polar={[0,0]}
          >
            <Bike />
          </PresentationControls>
        </Scroll>
        <OrbitControls maxAzimuthAngle={1.5} maxPolarAngle={1.5} enableZoom={false} enableRotate={false} />
      </ScrollControls>
    </Canvas>
  );
};

export default Expereince;
