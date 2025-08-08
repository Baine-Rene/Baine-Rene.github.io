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

      {/*Skills*/}
      <div>

      </div>

      {/*projects*/}
      <div className="flex flex-col items-center mt-20">
      <Badge className="text-lg text-center bg-white text-dark">My Projects</Badge>
      <h2 className="text-5xl font-bold my-5 tracking-tight">Coming Soon!</h2>
      <p className="text-center">I will upload projects that I work on here with the link to the project and the github repository</p>
      </div>


      {/*contact*/}

      <div className="flex flex-col items-center mt-20 bg-[#0e0e0e] p-10 border-none shadow-none rounded-3xl">
        <Badge className="text-lg bg-white text-dark">Contact</Badge>
        <h2 className="text-5xl font-bold my-5 tracking-tight">Get In touch</h2>
        <p className="text-center">You can learn more about me and the projects I&apos;m working on by following my <a className="text-blue-700 hover:text-blue-400 underline" href="">LinkedIn</a> or <a className="text-blue-700 hover:text-blue-400 underline" href="">GitHub</a></p>
      </div>
    </>
  );
}

