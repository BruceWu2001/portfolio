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
import { Button } from "@/components/ui/button"
import CustomEduView from "./CustomEduView"

const EducationTab = () => {
    return (
        <TabsContent value="education">
        <Card>
          <CardHeader>
            <CardTitle>Education / Internship</CardTitle>
          </CardHeader>

          <CardContent className="space-y-2">
            <CustomEduView/>
          </CardContent>

        </Card>
      </TabsContent>
    )
  }
  
  export default EducationTab