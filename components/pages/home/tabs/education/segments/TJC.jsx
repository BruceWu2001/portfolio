import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

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
    <div>
        
    </div>
    </>
  )
}

export default TJC;