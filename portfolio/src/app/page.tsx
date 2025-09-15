"use client";

import {motion} from "framer-motion";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */ }
      <section className="min-h-screen flex flex-col justify-center items-center 
                          bg-gradient-to-b from-[#f4d3be] to-[#f9c2e4] text-center">

          <div className="flex flex-col items-center justify-center h-screen -mt-40">
            <div className="w-full text-center">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center"
                style={{ color: "#50250c" }}
                >
                  Hi, I'm Alberte!
              </motion.h1>
            </div>
            <div className="w-full text-center">
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="text-2xl"
                style={{ color: "#50250c" }}
                >
                  This is my portfolio for my 4th semester in my computer science degree 
                  at UCL Erhvervsakademi og Proffesionshøjskole in Denmark.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="text-lg"
                style={{ color: "#50250c" }}
                >
                  In our 4th semester project of our degree, we are asked to choose 2 subject that we will specialise in during the semester. We then in a group combine our chosen subjects to develop a project in which we use the areas of expertise. 
                For this semester I have chosen web development and frontend technologies, and cyber security. 
                Another team member, Mathilde, and I have the same focus areas, and will therefore be able to expand a bit more on the different things we choose to include. 
                We have chosen to create our frontend in React to be on par with popular industry standards, and to be equipped to enter the workforce with relevant competencies. 
                Our project is essentially an event management platform, directed at smaller riding school and clubs, to manage their events and competitions in a more practical manner. As of right now, the only other solution is a system, which has high expenses that can be hard for smaller clubs and schools to cover. 
                We want to create this platform, so different users can get different wishes fulfilled. The riders who participate in these events can create a user, where they can register their personal information, their horses, and their equipment, so all the necessary information is gathered in one place. 
              </motion.p>
            </div>
            
          </div>
      </section>
    </main>
  );
} 
