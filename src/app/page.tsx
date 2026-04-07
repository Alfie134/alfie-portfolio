"use client";

import { useEffect, useState } from "react";

import ArchedPortrait from "@/components/ArchedPortrait";
import { form } from "framer-motion/m";

export default function HomePage() {
  const [date, setDate] = useState("");

  useEffect(() => {
    const today = new Date();

    const formatted = today.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
    });

    setDate(formatted ? formatted.toLocaleLowerCase() : "");
  }, []);

  return (
    <main>
    {/*Hero Section*/}
      <section 
        id="hero" 
        className="relative min-h-screen w-full bg-cover bg-no-repeat overflow-hidden" 
        style={{
          backgroundImage: "url('/PortfolioResized.png')", 
          backgroundPosition: "center 47%",
          backgroundSize: "115%"
        }} 
      >
        <div className="mx-auto max-w-[1320px] px-7">
          {/* Top row: left + right */}
            <div className="grid grid-cols-12 auto-rows-fr gap-x-[14px] gap-y-10 text-[var(--text-main)] pt-[12vh]">
              {/* Left */}
              <div className="col-span-12 md:col-start-2 md:col-end-7 text-left">
                <p className="text-9xl font-frunchy tracking-widest">ALBERTE</p>
                <p className="text-7xl font-hali">Øgendahl</p>
              </div>

              {/* Right */}
              <div className="col-span-12 md:col-start-10 md:col-span-2 font-molen whitespace-nowrap">
                <p className="text-7xl font-molen font-semibold leading-none">{date}</p>
                <div>
                  <p className="text-2xl leading-snug text-center font-fira-code">
                    what <br/> im <br/> working <br/> on
                  </p>

                </div>
              </div>
            </div>

            {/* Lower text block */}
            <div className="absolute bottom-[10vh] left-0 w-full text-[#fffddf] font-fira-code">
              <div className="mx-auto max-w-[1320px] px-7">
                <div className="grid grid-cols-12">
                  <div className="col-span-12 md:col-start-2 md:col-end-10 inline-block">
                    <p className="tracking-[0.2em] leading-tight text-xl sm:text-2xl md:text-3xl lg:text-4xl md:translate-x-[140px]">
                      DEVELOPER
                    </p>
                    <p className="tracking-[0.2em] leading-tight text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                      FRONTEND ENTHUSIAST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="my-picture">
              <ArchedPortrait/>
            </div>
        </div>
        </section>
    
    {/*Work and projects section*/}
      <section 
        id="work" 
        className="min-h-screen w-full scroll-mt-24" 
        style={{backgroundColor: "#bb8951"}}
      >
        <div className="mx-auto max-w-[1320px] px-7 py-24">
          <div className="grid grid-cols-12 gap-x-[14px] gap-y-10">

            {/*Left Title Block*/}
            <div className="col-span-12 md:col-span-3 flex items-center justify-center">
              <h2 className="font-frunchy text-5xl leading-tight text-[#31080c] text-center font-bold"> 
                My <br/>
                Projects, <br/> 
                And <br/>
                Work
              </h2>
            </div>

            {/*Top Row*/}
            <div className="col-span-12 md:col-span-4">
              <div className="aspect-square rounded-3xl bg-black/10 shadow-sm overflow-hidden" />
              <p className="mt-3 text-sm text-[#511b1d]">1. Your paragraph text</p>
            </div>

            <div className="col-span-12 md:col-span-8 ">
              <div className="aspect-square rounded-3xl bg-black/10 shadow-sm overflow-hidden" />
              <p className="mt-3 text-sm text-[#511b1d] text-center">2. Your paragraph text</p>
            </div>

            {/*Bottom Row*/}
            <div className="col-span-12 md:col-span-4">
              <div className="aspect-square rounded-3xl bg-black/10 shadow-sm overflow-hidden" />
              <p className="mt-3 text-sm text-[#511b1d]">3. Your paragraph text</p>
            </div>

            <div className="col-span-12 md:col-span-4">
              <div className="aspect-square rounded-3xl bg-black/10 shadow-sm overflow-hidden" />
              <p className="mt-3 text-sm text-[#511b1d]">4. Your paragraph text</p>
            </div>

            <div className="col-span-12 md:col-span-4">
              <div className="aspect-square rounded-3xl bg-black/10 shadow-sm overflow-hidden" />
              <p className="mt-3 text-sm text-[#511b1d]">5. Your paragraph text</p>
            </div>
            
          </div>
        </div>
      </section>

    {/* Free Time Section */}
      <section id="play" className="min-h-screen w-full bg-cover bg-no-repeat scroll-mt-24" style={{backgroundColor: "#511B1D"}}>
        <div className="main-text-play">
          <h1>Free Time Interests and Fun</h1>
        </div>
        <div className="project-card-small">
          <p>Card paragraph text</p>
        </div>
        <div className="project-card-small">
          <p>Card paragraph text</p>
        </div>
        <div className="project-card-medium">
          <p>Card paragraph text</p>
        </div>
        <div className="project-card-large">
          <p>Card paragraph text</p>
        </div>
      </section>
    </main>
  );
} 
