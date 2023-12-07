"use client"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { certs } from "@/lib/constants/skills"
import CertViewerTemplate from "./segments/certViewerTemplate"

const CustomEduView = () => {
    const division = 1;
    const step = 100/division;
    const [segment, setSegment] = useState(100 / step);
    const smuCerts = [...certs.smu];
    const tjcCerts = [...certs.tjc];

    const display = {
        // 0 : <div/>,
        // 1 : <div/>,
        // 2 : <div/>,
        0 : <CertViewerTemplate certs={tjcCerts} name="TJC" icon="/images/TJC.png"/>,
        1 : <CertViewerTemplate certs={smuCerts} name="SMU" icon="/images/SMU.png"/>,
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