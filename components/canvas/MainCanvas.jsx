"use client"

import { JSBall, JavaBall, PythonBall } from "@/components/canvas/BallCanvas"
import { useHelper, GizmoHelper, GizmoViewport } from "@react-three/drei"
import { useRef } from "react"
import { DirectionalLightHelper  } from "three"

const MainCanvas = () => {
    const directionalLight = useRef()
    useHelper(directionalLight, DirectionalLightHelper, 4, "green")
    return (<>
        {/* <directionalLight intensity={3} ref={directionalLight} position={[0,-5,0]} target-position={[0,0,0]}/> */}
        <ambientLight intensity={1}/>
            <JavaBall position={[-2,0,0]}/>
            <JSBall/>
            <PythonBall position={[2,0,0]}/>
            <GizmoHelper
            alignment="bottom-right" 
            margin={[80, 80]} 
            >
            <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="black" />
            </GizmoHelper>
    </>)
} 

export default MainCanvas;