import Image from "next/image"
import { cn } from "@/lib/utils"


export function Cert({
  cert,
  width,
  height,
  className,
  ...props
}) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
        <div className="overflow-hidden rounded-md">
        <Image
            src={cert.cover}
            alt={cert.name}
            width={width}
            height={height}
            className={cn(
            "h-auto w-auto object-cover transition-all hover:scale-105",
            cert.aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]"
            )}
        />
        </div>
        <div className="space-y-1 text-sm">
            <h3 className="font-medium leading-none">{cert.name}</h3>
            <p className="text-xs text-muted-foreground">{cert.date}</p>
        </div>
    </div>
  )
}