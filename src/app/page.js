"use client";

import "./globals.css";
import "./page.css"
import "./work-section.css"
import WorkCard from "./work-card"

import { useEffect, useState } from "react";

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
            <section id="hero" className="hero-page">
                <div className="heroImage">
                
                    <div className="mx-auto max-w-[1320px] px-7">
                        {/* Top row: left + right */}
                        <div>
                            {/* Left */}
                            <div className="text-left">
                                <p>Alberte</p>
                                <p>Øgendahl</p>
                            </div>

                            {/* Right */}
                            <div className=" font-molen whitespace-nowrap">
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
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="my-picture">
                        </div>
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
                            </div>                            
                        </div>
                    </div>
                </div>
            </section>

            {/* Free Time Section */}
            <section id="play" className="min-h-screen w-full bg-cover bg-no-repeat scroll-mt-24" style={{backgroundColor: "var(--bg2)"}}>
                <div className="main-text-play">
                </div>
            </section>
        </main>
    );
} 