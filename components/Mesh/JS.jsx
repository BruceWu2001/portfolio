import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export const JS = (props) => {
    const { nodes, materials } = useGLTF("/models/js3.glb");
    return (
      <group {...props} dispose={null}>
        <group
          position={[0.144, -2.54, -0.327]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.014}
        >
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group
              position={[24.052, 117.48, 10.526]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.01}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_6.geometry}
                material={materials["Material.010"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_7.geometry}
                material={materials["Material.011"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials["Material.009"]}
              position={[18.962, 117.48, 10.526]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.01}
            />
          </group>
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text.geometry}
          material={materials["Material.012"]}
          position={[-0.428, -0.001, 0.073]}
          rotation={[0, -0.122, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text001.geometry}
          material={materials["Material.012"]}
          position={[0.412, 0.158, 0.067]}
          rotation={[0, 0.122, 0]}
        />
      </group>
    );  
}


