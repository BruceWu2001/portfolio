"use client"
import { Separator } from '@radix-ui/react-menubar'
import Image from 'next/image'
import ShowcaseTabs from '@/components/pages/home/ShowcaseTabs'
export default function Home() {
  return (
    <div className='w-full h-full flex flex-col justify-center p-8'>
        <div className='w-full min-h-fit flex justify-around py-8 px-12'>
            <div className='relative w-64 h-64 rounded-full bg-secondary flex justify-center items-center'> 
                <Image
                src="/images/global/profile.png"
                alt="profile picture"
                fill
                objectFit='cover'
                className='rounded-full bg-secondary'
                />
            </div>
            <div className='w-1/3 h-full break-normal'> 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                passages, and more recently with
            </div>
        </div>
        <Separator className='w-full h-0.5 bg-primary'/>
        <div className='w-full min-h-fit flex justify-around py-8 px-12'>
            <ShowcaseTabs/>
        </div>
    </div>
  )
}
