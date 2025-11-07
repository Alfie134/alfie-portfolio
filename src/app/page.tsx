"use client";

import {motion} from "framer-motion";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */ }
      <section className="min-h-screen flex flex-col justify-center items-center 
                          bg-gradient-to-b from-[#2D3824] to-[#8D9867] text-center">

          <div className="flex flex-col items-center justify-center -mt-20 space-y-6">

              {/* Logo Section */}
              <div className="flex flex-col items-center space-y-2">
                <span className="w-px h-15 bg-[#c4b6ab]"/>
                <a href="https://cdn.discordapp.com/attachments/1358262198509764678/1420000917717254144/Snapchat-355678249.jpg?ex=68d3ce69&is=68d27ce9&hm=4d73b07081424b5653101cb4bd7b03b40a8ca4dd53d43e7f00cc25a2b61b4ef5&"></a>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-[#c4b6ab]">
                    PORTFOLIO
                  </h1>
                  <p className="text-lg tracking-[0.3em] uppercase text-[#d5ccab] font-bold">
                    Alberte Øgendahl
                  </p>

              <span className="w-px h-15 bg-[#c4b6ab]"/>
            </div>
            
            <div className="w-full text-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="text-lg md:text-xl mt-8 max-w-xl text-[#cec1a8]"
                >
                  Hi! Im Alberte, and welcome to my online portolio.
              </motion.p>
              {/*
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
              */}
            </div>
          </div>
      </section>
    </main>
  );
} 
