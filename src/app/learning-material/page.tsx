'use client'

import ResourceItem from "./ResourceItem";
import { frontendResources, securityResources } from "./resourceData";

export default function LearningMaterialPage() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center 
            bg-gradient-to-b from-[#2D3824] to-[#8D9867] text-center">
            <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-[#c4b6ab]">
                    My Learning Matrial & Resources
                </h1>
                <h2 className="text-lg tracking-[0.1em] text-[#d5ccab] font-bold">
                    Here you can see in depth the courses and articles etc. 
                    that I have used to expand my knowledge on the subject areas I&apos;ve chosen for my 4th semester. 
                </h2>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"> 
                    {/* Frontend Card */}
                    <div className="bg-[#c4b6ab] rounded-2xl p-8 shadow-x1 border border-[#2D3824] border-2">
                        <h2 className="text-3xl font-bold text-[#6A6352] items-center gap-2">
                            Frontend Design
                        </h2>
                        {frontendResources.map((cat, i) =>(
                            <ResourceItem key={i} name={cat.name} items={cat.items}/>
                        ))}
                    </div>

                    {/* Security Card */}
                    <div className="bg-[#c4b6ab] rounded-2xl p-8 shadow-x1 border border-[#2D3824] border-2">
                        <h2 className="text-3xl font-bold text-[#6A6352] items-center gap-2">
                            Security Material
                        </h2>
                        {securityResources.map((cat, i) =>(
                            <ResourceItem key={i} name={cat.name} items={cat.items}/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}