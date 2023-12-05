"use client"

import {Suspense} from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'

const View = dynamic(() => import('@/components/Mesh/utility/View').then((mod) => mod.View), {
    ssr: false,
    loading: () => (
      <div className='flex h-96 w-full flex-col items-center justify-center'>
       loading...
      </div>
    ),
  })
const Common = dynamic(() => import('@/components/Mesh/utility/View').then((mod) => mod.Common), { ssr: false })
  
const Group = ({item1=null, item2=null, item3=null, item4=null}) => {
  return (
    <div style={{width:150, height:150}} className='relative grid grid-rows-2 grid-cols-2'>
        {item1 ? <div className='relative'>
            <View orbit className='relative max-w-[95%] max-h-[95%]'>
                <Suspense fallback={null}>
                    <Common />
                    {item1}
                </Suspense>
            </View>
        </div> : <DefaultImage/>}
        {item2 ? <div >
            <View orbit className='relative h-full  sm:h-48 sm:w-full'>
                <Suspense fallback={null}>
                    <Common />
                    {item2}
                </Suspense>
            </View>
        </div> : <DefaultImage/>}

        {item3 ? <div style={{width:70, height:70}}>
            <View orbit className='relative h-full  sm:h-48 sm:w-full'>
                <Suspense fallback={null}>
                    <Common />
                    {item3}
                </Suspense>
            </View>
        </div> : <DefaultImage/>}
        
        {item4 ? <div style={{width:70, height:70}}>
            <View orbit className='relative h-full sm:h-48 sm:w-full'>
                <Suspense fallback={null}>
                    <Common />
                    {item4}
                </Suspense>
            </View>
        </div> : <DefaultImage/>}
    </div>
  )
}

export default Group


const DefaultImage = () => {
    return (
    // <Image
    // src="/images/global/wip.png"
    // width="70"
    // height="70"
    // alt="work in progresss"
    // />
    <div></div>
    )
}