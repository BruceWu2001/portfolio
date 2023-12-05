"use client"

import {Suspense} from 'react'
import CanvasLoader from "../Loader"
import { Layout } from '@/components/Mesh/utility/Layout'
import dynamic from 'next/dynamic'
import { JSBall, JavaBall, PythonBall, ReactBall } from "@/components/canvas/BallCanvas"
import Group from "@/components/Mesh/utility/Group"
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
        className="w-full h-1/6 lg:w-1/5 lg:h-full justify-between flex flex-col" 
        >
            <div className='flex grow shrink-0'>
                <div style={{width:150, height:150}}>
                    <View orbit className='h-full sm:h-48 sm:w-full'>
                        <Suspense fallback={null}>
                            <Common />
                            <JSBall/>
                        </Suspense>
                    </View>
                </div>
                <Group item1={<ReactBall/>} />
            </div>

            <div className='flex grow shrink-0'>
                <div style={{ width: 150, height: 150 }}>
                    <View orbit className='h-full  sm:h-48 sm:w-full'>
                        <Suspense fallback={<CanvasLoader/>} >
                            <Common />
                            <JavaBall/>
                        </Suspense> 
                    </View>
                </div>
                <Group />
            </div>

            <div className='flex grow shrink-0'>
                <div style={{ width: 150, height: 150 }}>
                    <View orbit className='relative h-full  sm:h-48 sm:w-full'>
                        <Suspense fallback={null}>
                        <Common />
                    <PythonBall/>
                        </Suspense>
                    </View>
                </div>
                <Group />
            </div>

           
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


