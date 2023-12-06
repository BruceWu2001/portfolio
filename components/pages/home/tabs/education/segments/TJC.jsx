import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { certs } from "@/lib/constants/skills";
import { Cert } from "@/components/pages/home/tabs/education/Cert"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"


const TJC = () => {
  return (
    <>
    <div className="flex gap-4">
        <Avatar>
            <AvatarImage src="/images/TJC.png"  />
            <AvatarFallback>TJC</AvatarFallback>
        </Avatar>
        <p className="text-2xl">TJC</p>
    </div>
    <div className="flex items-center justify-between">
        </div>
        <Separator />
        <div className="relative my-4">
        <ScrollArea>
            <div className="flex space-x-4 pb-4">
            {certs.tjc.reverse().map((cert) => (
                <Cert
                key={cert.name}
                cert={cert}
                className="w-[250px]"
                width={250}
                height={330}
                />
            ))}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
        </div>
    </>
  )
}

export default TJC;