"use client"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"
import SMU from "./segments/SMU"
import TJC from "./segments/TJC"
import { cn } from "@/lib/utils"

const CustomEduView = () => {
    const division = 1;
    const step = 100/division;
    const [segment, setSegment] = useState(100 / step);
    const display = {
        // 0 : <div/>,
        // 1 : <div/>,
        // 2 : <div/>,
        0 : <TJC/>,
        1 : <SMU/>,
    }
  return (
        <>
            <div className={cn("space-y-1 mb-12 mt-4")} >
               {display[segment]}
            </div>

            <Slider onValueChange={(value) => {setSegment(value / step)}} step={step} defaultValue={[100]}/>
        </>
    )
}

export default CustomEduView