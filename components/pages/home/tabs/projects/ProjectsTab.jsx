import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  TabsContent,
} from "@/components/ui/tabs"
import Image from "next/image"
import { projects, achievements } from "@/lib/constants/skills"
import Link from "next/link"

const ProjectTab = () => {
    return (<>
         <TabsContent value="projects" className="flex-1">
        <Card>
          <CardHeader>
            <CardTitle>Projects</CardTitle>
            <CardDescription>
            Below are some projects I have been involved, including hackathons
            </CardDescription>
          </CardHeader>
          <CardContent >
            {
                Object.keys(projects).reverse().map((year) => {
                    return  (
                    <div key={year}>
                        <p>{year}</p>
                        <div className="space-y-2 grid grid-cols-3 gap-x-4 gap-y-4">
                            {projects[year].reverse().map((proj) => {
                                const { name, projectName, achievementKey, image, repo, comments} = proj
                                return (
                                    <div
                                    key={projectName}
                                    className="w-[350px] h-[350px] flex flex-col justify-center items-center">
                                        <HoverCard>
                                            <HoverCardTrigger className="grid grid-cols-1 justify-center items-start">
                                                <Image src={image} alt={name} width={250} height={250} className="p-4"/>
                                            </HoverCardTrigger>
                                            <HoverCardContent>
                                                <p>{name}</p>
                                                <Link href={repo} className="flex items-center">
                                                    <p className="underline decoration-white decoration-solid decoration-4">Github repo</p>
                                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                                </Link>
                                            </HoverCardContent>
                                            <p
                                            className="text-center" 
                                            >Project {projectName}</p>
                                        </HoverCard>
                                    </div>
                                    )
                                })
                            }
                        </div>
                    </div>
            )
                })
            }
          </CardContent>
          <CardFooter className="flex flex-col items-stretch">
            <CardTitle>Achievements</CardTitle>
            <>
                {
                    Object.keys(achievements).reverse().map((achievement) => {
                        const {name, placing, specialMention, comments, image} = achievements[achievement];
                        return (
                        <div
                        key={achievement} 
                        className="h-[350px] flex shrink-0 grow justify-between p-4">
                            <div className="flex flex-col grow gap-4 flex-shrink-0">
                                <p className="text-xl mb-8">Project {name}</p>
                                <Image src={image} alt={name} width={250} height={250}/>
                            </div>
                            <div className="flex flex-col items-end m-4">
                                <p>{placing}</p>
                                <p>{comments}</p>
                                <p>{specialMention}</p>
                            </div>
                        </div>
                        )
                    })
                }
            </>
          </CardFooter>
        </Card>
      </TabsContent>

    </>)
}

export default ProjectTab