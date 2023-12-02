"use client"

import {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import CanvasLoader from "../Loader"
import MainCanvas from "@/components/canvas/MainCanvas"

const SideNavbar = () => {
    
    return <div
    className="w-1/5 h-screen ">
    <Canvas
    frameloop='demand'
    gl={{ preserveDrawingBuffer : true}}
    camera={{ position: [0,5,0], fov:125, near : 0.1, far : 300 }}
    onCreated={state => {
        state.camera.lookAt(0,0,0);
    }}
    >
        <Suspense fallback={<CanvasLoader/>} > 
            <OrbitControls 
            enableZoom={false} 
            // enablePan={false}
            // enableRotate={false}
            // enabled={false}
           />
           <MainCanvas/>
        </Suspense>
        <Preload all/>
    </Canvas>
    </div>
}
export default SideNavbar


