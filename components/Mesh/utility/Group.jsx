"use client"

import {Suspense} from 'react'
import dynamic from 'next/dynamic'
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
    <div style={{width:150, height:150}} className='flex flex-col justify-between '>
                    <div className='flex flex-row justify-between'>
                        {item1 && <div style={{width:70, height:70}}>
                            <View orbit className='w-full h-full  sm:h-48 sm:w-full'>
                                <Suspense fallback={null}>
                                    <Common />
                                    {item1}
                                </Suspense>
                            </View>
                        </div>}
                        {item2 && <div style={{width:70, height:70}}>
                            <View orbit className='h-full  sm:h-48 sm:w-full'>
                                <Suspense fallback={null}>
                                    <Common />
                                    {item2}
                                </Suspense>
                            </View>
                        </div>}
                    </div>

                    <div className='flex flex-row justify-between'>
                        {item3 && <div style={{width:70, height:70}}>
                            <View orbit className='h-full  sm:h-48 sm:w-full'>
                                <Suspense fallback={null}>
                                    <Common />
                                    {item3}
                                </Suspense>
                            </View>
                        </div>}
                        
                        {item4 && <div style={{width:70, height:70}}>
                            <View orbit className='h-full  sm:h-48 sm:w-full'>
                                <Suspense fallback={null}>
                                    <Common />
                                    {item4}
                                </Suspense>
                            </View>
                        </div>}
                    </div>
                </div>
  )
}

export default Group