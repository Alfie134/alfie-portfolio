export default function ProjectsPage() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center 
        bg-gradient-to-b from-[#2D3824] to-[#8D9867] text-center pt-20">
            <h1 className="text-4xl font-bold text-[#B6AD90] mb-4">The Project</h1>
            <p className="text-xl font-bold max-w-xl text-[#B6AD90] space-y-2">
                Here you can see what is currently going on with our semester project &apos;HorseEvent&apos;.
            </p>
            <div className="text-lg space-y-4 max-w-5xl text-[#B6AD90]"> 
                <p></p>
                <p>
                    In our 4th semester project of our degree, we are asked to choose 2 subject that we will specialise in during the semester. 
                    We then in a group combine our chosen subjects to develop a project in which we use the areas of expertise. 
                </p>
                <p>
                    For this semester I have chosen web development and frontend technologies, and cyber security. 
                    Another team member, Mathilde, and I have the same focus areas, and will therefore be able to expand a bit more on the different things we choose to include. 
                </p>
                <p>
                    We have chosen to create our frontend in React to be on par with popular industry standards, 
                    and to be equipped to enter the workforce with relevant competencies. 
                </p>
                <p>
                    Our project is essentially an event management platform, directed at smaller riding school and clubs, 
                    to manage their events and competitions in a more practical manner. As of right now, the only other solution is a system, 
                    which has high expenses that can be hard for smaller clubs and schools to cover. 
                    We want to create this platform, so different users can get different wishes fulfilled. The riders who participate in these events can create a user, 
                    where they can register their personal information, their horses, and their equipment, so all the necessary information is gathered in one place. 
                </p>
                <p>
                    Furthermore, we wish to implement a role for the schools and clubs to register, so these can add the events and competitions they wish to host. 
                    Thereafter the equestrians can register to attend these events. 
                </p>
            </div>
        </section>
    );
}
