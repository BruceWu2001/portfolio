"use client"

import {Suspense} from 'react'
import CanvasLoader from "../Loader"
import { Layout } from '@/components/Mesh/utility/Layout'
import dynamic from 'next/dynamic'
// import { JSBall, JavaBall, PythonBall, ReactBall } from "@/components/canvas/BallCanvas"
import * as balls from "@/components/canvas/BallCanvas"

const View = dynamic(() => import('@/components/Mesh/utility/View').then((mod) => mod.View), {
    ssr: false,
    loading: () => (
      <div className='flex h-96 w-full flex-col items-center justify-center'>
       loading...
      </div>
    ),
  })
const Common = dynamic(() => import('@/components/Mesh/utility/View').then((mod) => mod.Common), { ssr: false })
  
const SideNavbar = () => {
    return (
    <Layout>
        <div
        className="w-full h-screen grid grid-cols-2" 
        >   
            {Object.keys(balls).map((ball, index) => {
                const Ball = balls[ball];
                return (
                <div className='w-full h-full max-w-[150px] max-h-[150px]'  key={index}>
                    <View orbit className='h-full sm:h-48 sm:w-full'>
                        <Suspense fallback={null}>
                            <Common />
                            <Ball />
                        </Suspense>
                    </View>
                </div>)
            })}
        </div>

    </Layout>
    // <div
    // className="w-1/5 h-screen" 
    // ref={localRef}
    // >
    //     <h1>Html content here</h1>
    //     <div style={{ width: 200, height: 200 }}>

    //     </div>

        /* <Canvas
        eventSource={container}
        frameloop='demand'
        gl={{ preserveDrawingBuffer : true}}
        camera={{ position: [0,5,0], fov:125, near : 0.1, far : 300 }}
        onCreated={state => {
            // state.camera.lookAt(0,0,0);
            state.events.connect(container.current)
        }}
        >
            */


            /* <View track={tracking}>
                <OrbitControls/>
                <ambientLight intensity={1}/>
                <mesh>
                    <boxGeometry/>
                    <meshNormalMaterial/>
                    <Java/>
                </mesh>
            </View>
             */
            /* <Suspense fallback={<CanvasLoader/>} > 
                <OrbitControls 
                enableZoom={false} 
                // enablePan={false}
                // enableRotate={false}
                // enabled={false}
            /> */
            /* <MainCanvas/>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} />
            </Suspense>
            <Preload all/> 
        </Canvas> */
    // </div>
    )
}
export default SideNavbar


