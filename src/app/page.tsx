import Education from "@/components/sections/education";
import WorkExperience from "@/components/sections/workexperience";

import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <>
      <div>
        <h1 className="text-5xl font-black my-5">Hi, I&apos;m René Baine 👋</h1>
        <p className="text-base/7">I’m a computer science student at Trent university. I’m the Co-founder and graphic designer at IWIP, I run my own freelance graphic design business startups and youth lead initiatives. </p>
      </div>
      {/*About Section*/}
      <div>
        <h2 className="text-2xl font-bold mt-7">About me</h2>
        <p className="text-base/7">I’ve worked as a freelance graphic designer since I founded Overtype Studio. </p>
      </div>

      {/*Work Experience Section*/}
      <WorkExperience />

      {/*education Section*/}
      <Education />

      {/*projects*/}
      <div className="flex flex-col items-center mt-20">
      <Badge className="text-2lg  text-center"> Projects</Badge>
      <h2 className="text-5xl font-bold my-5">Coming Soon!</h2>
      <p className="text-center">I will upload projects that I work on here with the link to the project and the github repository</p>
      </div>


      {/*Footer*/}
      <footer>
    
      </footer>
    </>
  );
}

