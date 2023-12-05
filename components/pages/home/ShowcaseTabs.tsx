import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import AboutMeTab from "./tabs/aboutMe/AboutMeTab"
import ProjectTab from "./tabs/projects/ProjectsTab"
import EducationTab from "./tabs/education/EducationTab"

export function ShowcaseTabs() {
  return (
    <Tabs defaultValue="projects" className="w-full h-full justify-center" >
      <TabsList className="grid w-[400px] grid-cols-3">
        <TabsTrigger value="aboutMe">About Me</TabsTrigger>
        <TabsTrigger value="projects">Project</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
      </TabsList>
        <AboutMeTab/>
        <ProjectTab/>
        <EducationTab/>
    </Tabs>
  )
}
export default ShowcaseTabs;