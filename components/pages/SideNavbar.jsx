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
                <div className='w-full h-full max-w-[150px] max-h-[150px]' key={index}>
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
    )
}
export default SideNavbar


