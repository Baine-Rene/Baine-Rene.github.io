// Components
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

// Details

const workItems = [
    {
        company: "Overtype Studio",
        role: "Founder",
        date: "June 2025 - Present",
        avatar: "/avatars/Overtype.png",
        initials: "OT",
    },
    {
        company: "IWIP app",
        role: "Co-founder & Graphic designer",
        date: "April 2025 - Present",
        avatar: "/avatars/Iwip.png",
        initials: "IA",
    },
    {
        company: "Young Eye Foundation",
        role: "Graphic designer",
        date: "April 2023 - January 2025",
        avatar: "/avatars/Young Eye Foundation.png",
        initials: "YE",
    },

];

export default function WorkExperience() {
    return (
        <section className="space-y-6">
                   <h2 className="text-white text-2xl mt-6 font-semibold">Education</h2>
       
                   <div className="space-y-4">
                       {workItems.map((item, index) =>
                           <Card key={index} className="bg-[#0e0e0e] border-none shadow-none">
                               <CardContent className="flex flex-col  sm:flex-row sm:items-center sm:justify-between gap-4">
                                   <div className="flex items-center gap-4">
                                       <Avatar className="w-12 h-12">
                                           <AvatarImage src={item.avatar} alt={item.initials} />
                                           <AvatarFallback>{item.initials}</AvatarFallback>
                                       </Avatar>
       
                                       <div className="flex flex-col">
                                           <h3 className="text-white font-semibold leading-tight">
                                               {item.company}
                                           </h3>
                                           <p className="text-muted-foreground text-sm">{item.role}</p>
                                           <span className="text-muted-foreground text-sm sm:hidden">{item.date}</span>
                                       </div>
                                   </div>
                                   <span className="hidden sm:block text-muted-foreground text-sm whitespace-nowrap">{item.date}</span>
                               </CardContent>
                           </Card>
                       )}
                   </div>
               </section>
    )
}