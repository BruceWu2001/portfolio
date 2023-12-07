import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Cert } from "@/components/pages/home/tabs/education/Cert"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const CertViewerTemplate = ({certs, icon, name}) => {
  return (
    <>
    <div className="flex gap-4">
        <Avatar>
            <AvatarImage src={icon} />
            <AvatarFallback>{name}</AvatarFallback>
        </Avatar>
        <p className="text-2xl">{name}</p>
    </div>
    <div className="flex items-center justify-between">
        
        </div>
        <Separator />
        <div className="relative my-4">
        <ScrollArea>
            <div className="flex space-x-4 pb-4">
            {certs.reverse().map((cert) => (
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

export default CertViewerTemplate;