import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useControls} from "leva";
import {
  ContactShadows,
  Environment,
  Sky,
} from "@react-three/drei";

export const Experience = () => {
  const  action  = useControls({
    animation: {
      value: "Typing",
      options: ["Typing", "Falling", "Standing"],
    },
  });
  
  return (
    <>
      <OrbitControls />
      <Sky/>
      <Environment preset="sunset" />
      
      <group position-y={-1}>
        <Avatar animation={action.animation}/>
        {action.animation == "Typing" && (<mesh scale={[0.8, 0.5, 0.8]} position-y={0.25}>
            <boxGeometry />
            <meshStandardMaterial color="red" />
          </mesh>)}
          

        <mesh scale={5} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
          <planeGeometry />
          <meshStandardMaterial color="red" />
        </mesh>
      </group>
      
      <ambientLight intensity={1}/>
    </>
  );
};
