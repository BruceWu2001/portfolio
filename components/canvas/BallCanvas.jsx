"use client"
import { Java } from "@/components/Mesh/Java"
import { PurpleSphere } from "@/components/Mesh/PurpleSphere"
import { SpotLight, useHelper } from "@react-three/drei"
import { useMemo, useRef } from "react"
import { HemisphereLightHelper, SpotLightHelper, DirectionalLightHelper } from "three"
import { Python } from "@/components/Mesh/Python"
import { JS } from "@/components/Mesh/JS"

export const JavaBall = ({position=[0,0,0]}) => {
    
    const directionalLight = useRef()
    const directionalLight2 = useRef()
    useHelper(directionalLight, DirectionalLightHelper, "cyan")
    useHelper(directionalLight2, DirectionalLightHelper, "cyan")
    return (
    <object3D scale={0.6} position={position} rotation={[-Math.PI/2,0,0]} >            
        <PurpleSphere scale={1.6} position={[0,0,0]}/>
        <Java scale={0.2} position={[0,0,0]} />
    </object3D>
    )
}

export const PythonBall = ({position=[0,0,0]}) => {
    const directionalLight = useRef()
    const directionalLight2 = useRef()
    const directionalLight3 = useRef()
    const directionalLight4 = useRef()
    useHelper(directionalLight, DirectionalLightHelper, "cyan")
    useHelper(directionalLight2, DirectionalLightHelper, "cyan")
    useHelper(directionalLight3, DirectionalLightHelper, "cyan")
    useHelper(directionalLight4, DirectionalLightHelper, "cyan")
    
    return (
        <object3D scale={0.6} position={position} rotation={[Math.PI/2,Math.PI, Math.PI]} >
            <directionalLight intensity={1} position={[-0.6,1,0.6]} target-position={position} ref={directionalLight}/>
            <directionalLight intensity={1} position={[0.6,1,0.6]} target-position={position} ref={directionalLight2}/>
            <directionalLight intensity={1} position={[-0.6,-1,0.6]} target-position={position} ref={directionalLight3}/>
            <directionalLight intensity={1} position={[0.6,-1,0.6]} target-position={position} ref={directionalLight4}/>
            <PurpleSphere scale={1.6} position={[0,0,0]}/>
            <Python scale={0.01} position={[0,0,0]}/>
        </object3D>
        )
}

export const JSBall = ({position=[0,0,0]}) => {
    const directionalLight = useRef()
    const directionalLight2 = useRef()
    useHelper(directionalLight, DirectionalLightHelper, "cyan")
    useHelper(directionalLight2, DirectionalLightHelper, "cyan")
    
    return (
        <object3D scale={0.6} position={position} rotation={[Math.PI/2, Math.PI, Math.PI]} >
            {/* <directionalLight intensity={0.1} position={[-0.6,-1,0.6]} target-position={position} ref={directionalLight}/> */}
            {/* <directionalLight intensity={0.1} position={[0.6,-1,0.6]} target-position={position} ref={directionalLight2}/> */}
            <PurpleSphere scale={1.6} position={[0,0,0]}/>
            <JS scale={0.3} position={[0,0,0]}/>
        </object3D>
        )
}


