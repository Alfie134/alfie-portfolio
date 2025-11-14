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
                className="text-lg md:text-xl mt-8 max-w-1xl text-[#cec1a8]"
                >
                  Hi! Im Alberte, and welcome to my online portolio.
              </motion.p>
            </div>
            <div className="w-full text-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="text-lg md:text-xl mt-8 max-w-1xl bg text-[#cec1a8]"
                >
                  As our 4th semester is coming to an end, my portfolio will regarding the Horse Event project be more retrospective, as we won&apos;t continue working on the project.
                  The next semester is where we will focus on our internship, and my portfolio will also reflect this, showing the work and learning I will be doing meanwhile. 
              </motion.p>
            </div>
            <div className="w-full text-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="text-lg md:text-xl mt-8 max-w-1xl  text-[#cec1a8]"
                >
                  While Im not working on the project, and will be focusing on preparing my portfolio for my exam in December, I do have more time to explore interests that still has a coding aspect. 
                  In these next months this includes exploring modding for the game Stardew Valley, understanding coding regarding game development, and the graphics as well. 
              </motion.p>
            </div>
          </div>
      </section>
    </main>
  );
} 
