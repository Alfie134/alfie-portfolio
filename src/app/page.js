"use client";

import "./globals.css";
import "./work-section.css"
import WorkCard from "./work-card"

import { useEffect, useState } from "react";
import ArchedPortrait from "@/components/ArchedPortrait";

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
            <section id="work" className="work-section">
                <div className="work-container">
                    <div className="work-grid">

                        {/* Top row */}
                        <div className="work-top-row">
                            <div className="work-title">
                                <h2 className="font-frunchy text-8xl leading-tight text-[#31080c] text-center font-bold"> 
                                    My <br/> Projects, <br/> And <br/> Work
                                </h2>
                            </div>
                            <WorkCard label="1. Your paragraph text" images={["/placeholder.jpg"]} />
                            <WorkCard label="Testimonial handler for a danish school made during my internship in Janurary-March 2026. Full-stack project made with Asp.Net Core and React.js" images={["/testimonial1.png"]} wide={true} />
                        </div>

                        {/* Bottom row */}
                        <div className="work-bottom-row">
                            <div className="work-spacer" />
                            <WorkCard label="3. Your paragraph text" images={["./Placeholder.jpg"]} />
                            <WorkCard label="4. Your paragraph text" images={["/PortfolioResized.png"]} />
                            <WorkCard label="5. Your paragraph text" images={["/placeholder.jpg"]} />
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