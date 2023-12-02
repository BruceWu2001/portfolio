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
  TabsContent,
} from "@/components/ui/tabs"


const AboutMeTab = () => {
    return (<>
        <TabsContent value="aboutMe" className="flex-1">
        <Card>
          <CardHeader>
            <CardTitle>About Me</CardTitle>
            <CardDescription>
                SMU Y2 CS STUDENT 
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" disabled defaultValue="Wu Zi Jian · Bruce" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="major">Major</Label>
              <Input id="major" disabled defaultValue="CS dual track AI and cybersecurity" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="field">Favourite Field</Label>
              <Input id="field" disabled defaultValue="Frontend Development" />
              <div className="grid grid-cols-3">
                <div>
                    <Label htmlFor="comfort">Comfort Zone</Label>
                    <Input id="comfort" disabled defaultValue="Next JS (fullstack) / Plain React (Javascript frontend)" />
                </div>
                <div>
                    <Label htmlFor="language">Proficient Languages</Label>
                    <Input id="language" disabled defaultValue="Javascript, Java, Python, SQL" />
                </div>
                <div>
                    <Label htmlFor="interest">Non-coding interest</Label>
                    <Input id="interest" disabled defaultValue="Blender" />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="grid grid-flow-row">
                <p>cumGPA:3.99</p>
                <p>Merit scholarship</p>
                <p>Dean&aposs List 2022</p>
            </div>
          </CardFooter>
        </Card>
      </TabsContent>
    </>)
}

export default AboutMeTab;