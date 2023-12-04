"use client"

import { JSBall, JavaBall, PythonBall } from "@/components/canvas/BallCanvas"
import { useRef } from "react"
import { DirectionalLightHelper  } from "three"
import {
    View,
    Stage,
    OrbitControls,
    PerspectiveCamera,
    Environment,
    useHelper, 
    GizmoHelper, 
    GizmoViewport
  } from '@react-three/drei'

const MainCanvas = ({view1}) => {
    const directionalLight = useRef()
    useHelper(directionalLight, DirectionalLightHelper, 4, "green")
    return (
    <>
        {/* <View index={1} track={view1}>
            {/* <PerspectiveCamera makeDefault position={[0, 0, 4]} /> */}
            {/* <Lights preset="lobby" /> */}
            {/* <JavaBall position={[-2,0,0]}/>
            <OrbitControls makeDefault /> */}
        {/* </View> */} *

            {/* <JavaBall position={[-2,0,0]}/> */}
            {/* <JSBall/>
            <PythonBall position={[2,0,0]}/>
            <GizmoHelper
            alignment="bottom-right" 
            margin={[80, 80]} 
            >
            <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="black" />
            </GizmoHelper> */}
    </>)
} 

export default MainCanvas;

function Lights({ preset }) {
    return (
      <>
        <ambientLight intensity={1} />
        <pointLight position={[20, 30, 10]} />
        <pointLight position={[-10, -10, -10]} color="blue" />
        <Environment preset={preset} />
      </>
    )
  }
  