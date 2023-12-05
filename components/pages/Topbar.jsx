"use client"
import * as React from "react"
import Link from "next/link"
import ListItem from "../ui/ListItem"
import { useToast } from "@/components/ui/use-toast"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image"

const Topbar = () => {
    const { toast } = useToast()

    return <div className="w-full h-1/6">
    <NavigationMenu>
      <NavigationMenuList>
      <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>


        <NavigationMenuItem>
          <NavigationMenuTrigger>Profile</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md "
                    href="/"
                  >
                    <Image src={"/images/global/profile2.jpg"} width="1000" height="100" alt="profile image" className="rounded-full"/>
                    <div className="mb-2 mt-4 text-lg font-medium ">
                      Wu Zi Jian alias Bruce
                    </div>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="https://github.com/BruceWu2001" title="GitHub" >
                    Check out the specifics of my projects !
              </ListItem>
              <ListItem title="Email" onClick={() => {
                    toast({
                        title: "Copied email",
                        })
                    copyText("zijian.wu.2022@scis.smu.edu.sg");
                    }}>
                zijian.wu.2022@scis.smu.edu.sg
              </ListItem>
              <ListItem href="https://www.linkedin.com/in/wu-zi-jian/" title="LinkedIn" >
                    Connect with me on LinkedIn 😊
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>


        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
      </NavigationMenuList>
    </NavigationMenu>

    </div>
}
export default Topbar;

const copyText = (text) => navigator.clipboard.writeText(text);


const components = [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
  ]
  
  
      
  
  