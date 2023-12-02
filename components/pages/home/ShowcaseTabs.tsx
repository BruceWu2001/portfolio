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


      <TabsContent value="education">
        <Card>
          <CardHeader>
            <CardTitle>Education</CardTitle>
            <CardDescription>
              Change your password here. After saving, you will be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
export default ShowcaseTabs;