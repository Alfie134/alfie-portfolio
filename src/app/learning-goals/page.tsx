'use client'

export default function GoalsPage() {
    return (
        <section className="min-h-screen justify-center items-center 
            bg-gradient-to-b from-[#2D3824] to-[#8D9867] text-center">
            <div className=" mt-12 max-w-6xl w-full space-y-4 text-center" style={{color: "#cec1a8"}}>
                <h1 className="text-2xl font-bold text-[#cec1a8]"> Learning Goals </h1>
                <div className="flex flex-col lg:flex-row justify-center gap-12 mt-8">
                    <div>
                        <h2 className="text-xl font-bold"> Knowledge </h2>
                        <ul className="space-y-4 text-left list-disc list-inside text-body">
                            <li>Have knowledge of modern front-end architecture in React and Next.js, including component structure, props/state-management, Client vs. Server components, and routing with App Router.</li>
                            <li>Know central security concepts regarding API-communication, such as JWT-authentication, authorization, and CORS (endpoint security).</li>
                            <li>Know and understand the architecture and communication between front-end and backend in the HorseEvent project including the Contracts folder, CTO&apos;s, endpoints, and async data management. </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold"> Skills </h2>
                        <ul className="space-y-4 text-left list-disc list-inside text-body">
                            <li>To be able to identify front-end related issues in the HorseEvent project like state management, data management, UI structure, and perform targeted and specified literature searches to find the relevant technical solutions. </li>
                            <li>Develop and implement UI components in React/Next.js, including reusable components, Tailwind styling, and layout structure true to UX principles.  </li>
                            <li>Evaluate different solutions for front-end problems, such as state libraries, sever components, caching, client sides validation, and to argue for the decisions made in the project. </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold"> Competencies  </h2>
                        <ul className="space-y-4 text-left list-disc list-inside text-body columns-1 md:columns-2">
                            <li>Independently investigate new front-end technologies like Next.js, App Router, new React hooks, or Tailwind techniques and integrate them directly into the Horse Event Project. </li>
                            <li>Independently be able to learn and use new concepts regarding web security, like optimised login flows, token management, validation layers, and put it into perspective regarding the Horse Event Project&apos;s architecture. </li>
                            <li>Be able to relate the front-end work within the Horse Event Project to this semester&apos;s subject areas, including system development, web architecture, and security. </li>
                            <li>Understand how front-end and backend interact and work together and be able to compare technical decisions for the front-end with security and architectural considerations. </li>
                            <li>Be able to take experience from the Horse Event Project to new projects, like the UX-structure, coding styles, security principles, and integration with the backend. </li>
                            <li>Independently analyse a UI/UX issue and develop a solution which lives up to both the functional requirements but also takes security and user flow into consideration. </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}