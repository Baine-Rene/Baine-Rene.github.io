import Education from "@/components/sections/education";
import WorkExperience from "@/components/sections/workexperience";

export default function Home() {
  return (
    <>
      <div>
        <h1 className="text-4xl font-black my-5">Hi, I&apos;m René Baine 👋</h1>
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
    </>
  );
}

