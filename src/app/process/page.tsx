'use client'

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";



const process = [
    {label: "Semester Process", content: (
        <div></div>
    )

    }
]
const weeks = [
    { label: "August 18th – 24th ", content: (
        <div className="text-lg space-y-4">
			<p>
				This week we focused on designing and finishing our wireframes for our web application and the app. At this point we do still need to elaborate on them, so they include the different roles the users can have in our application.
			</p>
            <p>
				The wireframes are created in Miro using its AI function, to create the wireframes so they are consistent with each other, and there is a consistency with the design in both our web application, but also our app. 
				Styling and general flow of the application is decided now, and we can slowly start to create the different pages in our project. 
			</p>
            <p>
				We have created our Github repository, so now we can slowly begin the development process. 
				Mathilde and I are looking into React and will today begin a LinkedIn Learning course 
				<a href="" className="font-bold"> Introduction to React, </a>
				to get comfortable with the process, and initial beginning of development, and creating the different pages that&apos;s needed for the application.
			</p>
		</div>
    )},

    {label: "August 25th – 31st ", content:( 
        <div className="text-lg space-y-4">
			<p>
				This week was focused on getting started on our project and starting the development process. 
				We started the week by creating our React project with next.js. 
				Having started courses last week on React we wanted to begin experimenting with the design part of the pages and begun the design of our welcome page.
			</p>
		</div>
    )},

    { label: "September 8th – 14th", content: (
        <div className="text-lg space-y-4">
			<p>
			For this week we&apos;ve had quite a set of goals divided between the different group members. 
				Mathilde and I, who are specialising in frontend are wanting to study JavaScript further and finish the LinkedIn Learning course
				<a href=" https://www.linkedin.com/learning/javascript-essential-training/javascript-the-soil-from-which-the-modern-web-grows?u=57075649" className="font-bold"> JavaScript Essential Training. </a>
			</p>
			<p>
				I also want to begin the Use Case Create Horse in our Horse Event project, where I plan on studying the communication between the react frontend and the backend via Api&apos;s,
				and begin the implementation of this. This will include creating the pages in react, and beginning the design inspired from our wireframes. 
				Also creating our contracts, controller and our backend folders and files.
			</p>
			<p>
				Our group made the decision, to create a Gantt chart to visualise our plan for the development of the project. 
				Furthermore, we decided after a meeting with a teacher, 
				to use Teams&apos; planning tool, to further divide our plan into smaller sections. Because of this we have a more detailed work plan and can give out tasks to each team member.
			</p>
			<p>
				We discussed the flow of our wireframes after noticing inconsistencies between the web application and the mobile app and changed the flow. We want to change the wireframes, 
				so they fit our decisions, but have decided its not something we prioritise as of right now. 
				We also decided on some login decisions, 
				and where this option should be available on which pages. Now our home page will instead be our welcome page, instead of a login page. 
				Because of the decisions and our planning, we&apos;re now well equipped to begin our work, and all know what our tasks are for the upcomming week.
			</p>
		</div>  
    )},

    { label: "September 15th – 21st ", content: (
        <div className="text-lg space-y-4">
			<p>
				Last week I made the decion to redo my portfolio and change the framework from Angular to React using next.js, 
				to give myself further opportunity to practice the skill I&apos;m focusing on this semester. I began this Monday and it has proved to be a tough but useful decision, because even though it has caused much frustration, 
				it has also proved to be a wonderful learning opportunity, and I am very pleased with how the progress is going. 
				I have also highly prioritised to add the content and text I&apos;ve written the past couple of weeks to the portfolio, to document the progress of this semester, and our development process. 
			</p>
			<p>
				This week, I will be focusing on finishing the two use cases CreateHorse and CreateRider, including the pages in react, but also the backend contracts. If this proves to go faster than intended, 
				I also want to improve the overall design of the pages, so they are more true to the wireframes we&apos;ve designed.
			</p>
        </div> 
    )},

    { label: "September 22nd - 28th", content: (
        <p className="text-lg">
            Been further working on my portfolio; colours and text have been updated to a more easily readable colour, and the design looks sleeker and more professional.

            Regarding the project: Adjusting existing pages to look more like the wireframes and added icons. Been working with Lucide, to focus on making it easier to navigate for the user. 
        </p>
    )},

    {label: "October 27th – November 2nd", content: (
        <div className="text-lg space-y-4">
            <p>
            Due to private reasons, I have been out of the practical stuff for the project. This means that for a while there has been little progression regarding the front-end design of the project. 
            This is what I hope to get up to date with this week. 
            </p>
            <p>
                The focus will be to get the different pages done, so the layout and colours etc. are true to our wireframes, 
                and so that there is time to focus more intently on cyber security in November. Hereunder prioritising getting the global layout and design to seem cohesive.
                I have planned to watch a YouTube video this week… 
            </p>
            <p>
                I&apos;e also noticed doing pages and figuring out issues and errors is easier in react. The logic makes more sense – so far I&apos;e been able to make most of the pages without looking up too much documentation or getting too stuck.  
            </p>
        </div>
    )}, 
    { label: "November 3rd - 9th", content: (
        <div className="text-lg space-y-4">
            <p>
                The initial plan for this week was to focus on sending out applications to different companies for internship positions. Because our deadline is in the beginning of December, 
                its also becomming incresingly clear that were getting more limited on time. Therefore prioritising is necessary. 
                The front-end aspect of the project has ended up being a bigger project that we initially thought, which is why Ive found it difficult to prioritise getting started with the cyber security aspect. 
                This is definetly something I wish to change in November. An introduction to the CIA Triad from a teacher during a guild meeting did make it easier to get started though. 
            </p>
            <p>
                After a team meeting this week, it became clear that one of the backend developers wanted to focus on the data aspects of one of his focus areas. 
                This meant wanting to work with data from the database, on the frontend. Therefore, I have the past two days focused on setting up and designing the results page. 
                It also allows me to work with more backend connection in my code, instead of solely focusing on the frontend design. 
            </p>
        </div>
    )},

    { label: "November 10th - 16th", content: (
        <div className="text-lg space-y-4">
            <p>
                For this week one of the primary focus areas will be to add my learning resources to my portfolio. 
                This will primarily be the resources for the front-end, 
                because this week is more intensely focused on doing research on cyber security. 
            </p>
            <p>
                As we had talked about two factor authentication, due to the more sensitive information that would be handled in the application 
                this will likely also be something I&apos;ll be focusing on researching a bit more in depth. 
            </p>
        </div>
    )}
  // Add more weeks here
];

export default function ProgressPage() {
    const[openIndex, setOpenIndex] = useState<string | null>(null);

    return (
        <section className="min-h-screen flex flex-col justify-center items-center 
        bg-gradient-to-b from-[#2D3824] to-[#8D9867] text-center">
            <div className="flex flex-col items-center justify-center -mt-40">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center"
                    style={{ color: "#B6AD90" }}
                >
                    The process throughout 4th semester
                </motion.h1>
            </div>

            {/* Description Paragraph */}
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="text-xl font-bold text-center mb-16"
                    style={{ color: "#B6AD90" }}
                >
                    This section shows the process of the semester.
                </motion.p>

            {/*Dropdown Section*/}
            <div className="mt-12 w-full flex flex-col items-center"> {/* Both on the same line + font bigger and bold */}
                <div className=" mt-12 max-w-3xl w-full space-y-4 text-left" style={{color: "#A4AC86"}}>
                    {/* RIGHT DROPDOWN SECTION — PROCESS */}
                    {process.map((item, wkIndex) => (
                        <div key={wkIndex} className="cursor-pointer">
                            <div className="flex items-center gap-2" 
                                onClick={() => setOpenIndex(openIndex === `week-${wkIndex}` ? null : `week-${wkIndex}`)}>
                                <h2 className="font-bold text-lg sm:text-2xl hover:text[#50250c] transition-colors duration-200">
                                    {item.label}
                                </h2>
                                <motion.span
                                    animate={{ rotate: openIndex === `week-${wkIndex}` ? 180 : 0 }}
                                    transition={{duration: 0.3, ease: "easeOut"}}
                                    className="inline-block">
                                    ▼
                                </motion.span>
                            </div>

                            <AnimatePresence>
                                {openIndex === `week-${wkIndex}` && (
                                    <motion.div
                                        className="p-6 border-t text-[#C2C5AA] max-h-150 overflow-y-auto"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        >
                                        <div>
                                            {item.content}
                                        </div>

                                        <div className="space-y-3">
                                            {weeks.map((week, wkIndex) => (
                                                <div key={`week-${wkIndex}`} className="cursor-pointer pl-4 border-l">
                                                    <div className="flex items-center gap-2"
                                                        onClick={() =>
                                                            setOpenIndex (openIndex === `week-${wkIndex}` ? null : `week-${wkIndex}`)}
                                                        >
                                                            <h3 className="font-bold text-lg sm:text-2xl hover:text[#50250c] transition-colors duration-200">
                                                                {week.label}
                                                            </h3>
                                                            <motion.span
                                                                animate={{ rotate: openIndex === `week-${wkIndex}` ? 180 : 0 }}
                                                                transition={{duration: 0.3, ease: "easeOut"}}
                                                                className="inline-block">
                                                                ▼
                                                            </motion.span>
                                                    </div>

                                                    <AnimatePresence>
                                                        {openIndex === `week-${wkIndex}` && (
                                                            <motion.div
                                                                className="p-6 border-t text-[#C2C5AA] max-h-150 overflow-y-auto"
                                                                initial={{ opacity: 0, height: 0 }}
                                                                animate={{ opacity: 1, height: "auto" }}
                                                                exit={{ opacity: 0, height: 0 }}
                                                                transition={{ duration: 0.4, ease: "easeOut" }}
                                                                >
                                                                    {week.content}
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}