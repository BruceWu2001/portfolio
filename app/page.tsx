"use client"
import { Separator } from '@radix-ui/react-menubar'
import Image from 'next/image'
import ShowcaseTabs from '@/components/pages/home/ShowcaseTabs'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=0.1" />
      </Head>
        <Sheet>
    <div className='w-full h-full flex flex-col justify-center p-8'>
            <SheetContent>
                <SheetHeader>
                <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                <SheetDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                </SheetDescription>
                </SheetHeader>
            </SheetContent>

        <div className='w-full min-h-fit flex justify-around py-8 px-12'>
            <SheetTrigger>
            <div className='relative w-16 h-16 lg:w-64 lg:h-64 rounded-full bg-secondary flex justify-center items-center storyBorder'>
                <div className='relative w-14 h-14 lg:w-60 lg:h-60 rounded-full bg-secondary flex justify-center items-center ring-offset'>
                    <Image
                    src="/images/global/profile.png"
                    alt="profile picture"
                    fill
                    objectFit='cover'
                    className='rounded-full bg-secondary'
                    />
                </div>
            </div>

            </SheetTrigger>
            <div className='w-1/3 h-full break-normal'> 
                Hello, I&apos;m Zi Jian, 梓健 and I am a CS student in SMU (Singapore Management University). I have experience in both front and backend development but I am more comfortable with frontend technologies.
            </div>
        </div>
        <Separator className='w-full h-0.5 bg-primary'/>
        <div className='w-full min-h-fit flex justify-around py-8 px-12'>
            <ShowcaseTabs/>
        </div>
    </div>
</Sheet>
</>

  )
}
