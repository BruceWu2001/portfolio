import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import {LoopRepeat, LoopPingPong} from "three"

export const PurpleSphere = (props) => {
//   const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/pearl_electron.glb");
  const { ref,actions } = useAnimations(animations);
  useEffect(() => {
    Object.keys(actions).forEach(action => {
        // actions[action].setLoop(LoopPingPong, Infinity)
        console.log(actions[action])
        actions[action]?.play();
    })
  })
  return (
    <group ref={ref} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Icosphere008_0" scale={0.892}>
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials["Material.002"]}
                />
              </group>
              <group name="Icosphere020_1" scale={0.892}>
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials.material_0}
                />
              </group>
              <group name="Cube_2">
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials.hide}
                />
              </group>
              <group name="Icosphere001_3" scale={0.892}>
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials["Material.002"]}
                />
              </group>
              <group name="Icosphere002_4" scale={0.892}>
                <mesh
                  name="Object_12"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                  material={materials.material_0}
                />
              </group>
              <group name="Cube001_5" rotation={[0, 0, -Math.PI]}>
                <mesh
                  name="Object_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials.hide}
                />
              </group>
              <group name="Sphere002_6" scale={0.31} />
              <group name="Sphere_7" scale={0.24}>
                <mesh
                  name="Object_17"
                  castShadow
                  receiveShadow
                //   geometry={nodes.Object_17.geometry}
                //   material={materials.pearl}
                />
              </group>
              <group name="Sphere001_8" scale={0.33} />
              <group name="Sphere003_9" scale={0.294} />
              <group name="Sphere004_10" scale={0.272} />
              <group name="Sphere005_11" scale={0.25} />
              <group name="Sphere006_12" scale={0.31}>
                <mesh
                  name="Object_23"
                  castShadow
                  receiveShadow
                //   geometry={nodes.Object_23.geometry}
                //   material={materials.core}
                />
                <mesh
                  name="Object_24"
                  castShadow
                  receiveShadow
                //   geometry={nodes.Object_24.geometry}
                //   material={materials.core}
                />
              </group>
              <group name="Sphere007_13" scale={0.33}>
                <mesh
                  name="Object_26"
                  castShadow
                  receiveShadow
                //   geometry={nodes.Object_26.geometry}
                //   material={materials.core}
                />
                <mesh
                  name="Object_27"
                  castShadow
                  receiveShadow
                //   geometry={nodes.Object_27.geometry}
                //   material={materials.core}
                />
              </group>
              <group name="Sphere008_14" scale={0.294}>
                <mesh
                  name="Object_29"
                  castShadow
                  receiveShadow
                //   geometry={nodes.Object_29.geometry}
                //   material={materials.core}
                />
                <mesh
                  name="Object_30"
                  castShadow
                  receiveShadow
                //   geometry={nodes.Object_30.geometry}
                //   material={materials.core}
                />
              </group>
              <group name="Sphere009_15" scale={0.272}>
                <mesh
                  name="Object_32"
                  castShadow
                  receiveShadow
                //   geometry={nodes.Object_32.geometry}
                //   material={materials.core}
                />
                <mesh
                  name="Object_33"
                  castShadow
                  receiveShadow
                //   geometry={nodes.Object_33.geometry}
                //   material={materials.core}
                />
              </group>
              <group name="Sphere010_16" scale={0.25}>
                <mesh
                  name="Object_35"
                  castShadow
                  receiveShadow
                //   geometry={nodes.Object_35.geometry}
                //   material={materials.core}
                />
                <mesh
                  name="Object_36"
                  castShadow
                  receiveShadow
                //   geometry={nodes.Object_36.geometry}
                //   material={materials.core}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/pearl_electron.glb");