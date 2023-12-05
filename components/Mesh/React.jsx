/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/models/react.glb --transform 
Files: public/models/react.glb [2.18MB] > react-transformed.glb [512.1KB] (76%)
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function ReactMesh(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/react-transformed.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="central" geometry={nodes.central.geometry} material={materials.large_BB} position={[1.512, 0.57, -0.208]} scale={0.035}>
          <group name="a-axis" position={[-2.925, 0, -3.537]} scale={28.966}>
            <mesh name="a" geometry={nodes.a.geometry} material={materials.small} scale={0.079} />
          </group>
          <group name="b-axis" position={[-4.27, -1.196, 1.196]} rotation={[Math.PI / 4, 0.377, 0]} scale={28.966}>
            <mesh name="b" geometry={nodes.b.geometry} material={materials.small} scale={0.079} />
          </group>
          <group name="c-axis" position={[-2.925, 2.501, 2.501]} rotation={[2.356, 0, 0]} scale={28.966}>
            <mesh name="c" geometry={nodes.c.geometry} material={materials.small} scale={0.079} />
          </group>
        </mesh>
        <mesh name="a-path" geometry={nodes['a-path'].geometry} material={nodes['a-path'].material} position={[1.512, 0.57, -0.208]} scale={0.079} />
        <mesh name="b-path" geometry={nodes['b-path'].geometry} material={materials.Material} position={[1.512, 0.57, -0.208]} rotation={[Math.PI / 4, 0, 0]} scale={0.079} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/react-transformed.glb')
