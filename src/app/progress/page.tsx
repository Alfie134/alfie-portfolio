'use client'

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const weeks = [
    { label: "August 18th – 24th ", content: (
        <p className="text-lg">
            This week we focused on designing and finishing our wireframes for out web application and the app. At this point we do still need to elaborate on them, so they include the different roles the users can have in our application.
            <br/>
            <br/> 
            The wireframes are created in Miro using it’s AI function, to create the wireframes so they are consistent with each other, and there is a consistency with the design in both our web application, but also our app. 
            Styles and general flow of the application is decided now, and we can slowly start to create the different pages in our project. 
            <br/>
            <br/> 
            We have created our Github repository, so now we can slowly begin the development process. 
            Mathilde and I are looking into React and will today to a LinkedIn Learning course on introduction to React, to get comfortable with the process, and initial beginning of development, and creating the different pages that’s needed for the application.
        </p>
    )},

    {label: "August 25th – 31st ", content:( 
        <p className="text-lg">
            This week was focused on getting started on our project and starting the development process. 
            We started the out by creating our React project with next.js. 
            Having started courses last week on react we wanted to begin experimenting with the design part of the pages and begun the design of our welcome page.
        </p>
    )},

    { label: "September 8th – 14th", content: (
        <p className="text-lg">
            For this week we’ve had quite a set of goals divided between the different group members. 
            Mathilde and I, who are specialising in frontend are wanting to study JavaScript further and finish the LinkedIn Learning course
            <a href=" https://www.linkedin.com/learning/javascript-essential-training/javascript-the-soil-from-which-the-modern-web-grows?u=57075649" className="font-bold"> JavaScript Essential Training. </a>
            <br/>
            <br/> 
            I also want to begin the Use Case Create Horse in our Horse Event project, where I plan on studying the communication between the react frontend and the backend via Api’s,
            and begin the implementation of this. This will include creating the pages in react, and beginning the design inspired from our wireframes. 
            Also creating our contracts, controller and our backend folders and files.
            Our group made the decision, to create a Gantt chart to visualise our plan for the development of the project. 
            <br/> 
            <br/> 
            Furthermore, we decided after a meeting with a teacher, 
            to use the teams planning tool, to further divide our plan into smaller sections. Because of this we have a more detailed work plan and can give out tasks to each team member.
            We discussed the flow of our wireframes after noticing inconsistencies between the web application and the mobile app and changed the flow. We want to change the wireframes, 
            so they fit our decisions, but have decided it’s not something we prioritise as of right now. 
            <br/> 
            We also decided on some login decisions, 
            and where this option should be available on which pages. Now our home page will instead be our welcome page, instead of a login page. 
            Because of the decisions and our planning, we're now well equipped to begin our work, and all know what our tasks are for the upcomming week.
        </p>  
    )},

    { label: "September 15th – 21st ", content: (
        <p className="text-lg">
            Last week I made the decion to redo my portfolio and change the framework from Angular to React using next.js, 
            to give more further opportunity to practice the skill I’m focusing on this semester. I began this Monday and has proved to be a tough but useful decision, because even though it has caused much frustration, 
            it has also proved to be a wonderful learning opportunity, and I am very pleased with how the progress is going. 
            <br/> 
            <br/> 
            I have also highly prioritised to add the content and text I’ve written the past couple of weeks to the portfolio, to document the progress of this semester, and our development process. 

            This week, I will be focusing on finishing the two use cases CreateHorse and CreateRider, including the pages in react, but also the backend contracts. If this proves to go faster than intended, 
            I also want to improve the overall design of the pages, so they are more true to the wireframes we’ve designed.
        </p> 
    )},

    { label: "September 22nd - 28th", content: (
        <p className="text-lg">

        </p>
    )}
  // Add more weeks here
];


export default function ProgressPage() {
    const[openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="min-h-screen flex flex-col justify-center items-center 
        bg-gradient-to-b from-[#333d29] to-[#A4AC86] text-center">
            
            <div className="flex flex-col items-center justify-center -mt-40">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center"
                    style={{ color: "#B6AD90" }}
                >
                    Our progress during the semester
                </motion.h1>
            </div>

            {/* Description Paragraph */}
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="text-2xl font-bold text-center mb-16"
                    style={{ color: "#B6AD90" }}
                >
                    The progress of how this semester has unfolded will be divided into the weeks throught the months. 
                </motion.p>

            {/*Dropdown Section*/}
            <div className=" mt-12 max-w-3xl w-full space-y-4 text-left" style={{color: "#50250c"}}>
                {weeks.map((week, index) => (
                    <div key={index} className="cursor-pointer">
                        <h2 
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="font-bold text-lg sm:text-2xl hover:text[#50250c] transition-colors duration-200">
                            {week.label}
                        </h2>
                        <motion.span
                            animate={{ rotate: openIndex === index ? 180 : 0 }}
                            transition={{duration: 0.3, ease: "easeOut"}}
                            className="inline-block">
                            ▼
                        </motion.span>

                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    className="p-6 border-t text-[#582F0E] max-h-150 overflow-y-auto"
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
        </section>
    )
}